import Vue from 'vue'
import Router from 'vue-router'
import store from '../store';

import HelloWorld from "../components/HelloWorld";
import Login from "../components/home/Login";
import UserHomepage from "../components/home/UserHomepage";
import ResultsTable from "../components/supercontest/ResultsTable";

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/userhome',
        name: 'UserHome',
        component: UserHomepage,
    },
    {
        path: '/results',
        name: 'ResultsTable',
        component: ResultsTable,
    },
];

const router = new Router({
    mode: 'history',
    routes
});

export { router, routes }