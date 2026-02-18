import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import mobileAds from 'react-native-google-mobile-ads';

export default function TabLayout() {
  useEffect(() => {
    mobileAds()
      .initialize()
      .then(adapterStatuses => {
        console.log('AdMob initialisé avec succès');
      })
      .catch(error => {
        console.error('Erreur initialisation AdMob:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 3,
    backgroundColor: "#dfdedcf7",
  },
});