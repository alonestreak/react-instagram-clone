import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDb5mf3F92exN1a017KOMSHWDyjJaOCjHo",
    authDomain: "instagram-clone-react-c99d9.firebaseapp.com",
    projectId: "instagram-clone-react-c99d9",
    storageBucket: "instagram-clone-react-c99d9.appspot.com",
    messagingSenderId: "221171855412",
    appId: "1:221171855412:web:3578c06764f2223b41da61",
    measurementId: "G-MHBRV7KP78"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };