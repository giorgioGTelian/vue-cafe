import './assets/main.css'

import { createApp } from 'vue'
import { VueFire } from 'vuefire'
import { FirebaseApp } from 'firebase/app'
import App from './App.vue'

createApp(App).mount('#app')

const app = createApp(App)

app.use(VueFire, {
    FirebaseApp,
    unbindFirebaseRef
    })
