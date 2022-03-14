import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR7RXc6iSma3-3gGI8M4g22KWj67PXSeo",
  authDomain: "snapchat-clone-with-reac-8d779.firebaseapp.com",
  projectId: "snapchat-clone-with-reac-8d779",
  storageBucket: "snapchat-clone-with-reac-8d779.appspot.com",
  messagingSenderId: "67671771597",
  appId: "1:67671771597:web:b61e4149b65fc51fdadc84",
  measurementId: "G-FGYCY94SJ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

