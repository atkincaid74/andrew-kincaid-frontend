<template>
  <v-app>
    <Snackbar />
    <NavBar v-if="getToken" />
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import AppBar from "./components/home/AppBar";
import NavBar from "./components/home/NavBar";
import Snackbar from "./components/home/Snackbar";

export default {
  name: "App",
  components: {
    AppBar,
    NavBar,
    Snackbar,
  },
  computed: {
    ...mapGetters({
      getToken: "getToken",
    }),
  },
  created() {
    this.$store.watch(
      () => {
        return this.getToken;
      },
      () => {
        if (this.getToken) {
          axios.defaults.headers["Authorization"] = this.getToken;
        } else if (axios.defaults.headers["Authorization"]) {
          delete axios.defaults.headers["Authorization"];
        }
      }
    );
    axios.get("/api/blah/");
  },
  beforeMount() {
    this.refreshAxiosHeaders();
  },
  methods: {
    refreshAxiosHeaders() {
      if (this.getToken) {
        axios.defaults.headers["Authorization"] = this.getToken;
      } else if (axios.defaults.headers["Authorization"]) {
        delete axios.defaults.headers["Authorization"];
      }
      axios.defaults.baseURL =
        process.env.NODE_ENV !== "production"
          ? "http://localhost:8000/"
          : "https://andrew-kincaid-backend.herokuapp.com/";
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;1,400;1,600&display=swap");

#app {
  font-family: "Raleway", sans-serif;
}
</style>
