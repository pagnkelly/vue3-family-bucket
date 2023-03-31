import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'virtual:windi.css'
import 'element-plus/dist/index.css'
createApp(App).use(createPinia()).use(ElementPlus).mount('#app')

