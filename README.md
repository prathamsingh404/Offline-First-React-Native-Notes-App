# Offline-First React Native Notes App

This is a complete, working React Native app designed specifically for Android. It operates entirely offline, persisting your data locally on the device so that notes remain even after the app is closed and reopened.

## 📱 Download & Install (APK)

**[📥 Download the APK here (OfflineNotes.apk)](https://github.com/prathamsingh404/Offline-First-React-Native-Notes-App/releases/download/latest/OfflineNotes.apk)**

### How to Install:
1. Click the link above on your Android device to download the `OfflineNotes.apk` file.
2. Once downloaded, tap on the file to open it.
3. If your phone asks for permission to install apps from unknown sources, tap "Settings" and toggle "Allow from this source".
4. Tap "Install".
5. Once installed, tap "Open" to launch the app. The whole process takes under 5 minutes!

## ✨ Features

*   **Offline-First:** No internet required. Notes are saved to device storage directly.
*   **Persistent Storage:** Close the app, clear it from memory—your notes are safely retained.
*   **Considered UI:** Clean design with consistent spacing, readable typography, and a logical visual hierarchy, ready for client feedback.

## 🗂 Screens

1.  **Notes List:** Displays all saved notes, each showing the title and a short preview of the body.
2.  **Create / Edit Note:** A focused form with a title field, a body field, and a Save button.
3.  **Delete Note:** Easily accessible note deletion (with a dedicated delete button/swipe action depending on the UI implementation).

## 🛠 Tech Stack & Scope

*   **Framework:** React Native (via Expo)
*   **Target:** Android Mobile App
*   **Local Data:** `@react-native-async-storage/async-storage`
*   **Out of Scope:** As requested, this app does **not** include a backend, API, authentication, cloud sync, or complex animations.

---
*Submission for Part A.*