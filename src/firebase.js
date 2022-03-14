import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBDQ8s-rQsqbCcXlU9ZPLzZiMXPyIYWGM",
  authDomain: "snapchat-clone-with-reactjs.firebaseapp.com",
  projectId: "snapchat-clone-with-reactjs",
  storageBucket: "snapchat-clone-with-reactjs.appspot.com",
  messagingSenderId: "891696109662",
  appId: "1:891696109662:web:949b598d79d1497bc57ccf",
  measurementId: "G-VFX14PQ0N1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

