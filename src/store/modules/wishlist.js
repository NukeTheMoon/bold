const state = {
    all: []
}

const getters = {}

const actions = {}

const mutations = {
    addProduct (state, product) {
        if (state.all.find(item => item.key === product.key)) return
        state.all.push(product)
    },
    removeProducts (state, keys) {
        state.all = state.all.filter(item => !keys.includes(item.key))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
