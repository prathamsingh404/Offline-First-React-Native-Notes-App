import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { Trash2 } from 'lucide-react-native';

const NoteItem = ({ note, onPress, onDelete }) => {
  const handleDelete = () => {
    if (Platform.OS === 'web') {
      const confirm = window.confirm('Are you sure you want to delete this note?');
      if (confirm) {
        onDelete(note.id);
      }
    } else {
      Alert.alert(
        'Delete Note',
        'Are you sure you want to delete this note?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Delete', style: 'destructive', onPress: () => onDelete(note.id) },
        ]
      );
    }
  };

  const previewText = note.body ? (note.body.length > 80 ? `${note.body.substring(0, 80)}...` : note.body) : 'No content';

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(note)}>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{note.title || 'Untitled Note'}</Text>
        <Text style={styles.preview} numberOfLines={2}>{previewText}</Text>
        <Text style={styles.date}>{new Date(note.updatedAt || note.createdAt).toLocaleDateString()}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Trash2 size={20} color="#EF4444" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  content: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  preview: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
    lineHeight: 20,
  },
  date: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  deleteButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FEF2F2',
  },
});

export default NoteItem;
