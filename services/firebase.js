import firebase from "firebase/app";
import "firebase/firestore";

const { FIREBASE_API_KEY } = process.env;

var firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "taller-basico-de-react-hooks.firebaseapp.com",
  projectId: "taller-basico-de-react-hooks",
  storageBucket: "taller-basico-de-react-hooks.appspot.com",
  messagingSenderId: "193711508827",
  appId: "1:193711508827:web:2e80b3baac2d5f2ee81e7e",
  measurementId: "G-QSVTYY0PDG",
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
