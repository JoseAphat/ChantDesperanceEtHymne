import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import mobileAds from "react-native-google-mobile-ads";
import { auth } from "@/services/firebaseConfig";
import { syncFromCloud } from "@/services/syncService";
import LoginScreen from "../LoginScreen";

export default function TabLayout() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mobileAds()
      .initialize()
      .catch((error: any) => console.error("Erreur AdMob:", error));

    // Écouter l'état de connexion Firebase
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // Utilisateur connecté → synchroniser les données depuis le cloud
        await syncFromCloud("@favorites");
        await syncFromCloud("@notes");
        await syncFromCloud("@cultes");
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Écran de chargement
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0A1E42" }}>
        <ActivityIndicator size="large" color="#dfdedcf7" />
      </View>
    );
  }

  // Écran de connexion si non connecté
  if (!user) {
    return <LoginScreen onLoginSuccess={() => {}} />;
  }

  // App principale si connecté
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: { backgroundColor: "#FFFFFF" },
        headerStyle: { backgroundColor: "#FFFFFF" },
        headerTintColor: "#0A1E42",
        tabBarActiveTintColor: "#0A1E42",
        tabBarInactiveTintColor: "#8FA1B8",
        tabBarLabelStyle: { fontWeight: "bold" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chant d'esperance",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "book" : "book-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SongSearch"
        options={{
          title: "Recherche par Index",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
