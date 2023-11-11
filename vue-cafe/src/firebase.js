// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import { firebaseApp } from './firebase.js'
import { VueFire } from "vuefire";
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


const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [  ],
})

app.mount('#app')
// Initialize Firebase

export const db = firebaseApp.firestore()
export const firebaseApp = initializeApp(firebaseConfig);

