# Frontend Developer Intern Assignment

This repository contains two main projects as per the assignment requirements:

* **NextJSApp**: A Next.js web application using Material UI (MUI) and Firebase Google Sign-In
* **ExpoApp**: An Expo Android app embedding the NextJSApp inside a WebView and implementing native Firebase Cloud Messaging (FCM) for push notifications

---

## 📁 Repository Structure

```
FrontendAssignment/
├── expo-app/
├── nextjs-app/
└── README.md
```

---

## 🚀 How to Clone and Run

### 1. Clone the Repository

```bash
git clone https://github.com/priteshranoliya/Frontend-Intern-Assignment.git
cd FrontendAssignment
```

### 2. Running NextJSApp (Web)

Navigate to the NextJS app folder and install dependencies:

```bash
cd nextjs-app
npm install
npm run dev
```

This will start the Next.js development server at: [http://localhost:3000](http://localhost:3000)

Open this URL in your browser to test the Google Sign-In and web UI.

---

### 3. Running ExpoApp (Android)

Open a new terminal and run:

```bash
cd ../expo-app
npm install
npx expo prebuild
npx expo run:android
```

> **Important Notes:**
>
> * Make sure you have an Android device or emulator connected with USB debugging enabled.
> * The Expo app’s WebView points to `http://localhost:3000` by default. If your device cannot access your computer’s localhost, replace `localhost` with your machine’s local IP address in the WebView source (e.g., `App.js`).
> * This app uses **native Firebase Cloud Messaging (FCM)** for push notifications, not Expo’s notification service.

---

## 🔔 Testing Firebase Cloud Messaging (FCM) Push Notifications

* Run the ExpoApp on a **physical Android device** (emulators may not fully support push notifications).
* On app launch, the device’s FCM token is retrieved and logged (you can also add UI or console logs to display it).
* Copy the FCM device token.
* Go to your **Firebase Console > Cloud Messaging**.
* Click **Send your first message** or **New Notification**.
* Paste the device token in the **Target** section under **Single device**.
* Compose your test message and send.
* The notification should appear on your device.

---

## 🔧 Setup Required for Firebase

* Ensure your Firebase project is properly configured.
* Add your **Android app’s package name** in Firebase and download the `google-services.json` file into `ExpoApp/android/app/`.
* Add your web app’s Firebase configuration in the `NextJSApp`.
* This repo excludes `node_modules` and build folders, so run `npm install` before running each app.

---

## ⚠️ Troubleshooting Tips

* **App install failed:** Enable USB debugging and accept any permission pop-ups on your device.
* **WebView not loading NextJS app:** Replace `localhost` with your computer’s local IP address in the Expo app code.
* **Push notifications not received:** Verify Firebase configuration, app permissions, and test on a physical device.
* **ExpoApp build issues:** Run `npx expo prebuild` before running on Android to generate native files.

---

## 📚 Tech Stack Used

* Next.js with Material UI (MUI)
* Firebase Authentication with Google Sign-In
* Expo Android app with WebView integration
* Native Firebase Cloud Messaging (FCM) implementation
* React Native Firebase libraries

---

Thank you for reviewing my assignment! Feel free to reach out if you have any questions.
