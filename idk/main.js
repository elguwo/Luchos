// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYl2T8RCHB7iRqmvPOoU6im0rA-Twbiu4",
  authDomain: "concept-a4f32.firebaseapp.com",
  projectId: "concept-a4f32",
  storageBucket: "concept-a4f32.firebasestorage.app",
  messagingSenderId: "275417951078",
  appId: "1:275417951078:web:6c3f788970e7fe437636a7",
  measurementId: "G-384CB49NB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);