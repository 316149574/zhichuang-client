import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import lazyPlugin from 'vue3-lazy';
import ElementPlus from 'element-plus';
import { ElMessage } from "element-plus";
// 打包的时候，请将 css注释掉 采用cdn方式引入css
// import 'element-plus/lib/theme-chalk/index.css';
import "./assets/fonts/iconfont.css"
import store from './store';
import storage from './utils/storage';
import api from './api'
const app =createApp(App);
app.config.globalProperties.$api = api;
app.config.globalProperties.$ElMessage =ElMessage;
app.config.globalProperties.$storage = storage;
app.use(router);
app.use(lazyPlugin,{ 
  loading: new URL('./assets/images/loading.png', import.meta.url).href,
  error: new URL('./assets/images/error.png', import.meta.url).href,

})
app.use(ElementPlus,{zIndex:'200000000'});

app.use(store);
app.mount('#app')
