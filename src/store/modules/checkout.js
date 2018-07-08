const state = {
    all: []
}

const getters = {}

const actions = {}

const mutations = {
    addProduct (state, product) {
        state.all.push(product)
    },
    removeProduct (state, { id }) {
        state.all = state.all.reject(item => item.id === id)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
