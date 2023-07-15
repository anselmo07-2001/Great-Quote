// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDO02pNZJWnsAolIYinMMqOUBdPkLfXSTg",
  authDomain: "great-quote-39c47.firebaseapp.com",
  projectId: "great-quote-39c47",
  storageBucket: "great-quote-39c47.appspot.com",
  messagingSenderId: "885654705054",
  appId: "1:885654705054:web:bb051a1253e7917f963c8f",
  measurementId: "G-24NCB0WVQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)