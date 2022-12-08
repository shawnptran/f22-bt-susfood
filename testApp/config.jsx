// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8kyhrQtpZyAgI2TQxHEM-QVjvOi5PRSk",
  authDomain: "surplustester-2f5ec.firebaseapp.com",
  databaseURL: "https://surplustester-2f5ec-default-rtdb.firebaseio.com",
  projectId: "surplustester-2f5ec",
  storageBucket: "surplustester-2f5ec.appspot.com",
  messagingSenderId: "936661821551",
  appId: "1:936661821551:web:21db8f9f7a35e46b93059a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Database and Export
export const db = getDatabase(app);