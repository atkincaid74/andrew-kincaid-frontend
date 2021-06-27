import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { router } from "./router";
import axios from "axios";
import VueSession from "vue-session";

Vue.config.productionTip = false;
Vue.use(VueSession);

Vue.mixin({
  methods: {
    camelize(str) {
      return str
        .replace(/[^a-z ]/gi, "")
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
          if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
          return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    },
  },
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

axios.defaults.baseURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8000/"
    : "https://andrew-kincaid-backend.herokuapp.com/";
// axios.defaults.headers['Authorization'] = `JWT ${store.state.token !== null ? store.state.token : ''}`;
