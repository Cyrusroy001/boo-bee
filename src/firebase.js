import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfFGRtY5yICMqslFC-fcvG885Y1tjK2Bs",
  authDomain: "chat-9cff5.firebaseapp.com",
  projectId: "chat-9cff5",
  storageBucket: "chat-9cff5.appspot.com",
  messagingSenderId: "201901690045",
  appId: "1:201901690045:web:f0a12aafde26b26c23bbd4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
