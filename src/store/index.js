import Vue from 'vue';
import Vuex from 'vuex';
import Es6Promise from 'es6-promise';
import DjangoAPI from '../services/api/DjangoService';
import createPersistedState from "vuex-persistedstate";
import axios from 'axios';

Es6Promise.polyfill();
Vue.use(Vuex);

export const state = {
    navBarVisible: false,
    token: null,
    username: null,
    userFirstName: '',
    userLastName: '',
    userPaid: false,
    displaySnackbar: false,
    snackbarMessage: '',
    snackbarColor: 'error',
    authHeader: null,
};

export const getters = {
    getNavBar: state => state.navBarVisible,
    getToken: state => state.token,
};

export const mutations = {
    toggleNavBar (state, payload) {
        state.navBarVisible = payload;
    },
    setToken (state, payload) {
        state.token = payload;
    },
    setUser (state, payload) {
        state.username = payload;
    },
    setUserFirstName (state, payload) {
        state.userFirstName = payload;
    },
    setUserLastName (state, payload) {
        state.userLastName = payload;
    },
    setUserPaid (state, payload) {
        state.userPaid = payload;
    },
    toggleDisplaySnackbar (state) {
        state.displaySnackbar = !state.displaySnackbar;
    },
    setSnackbarMessage (state, payload) {
        state.snackbarMessage = payload;
    },
    setSnackbarColor (state, payload) {
        state.snackbarColor = payload;
    },
};

export const actions = {
    async getToken({ commit, state }, payload) {
        const response = await DjangoAPI.getToken(payload);
        try {
            commit('setUser', payload.username);
            commit('setToken', response.data.token);
            // axios.defaults.headers['Authorization'] = `JWT ${state.token}`;
            return Promise.resolve(response)
        } catch (e) {
            // todo fill out
            return Promise.reject(response)
        }
    },
    async createNewUser({ commit, state }, payload) {
        const response = await DjangoAPI.createNewUser(payload);
        const data = response.data;

        if (data === 'Success') {
            commit('setSnackbarMessage', 'User successfully created! Please sign in.');
            commit('setSnackbarColor', 'success');
            commit('toggleDisplaySnackbar');
        } else if (data.startsWith('Email already')) {
            commit('setSnackbarMessage', 'Email already associated with an account');
            commit('setSnackbarColor', 'error');
            commit('toggleDisplaySnackbar');
        } else if (data.startsWith('Username')) {
            commit('setSnackbarMessage', 'Username already taken');
            commit('setSnackbarColor', 'error');
            commit('toggleDisplaySnackbar');
        } else {
            commit('setSnackbarMessage', 'Email hasn\'t been approved. Email nflpickem6.9@gmail.com with problems.');
            commit('setSnackbarColor', 'error');
            commit('toggleDisplaySnackbar');
        }
    },
    async getUserInfo({ commit, state }, payload) {
        const response = await DjangoAPI.getUserInfo(payload);
        const data = response.data;
        try {
            commit('setUserFirstName', data.firstName);
            commit('setUserLastName', data.lastName);
            commit('setUserPaid', data.paid);
            return Promise.resolve(response)
        } catch (e) {
            return Promise.reject(response)
        }
    },
    logout({ commit, state }) {
        commit('setToken', null);
        commit('setUser', null);
        commit('setUserFirstName', null);
        commit('setUserLastName', null);
        commit('setUserPaid', null);
        // delete axios.defaults.headers['Authorization'];
    },
    getResults({commit, state}, payload) {
        try {
            return DjangoAPI.getResults(payload);
        } catch (e) {
            console.log(e);
            commit('setSnackbarMessage', 'Error getting results. Please try again or contact Andrew.');
            commit('setSnackbarColor', 'error');
            commit('toggleDisplaySnackbar');
        }
    },
    updateGames({commit}) {
        try {
            DjangoAPI.updateGames();
        } catch (e) {
            console.log(e);
            commit('setSnackbarMessage', 'Error updating results. Please try again or contact Andrew.');
            commit('setSnackbarColor', 'error');
            commit('toggleDisplaySnackbar');
        }
    },
    getSCSummary({commit}) {
        try {
            return DjangoAPI.getSCSummary();
        } catch (e) {
            console.log(e);
            commit('setSnackbarMessage', 'Error getting result summary. Please try again or contact Andrew.');
            commit('setSnackbarColor', 'error');
            commit('toggleDisplaySnackbar');
        }
    },
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [
        createPersistedState({
            storage: window.sessionStorage,
            paths: [
                'username',
                'username',
                'userFirstName',
                'userLastName',
                'userPaid',
                'token',
            ]
        })
    ]
});

export default store;
