import AdBanner from "@/components/AdBanner";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import { Dimensions, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get("window"); 

const Foire = () => {
  const navigation = useNavigation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Configure le titre du header

useLayoutEffect(() => {
  const HEADER_HEIGHT = 90; // ↑ augmente ici si tu veux + grand (ex: 124, 136)

  navigation.setOptions({
    header: () => {
      const insets = useSafeAreaInsets(); // gère l'encoche / status bar
      return (
        <SafeAreaView style={{ backgroundColor: "#0A1E42" }}>
          <View
            style={{
              paddingTop: insets.top,       // espace réel sous la barre d'état
              height: HEADER_HEIGHT,        // ← hauteur réelle du header (contrôlée)
              backgroundColor: "#0A1E42",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              width: "100%",
              // optionnel: petite ombre
              shadowColor: "#000", shadowOpacity: 0.15, shadowRadius: 6, elevation: 3
            }}
          >
            {/* Back */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
              style={{ width: 36, alignItems: "flex-start" }}
            >
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            {/* Titre centré */}
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text
                numberOfLines={1}
                style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
              >
                FAQ
              </Text>
            </View>

            {/* Spacer pour équilibrer la flèche gauche */}
            <View style={{ width: 36 }} />
          </View>
        </SafeAreaView>
      );
    },
  });
}, [navigation]);


  const faqs = [
  {
    question: "Pourquoi cette application ?",
    answer: (
      <>
        <Text selectable={false} style={{ marginBottom: 20 }}>
          L&apos;application a été créée pour répondre aux besoins des utilisateurs
          souhaitant accéder rapidement et facilement à un vaste répertoire de chants,
          en particulier dans le cadre de cérémonies religieuses, de moments de culte et de méditation.{"\n\n"} 
          Elle simplifie la recherche de chants en offrant un accès direct par catégorie,
          tout en permettant une recherche précise grâce à la saisie d’un numéro de chant ou de paroles spécifiques.
          L&apos;une des fonctionnalités les plus pratiques de cette application 
          est la possibilité de rechercher des chants par catégories,
          telles que : Adoration et Louange, La Prière, La Parole, Consécration et Persévérance, etc.
          Cela permet aux utilisateurs de trouver rapidement ce qu’ils recherchent en cas de besoin.
          En outre, l’application propose une recherche basée sur des mots-clés, qu’il s’agisse 
          du numéro du chant ou de certaines paroles, mais aussi le nom de l&apos;auteur d&apos;un cantique populaire,
          facilitant ainsi l’accès même lorsque le titre exact est inconnu.
        </Text>
        <Text selectable={false} style={{ marginBottom: 20 }}>
          Un autre aspect important de l’application est son attention particulière à la qualité linguistique,
          notamment en ce qui concerne l’orthographe des chants en créole. 
          Les utilisateurs n’ont pas à s’inquiéter des variations orthographiques, 
          car chaque chant est rédigé de manière correcte et cohérente. 
          Cela garantit non seulement une meilleure lisibilité, mais aussi un profond respect
          pour la langue et la culture haïtienne, rendant l’application accessible et agréable pour les utilisateurs, 
          quel que soit leur lieu de résidence.
        </Text>
        <Text selectable={false} style={{ marginBottom: 20 }}>
          En plus de ses fonctionnalités pratiques, cette application a pour objectif d’aider 
          les utilisateurs à adorer et louer Dieu, que ce soit de manière individuelle ou en groupe.
          Elle permet de vivre des moments spirituels enrichissants, que ce soit dans 
          un cadre personnel ou communautaire, en rendant les chants facilement accessibles pour tous.
          {"\n\n"}En résumé, l’application &quot;Chants d’Espérance & Hymne&quot; a été conçue pour simplifier la recherche et l’accès
          aux chants tout en valorisant la richesse linguistique et culturelle. 
          Elle offre une interface intuitive et facile à utiliser, répondant ainsi aux attentes des utilisateurs.
        </Text>
      </>
    ),
  },
  {
    question: "Comment utiliser l'application ?",
    answer: (
      <>
        <Text selectable={false}>
          Pour utiliser l&apos;application, vous avez trois possibilités sur la page d&apos;accueil. {"\n\n"}
          - Toutes les sections s&apos;affichent sur l’écran de l&apos;utilisateur. Vous pouvez naviguer
          facilement d&apos;une section à une autre, selon vos besoins.
          {"\n\n"}
          - Dans la barre de recherche indiquée, vous pouvez taper soit le numéro, soit le titre, ou les paroles d&apos;une 
          partie du cantique que vous avez besoin, ainsi que le nom de 
          l'auteur du cantique (cette dernière n&apos;est pas encore correcte pour tous les cantiques).
          {"\n\n"}
          - Vous pouvez également faire une recherche en cliquant sur le bouton du coin inférieur droit, pour choisir
          la catégorie de chants que vous voulez afficher. Nb: cette partie est en cours de développement.
        </Text>
      </>
    ),
  },
  {
    question: "Puis-je ajouter des chants à mes favoris ?",
    answer: (
      <> 
        <Text selectable={false}>
          Oui, vous pouvez ajouter des chants à vos favoris en cliquant sur l&apos;icône 
          au coin inférieur gauche de l&apos;écran en forme de cœur sur la page ayant les détails du chant.
          Après, vous pouvez vérifier la présence du chant ajouté aux favoris en faisant un retour sur
          la page d&apos;accueil, pour cliquer sur le dernier bouton &quot;FAVORIS&quot;, l&apos;icône d’un dossier ayant 
          une petite étoile dessus.
        </Text>
      </>
    ),
  },
  {
    question: "Puis-je partager les paroles des chants ?",
    answer: (
      <>
        <Text selectable={false}>
          Oui, vous pouvez partager tout le contenu d&apos;un chant ou copier une partie selon vos besoins
          en cliquant sur le bouton &quot;Partager&quot; en bas, à droite de la page ayant les détails du chant.
        </Text>
      </>
    ),
  },
  {
    question: "Puis-je créer mon propre service pour diriger un culte ?",
    answer: (
      <>
        <Text selectable={false} style={{ marginBottom: 20 }}>
          Oui, tous les orateurs peuvent créer leur propre service au sein de l'application pour diriger un culte. 
          Cette fonctionnalité permet de planifier et organiser vos cérémonies, ajouter des chants, 
          gérer l'ordre de service et faciliter la coordination avec les participants. 
          Vous pouvez ainsi personnaliser votre culte selon vos besoins et offrir une expérience enrichissante à votre communauté.
        </Text>
      </>
    ),
  },
  {
    question: "Vous voulez entrer en contact avec le développeur ?",
    answer: (
      <>
        Si vous rencontrez un problème, veuillez nous contacter à notre adresse mail :{" "}
        <Text style={styles.link} onPress={() => Linking.openURL("mailto:gedelienjosaphat@gmail.com")}>
          gedelienjosaphat@gmail.com
        </Text>
        {" "}ou cliquez sur le bouton au coin supérieur droit de la page 
        d&apos;accueil pour voir la possibilité.
      </>
    ),
  },
];
  const toggleExpand = (index: number) => {
  setExpandedIndex(index === expandedIndex ? null : index);
};
  return (
    <ScrollView style={styles.container}>
      <AdBanner />
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <Text style={styles.question} onPress={() => toggleExpand(index)}>
            {faq.question}
          </Text>
          {expandedIndex === index && <Text style={styles.answer}>{faq.answer}</Text>}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20), // 🔹 Padding responsive
    backgroundColor: "#fff",
  },

  faqContainer: {
    marginBottom: verticalScale(20), // 🔹 Marge responsive
    padding: moderateScale(15), // 🔹 Padding responsive
    backgroundColor: "#f9f9f9",
    borderRadius: moderateScale(8),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  question: {
    fontSize: scale(16), // 🔹 Taille de texte responsive
    fontWeight: "bold",
    marginBottom: verticalScale(5), // 🔹 Marge verticale responsive
    color: "red",
  },
  answer: {
    fontSize: scale(15), // 🔹 Taille de texte responsive
    lineHeight: verticalScale(24), // 🔹 Hauteur de ligne responsive
    textAlign: "justify",
    color: "#1C1362",
  },
  link: {
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
  shareButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A1E42",
    paddingVertical: verticalScale(12), // 🔹 Padding vertical responsive
    borderRadius: moderateScale(8),
    marginTop: verticalScale(30), 
    bottom: verticalScale(20)
    
  },
});

export default Foire;
