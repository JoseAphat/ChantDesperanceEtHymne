import React from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { StyleSheet } from "react-native";

type MainMenuProps = {
  visible: boolean;
  onClose: () => void;
  onPolitique: () => void;
  onFoire: () => void;
  onContact: () => void;
  onFacebook: () => void;
  onUpdateApp: () => void;
  onAbout: () => void;
  onSupport: () => void;
  onShare: () => void;
};

export default function MainMenu({
  visible,
  onClose,
  onPolitique,
  onFoire,
  onContact,
  onFacebook,
  onUpdateApp,
  onAbout,
  onSupport,
  onShare,
}: MainMenuProps) {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.modalButton} onPress={onPolitique}>
                <Text style={styles.modalText}>Politique de Confidentialité</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={onFoire}>
                <Text style={styles.modalText}>Foire aux Questions</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={onContact}>
                <Text style={styles.modalText}>Nous Contacter</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={onFacebook}>
                <Text style={styles.modalText}>Suivez-nous sur Facebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={onUpdateApp}>
                <Text style={styles.modalText}>Mettre à jour</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={onAbout}>
                <Text style={styles.modalText}> À propos </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={onSupport}>
                <Text style={styles.modalText}> Nous supporter</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={onShare}>
                <Text style={styles.modalText}> Partager l'application</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.modalButton} onPress={onClose}>
                <Text style={styles.modalText}>Fermer</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#0A1E42",
    width: scale(220),
    padding: verticalScale(12),
    position: "absolute",
    top: verticalScale(50),
    right: scale(0),
    borderRadius: moderateScale(8),
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10,
  },
  modalButton: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(12),
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  modalText: {
    fontSize: moderateScale(14),
    color: "#dfdedcf7",
    textAlign: "left",
    lineHeight: moderateScale(18),
  },
});