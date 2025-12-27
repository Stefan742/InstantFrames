// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD84R1u6jlNZJW7jNScZswUVlv2GtWvSrU",
    authDomain: "instantframes21.firebaseapp.com",
    projectId: "instantframes21",
    storageBucket: "instantframes21.appspot.com", // забележи исправка на storageBucket
    messagingSenderId: "207321521656",
    appId: "1:207321521656:web:eb02dedf9d7ee45cdb0a0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore & Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
