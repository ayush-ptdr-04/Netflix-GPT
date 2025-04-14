// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAKfId_CGJr8HYhLynUSHrYYgUgUAfMvY",
  authDomain: "netflixgpt-9cb56.firebaseapp.com",
  projectId: "netflixgpt-9cb56",
  storageBucket: "netflixgpt-9cb56.firebasestorage.app",
  messagingSenderId: "736690668245",
  appId: "1:736690668245:web:75eba217ae69f6628b185c",
  measurementId: "G-20TPRS1JQQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// iska mtlb hai Firebase Authentication ko ek variable me store karke export karna taaki use kahin bhi kar sakein. ✅
// User sign up karega email se ✅
// Firebase uska account create karega 🔐
// Tumhara app bas Firebase se data lega aur use login karwa dega ✅
