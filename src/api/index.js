import axios from 'axios'

axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = localStorage.getItem('jwt')
    return config;
});

export default {
    urls: {
        news: "/news",
        users: "/users",
        login: "/auth/login",
        logout: "/auth/logout"
    },
    axios: axios,
};