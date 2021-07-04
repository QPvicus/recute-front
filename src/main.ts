import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/style/index.scss'
import '@/style/iconfont/iconfont.css'
import { RegisterComponent } from './ElePlugin'
const app = createApp(App)
RegisterComponent(app)
app.use(store).use(router).mount('#app')
