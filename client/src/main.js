import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/null.scss'
import './assets/tailwind.css'

window.vue = createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
