import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

import Login from "../components/home/Login";
import UserHomepage from "../components/home/UserHomepage";
import SuperContestHome from "../components/supercontest/SuperContestHome";
import Homepage from "../components/home/Homepage";
import PickSixHome from "../components/pickem/PickSixHome";
import AdminPage from "../components/home/AdminPage";

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/admin',
        name: 'AdminHome',
        component: AdminPage,
    },
    {
        path: '/userhome',
        name: 'UserHome',
        component: UserHomepage,
    },
    {
        path: '/supercontest',
        name: 'SuperContestHome',
        component: SuperContestHome,
    },
    {
        path: '/picksix',
        name: 'PickSixHome',
        component: PickSixHome,
    },
];

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to === from) {
        next(false)
    } else next()
});


export { router, routes }