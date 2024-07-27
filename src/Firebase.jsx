// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZkoWx83Bhm41-nDOQS9UGGFSXqouX3gI",
  authDomain: "myportfolio-6b792.firebaseapp.com",
  projectId: "myportfolio-6b792",
  storageBucket: "myportfolio-6b792.appspot.com",
  messagingSenderId: "976176248131",
  appId: "1:976176248131:web:f286d14bc69b2981f36bf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
