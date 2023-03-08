import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { http } from './shared/Http'
import  router  from './router'

const app=createApp(App);
//设置全局变量
app.config.globalProperties.$http=http;
app.use(router);
app.mount('#app')
