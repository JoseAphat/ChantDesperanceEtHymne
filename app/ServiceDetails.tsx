import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

type SectionKey = "introduction" | "partie1" | "partie2" | "partie3";
interface Chant { id: string | number; title: string; lyrics: string; category: string }
interface Service {
  id: string;
  name: string;
  createdAt: string;
  pinned?: boolean;
  reminderAt?: string | null;
  sections: Record<SectionKey, Chant[]>;
}

const STORAGE_KEY = "@notes_services";

// 🔹 Couleurs modernes
const COLORS = {
  primary: "#0A1E42",
  primaryDark: "#4F46E5",
  secondary: "#EC4899",
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
  const fadeAnim = useState(new Animated.Value(0))[0];
  const navigation = useNavigation();

  const load = async () => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      setServices(raw ? JSON.parse(raw) : []);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
  navigation.setOptions({ headerShown: false, headerTitle: '' });
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

  const removeChant = (section: SectionKey, chantId: string | number) => {
    if (!service) return;
    const next: Service = {
      ...service,
      sections: {
        ...service.sections,
        [section]: service.sections[section].filter((c) => c.id !== chantId),
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

  const getTotalChants = (service: Service) => {
    return Object.values(service.sections).reduce((total, section) => total + section.length, 0);
  };

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
          <Text style={styles.errorText}>Le service que vous recherchez n'existe pas ou a été supprimé.</Text>
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
  ] as SectionKey[]).map((k) => ({ key: k, data: service.sections[k] }));

  const totalChants = getTotalChants(service);

  const ChantCard = ({ chant, sectionKey }: { chant: Chant; sectionKey: SectionKey }) => {
    const scaleAnim = useState(new Animated.Value(0.95))[0];
    
    useEffect(() => {
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }).start();
    }, []);

    return (
      <Animated.View style={[styles.chantCard, { transform: [{ scale: scaleAnim }] }]}>
        <TouchableOpacity
          style={styles.chantContent}
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
          <View style={styles.chantHeader}>
           
            <TouchableOpacity 
              onPress={() => removeChant(sectionKey, chant.id)} 
              style={styles.removeBtn}
            >
              <Ionicons name="trash-outline" size={18} color={COLORS.error} />
            </TouchableOpacity>
          </View>
          
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
      </Animated.View>
    );
  };

  const SectionHeader = ({ sectionKey, chantCount }: { sectionKey: SectionKey; chantCount: number }) => (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionTitleContainer}>
        
        <Text style={styles.sectionTitle}>{sectionLabels[sectionKey]}</Text>
        <View style={styles.chip}>
          <Text style={styles.chipText}>{chantCount}</Text>
        </View>
      </View>
      <TouchableOpacity 
        onPress={() => openPickerForSection(sectionKey)} 
        style={styles.addSectionButton}
      >
        <Ionicons name="add-circle" size={24} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );

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
                {new Date(service.createdAt).toLocaleDateString('fr-FR')}
              </Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="musical-notes-outline" size={14} color="#FFFFFF" />
              <Text style={styles.metaText}>{totalChants} chant{totalChants > 1 ? 's' : ''}</Text>
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
            <SectionHeader sectionKey={item.key} chantCount={item.data.length} />
            
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
            ) : (
              <View style={styles.chantsGrid}>
                {item.data.map((chant) => (
                  <ChantCard 
                    key={`${chant.id}`} 
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
                      {service.sections[sec].length} chant{service.sections[sec].length > 1 ? 's' : ''}
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
    alignItems: 'center',
    padding: scale(24),
  },

  loadingText: {
    marginTop: verticalScale(12),
    fontSize: moderateScale(16),
    color: COLORS.textLight,
    fontWeight: '600',
  },

  errorContainer: {
    alignItems: 'center',
    padding: scale(24),
    maxWidth: scale(280),
  },

  errorTitle: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: COLORS.text,
    marginTop: verticalScale(16),
    marginBottom: verticalScale(8),
  },

  errorText: {
    fontSize: moderateScale(14),
    color: COLORS.textLight,
    textAlign: 'center',
    lineHeight: moderateScale(20),
    marginBottom: verticalScale(24),
  },

  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: scale(8),
    fontSize: moderateScale(14),
  },

  header: {
    backgroundColor: COLORS.primary,
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(20),
    paddingHorizontal: scale(16),
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: moderateScale(24),
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: verticalScale(4),
  },

  headerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: scale(16),
  },

  metaText: {
    fontSize: moderateScale(12),
    color: '#FFFFFF',
    opacity: 0.9,
    marginLeft: scale(4),
  },

  headerAddButton: {
    padding: scale(8),
    backgroundColor: 'rgba(255,255,255,0.2)',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(8),
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(12),
  },

  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  sectionIcon: {
    width: scale(28),
    height: scale(28),
    borderRadius: scale(14),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(8),
  },

  sectionTitle: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: COLORS.text,
    flex: 1,
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
    fontWeight: '600',
    color: COLORS.primary,
  },

  addSectionButton: {
    padding: scale(4),
  },

  emptySection: {
    alignItems: 'center',
    padding: scale(24),
    backgroundColor: `${COLORS.primary}08`,
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: `${COLORS.primary}15`,
    borderStyle: 'dashed',
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
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    fontWeight: '600',
  },

  chantsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: scale(-4),
  },

  chantCard: {
    width: '48%',
    marginHorizontal: '1%',
    marginBottom: verticalScale(8),
  },

  chantContent: {
    backgroundColor: COLORS.background,
    borderRadius: scale(12),
    padding: scale(12),
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  chantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: verticalScale(8),
  },

  chantBadge: {
    paddingHorizontal: scale(6),
    paddingVertical: verticalScale(2),
    borderRadius: scale(6),
  },

  chantBadgeText: {
    fontSize: moderateScale(10),
    fontWeight: '700',
    color: '#FFFFFF',
  },

  removeBtn: {
    padding: scale(4),
  },

  chantTitle: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: verticalScale(2),
  },

  chantCategory: {
    fontSize: moderateScale(11),
    color: COLORS.primary,
    fontWeight: '600',
    marginBottom: verticalScale(4),
  },

  chantLyrics: {
    fontSize: moderateScale(11),
    color: COLORS.textLight,
    lineHeight: moderateScale(14),
  },

  fab: {
    position: 'absolute',
    right: scale(16),
    bottom: verticalScale(24),
    backgroundColor: COLORS.primary,
    width: scale(56),
    height: scale(56),
    borderRadius: scale(28),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: verticalScale(8) },
    shadowOpacity: 0.3,
    shadowRadius: scale(16),
    elevation: 8,
  },

  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },

  sheet: {
    backgroundColor: COLORS.card,
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
    maxHeight: '80%',
  },

  sheetHeader: {
    padding: scale(24),
    paddingBottom: verticalScale(16),
    alignItems: 'center',
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
    fontWeight: '700',
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  sheetItemIcon: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(12),
  },

  sheetItemContent: {
    flex: 1,
  },

  sheetItemText: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: verticalScale(2),
  },

  sheetItemCount: {
    fontSize: moderateScale(12),
    color: COLORS.textLight,
  },
});