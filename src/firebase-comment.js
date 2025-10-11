// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjYBrypVi_EIjreVqJLvectfhr3qh8bL4",
  authDomain: "tahratanjum-portfolio.firebaseapp.com",
  projectId: "tahratanjum-portfolio",
  storageBucket: "tahratanjum-portfolio.firebasestorage.app",
  messagingSenderId: "97094510005",
  appId: "1:97094510005:web:e3861249c5191b4471e5fc",
  measurementId: "G-D0YYTC8564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
