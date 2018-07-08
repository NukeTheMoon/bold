import { productsRef, attributesRef, attributesIdValueRef } from '../../firebase'
import camelCase from 'lodash.camelcase'

const state = {
    all: [],
    attributes: [],
    attributesIdValue: []
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
                if (meta.type === 'manyValue') {
                    acc[camelCase(meta.name)] = data.attributesIdValue[idx].split('|').filter((val, idx) => {
                        console.log(attribute.split('|'), idx)
                        return attribute.split('|').includes(idx.toString())
                    })
                } else {
                    acc[camelCase(meta.name)] = data.attributesIdValue[idx].split('|')[attribute]
                }
                return acc
            }, {})
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
