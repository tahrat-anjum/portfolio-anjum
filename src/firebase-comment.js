// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjYBrypVi_EIjreVqJLvectfhr3qh8bL4",
  authDomain: "tahratanjum-portfolio.firebaseapp.com",
  projectId: "tahratanjum-portfolio",
  storageBucket: "tahratanjum-portfolio.appspot.com", // ✅ fixed
  messagingSenderId: "97094510005",
  appId: "1:97094510005:web:e3861249c5191b4471e5fc",
  measurementId: "G-D0YYTC8564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore & Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
