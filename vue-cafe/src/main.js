import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
/* //add firebase from the firebase.js in the root app folder
import { createApp } from 'vue'
import App from './App.vue'
import firebase from './firebase'
import router from './router'
import store from './store'

let app
//add this to prevent firebase from initializing twice
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .mount('#app')
  }
}) */


