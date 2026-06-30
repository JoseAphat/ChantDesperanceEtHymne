import { Ionicons } from "@expo/vector-icons";
import { auth, db } from "@/services/firebaseConfig";
import { 
  collection, doc, setDoc, getDocs, writeBatch 
} from "firebase/firestore";
import { router, useNavigation } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { moderateScale, scale, ScaledSheet, verticalScale } from "react-native-size-matters";

// Import de react-native-pell-rich-editor
let RichEditor: any;
let RichToolbar: any;
let actions: any;

try {
  const RNEditor = require("react-native-pell-rich-editor");
  RichEditor = RNEditor.RichEditor;
  RichToolbar = RNEditor.RichToolbar;
  actions = RNEditor.actions;
} catch (error) {
  console.warn("react-native-pell-rich-editor not available");
}

const NOTES_STORAGE_KEY = "@user_notes";
const { width: SCREEN_WIDTH } = Dimensions.get('window');

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
  const [htmlContent, setHtmlContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const navigation = useNavigation();
  const richText = useRef<any>(null);

  useEffect(() => {
    loadNotes();

    // Écouteurs du clavier
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerShown: false, headerTitle: '' });
  }, [navigation]);

  const loadNotes = async () => {
  try {
    const user = auth.currentUser;
    if (!user) return;

    const snapshot = await getDocs(
      collection(db, "users", user.uid, "notes")
    );
    const data = snapshot.docs.map(d => d.data() as Note);
    setNotes(data);
  } catch (error) {
    console.log("Error loading notes:", error);
    Alert.alert("Erreur", "Impossible de charger les notes");
  }
};

  const saveNotes = async (notesList: Note[]) => {
  try {
    const user = auth.currentUser;
    if (!user) return;

    setNotes(notesList);

    const batch = writeBatch(db);

    // Supprimer tous les anciens documents
    const snapshot = await getDocs(
      collection(db, "users", user.uid, "notes")
    );
    snapshot.docs.forEach(d => batch.delete(d.ref));

    // Réécrire toutes les notes
    notesList.forEach(note => {
      const ref = doc(db, "users", user.uid, "notes", note.id);
      batch.set(ref, note);
    });

    await batch.commit();
  } catch (error) {
    console.log("Error saving notes:", error);
    Alert.alert("Erreur", "Impossible de sauvegarder les notes");
  }
};
  const createNewNote = () => {
    setCurrentNote(null);
    setTitle("");
    setContent("");
    setHtmlContent("");
    if (richText.current && richText.current.setContentHTML) {
      richText.current.setContentHTML("");
    }
    setIsEditing(true);
    setIsCreatingNew(true);
  };

  const saveNote = async () => {
    if (!title.trim()) {
      Alert.alert("Titre requis", "Veuillez saisir un titre pour votre note.");
      return;
    }

    try {
      let finalContent = content;
      
      // Récupérer le contenu HTML de l'éditeur
      if (richText.current && richText.current.getContentHtml) {
        const html = await richText.current.getContentHtml();
        if (html && html.trim() && html !== "<div><br></div>") {
          finalContent = html;
        }
      }
      
      if (!finalContent.trim() || finalContent === "<div><br></div>") {
        Alert.alert("Contenu requis", "Veuillez saisir le contenu de votre note.");
        return;
      }

      const now = new Date().toISOString();
      let updatedNotes: Note[];

      if (currentNote) {
        updatedNotes = notes.map(note =>
          note.id === currentNote.id
            ? { 
                ...note, 
                title: title.trim(), 
                content: finalContent, 
                updatedAt: now 
              }
            : note
        );
        Alert.alert("Succès", "Note modifiée avec succès");
      } else {
        const newNote: Note = {
          id: Date.now().toString(),
          title: title.trim(),
          content: finalContent,
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
      setHtmlContent("");
    } catch (error) {
      console.log("Error saving note:", error);
      Alert.alert("Erreur", "Impossible de sauvegarder la note");
    }
  };

  const togglePinNote = async (noteId: string) => {
    const updatedNotes = notes.map(note =>
      note.id === noteId
        ? { ...note, pinned: !note.pinned }
        : note
    );
    
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
    setHtmlContent(note.content);
    if (richText.current && richText.current.setContentHTML) {
      // Délai pour s'assurer que l'éditeur est monté
      setTimeout(() => {
        richText.current.setContentHTML(note.content);
      }, 100);
    }
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
              setHtmlContent("");
            }
          },
        },
      ]
    );
  };

  const copyToClipboard = (text: string) => {
    const plainText = text.replace(/<[^>]*>/g, '');
    Alert.alert("Copié", "Le contenu a été copié dans le presse-papiers");
  };

  const shareNote = async (note: Note) => {
    try {
      const plainText = note.content.replace(/<[^>]*>/g, '');
      const shareText = `📝 ${note.title}\n\n${plainText}\n\nCréé le: ${new Date(note.createdAt).toLocaleString('fr-FR')}`;
      await Share.share({
        message: shareText,
        title: note.title,
      });
    } catch (error) {
      Alert.alert("Erreur", "Impossible de partager cette note.");
    }
  };

  const cancelEdit = () => {
    if (isCreatingNew && !title.trim()) {
      setIsEditing(false);
      setIsCreatingNew(false);
      setTitle("");
      setContent("");
      setHtmlContent("");
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
              setHtmlContent("");
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

  const getPlainTextPreview = (html: string) => {
    return html.replace(/<[^>]*>/g, '').substring(0, 150);
  };

  const pinnedNotes = notes.filter(note => note.pinned);
  const unpinnedNotes = notes.filter(note => !note.pinned);

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        {/* Header - masqué quand le clavier est visible */}
        {!isKeyboardVisible && (
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
        )}

        {isEditing ? (
          <View style={styles.editorWrapper}>
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
            </View>

            {/* Éditeur de texte riche */}
            {RichEditor ? (
              <>
                <ScrollView style={styles.richEditorContainer} showsVerticalScrollIndicator={false}>
                  <RichEditor
                    ref={richText}
                    onChange={(text: string) => {
                      // Extraire le texte brut du HTML pour la prévisualisation
                      const plainText = text.replace(/<[^>]*>/g, '');
                      setContent(plainText);
                      setHtmlContent(text);
                    }}
                    placeholder="Commencez à écrire..."
                    initialContentHTML={htmlContent}
                    editorStyle={{
                      backgroundColor: '#FFFFFF',
                      color: '#334155',
                      placeholderColor: '#94A3B8',
                      contentCSSText: `
                        font-size: 16px; 
                        line-height: 24px; 
                        padding: 0 24px;
                        min-height: 300px;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                      `
                    }}
                    style={styles.richEditor}
                    useContainer={true}
                  />
                </ScrollView>
                
                {/* Barre d'outils en BAS */}
                {RichToolbar && (
                  <RichToolbar
                    editor={richText}
                    selectedIconTint="#0A1E42"
                    iconTint="#64748B"
                    iconSize={16}
                    actions={[
                      actions.setBold,
                      actions.setItalic,
                      actions.setUnderline,
                      actions.setStrikethrough,
                      actions.heading2,
                      actions.heading3,
                      actions.insertBulletsList,
                      actions.insertOrderedList,
                      actions.foreColor,
                      actions.hiliteColor,
                      actions.undo,
                      actions.redo,
                    ]}
                    style={styles.richToolbar}
                  />
                )}
              </>
            ) : (
              // Fallback si l'éditeur n'est pas disponible
              <ScrollView style={styles.richEditorContainer} showsVerticalScrollIndicator={false}>
                <TextInput
                  style={styles.contentInput}
                  placeholder="Commencez à écrire..."
                  placeholderTextColor="#94A3B8"
                  value={content}
                  onChangeText={setContent}
                  multiline
                  textAlignVertical="top"
                />
              </ScrollView>
            )}
            
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
              >
                <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
                <Text style={styles.saveButtonText}>
                  {currentNote ? "Modifier" : "Enregistrer"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
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
                        getPlainTextPreview={getPlainTextPreview}
                      />
                    ))}
                  </View>
                )}

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
                        getPlainTextPreview={getPlainTextPreview}
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

