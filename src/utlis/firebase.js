// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgT-gY7Yh76Ct4DzYfIFXyulrDAs1iHvk",
  authDomain: "netflix-gpt-2a1c0.firebaseapp.com",
  projectId: "netflix-gpt-2a1c0",
  storageBucket: "netflix-gpt-2a1c0.firebasestorage.app",
  messagingSenderId: "9221670565",
  appId: "1:9221670565:web:65e08995c8914361f02f4c",
  measurementId: "G-PXXK3L2Q9Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();