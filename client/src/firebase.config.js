// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3y8XKlbLdPjkeCtwCvZBUCRH6uWTIzLA",
  authDomain: "bazarapp-fec3a.firebaseapp.com",
  projectId: "bazarapp-fec3a",
  storageBucket: "bazarapp-fec3a.appspot.com",
  messagingSenderId: "375551158478",
  appId: "1:375551158478:web:840bcbc1cf0c76990f489f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);