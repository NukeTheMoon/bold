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
    setProducts ({ commit }, data) {
        commit('setProducts', data)
    },
    setProductsDebug ({ commit }) {
        commit('setProducts', {
            products: ['lol'],
            attributes: ['rofl'],
            attributesIdValue: ['lmao']
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
