// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaqcs5O66bdd3qXhvUh_EWu83eEDtDC3g",
  authDomain: "bet360-fde7c.firebaseapp.com",
  projectId: "bet360-fde7c",
  storageBucket: "bet360-fde7c.firebasestorage.app",
  messagingSenderId: "279343036718",
  appId: "1:279343036718:web:ee407e6fd444cc701122bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const createUser = createUserWithEmailAndPassword;

export const logOut = signOut;

export const authChange = onAuthStateChanged;
export const signInUser = signInWithEmailAndPassword;
export const db = getDatabase(app);
