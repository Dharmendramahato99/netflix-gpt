
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkAStxlf74N-sIFduUGjpk0R0yMv7Esks",
  authDomain: "netflixgpt-e40c1.firebaseapp.com",
  projectId: "netflixgpt-e40c1",
  storageBucket: "netflixgpt-e40c1.appspot.com",
  messagingSenderId: "722672640053",
  appId: "1:722672640053:web:e31bbb2269ecc68a63117c",
  measurementId: "G-5EEH0MSF02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();