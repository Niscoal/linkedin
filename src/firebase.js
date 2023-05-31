import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAE9iqBipV3jj-VmpLTTKsq7VjE3icHFzQ",
    authDomain: "linkedin-clone-dd0ab.firebaseapp.com",
    projectId: "linkedin-clone-dd0ab",
    storageBucket: "linkedin-clone-dd0ab.appspot.com",
    messagingSenderId: "225761845242",
    appId: "1:225761845242:web:6c9e5866ee5d502e5d8e43",
    // storageBucket: "gs://linkedin-clone-dd0ab.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

// export default { db, auth, app };
