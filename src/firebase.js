// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1g9QOwycsvuIVA3sk6UuVu6T12onleEQ",
  authDomain: "desafiocoderhouse-56e03.firebaseapp.com",
  projectId: "desafiocoderhouse-56e03",
  storageBucket: "desafiocoderhouse-56e03.appspot.com",
  messagingSenderId: "980310752486",
  appId: "1:980310752486:web:1db87bd8c0cb87b1460f27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = app.firestore();