import { defineStore } from 'pinia'
import api from '../api'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token'),
    }),
    getters: {
        isLoggedIn: (state) => !!state.token,
    },
    actions: {
        async login(email, password) {
            const { data } = await api.post('/login', { email, password })
            this.token = data.token
            this.user = data.user
            localStorage.setItem('token', data.token)
        },
        async logout() {
            try { await api.post('/logout') } catch (e) {}
            this.token = null
            this.user = null
            localStorage.removeItem('token')
        },
    },
})