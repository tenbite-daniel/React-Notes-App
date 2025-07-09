// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "REMOVED",
    authDomain: "react-notes-feabb.firebaseapp.com",
    projectId: "react-notes-feabb",
    storageBucket: "react-notes-feabb.firebasestorage.app",
    messagingSenderId: "515708983779",
    appId: "1:515708983779:web:458ee9ce3273294baca8d6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
