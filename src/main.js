import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
router.push('/browse');

axios.defaults.baseURL = 'http://localhost:3000/';
var Vue = createApp(App)
Vue.use(store)
Vue.use(router)
Vue.config.globalProperties.$http = axios;
Vue.mount('#app')