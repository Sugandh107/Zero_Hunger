// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEqAkhopZU3xtCieJE138ua6xakG-D9U0",
  authDomain: "odyseey-d5510.firebaseapp.com",
  projectId: "odyseey-d5510",
  storageBucket: "odyseey-d5510.appspot.com",
  messagingSenderId: "715581868166",
  appId: "1:715581868166:web:7a231cbf7bd7d088afe907"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app); 
export const storage = getStorage(app); 