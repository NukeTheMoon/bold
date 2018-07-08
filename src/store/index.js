import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import checkout from './modules/checkout'
import wishlist from './modules/wishlist'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        products,
        checkout,
        wishlist
    }
})
