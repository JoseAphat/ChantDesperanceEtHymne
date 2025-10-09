import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import * as Clipboard from "expo-clipboard";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

interface NoteType {
  title: string;
  text: string;
  size: number;
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  date: string;
}

const Note = () => {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [textSize, setTextSize] = useState(16);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
  navigation.setOptions({
  headerTitle: () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 60,
        paddingBottom: 40,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="notes" size={28} color="#dfdedcf7" />
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 8,
          }}
        >
          Mes Notes
        </Text>
      </View>
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
    loadNotes();
  }, [navigation]);

  const saveNote = async () => {
    if (noteText.trim().length === 0 || noteTitle.trim().length === 0) return;

    const newNote = {
      title: noteTitle,
      text: noteText,
      size: textSize,
      bold: isBold,
      italic: isItalic,
      strikethrough: isStrikethrough,
      date: new Date().toLocaleString(),
    };
    const newNotes =
      editingIndex !== null
        ? notes.map((note, index) => (index === editingIndex ? newNote : note))
        : [...notes, newNote];

    setNotes(newNotes);
    setNoteText("");
    setNoteTitle("");
    setModalVisible(false);
    setEditingIndex(null);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const loadNotes = async () => {
    const savedNotes = await AsyncStorage.getItem("notes");
    if (savedNotes) setNotes(JSON.parse(savedNotes));
  };

  const deleteNote = async (index: number) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const editNote = (index: number) => {
    const note = notes[index];
    setNoteTitle(note.title);
    setNoteText(note.text);
    setTextSize(note.size);
    setIsBold(note.bold);
    setIsItalic(note.italic);
    setIsStrikethrough(note.strikethrough);
    setEditingIndex(index);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        contentContainerStyle={styles.listContent}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.noteCard}
            onPress={() => editNote(index)}
          >
            <View style={styles.noteHeader}>
              <Text style={styles.noteTitle} numberOfLines={1}>
                <MaterialIcons name="title" size={12} color="#666" />{" "}
                {item.title}
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* ✅ Bouton Copier */}
                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation();
                    Clipboard.setStringAsync(`${item.title}\n\n${item.text}`);
                  }}
                  style={{ marginRight: 8 }}
                >
                  <MaterialIcons
                    name="content-copy"
                    size={20}
                    color="#0A1E42"
                  />
                </TouchableOpacity>

                {/* 🗑️ Bouton Supprimer */}
                <TouchableOpacity
                  onPress={(e) => {
                    e.stopPropagation();
                    deleteNote(index);
                  }}
                >
                  <MaterialIcons
                    name="delete-outline"
                    size={24}
                    color="#ff4444"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={[
                styles.noteText,
                {
                  fontSize: item.size,
                  fontWeight: item.bold ? "bold" : "normal",
                  fontStyle: item.italic ? "italic" : "normal",
                  textDecorationLine: item.strikethrough
                    ? "line-through"
                    : "none",
                },
              ]}
            >
              {item.text}
            </Text>

            <View style={styles.dateContainer}>
              <Text style={styles.noteDate}>
                <Feather /> {item.date}
              </Text>
            </View>

            <View style={styles.formatIcons}>
              {item.bold && (
                <MaterialIcons name="format-bold" size={14} color="#666" />
              )}
              {item.italic && (
                <MaterialIcons name="format-italic" size={14} color="#666" />
              )}
              {item.strikethrough && (
                <MaterialIcons
                  name="format-strikethrough"
                  size={14}
                  color="#0A1E42"
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <MaterialCommunityIcons
          name="square-edit-outline"
          size={moderateScale(20)}
          color="#dfdedcf7"
        />
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              {editingIndex !== null ? "Modifier la note" : "Nouvelle note"}
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <MaterialIcons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.modalContent}>
            <TextInput
              style={styles.inputTitle}
              placeholder="Titre"
              placeholderTextColor="#999"
              value={noteTitle}
              onChangeText={(text) => setNoteTitle(text || "")}
            />

            <View style={styles.formatToolbar}>
              <TouchableOpacity
                style={[styles.formatButton, isBold && styles.activeFormat]}
                onPress={() => setIsBold(!isBold)}
              >
                <MaterialIcons
                  name="format-bold"
                  size={24}
                  color={isBold ? "#6200ee" : "#666"}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.formatButton, isItalic && styles.activeFormat]}
                onPress={() => setIsItalic(!isItalic)}
              >
                <MaterialIcons
                  name="format-italic"
                  size={24}
                  color={isItalic ? "#6200ee" : "#666"}
                />
              </TouchableOpacity>

              <View style={styles.sizeControl}>
                <MaterialIcons name="text-fields" size={20} color="#0A1E42" />
                <Slider
                  style={styles.slider}
                  minimumValue={10}
                  maximumValue={24}
                  step={4}
                  value={textSize}
                  onValueChange={setTextSize}
                  minimumTrackTintColor="#0A1E42"
                  thumbTintColor="#0A1E42"
                />
                <Text style={styles.sizeText}>{textSize}pt</Text>
              </View>
            </View>

            <TextInput
              style={[
                styles.inputText,
                {
                  fontSize: textSize,
                  fontWeight: isBold ? "bold" : "normal",
                  fontStyle: isItalic ? "italic" : "normal",
                  textDecorationLine: isStrikethrough ? "line-through" : "none",
                },
              ]}
              placeholder="Commencez à écrire..."
              placeholderTextColor="#999"
              value={noteText}
              onChangeText={(text) => setNoteText(text || "")}
              multiline
              textAlignVertical="top"
            />
          </ScrollView>

          <View style={styles.modalActions}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <MaterialIcons name="close" size={20} color="red" />
              <Text style={styles.cancelText}>Annuler</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.saveButton,
                (!noteText?.trim?.() || !noteTitle?.trim?.()) &&
                  styles.disabledButton,
              ]}
              onPress={saveNote}
              disabled={!noteText?.trim?.() || !noteTitle?.trim?.()}
            >
              <MaterialIcons name="save" size={20} color="white" />
              <Text style={styles.saveButtonText}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdedcf7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0A1E42",
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(120),
    elevation: 4,
  },
  title: {
    fontSize: scale(18),
    fontWeight: "600",
    color: "#dfdedcf7",
    marginLeft: scale(10),
  },
  listContent: {
    paddingVertical: verticalScale(16),
  },
  noteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(8),
  },
  noteTitle: {
    fontSize: scale(15),
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  noteMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(12),
    top: verticalScale(21),
  },
  noteText: {
    fontSize: scale(14),
    color: "#444",
    lineHeight: moderateScale(20),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#dfdedcf7",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: scale(20),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalTitle: {
    fontSize: scale(15),
    fontWeight: "600",
    color: "#333",

  },
  modalContent: {
    padding: scale(20),
  },
  inputTitle: {
    fontSize: scale(18),
    fontWeight: "600",
    color: "#333",
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginBottom: verticalScale(14),
  },
  formatToolbar: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
    marginBottom: verticalScale(16),
    bottom: 20,
  },
  formatButton: {
    padding: scale(8),
    borderRadius: scale(8),
    backgroundColor: "#f0f0f0",
  },
  activeFormat: {
    backgroundColor: "#e0d4f7",
  },
  sizeControl: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
    marginLeft: "auto",
  },
  slider: {
    width: scale(120),
    height: verticalScale(40),
  },
  sizeText: {
    fontSize: scale(14),
    color: "#666",
  },
  inputText: {
    flex: 1,
    fontSize: scale(16),
    color: "#333",
    minHeight: verticalScale(200),
    textAlignVertical: "top",
    bottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: scale(20),
    gap: scale(16),
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
    backgroundColor: "#0A1E42",
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(25),
    borderRadius: scale(20),
  },
  cancelText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: "500",
  },
  saveButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
    backgroundColor: "#0A1E42",
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(10),
    borderRadius: scale(15),
  },
  disabledButton: {
    opacity: 0.6,
  },
  saveButtonText: {
    color: "#dfdedcf7",
    fontSize: scale(16),
    fontWeight: "500",
  },
  addButton: {
    position: "absolute",
    bottom: verticalScale(55),
    right: scale(15),
    backgroundColor: "#0A1E42",
    padding: moderateScale(14),
    borderRadius: moderateScale(30),
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  addButtonContent: {
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
  newNote: {
    color: "#0A1E42",
    fontSize: scale(12),
    fontWeight: "500",
    marginTop: verticalScale(4),
    textAlign: "center",
  },
  noteDate: {
    fontSize: scale(9),
    color: "#0A1E42",
    flexDirection: "row",
    alignItems: "center",
  },
  noteCard: {
    backgroundColor: "#dfdedcf7",
    borderRadius: scale(12),
    padding: scale(16),
    marginVertical: verticalScale(8),
    marginHorizontal: scale(16),
    elevation: 2,
    minHeight: verticalScale(140),
    position: "relative",
  },
  dateContainer: {
    position: "absolute",
    bottom: verticalScale(10),
    right: scale(10),
    flexDirection: "row",
    alignItems: "center",
  },
  formatIcons: {
    position: "absolute",
    bottom: verticalScale(18),
    left: scale(10),
    flexDirection: "row",
    gap: scale(6),
  },
});

export default Note;
