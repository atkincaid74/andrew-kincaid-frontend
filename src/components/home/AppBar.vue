<template>
    <v-app-bar
        app
        color="primary"
    >
        <v-app-bar-nav-icon
            color="blackWhite"
            @click="toggleNavDrawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title
            class="my-title pl-0"
        >
            <v-btn
                text
                @click="goHome"
                class="btn-text"
                color="black"
            >
              <span class="mr-1 mt-1">Andrew</span>
              <img :src="sourceURL" alt="Logo" height="32" width="32"/>
              <span class="ml-1 mt-1">Kincaid</span>
            </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn
            v-if="username === null"
            icon
            text
            @click="goToUserLoginHomepage"
        >
            <UserIcon color="blackWhite"></UserIcon>
        </v-btn>

        <v-menu
            v-if="username !== null"
            v-model="menu"
            :close-on-click="true"
            :close-on-content-click="true"
            open-on-hover
        >
            <template v-slot:activator="{ on }">
                <v-btn
                    icon
                    v-on="on"
                >
                    <UserIcon color="blackWhite"></UserIcon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    @click="goToUserLoginHomepage"
                >User Homepage</v-list-item>
                <v-list-item
                    @click="logout"
                >Logout</v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    import UserIcon from "./UserIcon";
    import { mapState } from 'vuex';

    export default {
        name: "AppBar",
        components: {
            UserIcon
        },
        data: () => ({
            menu: false,
          sourceURL: `${process.env.BASE_URL}favicon-32x32.png`
        }),
        computed: {
            ...mapState({
                username: state => state.username,
                navBarVisible: state => state.navBarVisible,
            })
        },
        methods: {
            toggleNavDrawer () {
                this.$store.commit('toggleNavBar', !this.navBarVisible);
            },
            goToUserLoginHomepage () {
                if (this.username == null) {
                    this.$router.push({name: 'Login'});
                } else {
                    this.$router.push({name: 'UserHome'})
                }
            },
            goHome () {
                this.$router.push({name: 'Home'});
            },
            logout () {
                this.$store.dispatch('logout');
                this.$router.push({name: 'Home'})
            },
        },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap');

.my-title {
  font-family: 'Homemade Apple', cursive;
}
.btn-text {
  text-transform: none;
}
</style>