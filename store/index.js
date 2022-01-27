export const state = () => ({
  catagory: 2,
  user: null,
  products: [],
  cart: []
})

export const mutations = {
  mutateUser(state, user) {
    state.user = user
  },

  ChangeCatagory(state, selected) {
    state.catagory = selected
  },

  setProducts(state, data) {
    state.products = data
  },
  AddToCart(state, Product) {
    // eslint-disable-next-line no-console
    console.log(Product)
    const productInCart = state.cart.find(
      (item) => item.item.id === Product.item.id
    )

    if (productInCart) {
      productInCart.quantity++
    } else {
      state.cart.push(Product)
    }
  },
}

export const actions = {
  setUser({ commit }, payload) {
    commit('mutateUser', payload)
  },

  async getCatagories({ commit }) {
    try {
      const { error } = await this.$supabase
        .from('product_catagory')
        .select(`id , title`)
      if (error) throw error
    } catch (error) {
      alert(error.message)
    }
  },

  async getProducts({ commit }) {
    try {
      const { data, error } = await this.$supabase.from('products').select()
      if (error) throw error
      if (data) {
        commit('setProducts', data)
        console.log(data)
      }
    } catch (error) {}
  },

  changeCatagory({ commit }, selected) {
    commit('ChangeCatagory', selected)
  },
}
