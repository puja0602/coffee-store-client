// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOQmT3nbC8rfh0ywNbL4aLqfeMSWgjUDc",
  authDomain: "coffee-store-8e11c.firebaseapp.com",
  projectId: "coffee-store-8e11c",
  storageBucket: "coffee-store-8e11c.appspot.com",
  messagingSenderId: "867850476533",
  appId: "1:867850476533:web:f18c89fefc60b2f0fedebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
