import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect, useState } from "react";
import { Dimensions, Linking, Platform, ScrollView, Share, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get("window"); 


const Foire = () => {
  const navigation = useNavigation();
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Configure le titre du header
useLayoutEffect(() => {
  navigation.setOptions({
    title: "FAQ",
    headerTitleStyle: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
       marginTop:
                      Platform.OS === "android"
                        ? StatusBar.currentHeight ?? 24 : 0,
    },
    headerStyle: {
      height: Platform.OS === "android" ? 110 + (StatusBar.currentHeight ?? 0) : 110,
      backgroundColor: "#0A1E42",
    },
    headerTitleAlign: "center",
    headerRight: () => <View />,
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
             facilitant ainsi l’accès même lorsque le titre exact est inconnu.          </Text>
            {"\n\n"}
            <Text selectable={false} style={{ marginBottom: 20 }}>
            Un autre aspect important de l’application est son attention particulière à la qualité linguistique,
             notamment en ce qui concerne l’orthographe des chants en créole. 
             Les utilisateurs n’ont pas à s’inquiéter des variations orthographiques, 
             car chaque chant est rédigé de manière correcte et cohérente. 
             Cela garantit non seulement une meilleure lisibilité, mais aussi un profond respect
              pour la langue et la culture haïtienne, rendant l’application accessible et agréable pour les utilisateurs, 
              quel que soit leur lieu de résidence.          </Text>
            {"\n"}
            <Text selectable={false} style={{ marginBottom: 20 }}>
            En plus de ses fonctionnalités pratiques, cette application a pour objectif d’aider 
            les utilisateurs à adorer et louer Dieu, que ce soit de manière individuelle ou en groupe.
             Elle permet de vivre des moments spirituels enrichissants, que ce soit dans 
             un cadre personnel ou communautaire, en rendant les chants facilement accessibles pour tous.
            {"\n\n"} En résumé, l’application &quot;Chants d’Espérance & Hymne&quot; a été conçue pour simplifier la recherche et l’accès
             aux chants tout en valorisant la richesse linguistique et culturelle. 
             Elle offre une interface intuitive et facile à utiliser, répondant ainsi aux attentes des utilisateurs.          </Text>
          </>
        ),
      },
      {
        question: "Comment utiliser l'application ?",
        answer: 
        <>
        <Text selectable={false}>
        Pour utiliser l&apos;application, vous avez trois possibilités sur la page d&apos;accueil. {"\n\n"}
        - Toutes les sections s&apos;affichent sur l’écran de l&apos;utilisateur. Vous pouvez naviguer
        facilement d&apos;une section à une autre, selons vos besoins.
        {"\n\n"}
        - Dans la barre de recherche indiquée, vous pouvez tapez soit le numéro, soit le titre, ou les paroles d&apos;une 
        partie du cantique que vous avez besoin, ainsi que le nom de 
        l'auteur du cantique (cette dernière n&apos;est pas encore correcte pour tous les cantiques).
        {"\n\n"}
        - Vous pouvez également faire une recherche en cliquant sur le bouton du coin inférieur droit, pour choisir
        la catégorie de chants que vous voulez afficher. Nb: cette partie est en cours de développement.
        </Text>
        </>
      },
      {
        question: "Puis-je ajouter des chants à mes favoris ?",
        answer: 
        <> 
        <Text selectable={false}>
        Oui, vous pouvez ajouter des chants à vos favoris en cliquant sur l&apos;icône 
        au coin inférieur gauche de l&apos;écran en forme de cœur sur la page ayant les détails du chant.
         Après, vous pouvez vérifier la présence du chant ajouté aux favoris en faisant un retour sur
         la page d&apos;accueil, pour cliquer sur le dernier bouton &quot;FAVORIS&quot;, l&apos;icône d’un dossier ayant 
         une petite étoile dessus.</Text>
        </>
      },
      {
        question: "Puis-je partager les paroles des chants ?",
        answer: 
        <>
        <Text selectable={false}>
        Oui, vous pouvez partager tout le contenu d&apos;un chant ou copier une partie selon vos besoins
        en cliquant sur le bouton &quot;Partager&quot; en bas, à droite de la page ayant les détails du chant.
        </Text>
        </>
      },
      {
        question: "Vous voulez entrer en contact avec le développeur ?",
        answer: (
          <>
            Si vous rencontrez un problème, veuillez nous contacter à notre adresse mail :{" "}
            <Text style={styles.link} onPress={() => Linking.openURL("mailto:gedelienjosaphat@gmail.com")}>
              gedelienjosaphat@gmail.com
            </Text>
             {" "}ou cliquez sur le bouton au coin superieur droit de la page 
              d&apos;accueil pour voir la possibilité.
          </>
        ),
      },
    ];

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const shareAppLink = async () => {
    try {
      const result = await Share.share({
        message: "Téléchargez l'application depuis le Play Store : https://play.google.com/store/apps/details?id=com.berly.ChantDesperance",
      });

      if (result.action === Share.sharedAction) {
        console.log("Lien partagé avec succès.");
      } else if (result.action === Share.dismissedAction) {
        console.log("Partage annulé.");
      }
    } catch (error) {
      console.error("Erreur lors du partage :", error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <Text style={styles.question} onPress={() => toggleExpand(index)}>
            {faq.question}
          </Text>
          {expandedIndex === index && <Text style={styles.answer}>{faq.answer}</Text>}
        </View>
      ))}
      <TouchableOpacity style={styles.shareButton} onPress={shareAppLink}>
        <MaterialIcons name="share" size={24} color="white" />
        <Text style={styles.shareButtonText}>Partager l&apos;application</Text>
      </TouchableOpacity>
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
  shareButtonText: {
    fontSize: scale(14), // 🔹 Taille de texte responsive
    color: "white",
    fontWeight: "bold",
    marginLeft: moderateScale(10), // 🔹 Marge responsive
  },
});

export default Foire;
