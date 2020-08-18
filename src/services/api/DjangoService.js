import axios from 'axios';

export default {
    createNewUser(payload) {
        return axios
            .post('/api/create_user/', payload)
            .then(response => (response))
            .catch(err => {throw err.response})
    },
    getToken(payload) {
        return axios
            .post('/api/auth/', payload)
            .then(response => (response))
            .catch(err => {throw err.response})
    },
    getUserInfo(payload) {
        return axios
            .post('/api/get_user_info/', payload)
            .then(response => (response))
            .catch(err => {throw err.response})
    },
    getResults(payload) {
        return axios
            .post('/api/get_picks/', payload)
            .then(response => (response))
            .catch(err => {throw err.response})
    },
    updateGames() {
        axios
            .post('/api/update_results/')
            .catch(err => {throw err.response})
    },
    getSCSummary() {
        return axios
            .get('/api/get_pick_summary/')
            .then(response => (response))
            .catch(err => {throw err.response})
    },
    submitValidEmail(payload) {
        return axios
            .post('/api/submit_email/', payload)
            .then(response => (response))
            .catch(err => {throw err.response})
    },
    logResumeHit() {
        axios
            .get('/api/log_resume_hit/')
            .catch(err => {throw err.response})
    }
}
