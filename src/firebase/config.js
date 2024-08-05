import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPEpw1DZWgrlRr48dNTOl5uioejo2ZnY0",
  authDomain: "proyecto-ecommerce-2b0b3.firebaseapp.com",
  projectId: "proyecto-ecommerce-2b0b3",
  storageBucket: "proyecto-ecommerce-2b0b3.appspot.com",
  messagingSenderId: "101979622812",
  appId: "1:101979622812:web:32c27289d36dbd1e7a0c59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
