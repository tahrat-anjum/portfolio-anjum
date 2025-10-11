import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjYBrypVi_EIjreVqJLvectfhr3qh8bL4",
  authDomain: "tahratanjum-portfolio.firebaseapp.com",
  projectId: "tahratanjum-portfolio",
  storageBucket: "tahratanjum-portfolio.firebasestorage.app",
  messagingSenderId: "97094510005",
  appId: "1:97094510005:web:e3861249c5191b4471e5fc",
  measurementId: "G-D0YYTC8564"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
