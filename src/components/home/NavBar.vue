<template>
    <v-navigation-drawer
        app
        clipped
        v-model="navBarVisible"
    >
        <v-list
            dense
            nav
            class="py-0"
        >
            <v-list-item
                two-line
                v-if="username !== null"
                @click="goToUserHomepage"
            >
                <v-list-item-avatar>
                    <UserIcon></UserIcon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ fullName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ username }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item
                v-if="username !== null"
            >
                <v-list-item-content>
                    <v-list-item-title
                        @click="goToSuperContest"
                    >The Real Super-Contest</v-list-item-title>
                </v-list-item-content>
            </v-list-item>


            <!--      <v-list-item-->
            <!--          v-for="item in items"-->
            <!--          :key="item.title"-->
            <!--          link-->
            <!--      >-->
            <!--        <v-list-item-icon>-->
            <!--          <v-icon>{{ item.icon }}</v-icon>-->
            <!--        </v-list-item-icon>-->

            <!--        <v-list-item-content>-->
            <!--          <v-list-item-title>{{ item.title }}</v-list-item-title>-->
            <!--        </v-list-item-content>-->
            <!--      </v-list-item>-->
        </v-list>

    </v-navigation-drawer>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    import UserIcon from "./UserIcon";

    export default {
        name: "NavBar",
        components: {
            UserIcon,
        },
        computed: {
            ...mapState({
                // navBarVisible: state => state.navBarVisible,
                username: state => state.username,
                userFirstName: state => state.userFirstName,
                userLastName: state => state.userLastName,
            }),
            ...mapGetters({
                getNavBar: 'getNavBar',
            }),
            fullName () {
                return this.userFirstName + ' ' + this.userLastName
            },
            navBarVisible: {
                get() { return this.getNavBar },
                set(value) { this.$store.commit('toggleNavBar', value) }
            },
        },
        methods: {
            goToUserHomepage () {
                this.$router.push({name: 'UserHome'});
                this.toggleNavBar()
            },
            goToSuperContest () {
                this.$router.push({name: 'ResultsTable'});
                this.toggleNavBar()
            },
            toggleNavBar () {
                this.$store.commit('toggleNavBar', !this.navBarVisible)
            }
        },
    }
</script>

<style scoped>

</style>