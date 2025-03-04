// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4RujMekCUEMrt64MhkX2UcoBI3ZxJ8e0",
  authDomain: "equisports-35521.firebaseapp.com",
  projectId: "equisports-35521",
  storageBucket: "equisports-35521.firebasestorage.app",
  messagingSenderId: "336983596343",
  appId: "1:336983596343:web:5ac7e0f15d62e02cb9ceb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);