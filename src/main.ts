import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/style/index.scss'
import '@/style/iconfont/iconfont.css'
import { RegisterComponent } from './ElePlugin'
localStorage.setItem('user_id', '069e92fa-5739-49f7-b98b-c31a61370f69')
localStorage.setItem('token', '38cacfaa-2458-428b-be9c-a5a22114eaed')
const app = createApp(App)
RegisterComponent(app)
app.use(store).use(router).mount('#app')
