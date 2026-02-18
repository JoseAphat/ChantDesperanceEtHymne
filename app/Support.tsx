import AdBanner from "@/components/AdBanner";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const Support: React.FC = () => {
  const contactEmail = "gedelienjosaphat@gmail.com";
  const contactPhone = "+509 4472 6231";
  const contactPhone1 = "+509 4080 6715";
  const whatsappNumber = "+50940806715"; 
  const whatsappMessage = "Bonjour, je voudrais vous supporter pour l'application";
  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({ headerShown: false, headerTitle: '' });
  }, [navigation]);
  const handleEmailPress = () => {
    Linking.openURL(`mailto:${contactEmail}?subject=Support`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${contactPhone}`);
  };
  const handlePhonePress1 = () => {
    Linking.openURL(`tel:${contactPhone1}`);
  };

  const handleWhatsAppPress = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    Linking.openURL(url).catch(() => {
      alert("WhatsApp n'est pas installé sur votre appareil");
    });
  };

  const handleFAQPress = () => {
    router.push("/Foire");
  };
  const handleMonCashPress = () => {
  alert(`Numéro Mon Cash: ${contactPhone}`);
};
const handleMonCashPress1 = () => {
  alert(`Numéro Nat Cash: ${contactPhone1}`);
};

  return (
    <View style={styles.container}>
      <AdBanner />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Support</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Section Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contactez-nous</Text>
          <Text style={styles.sectionDescription}>
            Notre équipe de support est là pour vous aider. Choisissez le moyen de contact qui vous convient le mieux.
          </Text>

          <TouchableOpacity style={styles.contactCard} onPress={handleEmailPress}>
            <View style={styles.contactIcon}>
              <Ionicons name="mail-outline" size={24} color="#0A1E42" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>Email</Text>
              <Text style={styles.contactDetail}>{contactEmail}</Text>
              <Text style={styles.contactDescription}>
                Réponse sous 24 heures
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#64748B" />
          </TouchableOpacity>

         <TouchableOpacity style={styles.contactCard} onPress={handleMonCashPress}>
     <View style={styles.contactIcon}>
    <Image 
      source={require("../assets/images/moncash.jpg")}
      style={styles.monCashIcon}
      resizeMode="contain"
    />
  </View>
  <View style={styles.contactInfo}>
    <Text style={styles.contactTitle}>Mon Cash</Text>
    <Text style={styles.contactDetail}>{contactPhone}</Text>
    <Text style={styles.contactDescription}>
      Josaphat Gedelien
    </Text>
  </View>
  <Ionicons name="chevron-forward" size={20} color="#64748B" />
</TouchableOpacity>
           <TouchableOpacity style={styles.contactCard} onPress={handleMonCashPress1}>
            <View style={styles.contactIcon}>
                 <Image 
      source={require("../assets/images/natcom.png")}
      style={styles.monCashIcon}
      resizeMode="contain"
    />
            </View>
             <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}> Nat Cash</Text>
              <Text style={styles.contactDetail}>{contactPhone1}</Text>
              <Text style={styles.contactDescription}>
                Josaphat Gedelien
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactCard} onPress={handleWhatsAppPress}>
            <View style={styles.contactIcon}>
              <Ionicons name="logo-whatsapp" size={24} color="#25D366" />
            </View>
            <View style={styles.contactInfo}>
              <Text style={styles.contactTitle}>WhatsApp</Text>
              <Text style={styles.contactDetail}>Chat en direct</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Section Ressources */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ressources</Text>

          <TouchableOpacity style={styles.resourceCard} onPress={handleFAQPress}>
            <View style={styles.resourceIcon}>
              <Ionicons name="help-circle-outline" size={24} color="#0A1E42" />
            </View>
            <View style={styles.resourceInfo}>
              <Text style={styles.resourceTitle}>FAQ</Text>
              <Text style={styles.resourceDescription}>
                Questions fréquemment posées
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        {/* Section Informations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Version de l'application</Text>
              <Text style={styles.infoValue}>1.1.9</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Dernière mise à jour</Text>
              <Text style={styles.infoValue}>10 Février 2026</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  header: {
    backgroundColor: "#0A1E42",
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(20),
    paddingHorizontal: scale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backButton: {
    padding: scale(8),
  },

  headerTitle: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: "#FFFFFF",
    flex: 1,
    textAlign: "center",
  },

  placeholder: {
    width: scale(40),
  },

  content: {
    flex: 1,
    padding: scale(16),
  },

  section: {
    marginBottom: verticalScale(32),
  },

  sectionTitle: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: "#0A1E42",
    marginBottom: verticalScale(12),
  },

  sectionDescription: {
    fontSize: moderateScale(14),
    color: "#64748B",
    lineHeight: moderateScale(20),
    marginBottom: verticalScale(16),
  },

  contactCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: scale(12),
    padding: scale(16),
    marginBottom: verticalScale(12),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  contactIcon: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: scale(12),
  },

  contactInfo: {
    flex: 1,
  },

  contactTitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "#0A1E42",
    marginBottom: verticalScale(4),
  },

  contactDetail: {
    fontSize: moderateScale(14),
    color: "#0A1E42",
    marginBottom: verticalScale(2),
  },

  contactDescription: {
    fontSize: moderateScale(12),
    color: "#64748B",
  },

  resourceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: scale(12),
    padding: scale(16),
    marginBottom: verticalScale(12),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  resourceIcon: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: scale(12),
  },

  resourceInfo: {
    flex: 1,
  },

  resourceTitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "#0A1E42",
    marginBottom: verticalScale(4),
  },

  resourceDescription: {
    fontSize: moderateScale(14),
    color: "#64748B",
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: scale(12),
    padding: scale(16),
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(8),
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  infoLabel: {
    fontSize: moderateScale(14),
    color: "#64748B",
  },

  infoValue: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    color: "#0A1E42",
  },

  monCashIcon: {
    width: scale(50),
    height: scale(50),
  },

  natCashIcon: {
    width: scale(50),
    height: scale(50),
  },
});

export default Support;