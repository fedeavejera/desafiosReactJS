// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0tjfEfTKPHH3Q0vLePN7jXFXo9OOzVjY",
  authDomain: "ferreteriatamareact.firebaseapp.com",
  projectId: "ferreteriatamareact",
  storageBucket: "ferreteriatamareact.appspot.com",
  messagingSenderId: "630819465706",
  appId: "1:630819465706:web:c4032a7ee77666d15e6a93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;