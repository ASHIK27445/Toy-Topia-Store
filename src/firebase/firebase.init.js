// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-_PSfaSwR9WUeP5nB9ExD2N1eKXSk8ZE",
  authDomain: "toy-topia-52e3c.firebaseapp.com",
  projectId: "toy-topia-52e3c",
  storageBucket: "toy-topia-52e3c.firebasestorage.app",
  messagingSenderId: "744375371671",
  appId: "1:744375371671:web:b369b1a02d8d443f4de6d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);