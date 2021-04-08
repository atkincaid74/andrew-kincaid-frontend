import Vue from 'vue'
import Router from 'vue-router'
import store from "@/store";

import FourOhFour from "@/components/home/FourOhFour";
import Login from "../components/home/Login";
import UserHomepage from "../components/home/UserHomepage";
import SuperContestHome from "../components/supercontest/SuperContestHome";
import Homepage from "../components/home/Homepage";
import PickSixHome from "../components/pickem/PickSixHome";
import AdminPage from "../components/home/AdminPage";
import GolfPicksHome from "@/components/golfpicks/GolfPicksHome";
import Details from "@/components/golfpicks/Details";
import GolfAdmin from "@/components/golfpicks/GolfAdmin";

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage,
        alias: '/resume',
        meta: {
            requiresAuth: false,
            title: 'Andrew Kincaid | Home'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresAuth: false,
            title: 'Log In'
        }
    },
    {
        path: '/admin',
        name: 'AdminHome',
        component: AdminPage,
        meta: {
            requiresAuth: true,
            title: 'Admin'
        }
    },
    {
        path: '/userhome',
        name: 'UserHome',
        component: UserHomepage,
        meta: {
            requiresAuth: true,
            title: 'User Home'
        }
    },
    {
        path: '/supercontest',
        name: 'SuperContestHome',
        component: SuperContestHome,
        meta: {
            requiresAuth: true,
            title: 'Super Contest'
        }
    },
    {
        path: '/picksix',
        name: 'PickSixHome',
        component: PickSixHome,
        meta: {
            requiresAuth: true,
            title: 'Pick Six'
        }
    },
    {
        path: '/golf',
        name: 'GolfPicksHome',
        component: GolfPicksHome,
        meta: {
            requiresAuth: false,
            title: 'Golf | Leaderboard'
        }
    },
    {
        path: '/golf/admin',
        name: 'GolfAdmin',
        component: GolfAdmin,
        meta: {
            requiresAuth: true,
            title: 'Golf | Admin'
        }
    },
    {
        path: '/golf/details/:name',
        name: 'GolfDetails',
        component: Details,
        meta: {
            requiresAuth: false,
            title: 'Golf | Details'
        }
    },
    {
        path: '/four-oh-four',
        name: '404',
        component: FourOhFour,
        meta: {
            title: '404',
            requiresAuth: false,
        }
    },
    {
        path: '*',
        redirect: '/four-oh-four',
        meta: {
            requiresAuth: false,
        }
    }
];

const router = new Router({
    mode: 'history',
    routes
});
let title = 'Andrew Kincaid';

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        title = to.meta.title;
    }
    document.title = title;
    if (to === from) {
        next(false)
    } else if (to.meta.requiresAuth && !store.state.token) {
        next({ name: 'Home' })
    } else next()
});


export { router, routes }