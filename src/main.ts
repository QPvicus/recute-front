import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/style/index.scss'
import '@/style/iconfont/iconfont.css'
import { RegisterComponent } from './ElePlugin'
localStorage.setItem('user_id', 'd0a88bd5-d513-45da-8f6d-3a860c0bf5a3')
localStorage.setItem('token', '1e250240-eb96-469d-a601-37e2dbceb5c6')
const app = createApp(App)
RegisterComponent(app)
app.use(store).use(router).mount('#app')
