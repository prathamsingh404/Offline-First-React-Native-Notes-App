import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { Plus } from 'lucide-react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import NoteItem from '../components/NoteItem';
import { useNotes } from '../hooks/useNotes';

const NotesListScreen = ({ navigation }) => {
  const { notes, deleteNote, refreshNotes } = useNotes();

  useFocusEffect(
    useCallback(() => {
      refreshNotes();
    }, [refreshNotes])
  );

  const handleEditNote = (note) => {
    navigation.navigate('NoteEditor', { note });
  };

  const handleCreateNote = () => {
    navigation.navigate('NoteEditor');
  };

  const renderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyTitle}>No notes yet</Text>
      <Text style={styles.emptySubtitle}>Tap the + button to create your first note</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NoteItem
              note={item}
              onPress={handleEditNote}
              onDelete={deleteNote}
            />
          )}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={renderEmptyComponent}
        />
        <TouchableOpacity style={styles.fab} onPress={handleCreateNote}>
          <Plus size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  container: {
    flex: 1,
  },
  listContainer: {
    padding: 16,
    paddingBottom: 80, // Space for FAB
    flexGrow: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default NotesListScreen;
