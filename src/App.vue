<template>
  <v-app>
    <Snackbar></Snackbar>
    <NavBar></NavBar>
    <AppBar></AppBar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import HelloWorld from './components/HelloWorld';
import AppBar from "./components/home/AppBar";
import NavBar from "./components/home/NavBar";
import Snackbar from "./components/home/Snackbar";

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppBar,
    NavBar,
    Snackbar,
  },
  computed: {
    ...mapGetters({
      getToken: 'getToken',
    }),
  },
  created() {
    this.$store.watch(
        () => {return this.getToken},
        () => {
          console.log('token', this.getToken);
          if (this.getToken) {
            axios.defaults.headers['Authorization'] = `JWT ${this.getToken}`;
          }
          else if (axios.defaults.headers['Authorization']) {
            delete axios.defaults.headers['Authorization'];
          }
    }
    )
  },
  beforeMount() {
    this.refreshAxiosHeaders();
  },
  methods: {
    refreshAxiosHeaders() {
      if (this.getToken) {
        axios.defaults.headers['Authorization'] = `JWT ${this.getToken}`;
      }
      else if (axios.defaults.headers['Authorization']) {
        delete axios.defaults.headers['Authorization'];
      }
      axios.defaults.baseURL = process.env.NODE_ENV !== 'production' ?
          'http://localhost:8000/' :
          'https://andrew-kincaid-backend.herokuapp.com/';
    },
  },
};
</script>
