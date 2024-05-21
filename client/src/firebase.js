// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d56d9.firebaseapp.com",
  projectId: "mern-estate-d56d9",
  storageBucket: "mern-estate-d56d9.appspot.com",
  messagingSenderId: "347966437141",
  appId: "1:347966437141:web:672ffd3c7e9bb321189b1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);