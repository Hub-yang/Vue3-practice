import { createApp } from 'vue'
import router from '~/router/index'
import App from './App.vue'

import './style/main.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'

const app = createApp(App)

app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
