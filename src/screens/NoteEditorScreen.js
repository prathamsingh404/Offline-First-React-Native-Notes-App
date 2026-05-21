import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNotes } from '../hooks/useNotes';
import { Save } from 'lucide-react-native';

const NoteEditorScreen = ({ route, navigation }) => {
  const { saveNote } = useNotes();
  const editingNote = route.params?.note;

  const [title, setTitle] = useState(editingNote?.title || '');
  const [body, setBody] = useState(editingNote?.body || '');

  useEffect(() => {
    navigation.setOptions({
      title: editingNote ? 'Edit Note' : 'New Note',
      headerRight: () => (
        <TouchableOpacity onPress={handleSave} style={styles.headerSaveButton}>
          <Save size={20} color="#3B82F6" />
          <Text style={styles.headerSaveText}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, title, body]);

  const handleSave = async () => {
    if (!title.trim() && !body.trim()) {
      navigation.goBack();
      return;
    }

    const note = {
      id: editingNote?.id || Date.now().toString(),
      title: title.trim(),
      body: body.trim(),
      createdAt: editingNote?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await saveNote(note);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <TextInput
            style={styles.titleInput}
            placeholder="Note Title"
            placeholderTextColor="#9CA3AF"
            value={title}
            onChangeText={setTitle}
            maxLength={100}
            autoFocus={!editingNote}
          />
          <View style={styles.divider} />
          <TextInput
            style={styles.bodyInput}
            placeholder="Start typing your note here..."
            placeholderTextColor="#9CA3AF"
            value={body}
            onChangeText={setBody}
            multiline
            textAlignVertical="top"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    flexGrow: 1,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
    padding: 0,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginBottom: 16,
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    minHeight: 200,
    padding: 0,
  },
  headerSaveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    padding: 8,
  },
  headerSaveText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
  },
});

export default NoteEditorScreen;
