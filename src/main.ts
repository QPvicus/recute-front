import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import { RegisterComponent } from './ElePlugin'

const app = createApp(App)
RegisterComponent(app)
app.use(store).use(router).mount('#app')
