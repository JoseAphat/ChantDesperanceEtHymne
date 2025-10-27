import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  Alert,
  Animated,
  FlatList,
  Modal,
  Platform,
  Pressable,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { verticalScale } from "react-native-size-matters";

// 🔹 Types
type SectionKey = "introduction" | "partie1" | "partie2" | "partie3";
interface Chant { id: string | number; title: string; lyrics: string; author: string}
interface Service {
  id: string;
  name: string;
  createdAt: string;
  pinned?: boolean;
  sections: Record<SectionKey, Chant[]>;
}

// 🔹 Clé de stockage
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
  gradientEnd: "#0A1E42",
};

const Culte: React.FC = () => {
  const navigation = useNavigation();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const fadeAnim = useState(new Animated.Value(0))[0];

  // Configuration du header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerStyle: {
        height: 200 + (Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) : 0),
        backgroundColor: "#0A1E42",
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitle: () => (
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 60,
            paddingBottom: 40,
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
           Mes cultes
          </Text>
          <Text style={{ color: "rgba(255,255,255,0.8)", marginTop: 6, fontSize: 12 }}>
            {services.length} culte{services.length > 1 ? "s" : ""}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 12, marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => setShowAdd(true)}
            style={{
              padding: 8,
              borderRadius: 10,
              backgroundColor: "rgba(255,255,255,0.12)",
            }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="add-circle" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      ),
      headerRightContainerStyle: { paddingRight: 4 },
      headerLeftContainerStyle: { paddingLeft: 4 },
    });
  }, [navigation, services.length]);

  // Animation d'entrée
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  // Chargement initial
  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      setServices(raw ? JSON.parse(raw) : []);
    } catch (e) {
      console.log("Load services error:", e);
    } finally {
      setLoading(false);
    }
  };

  // Recharge quand l'écran reprend le focus
  useFocusEffect(
    React.useCallback(() => {
      loadServices();
    }, [])
  );

  const save = async (next: Service[]) => {
    setServices(next);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const createService = async () => {
    const name = newName.trim();
    if (!name) {
      Alert.alert("Nom requis", "Veuillez saisir un nom pour le culte.");
      return;
    }
    const now = new Date().toISOString();
    const id = `${Date.now()}`;
    const service: Service = {
      id,
      name,
      createdAt: now,
      pinned: false,
      sections: { introduction: [], partie1: [], partie2: [], partie3: [] },
    };
    await save([service, ...services]);
    setShowAdd(false);
    setNewName("");
    router.push({ pathname: "/ServiceDetails", params: { serviceId: id } });
  };

  const deleteService = (id: string) => {
    Alert.alert("Supprimer", "Voulez-vous vraiment supprimer ce culte ?", [
      { text: "Annuler", style: "cancel" },
      {
        text: "Supprimer",
        style: "destructive",
        onPress: async () => {
          const next = services.filter((s) => s.id !== id);
          await save(next);
        },
      },
    ]);
  };

  const togglePin = async (id: string) => {
    const next = services.map((s) =>
      s.id === id ? { ...s, pinned: !s.pinned } : s
    );
    await save(next);
  };

  const shareService = async (service: Service) => {
    const fmt = (arr: Chant[]) =>
      arr.length ? arr.map((c) => `#${c.id} — ${c.title}`).join("\n") : "—";

    const text =
      `Service: ${service.name}\n` +
      `Créé le: ${new Date(service.createdAt).toLocaleString()}\n\n` +
      `Introduction:\n${fmt(service.sections.introduction)}\n\n` +
      `1ère partie:\n${fmt(service.sections.partie1)}\n\n` +
      `2ème partie:\n${fmt(service.sections.partie2)}\n\n` +
      `3ème partie:\n${fmt(service.sections.partie3)}\n`;

    try {
      await Share.share({ message: text });
    } catch (e) {
      Alert.alert("Erreur", "Impossible de partager ce culte.");
    }
  };

  const getChantCount = (service: Service) => {
    return Object.values(service.sections).reduce((total, section) => total + section.length, 0);
  };

  const sorted = useMemo(() => {
    return [...services].sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [services]);

  const ServiceCard = ({ item, index }: { item: Service; index: number }) => {
    const scaleAnim = useState(new Animated.Value(0.9))[0];
    
    useEffect(() => {
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        delay: index * 100,
        useNativeDriver: true,
      }).start();
    }, []);

    return (
      <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
        <View style={styles.cardHeader}>
          <View style={styles.cardContent}>
            <View style={styles.titleRow}>
              <Text style={styles.serviceName} numberOfLines={1}>
                {item.name}
              </Text>
              {item.pinned && (
                <View style={styles.pinBadge}>
                  <Ionicons name="bookmark" size={12} color="#FFFFFF" />
                </View>
              )}
            </View>
            
            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <Ionicons name="calendar-outline" size={12} color={COLORS.textLight} />
                <Text style={styles.metaText}>
                  {new Date(item.createdAt).toLocaleDateString()}
                </Text>
              </View>
              
              <View style={styles.metaItem}>
                <Ionicons name="musical-notes-outline" size={12} color={COLORS.textLight} />
                <Text style={styles.metaText}>{getChantCount(item)} chant(s)</Text>
              </View>
            </View>
          </View>

          <View style={styles.actionsColumn}>
            <TouchableOpacity
              onPress={() => router.push({ pathname: "/ServiceDetails", params: { serviceId: item.id } })}
              style={[styles.actionBtn, styles.primaryAction]}
            >
              <Ionicons name="open-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => shareService(item)} style={styles.actionBtn}>
              <Ionicons name="share-social-outline" size={18} color="#0A1E42"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => togglePin(item.id)} style={styles.actionBtn}>
              <Ionicons 
                name={item.pinned ? "bookmark" : "bookmark-outline"} 
                size={18} 
                color={item.pinned ? COLORS.secondary : COLORS.textLight} 
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteService(item.id)} style={styles.actionBtn}>
              <Ionicons name="trash-outline" size={18} color={COLORS.error} />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
  };

  // Fonction pour naviguer vers la page de notes
  const navigateToNotes = () => {
    router.push("/Notes");
  };

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <FlatList
          data={sorted}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            !loading ? (
              <View style={styles.emptyState}>
                <Ionicons name="musical-notes-outline" size={64} color={COLORS.border} />
                <Text style={styles.emptyTitle}>Aucun culte</Text>
                <Text style={styles.emptyText}>
                  Créez votre premier programme, organisez les chants.
                </Text>
                <TouchableOpacity 
                  style={styles.emptyButton}
                  onPress={() => setShowAdd(true)}
                >
                  <Ionicons name="add" size={20} color="#FFFFFF" />
                  <Text style={styles.emptyButtonText}>Créer un culte</Text>
                </TouchableOpacity>
              </View>
            ) : null
          }
          renderItem={({ item, index }) => <ServiceCard item={item} index={index} />}
          contentContainerStyle={styles.listContent}
        />

        {/* Modal ajout service */}
        <Modal visible={showAdd} transparent animationType="fade" onRequestClose={() => setShowAdd(false)}>
          <Pressable style={styles.modalBackdrop} onPress={() => setShowAdd(false)}>
            <Pressable style={styles.modalCard}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Nouveau culte</Text>
                <View style={styles.modalIcon}>
                  <Ionicons name="add-circle" size={24} color={COLORS.primary} />
                </View>
              </View>
              
              <TextInput
                placeholder="Nom du culte"
                placeholderTextColor={COLORS.textLight}
                value={newName}
                onChangeText={setNewName}
                style={styles.input}
                autoFocus
                returnKeyType="done"
                onSubmitEditing={createService}
              />
              
              <View style={styles.modalRow}>
                <TouchableOpacity 
                  style={[styles.modalButton, styles.cancelButton]} 
                  onPress={() => setShowAdd(false)}
                >
                  <Text style={styles.cancelText}>Annuler</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={[styles.modalButton, styles.confirmButton]} 
                  onPress={createService}
                >
                  <Text style={styles.confirmText}>Créer</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      </Animated.View>

      {/* Bouton Prendre une note en bas de l'écran */}
      <TouchableOpacity 
        style={styles.notesButton}
        onPress={navigateToNotes}
      >
        <View style={styles.notesButtonContent}>
          <View style={styles.notesIconContainer}>
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </View>
          <Text style={styles.notesButtonText}>Prendre une note</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background, 
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: verticalScale(100),
    paddingTop: 8,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
  },
  emptyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  emptyButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 8,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  cardContent: {
    flex: 1,
    marginRight: 12,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
    flex: 1,
  },
  pinBadge: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    padding: 4,
    marginLeft: 8,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  metaText: {
    fontSize: 12,
    color: COLORS.textLight,
    marginLeft: 4,
  },
  actionsColumn: {
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 120,
  },
  actionBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: `${COLORS.primary}08`,
  },
  primaryAction: {
    backgroundColor: "#0A1E42",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  modalBackdrop: { 
    flex: 1, 
    backgroundColor: "rgba(0,0,0,0.4)", 
    justifyContent: "center", 
    padding: 24 
  },
  modalCard: { 
    backgroundColor: COLORS.card, 
    borderRadius: 20, 
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  modalTitle: { 
    fontSize: 17, 
    fontWeight: "700", 
    color: COLORS.text,
    flex: 1,
  },
  modalIcon: {
    backgroundColor: `${COLORS.primary}15`,
    padding: 8,
    borderRadius: 10,
  },
  input: { 
    backgroundColor: COLORS.background, 
    borderRadius: 12, 
    paddingHorizontal: 16, 
    paddingVertical: 14,
    fontSize: 16,
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  modalRow: { 
    flexDirection: "row", 
    justifyContent: "flex-end", 
    marginTop: 20,
    gap: 12,
  },
  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  confirmButton: {
    backgroundColor: COLORS.primary,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  cancelText: { 
    color: COLORS.text, 
    fontWeight: "600",
    fontSize: 14,
  },
  confirmText: { 
    color: "#FFFFFF", 
    fontWeight: "600",
    fontSize: 14,
  },
  notesButton: {
    position: 'absolute',
    bottom: 50,
    right: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  notesButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notesIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notesButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Culte;