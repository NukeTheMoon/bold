import { productsRef, attributesRef, attributesIdValueRef } from '../../firebase'

// initial state
const state = {
    all: [],
    attributes: [],
    attributesIdValue: []
}

  // getters
const getters = {}

  // actions
const actions = {
    async fetch ({ commit }) {
        let products = await productsRef.once('value')
        let attributes = await attributesRef.once('value')
        let attributesIdValue = await attributesIdValueRef.once('value')
        commit('setProducts', {
            products: products.val(),
            attributes: attributes.val(),
            attributesIdValue: attributesIdValue.val()
        })
    }
}

  // mutations
const mutations = {
    setProducts (state, data) {
        state.all = data.products
        state.attributes = data.attributes
        state.attributesIdValue = data.attributesIdValue
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
