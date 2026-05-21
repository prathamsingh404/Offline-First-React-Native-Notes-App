import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES_STORAGE_KEY = '@notes_data';

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadNotes = useCallback(async () => {
    try {
      setIsLoading(true);
      const jsonValue = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
      if (jsonValue != null) {
        setNotes(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Error loading notes:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  const saveNote = useCallback(async (note) => {
    try {
      // Get the latest notes from AsyncStorage directly to avoid stale closures
      const jsonValue = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
      const currentNotes = jsonValue != null ? JSON.parse(jsonValue) : [];

      const isExisting = currentNotes.some(n => n.id === note.id);
      let updatedNotes;

      if (isExisting) {
        updatedNotes = currentNotes.map(n => (n.id === note.id ? note : n));
      } else {
        // New note goes to top
        updatedNotes = [note, ...currentNotes];
      }

      await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    } catch (e) {
      console.error('Error saving note:', e);
    }
  }, []);

  const deleteNote = useCallback(async (id) => {
    try {
      // Get the latest notes from AsyncStorage
      const jsonValue = await AsyncStorage.getItem(NOTES_STORAGE_KEY);
      const currentNotes = jsonValue != null ? JSON.parse(jsonValue) : [];

      const updatedNotes = currentNotes.filter(n => n.id !== id);
      await AsyncStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    } catch (e) {
      console.error('Error deleting note:', e);
    }
  }, []);

  return {
    notes,
    isLoading,
    saveNote,
    deleteNote,
    refreshNotes: loadNotes
  };
};
