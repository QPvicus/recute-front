import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/style/index.scss'
import '@/style/iconfont/iconfont.css'
import { RegisterComponent } from './ElePlugin'
localStorage.setItem('user_id', '968b074e-9272-4a3e-9563-060db6ed81cd')
localStorage.setItem('token', '97c70d91-b40e-4a74-bc84-9efd0b90039e')
const app = createApp(App)
RegisterComponent(app)
app.use(store).use(router).mount('#app')
