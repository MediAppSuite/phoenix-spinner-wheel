import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, updateDoc, setDoc } from 'firebase/firestore';

import { getAuth } from "firebase/auth";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY || "",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || "",
  projectId: process.env.REACT_APP_PROJECT_ID || "",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "",
  appId: process.env.REACT_APP_APP_ID || "",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const firestoreApp = getFirestore(app);  // Initialize Firestore

export { firestoreApp }; 
export const auth = getAuth(app);
