# Frontend Developer Intern Assignment

This repository contains two main projects as per the assignment:

- **NextJSApp**: A Next.js web application using Material UI and Google Sign-In
- **ExpoApp**: An Expo Android app embedding the NextJSApp inside a WebView and implementing native Firebase Cloud Messaging (FCM) for push notifications

---

## 📁 Repository Structure

FrontendAssignment/
├── ExpoApp/
├── NextJSApp/
└── README.md

yaml
Copy
Edit

---

## 🚀 How to Clone and Run

### 1. Clone the Repository

git clone https://github.com/your-username/Frontend-Intern-Assignment.git
cd Frontend-Intern-Assignment
2. Running NextJSApp (Web)
Navigate to the NextJS app folder and install dependencies:

bash
Copy
Edit
cd NextJSApp
npm install
npm run dev
This starts the Next.js server at: http://localhost:3000

Open this URL in your browser to test the Google Sign-In and web UI

3. Running ExpoApp (Android)
Open a new terminal and run:

bash
Copy
Edit
cd ../ExpoApp
npm install
npx expo prebuild
npx expo run:android
Important Notes:

Ensure you have an Android device or emulator connected and USB debugging enabled.

The Expo app includes a WebView pointing to http://localhost:3000. If your device cannot access your localhost, replace it with your machine’s IP address in the WebView source (App.js or wherever you set the URL).

This app uses native Firebase Cloud Messaging (FCM) for push notifications, not Expo’s notification service.

🔔 Testing Firebase Cloud Messaging (FCM) Push Notifications
Run the ExpoApp on a physical Android device (emulator may not support push notifications fully).

On app launch, it retrieves the device’s FCM token and logs it. You can also add a UI element or console.log to display the token.

Copy the FCM device token.

Go to your Firebase Console > Cloud Messaging.

Click Send your first message or New Notification.

Paste the device token in the Target section under Single device.

Compose your test message and send.

The notification should appear on your device.

🔧 Setup Required for Firebase
Ensure your Firebase project is correctly configured.

Add your Android app’s package name in Firebase and download google-services.json into ExpoApp/android/app/.

Add your web app’s Firebase config in the NextJSApp.

This repo excludes node_modules and build folders, so run npm install before running each app.

⚠️ Troubleshooting Tips
App install failed: Enable USB debugging and accept any pop-ups on your device.

WebView not loading NextJS app: Replace localhost with your computer’s local IP address in the Expo app code.

Push notifications not received: Make sure your Firebase config and permissions are correct, and test on a physical device.

ExpoApp build issues: Run npx expo prebuild before running on Android to generate native files.

📧 Submission Instructions
The entire assignment is uploaded in this public GitHub repo.

Clone and run instructions are above.

Testers can send push notifications using Firebase Console to the app.

Send the GitHub repo link via email to: teamnecxis@gmail.com

Email subject: Frontend Developer Intern

📚 Tech Stack Used
Next.js with Material UI (MUI)

Firebase Authentication with Google Sign-In

Expo Android app with WebView integration

Native Firebase Cloud Messaging (FCM) implementation

React Native Firebase libraries

