// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ97px4CYOF7Wz7REPuFdk9tvfJJLvUks",
  authDomain: "inventory-management-dd021.firebaseapp.com",
  projectId: "inventory-management-dd021",
  storageBucket: "inventory-management-dd021.appspot.com",
  messagingSenderId: "480081118460",
  appId: "1:480081118460:web:57663c53505d2392b1c379",
  measurementId: "G-6GSM9DEN67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}