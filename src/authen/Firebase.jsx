// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
import {getStorage, ref} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQRYgSIBnnYnXRH9T-zeMfLjo7nNbPTCQ",
  authDomain: "havenhomes-a7ea5.firebaseapp.com",
  projectId: "havenhomes-a7ea5",
  storageBucket: "havenhomes-a7ea5.appspot.com",
  messagingSenderId: "418620835176",
  appId: "1:418620835176:web:71d14a2a4441e60a2fc2dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db= getFirestore(app);
export const storage= getStorage(app)
export default app