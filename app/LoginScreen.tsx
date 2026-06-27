import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";

import { signInWithGoogle } from "@/services/authService";
import { migrateLocalDataToCloud } from "@/services/syncService";

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const user = await signInWithGoogle();
      if (user) {
        // Migrer les données locales existantes vers Firebase
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

      <Text style={styles.title}>Chant d'Espérance & Hymne</Text>
      <Text style={styles.subtitle}>
        Connectez-vous pour synchroniser vos favoris et notes sur tous vos appareils
      </Text>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={handleGoogleSignIn}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#0A1E42" />
        ) : (
          <>
            <Image
              source={{ uri: "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" }}
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>
              Continuer avec Google
            </Text>
          </>
        )}
      </TouchableOpacity>

      <Text style={styles.note}>
        Vos données sont sécurisées et accessibles sur tous vos appareils
      </Text>
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
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#dfdedcf7",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#8FA1B8",
    textAlign: "center",
    marginBottom: 50,
    lineHeight: 22,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfdedcf7",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: "100%",
    marginBottom: 20,
    elevation: 3,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0A1E42",
  },
  note: {
    fontSize: 12,
    color: "#8FA1B8",
    textAlign: "center",
    marginTop: 20,
  },
});
