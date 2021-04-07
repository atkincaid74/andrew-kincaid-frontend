<template>
  <v-app>
    <Snackbar></Snackbar>
    <NavBar></NavBar>
    <AppBar></AppBar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
import axios from 'axios';
import AppBar from "./components/home/AppBar";
import NavBar from "./components/home/NavBar";
import Snackbar from "./components/home/Snackbar";

export default {
  name: 'App',
  components: {
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
          if (this.getToken) {
            axios.defaults.headers['Authorization'] = this.getToken;
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
        axios.defaults.headers['Authorization'] = this.getToken;
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
