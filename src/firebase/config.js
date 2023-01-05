// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqeZLIOCVgKLSru6Q6R_SXSMzcJ0XutTI",
  authDomain: "miniblog-60a10.firebaseapp.com",
  projectId: "miniblog-60a10",
  storageBucket: "miniblog-60a10.appspot.com",
  messagingSenderId: "806536772217",
  appId: "1:806536772217:web:95268754c65dcd822332a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };