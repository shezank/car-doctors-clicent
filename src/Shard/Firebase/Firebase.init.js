// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfswwpRzmIKGi00bto-pwlUmURTGpfJuc",
  authDomain: "car-doctors-47871.firebaseapp.com",
  projectId: "car-doctors-47871",
  storageBucket: "car-doctors-47871.appspot.com",
  messagingSenderId: "1063601905944",
  appId: "1:1063601905944:web:538798697ecf4b74ec7e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
