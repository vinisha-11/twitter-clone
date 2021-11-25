import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0Uul6B0jDdX_MuKvG1A8rZ6ZOdDnWIeA",
  authDomain: "twitter-clone-88728.firebaseapp.com",
  projectId: "twitter-clone-88728",
  storageBucket: "twitter-clone-88728.appspot.com",
  messagingSenderId: "295701555224",
  appId: "1:295701555224:web:e09efc5d4ea0133ef1bb6d",
  measurementId: "G-H0RZHCS76V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
