import camelCase from 'lodash.camelcase'
import { productsRef, attributesRef, attributesIdValueRef } from '../../firebase'

const state = {
    all: [],
    imageBaseUrl: 'static/products/'
}

const getters = {}

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

const mutations = {
    setProducts (state, data) {
        state.all = data.products.map(product => {
            product.attributes = product.attributes.reduce((acc, attribute, idx) => {
                let meta = data.attributes[idx]
                acc[camelCase(meta.name)] = (meta.type === 'manyValue')
                     ? data.attributesIdValue[idx].split('|').filter((val, idx) => attribute.split('|').includes(idx.toString()))
                     : data.attributesIdValue[idx].split('|')[attribute]
                return acc
            }, {})
            product.key = product.name + product.sku
            product.image = state.imageBaseUrl + product.image
            return product
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
