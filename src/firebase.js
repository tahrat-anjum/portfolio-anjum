// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- add this

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxTqQwv5DSqF2nfvQHHnKkndwSB0jSdE",
  authDomain: "portfolio-d5679.firebaseapp.com",
  projectId: "portfolio-d5679",
  storageBucket: "portfolio-d5679.firebasestorage.app",
  messagingSenderId: "226774061827",
  appId: "1:226774061827:web:c63d5ef68ce72c5c60cf36",
  measurementId: "G-GTHBRSV9R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
export const db = getFirestore(app); // <-- this line is required
