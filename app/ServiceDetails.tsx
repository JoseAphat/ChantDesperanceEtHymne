import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  PanResponder,
  LayoutAnimation,
  UIManager,
  Platform
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

// Activer LayoutAnimation pour Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
   // UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

type SectionKey = "introduction" | "partie1" | "partie2" | "partie3";
const keyFor = (c: Chant) => `${(c.category ?? "uncat").toLowerCase()}::${String(c.id)}`;

interface Chant {
  id: string | number;
  title: string;
  lyrics: string;
  category: string;
  uniqueKey?: string;
}
interface Service {
  id: string;
  name: string;
  createdAt: string;
  pinned?: boolean;
  reminderAt?: string | null;
  sections: Record<SectionKey, Chant[]>;
}

const STORAGE_KEY = "@notes_services";

// Couleurs
const COLORS = {
  primary: "#0A1E42",
  primaryDark: "#4F46E5",
  secondary: "#1E293B",
  background: "#F8FAFC",
  card: "#FFFFFF",
  text: "#1E293B",
  textLight: "#64748B",
  border: "#E2E8F0",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  gradientStart: "#667EEA",
  gradientEnd: "#764BA2",
};

const sectionLabels: Record<SectionKey, string> = {
  introduction: "Introduction",
  partie1: "1ère Partie",
  partie2: "2ème Partie",
  partie3: "3ème Partie",
};

