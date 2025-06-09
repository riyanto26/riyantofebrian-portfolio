// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOUs6uuHgzaDx_8KvcMcH8oM8Qs4YCBq8",
  authDomain: "portofolio-chat-7c946.firebaseapp.com",
  databaseURL: "https://portofolio-chat-7c946-default-rtdb.firebaseio.com",
  projectId: "portofolio-chat-7c946",
  storageBucket: "portofolio-chat-7c946.firebasestorage.app",
  messagingSenderId: "571418927456",
  appId: "1:571418927456:web:91c24ec5f35038b728be05",
  measurementId: "G-E2WNNNQL0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, set, get } from "firebase/database";
const db = getDatabase(app);
