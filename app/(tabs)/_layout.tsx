import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { TabBarIcon } from "../../components/navigation/TabBarIcon";


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "light",
          headerShown: true,
          tabBarHideOnKeyboard: false,
          tabBarStyle: { backgroundColor: "white" },
          headerStyle: { backgroundColor: "white" }, 
          headerTintColor: "#0A1E42", 
        }}        
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Chant d'esperance",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={24}
                color={"#0A1E42"}
              />
            ),
           tabBarLabelStyle:{ color:"#0A1E42", fontWeight:"bold"},
          }}
        />

        <Tabs.Screen
          name="SongSearch"
          options={{
            title: "Recherche par Index",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "search-sharp" : "search-sharp"}
                color={"#0A1E42"}
              />
            ),
            tabBarLabelStyle:{ color:"#0A1E42", fontWeight:"bold"},
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
    height: 12
  },
  
});
