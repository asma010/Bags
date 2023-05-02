import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABzWPxWx231IB3moi3KZvc3bD1Mt9vyb4",
  authDomain: "taskmanager-db.firebaseapp.com",
  projectId: "taskmanager-db",
  storageBucket: "taskmanager-db.appspot.com",
  messagingSenderId: "493707515262",
  appId: "1:493707515262:web:81b778bf7fc6b6233d0f2f",
  measurementId: "G-88CPR4DJRG",
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(app);

export default app;