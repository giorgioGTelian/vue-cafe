// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmQCVNeAfX62J0uyG66g9qANpp_036QWQ",
  authDomain: "vue-eats-bbe07.firebaseapp.com",
  projectId: "vue-eats-bbe07",
  storageBucket: "vue-eats-bbe07.appspot.com",
  messagingSenderId: "1069413230529",
  appId: "1:1069413230529:web:dcc270714ec1bec290b140",
  measurementId: "G-8R3YTMN877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);