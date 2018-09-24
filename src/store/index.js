import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cartState'
import products from './modules/productsState'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  }
})
