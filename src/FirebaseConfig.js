import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
 
 
const firebaseConfig = {
  apiKey: "AIzaSyB9m9YJWMuYDUHHXsBb95dbY1gTJ6-0BrI",
  authDomain: "fir-frontend-7f7c2.firebaseapp.com",
  projectId: "fir-frontend-7f7c2",
  storageBucket: "fir-frontend-7f7c2.appspot.com",
  messagingSenderId: "268205386190",
  appId: "1:268205386190:web:db0a4ac87cf237376ee39f",
  measurementId: "G-C4GMTPFZN0"
};

 
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);