// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAE9iqBipV3jj-VmpLTTKsq7VjE3icHFzQ",
    authDomain: "linkedin-clone-dd0ab.firebaseapp.com",
    projectId: "linkedin-clone-dd0ab",
    storageBucket: "linkedin-clone-dd0ab.appspot.com",
    messagingSenderId: "225761845242",
    appId: "1:225761845242:web:6c9e5866ee5d502e5d8e43",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
