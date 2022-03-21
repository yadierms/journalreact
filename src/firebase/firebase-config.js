import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7PFU7ofcmnndNQY7SZNF9RZeiBnSQfiA",
  authDomain: "sql-demos-3ac8a.firebaseapp.com",
  projectId: "sql-demos-3ac8a",
  storageBucket: "sql-demos-3ac8a.appspot.com",
  messagingSenderId: "230370200177",
  appId: "1:230370200177:web:3f58dc5778b827d86ce9d0",
  measurementId: "G-3G5VE2S82Q",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
