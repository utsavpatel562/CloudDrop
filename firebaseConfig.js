// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: "car-connect-813a3.firebaseapp.com",
  projectId: "car-connect-813a3",
  storageBucket: "car-connect-813a3.appspot.com",
  messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);