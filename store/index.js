export const state = () => ({
    catagory: 2,
    user: null
})


export const mutations = {
    mutateUser(state, user) {
        state.user = user
    },

    ChangeCatagory(state, selected){
        state.catagory = selected
    }
}

export const actions = {
    setUser({ commit }, payload) {
        console.log(payload);
        commit('mutateUser', payload)

    },

    async getCatagories({ commit }) {
        try {
            const { data, error } = await this.$supabase
                .from('product_catagory')
                .select(`id , title`)
            if (error) throw error
            if (data) {
                console.log(data)
            }
        }
        catch (error) {
            alert(error.message)
        }
    }

    ,

    changeCatagory({ commit }, selected) {
        commit('ChangeCatagory', selected)
    },

}