export default function ServiceDetails() {
  const { serviceId } = useLocalSearchParams<{ serviceId: string }>();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [reorderingSection, setReorderingSection] = useState<SectionKey | null>(null);
  const [draggedItem, setDraggedItem] = useState<Chant | null>(null);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const fadeAnim = useState(new Animated.Value(0))[0];
  const navigation = useNavigation();

  const load = async () => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      const loadedServices = raw ? JSON.parse(raw) : [];
      setServices(loadedServices);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false, headerTitle: "" });
  }, [navigation]);

  useEffect(() => {
    load();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  useFocusEffect(useCallback(() => { load(); }, []));

  const service = useMemo(
    () => services.find((s) => s.id === String(serviceId)),
    [services, serviceId]
  );

  const saveService = async (next: Service) => {
    const list = services.map((s) => (s.id === next.id ? next : s));
    setServices(list);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  const removeChant = (section: SectionKey, uniqueKey: string) => {
    if (!service) return;

    const next: Service = {
      ...service,
      sections: {
        ...service.sections,
        [section]: (service.sections[section] ?? []).filter(
          (c) => (c.uniqueKey ?? keyFor(c)) !== uniqueKey
        ),
      },
    };
    saveService(next);
  };

  // Fonction pour réorganiser les chants
  const reorderChants = (section: SectionKey, chants: Chant[]) => {
    if (!service) return;

    const next: Service = {
      ...service,
      sections: {
        ...service.sections,
        [section]: chants.map((c) => ({
          ...c,
          uniqueKey: c.uniqueKey ?? keyFor(c),
        })),
      },
    };
    saveService(next);
  };

  // Fonction pour déplacer un chant dans une section
  const moveChantInSection = (section: SectionKey, fromIndex: number, toIndex: number) => {
    if (!service) return;
    
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    
    const sectionChants = [...(service.sections[section] ?? [])];
    const [movedChant] = sectionChants.splice(fromIndex, 1);
    sectionChants.splice(toIndex, 0, movedChant);
    
    const next: Service = {
      ...service,
      sections: {
        ...service.sections,
        [section]: sectionChants,
      },
    };
    saveService(next);
  };

  const openPickerForSection = (section: SectionKey) => {
    setSheetOpen(false);
    router.push({
      pathname: "/CategoryPicker",
      params: { fromNotes: "true", section, serviceId: String(serviceId) },
    });
  };

  const getTotalChants = (svc: Service) => {
    return Object.values(svc.sections).reduce(
      (total, section) => total + section.length,
      0
    );
  };

  // Composant de chant avec drag & drop
  const DraggableChantCard = ({ 
    chant, 
    index, 
    sectionKey 
  }: { 
    chant: Chant; 
    index: number;
    sectionKey: SectionKey;
  }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartY, setDragStartY] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(index);
    const cardRef = useRef<View>(null);
    
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (evt) => {
          setIsDragging(true);
          setDragStartY(evt.nativeEvent.pageY);
        },
        onPanResponderMove: (evt, gestureState) => {
          // Logique de déplacement (pourrait être améliorée avec des animations)
          const currentY = evt.nativeEvent.pageY;
          const deltaY = currentY - dragStartY;
          
          // Détecter si on doit échanger avec un autre chant
          if (Math.abs(deltaY) > 60) {
            const direction = deltaY > 0 ? 1 : -1;
            const targetIndex = index + direction;
            
            if (targetIndex >= 0 && targetIndex < (service?.sections[sectionKey]?.length || 0)) {
              moveChantInSection(sectionKey, index, targetIndex);
              setCurrentIndex(targetIndex);
              setDragStartY(currentY);
            }
          }
        },
        onPanResponderRelease: () => {
          setIsDragging(false);
        },
      })
    ).current;

    const handleRemove = () => {
      if (chant.uniqueKey) removeChant(sectionKey, chant.uniqueKey);
    };

    return (
      <Animated.View
        style={[
          styles.chantCard,
          isDragging && styles.draggingCard,
        ]}
      >
        <View style={styles.chantContent}>
          <View style={styles.chantHeader}>
            {/* Poignée de drag */}
            <View
              {...panResponder.panHandlers}
              style={styles.dragHandle}
            >
              <Ionicons name="menu" size={20} color={COLORS.textLight} />
            </View>
            
            <TouchableOpacity
              onPress={handleRemove}
              style={styles.removeBtn}
            >
              <Ionicons name="trash-outline" size={18} color={COLORS.error} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.chantBody}
            onPress={() =>
              router.push({
                pathname: "/ChantDetails",
                params: {
                  id: String(chant.id),
                  title: chant.title,
                  lyrics: chant.lyrics,
                  category: chant.category,
                },
              })
            }
          >
            <Text style={styles.chantTitle} numberOfLines={1}>
              {chant.title}
            </Text>
            <Text style={styles.chantCategory} numberOfLines={1}>
              {chant.category}
            </Text>
            <Text style={styles.chantLyrics} numberOfLines={2}>
              {chant.lyrics}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  };

  // Composant de chant statique
  const StaticChantCard = ({ chant, sectionKey }: { chant: Chant; sectionKey: SectionKey }) => {
    const handleRemove = () => {
      if (chant.uniqueKey) removeChant(sectionKey, chant.uniqueKey);
    };

    return (
      <View style={styles.chantCard}>
        <View style={styles.chantContent}>
          <View style={styles.chantHeader}>
            <TouchableOpacity
              onPress={handleRemove}
              style={styles.removeBtn}
            >
              <Ionicons name="trash-outline" size={18} color={COLORS.error} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.chantBody}
            onPress={() =>
              router.push({
                pathname: "/ChantDetails",
                params: {
                  id: String(chant.id),
                  title: chant.title,
                  lyrics: chant.lyrics,
                  category: chant.category,
                },
              })
            }
          >
            <Text style={styles.chantTitle} numberOfLines={1}>
              {chant.title}
            </Text>
            <Text style={styles.chantCategory} numberOfLines={1}>
              {chant.category}
            </Text>
            <Text style={styles.chantLyrics} numberOfLines={2}>
              {chant.lyrics}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const SectionHeader = ({ 
    sectionKey, 
    chantCount,
    isReordering 
  }: { 
    sectionKey: SectionKey; 
    chantCount: number;
    isReordering: boolean;
  }) => (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>{sectionLabels[sectionKey]}</Text>
        <View style={styles.chip}>
          <Text style={styles.chipText}>{chantCount}</Text>
        </View>
        
        {isReordering && (
          <View style={styles.reorderingBadge}>
            <Ionicons name="swap-vertical" size={12} color="#FFFFFF" />
           
          </View>
        )}
      </View>
      
      <View style={styles.sectionActions}>
        {!isReordering ? (
          <>
            {/* Bouton pour activer le réordonnancement */}
            <TouchableOpacity
              onPress={() => setReorderingSection(sectionKey)}
              style={styles.reorderButton}
            >
              <Ionicons name="swap-vertical" size={20} color={COLORS.primary} />
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => openPickerForSection(sectionKey)}
              style={styles.addSectionButton}
            >
              <Ionicons name="add-circle" size={24} color={COLORS.primary} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => setReorderingSection(null)}
              style={styles.cancelReorderButton}
            >
              <Text style={styles.cancelReorderText}>Ok</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <View style={styles.loadingContainer}>
          <Ionicons name="musical-notes" size={48} color={COLORS.primary} />
          <Text style={styles.loadingText}>Chargement du service...</Text>
        </View>
      </View>
    );
  }

  if (!service) {
    return (
      <View style={styles.center}>
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={48} color={COLORS.error} />
          <Text style={styles.errorTitle}>Service introuvable</Text>
          <Text style={styles.errorText}>
            Le service que vous recherchez n'existe pas ou a été supprimé.
          </Text>
          <TouchableOpacity onPress={load} style={styles.retryButton}>
            <Ionicons name="refresh" size={20} color="#FFFFFF" />
            <Text style={styles.retryText}>Réessayer</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const sectionsToRender: { key: SectionKey; data: Chant[] }[] = ([
    "introduction",
    "partie1",
    "partie2",
    "partie3",
  ] as SectionKey[]).map((k) => ({
    key: k,
    data: (service.sections[k] ?? []).map((c) => ({
      ...c,
      uniqueKey: c.uniqueKey ?? keyFor(c),
    })),
  }));

  const totalChants = getTotalChants(service);

  // Fonction pour réorganiser simple (boutons haut/bas)
  const moveChantUp = (sectionKey: SectionKey, index: number) => {
    if (index > 0) {
      moveChantInSection(sectionKey, index, index - 1);
    }
  };

  const moveChantDown = (sectionKey: SectionKey, index: number) => {
    const chants = service?.sections[sectionKey] || [];
    if (index < chants.length - 1) {
      moveChantInSection(sectionKey, index, index + 1);
    }
  };

  // Version alternative avec boutons +/-
  const ReorderableChantCard = ({ chant, index, sectionKey }: { chant: Chant; index: number; sectionKey: SectionKey }) => {
    const handleRemove = () => {
      if (chant.uniqueKey) removeChant(sectionKey, chant.uniqueKey);
    };

    return (
      <View style={styles.reorderChantCard}>
        <View style={styles.reorderControls}>
          <TouchableOpacity 
            onPress={() => moveChantUp(sectionKey, index)}
            style={[styles.moveButton, index === 0 && styles.moveButtonDisabled]}
            disabled={index === 0}
          >
            <Ionicons name="chevron-up" size={16} color={index === 0 ? COLORS.border : COLORS.primary} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => moveChantDown(sectionKey, index)}
            style={[
              styles.moveButton, 
              index === (service?.sections[sectionKey]?.length || 0) - 1 && styles.moveButtonDisabled
            ]}
            disabled={index === (service?.sections[sectionKey]?.length || 0) - 1}
          >
            <Ionicons name="chevron-down" size={16} color={index === (service?.sections[sectionKey]?.length || 0) - 1 ? COLORS.border : COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.reorderChantContent}>
          <View style={styles.chantHeader}>
            <TouchableOpacity
              onPress={handleRemove}
              style={styles.removeBtn}
            >
              <Ionicons name="trash-outline" size={18} color={COLORS.error} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.chantBody}
            onPress={() =>
              router.push({
                pathname: "/ChantDetails",
                params: {
                  id: String(chant.id),
                  title: chant.title,
                  lyrics: chant.lyrics,
                  category: chant.category,
                },
              })
            }
          >
            <Text style={styles.chantTitle} numberOfLines={1}>
              {chant.title}
            </Text>
            <Text style={styles.chantCategory} numberOfLines={1}>
              {chant.category}
            </Text>
            <Text style={styles.chantLyrics} numberOfLines={2}>
              {chant.lyrics}
            </Text>
            <View style={styles.positionBadge}>
              <Text style={styles.positionText}>Position: {index + 1}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerBackground} />
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>

        <View style={styles.headerContent}>
          <Text style={styles.title} numberOfLines={1}>{service.name}</Text>
          <View style={styles.headerMeta}>
            <View style={styles.metaItem}>
              <Ionicons name="calendar-outline" size={14} color="#FFFFFF" />
              <Text style={styles.metaText}>
                {new Date(service.createdAt).toLocaleDateString("fr-FR")}
              </Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="musical-notes-outline" size={14} color="#FFFFFF" />
              <Text style={styles.metaText}>
                {totalChants} chant{totalChants > 1 ? "s" : ""}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => setSheetOpen(true)} style={styles.headerAddButton}>
          <Ionicons name="add" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <FlatList
        data={sectionsToRender}
        keyExtractor={(it) => it.key}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.sectionCard}>
            <SectionHeader 
              sectionKey={item.key} 
              chantCount={item.data.length}
              isReordering={reorderingSection === item.key}
            />

            {item.data.length === 0 ? (
              <View style={styles.emptySection}>
                <Ionicons name="musical-notes-outline" size={32} color={COLORS.border} />
                <Text style={styles.emptyText}>Aucun chant dans cette section</Text>
                <TouchableOpacity
                  onPress={() => openPickerForSection(item.key)}
                  style={styles.emptyButton}
                >
                  <Text style={styles.emptyButtonText}>Ajouter un chant</Text>
                </TouchableOpacity>
              </View>
            ) : reorderingSection === item.key ? (
              // Mode réorganisation avec boutons
              <View style={styles.reorderList}>
                {item.data.map((chant, index) => (
                  <ReorderableChantCard
                    key={chant.uniqueKey}
                    chant={chant}
                    index={index}
                    sectionKey={item.key}
                  />
                ))}
              </View>
            ) : (
              // Mode normal (grille)
              <View style={styles.chantsGrid}>
                {item.data.map((chant) => (
                  <StaticChantCard
                    key={chant.uniqueKey}
                    chant={chant}
                    sectionKey={item.key}
                  />
                ))}
              </View>
            )}
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setSheetOpen(true)}
      >
        <Ionicons name="add" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Bottom Sheet */}
      <Modal transparent visible={sheetOpen} animationType="slide" onRequestClose={() => setSheetOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setSheetOpen(false)}>
          <Pressable style={styles.sheet}>
            <View style={styles.sheetHeader}>
              <View style={styles.sheetHandle} />
              <Text style={styles.sheetTitle}>Ajouter un chant</Text>
              <Text style={styles.sheetSubtitle}>Choisissez une section</Text>
            </View>

            <View style={styles.sheetContent}>
              {(Object.keys(sectionLabels) as SectionKey[]).map((sec) => (
                <TouchableOpacity
                  key={sec}
                  style={styles.sheetItem}
                  onPress={() => openPickerForSection(sec)}
                >
                  <View style={styles.sheetItemContent}>
                    <Text style={styles.sheetItemText}>{sectionLabels[sec]}</Text>
                    <Text style={styles.sheetItemCount}>
                      {(service.sections[sec] ?? []).length} chant
                      {(service.sections[sec] ?? []).length > 1 ? "s" : ""}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={18} color={COLORS.textLight} />
                </TouchableOpacity>
              ))}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },

  loadingContainer: {
    alignItems: "center",
    padding: scale(24),
  },

  loadingText: {
    marginTop: verticalScale(12),
    fontSize: moderateScale(16),
    color: COLORS.textLight,
    fontWeight: "600",
  },

  errorContainer: {
    alignItems: "center",
    padding: scale(24),
    maxWidth: scale(280),
  },

  errorTitle: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: COLORS.text,
    marginTop: verticalScale(16),
    marginBottom: verticalScale(8),
  },

  errorText: {
    fontSize: moderateScale(14),
    color: COLORS.textLight,
    textAlign: "center",
    lineHeight: moderateScale(20),
    marginBottom: verticalScale(24),
  },

  retryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(12),
    borderRadius: scale(12),
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: scale(8),
    elevation: 4,
  },

  retryText: {
    color: "#FFFFFF",
    fontWeight: "600",
    marginLeft: scale(8),
    fontSize: moderateScale(14),
  },

  header: {
    backgroundColor: COLORS.primary,
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(20),
    paddingHorizontal: scale(16),
    flexDirection: "row",
    alignItems: "center",
  },

  headerBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.primary,
  },

  backButton: {
    padding: scale(8),
    marginRight: scale(8),
  },

  headerContent: {
    flex: 1,
  },

  title: {
    fontSize: moderateScale(20),
    fontWeight: "500",
    color: "#FFFFFF",
    marginBottom: verticalScale(4),
  },

  headerMeta: {
    flexDirection: "row",
    alignItems: "center",
  },

  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(16),
  },

  metaText: {
    fontSize: moderateScale(12),
    color: "#FFFFFF",
    opacity: 0.9,
    marginLeft: scale(4),
  },

  headerAddButton: {
    padding: scale(8),
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: scale(8),
  },

  listContent: {
    padding: scale(16),
    paddingBottom: verticalScale(100),
  },

  sectionCard: {
    backgroundColor: COLORS.card,
    borderRadius: scale(16),
    padding: scale(16),
    marginBottom: verticalScale(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(8),
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(12),
  },

  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: COLORS.text,
  },

  chip: {
    backgroundColor: COLORS.background,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(12),
    marginLeft: scale(8),
  },

  chipText: {
    fontSize: moderateScale(12),
    fontWeight: "600",
    color: COLORS.primary,
  },

  reorderingBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(3),
    borderRadius: scale(10),
    marginLeft: scale(8),
  },

  reorderingBadgeText: {
    fontSize: moderateScale(10),
    fontWeight: "700",
    color: "#FFFFFF",
    marginLeft: scale(3),
  },

  sectionActions: {
    flexDirection: "row",
    alignItems: "center",
  },

  reorderButton: {
    padding: scale(6),
    marginRight: scale(8),
  },

  addSectionButton: {
    padding: scale(4),
  },

  cancelReorderButton: {
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    backgroundColor: COLORS.background,
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  cancelReorderText: {
    fontSize: moderateScale(12),
    fontWeight: "600",
    color: COLORS.error,
  },

  emptySection: {
    alignItems: "center",
    padding: scale(24),
    backgroundColor: `${COLORS.primary}08`,
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: `${COLORS.primary}15`,
    borderStyle: "dashed",
  },

  emptyText: {
    fontSize: moderateScale(14),
    color: COLORS.textLight,
    marginTop: verticalScale(8),
    marginBottom: verticalScale(12),
  },

  emptyButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(8),
    borderRadius: scale(8),
  },

  emptyButtonText: {
    color: "#FFFFFF",
    fontSize: moderateScale(12),
    fontWeight: "600",
  },

  // Styles pour le mode réorganisation
  reorderList: {
    marginHorizontal: scale(-4),
  },

  reorderChantCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    borderRadius: scale(12),
    marginBottom: verticalScale(8),
    padding: scale(8),
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  reorderControls: {
    marginRight: scale(8),
    justifyContent: "space-between",
    height: scale(60),
  },

  moveButton: {
    width: scale(32),
    height: scale(28),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: scale(6),
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  moveButtonDisabled: {
    opacity: 0.5,
  },

  reorderChantContent: {
    flex: 1,
  },

  chantsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: scale(-4),
  },

  chantCard: {
    width: "48%",
    marginHorizontal: "1%",
    marginBottom: verticalScale(8),
  },

  draggingCard: {
    opacity: 0.7,
    transform: [{ scale: 1.02 }],
    zIndex: 10,
  },

  chantContent: {
    backgroundColor: COLORS.background,
    borderRadius: scale(12),
    padding: scale(12),
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  chantHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: verticalScale(8),
  },

  dragHandle: {
    padding: scale(4),
    zIndex: 10,
  },

  removeBtn: {
    padding: scale(4),
    zIndex: 10,
  },

  chantBody: {
    flex: 1,
  },

  chantTitle: {
    fontSize: moderateScale(14),
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: verticalScale(2),
  },

  chantCategory: {
    fontSize: moderateScale(11),
    color: COLORS.primary,
    fontWeight: "600",
    marginBottom: verticalScale(4),
  },

  chantLyrics: {
    fontSize: moderateScale(11),
    color: COLORS.textLight,
    lineHeight: moderateScale(14),
  },

  positionBadge: {
    marginTop: verticalScale(4),
    backgroundColor: `${COLORS.primary}15`,
    paddingHorizontal: scale(6),
    paddingVertical: verticalScale(2),
    borderRadius: scale(4),
    alignSelf: 'flex-start',
  },

  positionText: {
    fontSize: moderateScale(9),
    fontWeight: "600",
    color: COLORS.primary,
  },

  fab: {
    position: "absolute",
    right: scale(16),
    bottom: verticalScale(24),
    backgroundColor: COLORS.primary,
    width: scale(56),
    height: scale(56),
    borderRadius: scale(28),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: verticalScale(8) },
    shadowOpacity: 0.3,
    shadowRadius: scale(16),
    elevation: 8,
  },

  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },

  sheet: {
    backgroundColor: COLORS.card,
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
    maxHeight: "80%",
  },

  sheetHeader: {
    padding: scale(24),
    paddingBottom: verticalScale(16),
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  sheetHandle: {
    width: scale(40),
    height: verticalScale(4),
    backgroundColor: COLORS.border,
    borderRadius: scale(2),
    marginBottom: verticalScale(16),
  },

  sheetTitle: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: verticalScale(4),
  },

  sheetSubtitle: {
    fontSize: moderateScale(14),
    color: COLORS.textLight,
  },

  sheetContent: {
    padding: scale(16),
  },

  sheetItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  sheetItemContent: {
    flex: 1,
  },

  sheetItemText: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: verticalScale(2),
  },

  sheetItemCount: {
    fontSize: moderateScale(12),
    color: COLORS.textLight,
  },
});