import {createApp} from 'vue'
import {createPinia} from 'pinia'
import './assets/style/app.css'
import App from './App.vue'
import router from './router'
import store from './stores/index'
//  import axios from 'axios'
// define baseURL
//axios.defaults.baseURL = 'http://localhost:3000/'
const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)

app.mount('#app')
