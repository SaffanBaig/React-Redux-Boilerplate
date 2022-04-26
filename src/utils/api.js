import axios from "axios";

const api = axios.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json'
    }
})

const ACCESS_TOKEN_NAME = 'token'

api.interceptors.request.use(config => {
    const token = localStorage.getItem(ACCESS_TOKEN_NAME)
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
}, err => Promise.reject(err))

api.interceptors.response.use(response => response, (err) => {
    if (err?.response && err?.response?.status === 401) {
        localStorage.removeItem(ACCESS_TOKEN_NAME)
        window.location.href = '/'
    }
})

export default api;