<template>
    <div>
        <p v-for="product in products" :key="product.name + product.sku">{{ product.name }}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            products () {
                return this.$store.state.products.all
            }
        },
        mounted () {

        }
    }
</script>

<style scoped>

</style>
