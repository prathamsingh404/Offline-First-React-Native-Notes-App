import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NotesListScreen from './screens/NotesListScreen';
import NoteEditorScreen from './screens/NoteEditorScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="NotesList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#111827',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerShadowVisible: false, // Cleaner look
          contentStyle: { backgroundColor: '#F9FAFB' }
        }}
      >
        <Stack.Screen
          name="NotesList"
          component={NotesListScreen}
          options={{ title: 'My Notes' }}
        />
        <Stack.Screen
          name="NoteEditor"
          component={NoteEditorScreen}
          // title is set dynamically in the component
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
