const state = {
    all: []
}

const getters = {}

const actions = {}

const mutations = {
    addProduct (state, product) {
        function isInStock (item) { return item.product.quantity > item.amount }
        let item = state.all.find(item => item.product.key === product.key)
        if (item) {
            if (isInStock(item)) item.amount += 1
        } else state.all.push({ product, amount: 1 })
    },
    removeProducts (state, keys) {
        state.all = state.all.filter(item => !keys.includes(item.product.key))
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
