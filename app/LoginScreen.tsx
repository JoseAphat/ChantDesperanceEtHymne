import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Image,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

import { signInWithGoogle } from "@/services/authService";
import { migrateLocalDataToCloud } from "@/services/syncService";

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

// Logo Google officiel en SVG
const GoogleIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 48 48">
    <Path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
    <Path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.4 0-13.8 4.1-17.1 10.1z" />
    <Path fill="#4CAF50" d="M24 44c5.5 0 10.4-2.1 14.1-5.6l-6.5-5.5c-2 1.5-4.6 2.4-7.6 2.4-5.2 0-9.6-3.3-11.3-8l-6.6 5.1C9.9 39.6 16.4 44 24 44z" />
    <Path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.7l6.5 5.5C40.9 36.7 44 31 44 24c0-1.3-.1-2.7-.4-3.5z" />
  </Svg>
);

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const user = await signInWithGoogle();
      if (user) {
        await migrateLocalDataToCloud();
        onLoginSuccess();
      }
    } catch (error) {
      Alert.alert(
        "Erreur de connexion",
        "Impossible de se connecter avec Google. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
  <Image
    source={require("../assets/images/chant.png")}
    style={styles.logo}
    resizeMode="contain"
  />
      <Text style={styles.title}>Chant d&apos;Espérance &amp; Hymne</Text>
      <Text style={styles.subtitle}>
        Connectez-vous pour synchroniser vos favoris et notes sur tous vos appareils
      </Text>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignIn}
        disabled={loading}
        activeOpacity={0.85}
      >
        {loading ? (
          <ActivityIndicator color="#0A1E42" />
        ) : (
          <>
            <GoogleIcon />
            <Text style={styles.googleButtonText}>Continuer avec Google</Text>
          </>
        )}
      </TouchableOpacity>

      <View style={styles.noteContainer}>
        <Ionicons name="shield-checkmark-outline" size={16} color="#8FA1B8" style={{ marginRight: 8 }} />
        <Text style={styles.note}>
          Vos chants favoris, vos cultes préparés et vos notes sont sécurisés et accessibles sur tous vos appareils.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1E42",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
logo: {
  width: 100,
  height: 100,
},
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#8FA1B8",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
    maxWidth: 280,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: "100%",
    maxWidth: 320,
    gap: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  googleButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1f1f1f",
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 32,
    maxWidth: 300,
    paddingHorizontal: 8,
  },
  note: {
    fontSize: 12,
    color: "#8FA1B8",
    lineHeight: 18,
    flex: 1,
  },
});