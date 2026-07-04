import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { auth } from "@/services/firebaseConfig";
import { syncFromCloud } from "@/services/syncService";
import LoginScreen from "@/app/LoginScreen";
import { User } from "firebase/auth";

export default function TabLayout() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Initialisation AdMob séparée et non bloquante
    const initAds = async () => {
      try {
        const mobileAds = (await import("react-native-google-mobile-ads")).default;
        await mobileAds().initialize();
      } catch (error) {
        console.warn("AdMob non disponible:", error);
      }
    };
    initAds();

    // ✅ Écouter l'état de connexion Firebase
    let unsubscribe: () => void = () => {};

    try {
const unsubscribe = auth.onAuthStateChanged(async (firebaseUser: User | null) => {        try {
          if (firebaseUser) {
            await syncFromCloud("@notes").catch(() => {});
            await syncFromCloud("@cultes").catch(() => {});
            setUser(firebaseUser);
          } else {
            setUser(null);
          }
        } catch (e) {
          console.warn("Erreur sync:", e);
          setUser(firebaseUser);
        } finally {
          setLoading(false);
        }
      });
    } catch (e) {
      console.warn("Erreur Firebase auth:", e);
      setLoading(false);
    }

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0A1E42" }}>
        <ActivityIndicator size="large" color="#dfdedcf7" />
      </View>
    );
  }

  if (!user) {
    return <LoginScreen onLoginSuccess={() => {}} />;
  }

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