export const state = () => ({
  catagory: 'Lighters',
  user: null,
  products: [],
  cart: [],
  userOrders: []
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

  setUserOrders(state, data){
    state.userOrders = data
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
  removeProduct(state, Product) {
    state.cart = state.cart.filter((item) => {
      return item.item.id !== Product.item.id
    })
  },
  incerementQuantity(state, Product) {
    const Tproduct = state.cart.find((item) => item.item.id === Product.item.id)
    if (Tproduct) {
      Tproduct.quantity++
    }
  },
  decrementQuantity(state, Product) {
    const Tproduct = state.cart.find((item) => item.item.id === Product.item.id)
    if (Tproduct) {
      Tproduct.quantity--
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
        .from('product-catagory')
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

  async fetchOrders({commit}) {
    if (this.user) {
      try {
        const { data, error } = await this.$supabase
          .from('order-detail')
          .select()
          .eq('user-id', await this.$store.state.user.id)
        if (error) throw error
        if (data) {
         commit('setUserOrders', data)
        }
      } catch (error) {
        alert(error.message)
      }
    }
  },

  changeCatagory({ commit }, selected) {
    commit('ChangeCatagory', selected)
  },

  removeCartProduct({ commit }, Product) {
    commit('removeProduct', Product)
  },
}

export const getters = {
  cartItemCount: (state) => {
    return state.cart.length
  },

  // use this in the shopping cart drawer
  cartTotalPrice(state) {
    let total = 0

    state.cart.forEach((item) => {
      total += item.item.price * item.quantity
    })

    return total
  },

  cartSize(state) {
    return state.cart.length
  },
  cartTotalAmount: (state) => {
    return state.cart.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  },
}
