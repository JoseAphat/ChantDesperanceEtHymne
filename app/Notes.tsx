import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Share,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const NOTES_STORAGE_KEY = "@user_notes";

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  pinned: boolean;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerShown: false, headerTitle: '' });
  }, [navigation]);

  const loadNotes = async () => {
    try {
      const raw = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
      if (raw) {
        setNotes(JSON.parse(raw));
      }
    } catch (error) {
      console.log("Error loading notes:", error);
      Alert.alert("Erreur", "Impossible de charger les notes");
    }
  };

  const saveNotes = async (notesList: Note[]) => {
    try {
      await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notesList));
      setNotes(notesList);
    } catch (error) {
      console.log("Error saving notes:", error);
      Alert.alert("Erreur", "Impossible de sauvegarder les notes");
    }
  };

  const createNewNote = () => {
    setCurrentNote(null);
    setTitle("");
    setContent("");
    setIsEditing(true);
    setIsCreatingNew(true);
  };

  const saveNote = async () => {
    if (!title.trim()) {
      Alert.alert("Titre requis", "Veuillez saisir un titre pour votre note.");
      return;
    }

    if (!content.trim()) {
      Alert.alert("Contenu requis", "Veuillez saisir le contenu de votre note.");
      return;
    }

    const now = new Date().toISOString();
    let updatedNotes: Note[];

    if (currentNote) {
      // Modifier une note existante
      updatedNotes = notes.map(note =>
        note.id === currentNote.id
          ? { 
              ...note, 
              title: title.trim(), 
              content: content.trim(), 
              updatedAt: now 
            }
          : note
      );
      Alert.alert("Succès", "Note modifiée avec succès");
    } else {
      // Créer une nouvelle note
      const newNote: Note = {
        id: Date.now().toString(),
        title: title.trim(),
        content: content.trim(),
        createdAt: now,
        updatedAt: now,
        pinned: false,
      };
      updatedNotes = [newNote, ...notes];
      Alert.alert("Succès", "Note créée avec succès");
    }

    await saveNotes(updatedNotes);
    setIsEditing(false);
    setIsCreatingNew(false);
    setCurrentNote(null);
    setTitle("");
    setContent("");
  };

  const togglePinNote = async (noteId: string) => {
    const updatedNotes = notes.map(note =>
      note.id === noteId
        ? { ...note, pinned: !note.pinned }
        : note
    );
    
    // Trier les notes : épinglées d'abord, puis par date de modification
    const sortedNotes = updatedNotes.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
    
    await saveNotes(sortedNotes);
  };

  const editNote = (note: Note) => {
    setCurrentNote(note);
    setTitle(note.title);
    setContent(note.content);
    setIsEditing(true);
    setIsCreatingNew(false);
  };

  const deleteNote = (noteId: string) => {
    Alert.alert(
      "Supprimer la note",
      "Êtes-vous sûr de vouloir supprimer cette note ? Cette action est irréversible.",
      [
        { text: "Annuler", style: "cancel" },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: async () => {
            const updatedNotes = notes.filter(note => note.id !== noteId);
            await saveNotes(updatedNotes);
            if (currentNote?.id === noteId) {
              setIsEditing(false);
              setCurrentNote(null);
              setTitle("");
              setContent("");
            }
          },
        },
      ]
    );
  };

  const copyToClipboard = (text: string) => {
    Alert.alert("Copié", "Le contenu a été copié dans le presse-papiers");
  };

  const shareNote = async (note: Note) => {
    try {
      const shareText = `📝 ${note.title}\n\n${note.content}\n\nCréé le: ${new Date(note.createdAt).toLocaleString('fr-FR')}`;
      await Share.share({
        message: shareText,
        title: note.title,
      });
    } catch (error) {
      Alert.alert("Erreur", "Impossible de partager cette note.");
    }
  };

  const cancelEdit = () => {
    if (isCreatingNew && (!title.trim() || !content.trim())) {
      setIsEditing(false);
      setIsCreatingNew(false);
      setTitle("");
      setContent("");
    } else {
      Alert.alert(
        "Annuler les modifications",
        "Voulez-vous vraiment annuler ? Toutes les modifications non enregistrées seront perdues.",
        [
          { text: "Continuer l'édition", style: "cancel" },
          {
            text: "Annuler",
            style: "destructive",
            onPress: () => {
              setIsEditing(false);
              setIsCreatingNew(false);
              setCurrentNote(null);
              setTitle("");
              setContent("");
            },
          },
        ]
      );
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Séparer les notes épinglées et non épinglées
  const pinnedNotes = notes.filter(note => note.pinned);
  const unpinnedNotes = notes.filter(note => !note.pinned);

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            {isEditing ? (currentNote ? "Modifier la note" : "Nouvelle note") : "Mes Notes"}
          </Text>
          {!isEditing && (
            <TouchableOpacity onPress={createNewNote} style={styles.newNoteButton}>
              <Ionicons name="add" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>

        {isEditing ? (
          // Éditeur de note
          <View style={styles.editorWrapper}>
            <ScrollView style={styles.editorContainer} showsVerticalScrollIndicator={false}>
              <View style={styles.editorHeader}>
                <Text style={styles.editorTitle}>
                  {currentNote ? "Modifier votre note" : "Nouvelle note"}
                </Text>
                <View style={styles.charCountBadge}>
                  <Text style={styles.charCountText}>{title.length}/100</Text>
                </View>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.titleInput}
                  placeholder="Titre"
                  placeholderTextColor="#94A3B8"
                  value={title}
                  onChangeText={setTitle}
                  maxLength={100}
                />
                
                <View style={styles.separator} />
                
                <TextInput
                  style={styles.contentInput}
                  placeholder="Commencez à écrire "
                  placeholderTextColor="#94A3B8"
                  value={content}
                  onChangeText={setContent}
                  multiline
                  textAlignVertical="top"
                />
              </View>
            </ScrollView>
            
            <View style={styles.editorFooter}>
              <TouchableOpacity 
                style={[styles.footerButton, styles.cancelButton]} 
                onPress={cancelEdit}
              >
                <Ionicons name="close-circle-outline" size={20} color="#64748B" />
                <Text style={styles.cancelButtonText}>Annuler</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.footerButton, styles.saveButton]} 
                onPress={saveNote}
                disabled={!title.trim() || !content.trim()}
              >
                <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
                <Text style={styles.saveButtonText}>
                  {currentNote ? "Modifier" : "Enregistrer"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          // Liste des notes avec épinglage
          <View style={styles.notesContainer}>
            {notes.length === 0 ? (
              <View style={styles.emptyState}>
                <Ionicons name="document-text-outline" size={80} color="#CBD5E1" />
                <Text style={styles.emptyTitle}>Aucune note</Text>
                <Text style={styles.emptyText}>
                  Créez votre première note pour capturer vos idées, réflexions et inspirations
                </Text>
                <TouchableOpacity style={styles.emptyButton} onPress={createNewNote}>
                  <Ionicons name="add" size={20} color="#FFFFFF" />
                  <Text style={styles.emptyButtonText}>Créer une note</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <ScrollView style={styles.notesList} showsVerticalScrollIndicator={false}>
                {/* Notes épinglées */}
                {pinnedNotes.length > 0 && (
                  <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                      <Ionicons name="pin" size={16} color="#0A1E42" />
                      <Text style={styles.sectionTitle}>Épinglées</Text>
                    </View>
                    {pinnedNotes.map((note) => (
                      <NoteCard
                        key={note.id}
                        note={note}
                        onEdit={editNote}
                        onDelete={deleteNote}
                        onShare={shareNote}
                        onCopy={copyToClipboard}
                        onTogglePin={togglePinNote}
                        formatDate={formatDate}
                      />
                    ))}
                  </View>
                )}

                {/* Notes non épinglées */}
                {unpinnedNotes.length > 0 && (
                  <View style={styles.section}>
                    {pinnedNotes.length > 0 && (
                      <View style={styles.sectionHeader}>
                        <Ionicons name="document-text-outline" size={16} color="#64748B" />
                        <Text style={styles.sectionTitle}>Autres notes</Text>
                      </View>
                    )}
                    {unpinnedNotes.map((note) => (
                      <NoteCard
                        key={note.id}
                        note={note}
                        onEdit={editNote}
                        onDelete={deleteNote}
                        onShare={shareNote}
                        onCopy={copyToClipboard}
                        onTogglePin={togglePinNote}
                        formatDate={formatDate}
                      />
                    ))}
                  </View>
                )}
              </ScrollView>
            )}
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

// Composant de carte de note séparé
const NoteCard: React.FC<{
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onShare: (note: Note) => void;
  onCopy: (text: string) => void;
  onTogglePin: (id: string) => void;
  formatDate: (date: string) => string;
}> = ({ note, onEdit, onDelete, onShare, onCopy, onTogglePin, formatDate }) => {
  return (
    <View style={[styles.noteCard, note.pinned && styles.pinnedNoteCard]}>
      <View style={styles.noteContent}>
        <View style={styles.noteHeader}>
          <Text style={styles.noteTitle} numberOfLines={2}>
            {note.title}
          </Text>
        </View>
        <Text style={styles.notePreview} numberOfLines={3}>
          {note.content}
        </Text>
        <View style={styles.noteFooter}>
          <Text style={styles.noteDate}>
            {formatDate(note.updatedAt)}
          </Text>
        </View>
      </View>
      
      {/* Toutes les icônes alignées verticalement à droite */}
      <View style={styles.iconsColumn}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => onTogglePin(note.id)}
        >
          <Ionicons 
            name={note.pinned ? "pin" : "pin-outline"} 
            size={20} 
            color={note.pinned ? "#0A1E42" : "#64748B"} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => onEdit(note)}
        >
          <Ionicons name="open-outline" size={20} color="#0A1E42" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => onCopy(note.content)}
        >
          <Ionicons name="copy-outline" size={20} color="#0A1E42" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => onShare(note)}
        >
          <Ionicons name="share-social-outline" size={20} color="#0A1E42" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => onDelete(note.id)}
        >
          <Ionicons name="trash-outline" size={20} color="#EF4444" />
        </TouchableOpacity>
      </View>
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
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    flex: 1,
    textAlign: "center",
  },
  newNoteButton: {
    padding: 8,
  },
  // Styles pour l'éditeur
  editorWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  editorContainer: {
    flex: 1,
  },
  editorHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  editorTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0A1E42",
  },
  charCountBadge: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  charCountText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#64748B",
  },
  inputContainer: {
    padding: 24,
  },
  titleInput: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A1E42",
    marginBottom: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginBottom: 24,
  },
  contentInput: {
    fontSize: 16,
    color: "#334155",
    lineHeight: 24,
    minHeight: 400,
    textAlignVertical: "top",
  },
  editorFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    gap: 12,
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
    flex: 1,
  },
  cancelButton: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  saveButton: {
    backgroundColor: "#0A1E42",
  },
  cancelButtonText: {
    color: "#64748B",
    fontWeight: "600",
    fontSize: 16,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  // Styles pour la liste des notes
  notesContainer: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0A1E42",
    marginTop: 20,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  emptyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0A1E42",
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  emptyButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  notesList: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0A1E42",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  noteCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  pinnedNoteCard: {
    borderColor: "#0A1E42",
    borderWidth: 1.5,
    backgroundColor: "#F8FAFC",
  },
  noteContent: {
    flex: 1,
    marginRight: 16,
  },
  noteHeader: {
    marginBottom: 8,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0A1E42",
  },
  notePreview: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
    marginBottom: 12,
  },
  noteFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  noteDate: {
    fontSize: 12,
    color: "#94A3B8",
  },
  // Colonne d'icônes alignées verticalement
  iconsColumn: {
    alignItems: "center",
    gap: 8,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#F8FAFC",
    minWidth: 36,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Notes;