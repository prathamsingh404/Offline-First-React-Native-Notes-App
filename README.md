# Offline-First React Native Notes App

A clean, fully offline React Native notes app for Android. Create, edit, and delete notes without internet — all data persists locally on-device using AsyncStorage. Close the app, reopen it, and everything is still there.

## 📥 APK Download

**[Download OfflineNotes.apk](https://github.com/prathamsingh404/Offline-First-React-Native-Notes-App/releases/download/v1.0.0/OfflineNotes.apk)**

### Install Instructions

1. Tap the link above on your Android phone to download `OfflineNotes.apk`
2. Open the downloaded file
3. If prompted, allow installation from unknown sources
4. Tap **Install**
5. Tap **Open** — the app is ready to use

> No internet, Metro server, or USB connection required. Install → Open → Done.

## ✨ Features

- **Offline-First** — No network needed. Notes are stored on-device.
- **Persistent Storage** — Notes survive app restarts, phone reboots, and clearing from recents.
- **Create Notes** — Tap the + button, enter a title and body, save.
- **Edit Notes** — Tap any note to open and edit it.
- **Delete Notes** — Delete button on each note with confirmation dialog.
- **Clean UI** — Consistent spacing, readable typography, logical hierarchy. Not a raw prototype — designed for client review.

## 🗂 Screens

| Screen | Description |
|--------|-------------|
| **Notes List** | Displays all saved notes with title preview, body snippet, and date |
| **Create Note** | Title field + body field + Save button in header |
| **Edit Note** | Same form, pre-filled with existing note data |
| **Delete** | Trash icon on each note card → confirmation alert → delete |

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React Native 0.81 | Cross-platform mobile framework |
| Expo SDK 54 | Build tooling and native module management |
| React Navigation 7 | Native stack navigation |
| AsyncStorage | Local key-value persistence |
| Hermes | JavaScript engine (optimized for mobile) |
| Lucide Icons | Clean icon set |

## 🏗 Run Locally

### Prerequisites

- Node.js 18+
- Android Studio with Android SDK
- JDK 17
- An Android emulator or physical device

### Steps

```bash
# Install dependencies
npm install

# Generate the android/ directory (if not present)
npx expo prebuild -p android

# Run on connected device or emulator
npx expo run:android
```

## 📦 Build APK

### Debug APK (for testing with Metro)

```bash
cd android
./gradlew assembleDebug
```

Output: `android/app/build/outputs/apk/debug/app-debug.apk`

### Release APK (standalone, no Metro needed)

```bash
cd android
./gradlew assembleRelease
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

> The release build bundles the JavaScript and all assets directly into the APK. It runs independently on any Android phone.

## 📁 Project Structure

```
├── App.js                    # Root component
├── index.js                  # Entry point
├── app.json                  # Expo configuration
├── package.json              # Dependencies
├── src/
│   ├── AppNavigator.js       # Navigation setup
│   ├── screens/
│   │   ├── NotesListScreen.js
│   │   └── NoteEditorScreen.js
│   ├── components/
│   │   └── NoteItem.js
│   └── hooks/
│       └── useNotes.js       # AsyncStorage CRUD logic
├── android/                  # Native Android project
└── .github/workflows/
    └── build-apk.yml         # CI: auto-build APK on push
```

## 🚫 Out of Scope

This is a focused offline-first app. The following are intentionally excluded:

- No backend / API / cloud sync
- No authentication
- No complex animations or transitions

---

*Built with React Native + Expo. Submission for Part A.*