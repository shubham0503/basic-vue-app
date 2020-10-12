import { registerUser } from '@/services/User'

const state = {
    currentUser: {}
}

const getters = {
    getUserList() {
        return []
    }
}

const mutations = {
    ADD_USER(state, payload) {
        state.currentUser = payload
    }
}

const actions = {
    async register ({commit}, payload) {
        // Call API
        let response = await registerUser(payload)

        if (response) {
           commit('ADD_USER', payload)
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
