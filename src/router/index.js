import Vue from 'vue'

import Router from 'vue-router'
import Products from '@/components/Products'
import Cart from '@/components/Cart'
import Wishlist from '@/components/Wishlist'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'products',
        component: Products
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/wishlist',
        name: 'wishlist',
        component: Wishlist
    }]
})
