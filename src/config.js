
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDtO44v0BYXzuIAK1PYsDqDM8MM-TAYzOU",
  authDomain: "mechanik-samochodowy.firebaseapp.com",
  projectId: "mechanik-samochodowy",
  storageBucket: "mechanik-samochodowy.appspot.com",
  messagingSenderId: "798280677857",
  appId: "1:798280677857:web:21dd91823d5c95c361faa0",
  measurementId: "G-JFW1VC57T4"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
export const auth = getAuth(fireApp);
export const db = getFirestore(fireApp);