// Composant de carte de note
const NoteCard: React.FC<{
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onShare: (note: Note) => void;
  onCopy: (text: string) => void;
  onTogglePin: (id: string) => void;
  formatDate: (date: string) => string;
  getPlainTextPreview: (html: string) => string;
}> = ({ note, onEdit, onDelete, onShare, onCopy, onTogglePin, formatDate, getPlainTextPreview }) => {
  return (
    <View style={[styles.noteCard, note.pinned && styles.pinnedNoteCard]}>
      <View style={styles.noteContent}>
        <View style={styles.noteHeader}>
          <Text style={styles.noteTitle} numberOfLines={2}>
            {note.title}
          </Text>
        </View>
        <Text style={styles.notePreview} numberOfLines={3}>
          {getPlainTextPreview(note.content)}
        </Text>
        <View style={styles.noteFooter}>
          <Text style={styles.noteDate}>
            {formatDate(note.updatedAt)}
          </Text>
        </View>
      </View>
      
      <View style={styles.iconsColumn}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => onTogglePin(note.id)}
        >
          <Ionicons 
            name={note.pinned ? "pin" : "pin-outline"} 
            size={20} 
            color={note.pinned ? "#fff" : "#64748B"} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => onEdit(note)}
        >
          <Ionicons name="open-outline" size={20} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => onCopy(note.content)}
        >
          <Ionicons name="copy-outline" size={20} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => onShare(note)}
        >
          <Ionicons name="share-social-outline" size={20} color="#fff" />
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

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  header: {
    backgroundColor: "#0A1E42",
    paddingTop: verticalScale(Platform.OS === 'ios' ? 60 : 40),
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
  newNoteButton: {
    padding: scale(8),
  },
  editorWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  editorHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(12),
    backgroundColor: "#FFFFFF",
    borderBottomWidth: scale(1),
    borderBottomColor: "#F1F5F9",
  },
  editorTitle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: "#0A1E42",
  },
  charCountBadge: {
    backgroundColor: "#F1F5F9",
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(6),
    borderRadius: scale(12),
  },
  charCountText: {
    fontSize: moderateScale(12),
    fontWeight: "500",
    color: "#64748B",
  },
  inputContainer: {
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(12),
  },
  titleInput: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: "#0A1E42",
    marginBottom: verticalScale(12),
  },
  separator: {
    height: scale(1),
    backgroundColor: "#E2E8F0",
  },
  richToolbar: {
    backgroundColor: "#F8FAFC",
    paddingHorizontal: scale(4),
    paddingVertical: verticalScale(6),
    borderTopWidth: scale(1),
    borderTopColor: "#E2E8F0",
    minHeight: verticalScale(90),
  },
  richEditorContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  richEditor: {
    flex: 1,
    minHeight: verticalScale(300),
    backgroundColor: "#FFFFFF",
  },
  contentInput: {
    fontSize: moderateScale(16),
    color: "#334155",
    lineHeight: moderateScale(24),
    minHeight: verticalScale(300),
    padding: scale(24),
    textAlignVertical: "top",
  },
  editorFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(16),
    backgroundColor: "#FFFFFF",
    borderTopWidth: scale(1),
    borderTopColor: "#F1F5F9",
    gap: scale(12),
  },
  footerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(14),
    borderRadius: scale(12),
    gap: scale(8),
    flex: 1,
  },
  cancelButton: {
    backgroundColor: "#F8FAFC",
    borderWidth: scale(1),
    borderColor: "#E2E8F0",
  },
  saveButton: {
    backgroundColor: "#0A1E42",
  },
  cancelButtonText: {
    color: "#64748B",
    fontWeight: "600",
    fontSize: moderateScale(16),
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: moderateScale(16),
  },
  notesContainer: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(40),
  },
  emptyTitle: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: "#0A1E42",
    marginTop: verticalScale(20),
    marginBottom: verticalScale(8),
  },
  emptyText: {
    fontSize: moderateScale(16),
    color: "#64748B",
    textAlign: "center",
    lineHeight: moderateScale(24),
    marginBottom: verticalScale(30),
  },
  emptyButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0A1E42",
    paddingHorizontal: scale(24),
    paddingVertical: verticalScale(14),
    borderRadius: scale(12),
    gap: scale(8),
  },
  emptyButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: moderateScale(16),
  },
  notesList: {
    flex: 1,
    padding: scale(16),
  },
  section: {
    marginBottom: verticalScale(24),
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(8),
    marginBottom: verticalScale(12),
    paddingHorizontal: scale(8),
  },
  sectionTitle: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  noteCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: scale(12),
    padding: scale(16),
    marginBottom: verticalScale(12),
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.05,
    shadowRadius: scale(8),
    elevation: 2,
    borderWidth: scale(1),
    borderColor: "#E2E8F0",
  },
  pinnedNoteCard: {
    borderColor: "#0A1E42",
    borderWidth: scale(1.5),
    backgroundColor: "#F8FAFC",
  },
  noteContent: {
    flex: 1,
    marginRight: scale(16),
  },
  noteHeader: {
    marginBottom: verticalScale(8),
  },
  noteTitle: {
    fontSize: moderateScale(18),
    fontWeight: "700",
    color: "#0A1E42",
  },
  notePreview: {
    fontSize: moderateScale(14),
    color: "#64748B",
    lineHeight: moderateScale(20),
    marginBottom: verticalScale(12),
  },
  noteFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  noteDate: {
    fontSize: moderateScale(12),
    color: "#94A3B8",
  },
  iconsColumn: {
    alignItems: "center",
    gap: scale(8),
  },
  iconButton: {
    padding: scale(8),
    borderRadius: scale(8),
    backgroundColor: "#0b2a48",
    minWidth: scale(20),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Notes;