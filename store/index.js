export const state = () => ({
    user: null
})


export const mutations = {
    mutateUser(state, user) {
        state.user = user
    }
}

export const actions = {
    setUser({ commit }, payload) {
        console.log(payload);
        commit('mutateUser', payload)
    }
}