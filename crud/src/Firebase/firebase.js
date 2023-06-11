import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "crudp4.firebaseapp.com",
  projectId: "crudp4",
  storageBucket: "crudp4.appspot.com",
  messagingSenderId: "578007243498",
  appId: "1:578007243498:web:15841a23340df032085593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
