// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGChhBzOzPg6JJnRpgALkOaiMWPOd07dc",
  authDomain: "motor-bike-warehouse.firebaseapp.com",
  projectId: "motor-bike-warehouse",
  storageBucket: "motor-bike-warehouse.appspot.com",
  messagingSenderId: "406857693082",
  appId: "1:406857693082:web:a31bad3f7c252131ad2c23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;