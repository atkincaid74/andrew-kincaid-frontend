import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store';
import { router } from "./router";
import axios from 'axios';
import VueSession from 'vue-session';

Vue.config.productionTip = false;
Vue.use(VueSession);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app');

axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ?
    'http://localhost:8000/' :
    'https://andrew-kincaid-backend.herokuapp.com/';
axios.defaults.headers['Authorization'] = `JWT ${store.state.token !== null ? store.state.token : ''}`;
