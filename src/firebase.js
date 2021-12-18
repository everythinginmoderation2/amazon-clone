import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQUgDJpC_e8AzAX8ptBFR8deNquqsiiLs",
  authDomain: "clone-15400.firebaseapp.com",
  projectId: "clone-15400",
  storageBucket: "clone-15400.appspot.com",
  messagingSenderId: "627577249658",
  appId: "1:627577249658:web:a7c7899aa1ce916ac780c3",
  measurementId: "G-53XLLVVN3V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };