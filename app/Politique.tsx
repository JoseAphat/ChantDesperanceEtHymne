import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { moderateScale, scale, verticalScale } from 'react-native-size-matters';


const Politique = () => {
      const navigation = useNavigation();
    useLayoutEffect(() => {
  navigation.setOptions({
    headerTitle: () => (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
          Politique de Confidentialité
        </Text>
      </View>
    ),
    headerStyle: {
      height: 100,
      backgroundColor: "#0A1E42",
    },
    headerTitleAlign: "center",
    headerLeft: () => (
      <View
        style={{
          marginLeft: 10,
           marginTop:
                          Platform.OS === "android"
                            ? StatusBar.currentHeight ?? 24 : 0,
                                    
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>
    ),
  });
}, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
      Cette politique de confidentialité décrit comment nous gérons les informations 
      des utilisateurs dans l&apos;application Chant d’Espérance. En utilisant cette application, 
      vous acceptez les pratiques décrites dans cette politique.
      </Text>
      <Text style={styles.subtitle}>1. Aucune collecte d&apos;informations personnelles</Text>
      <Text style={styles.text}>
      L&apos;application &quot;Chant d’Espérance & Hymne&quot; ne collecte, 
      ne stocke et ne partage aucune information personnelle identifiable 
      (comme le nom, l&apos;adresse e-mail, ou numéro de téléphone). 
      Vous pouvez utiliser pleinement l&apos;application sans fournir de données personnelles.
      </Text>
      <Text style={styles.subtitle}>2. Données collectées automatiquement</Text>
      <Text style={styles.text}>
        Bien que l&apos;application ne collecte pas d&apos;informations personnelles, 
        elle peut recueillir certaines données non personnelles pour améliorer votre expérience.
         Ces données peuvent inclure : 
        Données d’utilisation : Informations sur les fonctionnalités de l’application utilisées,
        afin d&apos;améliorer ses performances et corriger les éventuels bugs.
        Statistiques anonymes : Ces données, comme le nombre de fois qu&apos;
        une fonctionnalité est utilisée, sont entièrement anonymes et ne peuvent
         pas être reliées à un utilisateur spécifique.
      </Text>
      <Text style={styles.subtitle}>3. Partage des données</Text>
      <Text style={styles.text}>
      Aucune donnée personnelle ou non personnelle n&apos;est partagée avec des tiers.
       L&apos;application fonctionne localement sur votre appareil et ne nécessite pas de
      connexion à des serveurs externes pour ses fonctionnalités principales.
      </Text>
      <Text style={styles.subtitle}>4. Sécurité des données</Text>
      <Text style={styles.text}>
      Étant donné que l&apos;application ne collecte aucune donnée personnelle, 
      les risques de compromission de vos informations privées sont inexistants.
       Nous utilisons des pratiques de développement sécurisées pour assurer le bon fonctionnement
        de l’application.
      </Text>
      <Text style={styles.subtitle}>5. Publicités et services tiers</Text>
      <Text style={styles.text}>
      &quot;Chant d’Espérance & Hymne&quot; contient des publicités afin de maintenir l&apos;application
       gratuite et accessible à tous. Nous respectons votre vie privée et nous nous engageons à ne pas 
       collecter vos informations personnelles, sauf si vous avez volontairement fourni des informations
        via des fonctionnalités spécifiques de l&apos;application.   </Text>
      <Text style={styles.subtitle}>6. Modifications de la politique</Text>
      <Text style={styles.text}>
      Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute mise à jour sera publiée dans l’application, et vous serez invité(e) à consulter les changements.
      </Text>
      <Text style={styles.subtitle}></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20), // 🔹 Padding responsive
    backgroundColor: "#fff",
  },
  title: {
    fontSize: scale(18), // 🔹 Taille de texte responsive
    fontWeight: "bold",
    marginBottom: verticalScale(20), // 🔹 Marge verticale responsive
    color: "#03008E",
  },
  subtitle: {
    fontSize: scale(16), // 🔹 Taille de texte responsive
    fontWeight: "bold",
    marginTop: verticalScale(20), // 🔹 Marge verticale responsive
    marginBottom: verticalScale(10),
    color: "#03008E",
  },
  text: {
    fontSize: scale(16), // 🔹 Taille de texte responsive
    lineHeight: verticalScale(24), // 🔹 Hauteur de ligne responsive
    textAlign: "justify",
  },
});

export default Politique;
