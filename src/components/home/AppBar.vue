<template>
  <v-app-bar app clipped-left color="primary">
    <v-row justify="space-between" align="center" no-gutters>
      <v-col cols="9" md="3">
        <v-app-bar-nav-icon
          v-if="getToken"
          color="blackWhite"
          @click="toggleNavDrawer"
        />
        <v-toolbar-title class="my-title pl-0">
          <v-btn text class="btn-text" color="black" @click="goHome">
            <span class="mr-1 mt-1">Andrew</span>
            <img
              :src="require('../../../public/favicon-32x32.png')"
              alt="Logo"
              height="32"
              width="32"
            />
            <span class="ml-1 mt-1">Kincaid</span>
          </v-btn>
        </v-toolbar-title>
      </v-col>
      <v-col cols="3" class="text-right">
        <div v-if="username === null">
          <router-link
            class="white--text text-decoration-none"
            :to="{ name: 'GolfPicksHome' }"
          >
            Golf
          </router-link>
          <v-btn
            v-if="$route.name !== 'Home'"
            icon
            text
            @click="goToUserLoginHomepage"
          >
            <UserIcon color="blackWhite"></UserIcon>
          </v-btn>
        </div>

        <v-menu
          v-else
          v-model="menu"
          :close-on-click="true"
          :close-on-content-click="true"
          open-on-hover
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <UserIcon color="blackWhite"></UserIcon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="goToUserLoginHomepage">
              User Homepage
            </v-list-item>
            <v-list-item @click="logout">Logout</v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import UserIcon from "./UserIcon";
import { mapGetters, mapState } from "vuex";

export default {
  name: "AppBar",
  components: {
    UserIcon,
  },
  data: () => ({
    menu: false,
    sourceURL: `${process.env.BASE_URL}favicon-32x32.png`,
  }),
  computed: {
    ...mapState({
      username: (state) => state.username,
      navBarVisible: (state) => state.navBarVisible,
    }),
    ...mapGetters(["getToken"]),
  },
  methods: {
    toggleNavDrawer() {
      this.$store.commit("toggleNavBar", !this.navBarVisible);
    },
    goToUserLoginHomepage() {
      if (this.username == null) {
        this.$router.push({ name: "Login" });
      } else {
        this.$router.push({ name: "UserHome" });
      }
    },
    goHome() {
      this.$router.push({ name: "Home" });
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap");

.my-title {
  font-family: "Homemade Apple", cursive;
}
.btn-text {
  text-transform: none;
}
</style>
