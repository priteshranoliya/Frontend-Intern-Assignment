import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAweN99f3EItUt6p6W81toEW-cp7JdIqgs",
  authDomain: "nextjs-signup.firebaseapp.com",
  projectId: "nextjs-signup",
  storageBucket: "nextjs-signup.firebasestorage.app",
  messagingSenderId: "1010502749675",
  appId: "1:1010502749675:web:49dbfa2e1a0ecc782bddae",
  measurementId: "G-1CF55DV8GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };