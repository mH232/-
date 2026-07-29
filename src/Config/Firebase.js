// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBpiUA4DMwdaqv1Dc7HaharFm6lIIb9WqA",
  authDomain: "adel-69f99.firebaseapp.com",
  projectId: "adel-69f99",
  storageBucket: "adel-69f99.firebasestorage.app",
  messagingSenderId: "512965200737",
  appId: "1:512965200737:web:3d1c6af385d460351a1320",
  measurementId: "G-GCHR6W0RXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
