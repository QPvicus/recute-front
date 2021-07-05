import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/style/index.scss'
import '@/style/iconfont/iconfont.css'
import { RegisterComponent } from './ElePlugin'
localStorage.setItem('user_id', '069e92fa-5739-49f7-b98b-c31a61370f69')
localStorage.setItem('token', 'a221c822-580d-4bca-b952-e0f545d4bddf')
const app = createApp(App)
RegisterComponent(app)
app.use(store).use(router).mount('#app')
