import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbEFtlSFiHdXKw5GSvntFAJH6xddz4uWI",
  authDomain: "chat-app-dfc55.firebaseapp.com",
  projectId: "chat-app-dfc55",
  storageBucket: "chat-app-dfc55.appspot.com",
  messagingSenderId: "505621709996",
  appId: "1:505621709996:web:aa0273282430c5c35d0b09",
  measurementId: "G-G579Z1WXHX",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbMessages = db.collection("messages");

