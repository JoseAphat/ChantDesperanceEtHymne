import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import React, { useLayoutEffect } from "react";
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
const About = () => {
  const navigation = useNavigation();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 60,
            paddingBottom: 40,
          }}
        >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
            À propos
          </Text>
        </View>
      ),
      headerStyle: {
        height:
          200 + (Platform.OS === "android" ? StatusBar.currentHeight ?? 0 : 0),
        backgroundColor: "#0A1E42",
      },
      headerTitleAlign: "center",
      headerLeft: () => (
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, router]);

  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) =>
      console.error("Erreur lors de l'ouverture :", err)
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
              <Image
  source={require("../assets/images/chant.png")} 
  style={{ width: 120, height: 120, resizeMode: "contain" }}
/>

          </View>
        </View>
        <Text style={styles.appName}>Chant d'Esperance & Hymne</Text>
        <Text style={styles.version}>Version 1.1.3</Text>
      </View>

      <View style={styles.content}>
        {/* Description */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="information-circle" size={24} color="#0A1E42" />
            <Text style={styles.cardTitle}>À propos de l'application</Text>
          </View>
          <Text style={styles.description}>
            Application de cantiques pour les églises évangéliques, facilitant la recherche et
            l'accès facile aux chants. 
          </Text>
        </View>

        {/* Développeur */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="code-slash" size={24} color="#0A1E42" />
            <Text style={styles.cardTitle}>Développé par</Text>
          </View>
          <View style={styles.developerContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JG</Text>
            </View>
            <View style={styles.developerInfo}>
              <Text style={styles.developerName}>Josaphat GEDELIEN</Text>
              <Text style={styles.developerRole}>Développeur Principal</Text>
            </View>
          </View>
        </View>

        {/* Équipe */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="people" size={24} color="#0A1E42" />
            <Text style={styles.cardTitle}>Assistants</Text>
          </View>
          
          <View style={styles.teamGrid}>
            <View style={styles.teamMember}>
              <View style={[styles.memberAvatar, { backgroundColor: '#4ECDC4' }]}>
                <Text style={styles.memberAvatarText}>SV</Text>
              </View>
              <Text style={styles.memberName}>Stanley VALENTIN</Text>
              <Text style={styles.memberRole}>Assistance au développement</Text>
            </View>
             <View style={styles.teamMember}>
              <View style={[styles.memberAvatar, { backgroundColor: '#45B7D1' }]}>
                <Text style={styles.memberAvatarText}>BT</Text>
              </View>
              <Text style={styles.memberName}>Berly THOMAS</Text>
              <Text style={styles.memberRole}>Tests et feedback</Text>
            </View>
            <View style={styles.teamMember}>
              <View style={[styles.memberAvatar, { backgroundColor: '#FF6B6B' }]}>
                <Text style={styles.memberAvatarText}>MS</Text>
              </View>
              <Text style={styles.memberName}>Marc Paul SENE</Text>
              <Text style={styles.memberRole}>Assistance au développement</Text>
            </View>
            <View style={styles.teamMember}>
              <View style={[styles.memberAvatar, { backgroundColor: '#45B7D1' }]}>
                <Text style={styles.memberAvatarText}>GZ</Text>
              </View>
              <Text style={styles.memberName}>Zeroberto GERE</Text>
              <Text style={styles.memberRole}>Aide au Design</Text>
            </View>
             <View style={styles.teamMember}>
              <View style={[styles.memberAvatar, { backgroundColor: '#FF6B6B' }]}>
                <Text style={styles.memberAvatarText}>JM</Text>
              </View>
              <Text style={styles.memberName}>Josué Rémy MONEXANT</Text>
              <Text style={styles.memberRole}>Assistance au développement</Text>
            </View>
          </View>
        </View>
        {/* Contact */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Ionicons name="mail" size={24} color="#0A1E42" />
            <Text style={styles.cardTitle}>Contact</Text>
          </View>
          <TouchableOpacity 
            style={styles.contactButton}
            onPress={() => openLink("mailto:gedelienjosaphat@gmail.com")}
          >
            <Ionicons name="mail-outline" size={20} color="#0A1E42" />
            <Text style={styles.contactText}>gedelienjosaphat@gmail.com</Text>
            <Ionicons name="chevron-forward" size={16} color="#0A1E42" />
          </TouchableOpacity>
        </View>

        {/* Copyright */}
        <View style={styles.footer}>
          <Text style={styles.copyright}>
            © {new Date().getFullYear()} Chant d'Esperance & Hymne
          </Text>
          <Text style={styles.rights}>Tous droits réservés</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFF",
  },
  header: {
    backgroundColor: "white",
    paddingVertical: verticalScale(30),
    paddingHorizontal: moderateScale(20),
    alignItems: "center",
    borderBottomLeftRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
    shadowColor: "#0A1E42",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
    marginBottom: verticalScale(20),
  },
  logoContainer: {
    marginBottom: verticalScale(15),
  },
  logo: {
    width: moderateScale(80),
    height: moderateScale(80),
    backgroundColor: "#E8ECF4",
    borderRadius: moderateScale(40),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#0A1E42",
  },
  appName: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: "#0A1E42",
    marginBottom: verticalScale(5),
  },
  version: {
    fontSize: scale(14),
    color: "#666",
    fontWeight: "500",
  },
  content: {
    padding: moderateScale(20),
  },
  card: {
    backgroundColor: "white",
    borderRadius: moderateScale(16),
    padding: moderateScale(20),
    marginBottom: verticalScale(20),
    shadowColor: "#0A1E42",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 4,
    borderLeftColor: "#0A1E42",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(15),
  },
  cardTitle: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: "#0A1E42",
    marginLeft: moderateScale(10),
  },
  description: {
    fontSize: scale(14),
    lineHeight: verticalScale(20),
    color: "#1C1362",
    textAlign: "center",
  },
  developerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F4FF",
    padding: moderateScale(15),
    borderRadius: moderateScale(12),
  },
  avatar: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: "#0A1E42",
    borderRadius: moderateScale(25),
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(15),
  },
  avatarText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: "bold",
  },
  developerInfo: {
    flex: 1,
  },
  developerName: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: "#0A1E42",
    marginBottom: verticalScale(2),
  },
  developerRole: {
    fontSize: scale(13),
    color: "#666",
  },
  teamGrid: {
    marginTop: verticalScale(10),
  },
  teamMember: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFF",
    padding: moderateScale(12),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(10),
    borderWidth: 1,
    borderColor: "#E8ECF4",
  },
  memberAvatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    justifyContent: "center",
    alignItems: "center",
    marginRight: moderateScale(12),
  },
  memberAvatarText: {
    color: "white",
    fontSize: scale(12),
    fontWeight: "bold",
  },
  memberName: {
    fontSize: scale(14),
    fontWeight: "600",
    color: "#0A1E42",
    flex: 1,
  },
  memberRole: {
    fontSize: scale(12),
    color: "#666",
    textAlign: "right",
    flex: 1,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F4FF",
    padding: moderateScale(16),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: "#E8ECF4",
  },
  contactText: {
    fontSize: scale(14),
    color: "#0A1E42",
    fontWeight: "500",
    flex: 1,
    marginLeft: moderateScale(10),
  },
  footer: {
    alignItems: "center",
    marginTop: verticalScale(10),
    padding: moderateScale(20),
  },
  copyright: {
    fontSize: scale(13),
    color: "#666",
    fontWeight: "500",
    marginBottom: verticalScale(4),
  },
  rights: {
    fontSize: scale(12),
    color: "#999",
  },
});

export default About;