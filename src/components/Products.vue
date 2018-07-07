<template>
    <div>
        <p v-for="product in products" :key="product['.key']">{{ product.name }}</p>
    </div>
</template>

<script>
    import { productsRef } from '../firebase'
    export default {
        data () {
            return {

            }
        },
        firebase: {
            products: productsRef
        },
        mounted () {

        }
    }
</script>

<style scoped>

</style>
