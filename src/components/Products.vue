<template>
    <div :class="{ 'full-width': anyVisible }">
        <template v-if="anyVisible">
            <ul class="flex flex-wrap full-width">
                <li class="margin-bottom-lg panel" v-for="product in products" :key="product.key" v-show="visible[product.key]">
                    <div class="center-inline margin-bottom-lg photo">
                        <img :src="product.image" alt="Product photo">
                    </div>
                    <div class="main margin-bottom-sm">
                        <h2>{{ product.name }}</h2>
                        <p class="bold">{{ product.attributes.browar }}</p>
                        <p class="margin-bottom-xs">{{ product.attributes.krajPochodzenia }}</p>
                    </div>
                    <div class="attributes margin-bottom-sm">
                        <template v-if="product.attributes.gatunek.length">
                            <p class="text-small">Gatunek</p>
                            <p class="margin-bottom-xs">{{ product.attributes.gatunek }}</p>
                        </template>
                        <template v-if="product.attributes.chmiel.length">
                            <p class="text-small">Chmiel</p>
                            <p class="margin-bottom-xs">{{ product.attributes.chmiel.join(', ') }}</p>
                        </template>
                        <template v-if="product.attributes.slod.length">
                            <p class="text-small">Słód</p>
                            <p class="margin-bottom-xs">{{ product.attributes.slod.join(', ') }}</p>
                        </template>
                        <template v-if="product.attributes.smakiIZapachy.length">
                            <p class="text-small">Smaki</p>
                            <p class="margin-bottom-xs">{{ product.attributes.smakiIZapachy.join(', ') }}</p>
                        </template>
                    </div>
                    <p class="text-big bold margin-bottom-sm" :class="{ special: hasSpecialPrice(product) }">{{ product.price.value.toFixed(2) }} PLN</p>
                    <button class="btn-main margin-bottom-xs" @click="addToCart(product)">Dodaj do koszyka</button>
                    <button class="btn-alt margin-bottom-sm" @click="addToWishlist(product)">Dodaj do listy życzeń</button>
                    <a href="" class="text-center block text-small" role="button" @click.prevent="hide(product)">Ukryj ten produkt</a>
                </li>
            </ul>
        </template>
        <template v-else>
            <p v-show="productsLoaded">Wszystkie produkty są ukryte.</p>
        </template>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                visible: {},
                productsLoaded: false
            }
        },
        created () {
            this.$store.dispatch('products/fetch')
        },
        computed: {
            products () {
                return this.$store.state.products.all
            },
            anyVisible () {
                return Object.keys(this.visible).some(key => this.visible[key])
            }
        },
        watch: {
            products () {
                this.productsLoaded = true
                this.products.forEach(item => {
                    if (this.visible[item.key] === false) return
                    this.$set(this.visible, item.key, true)
                })
            }
        },
        methods: {
            addToCart (product) {
                this.$store.commit('cart/addProduct', product)
            },
            addToWishlist (product) {
                this.$store.commit('wishlist/addProduct', product)
            },
            hasSpecialPrice (product) {
                return product.price.type === 'special'
            },
            hide (product) {
                this.visible[product.key] = false
            }
        }
    }
</script>

<style scoped lang="scss">
    $accent: #0090FF;

    a {
        color: $accent;
    }

    .panel {
        margin: 0 8px 24px;
        width: 250px;
    }

    .btn-main, .btn-alt {
        width: 100%;
    }

    .photo {
        height: 200px;
    }

    .main {
        min-height: 75px;
    }

    .attributes {
        min-height: 270px;
    }

    .special {
        color: $accent;

        &::after {
            content: 'Okazyjna cena!';
            font-size: 12px;
            font-weight: normal;
            margin-left: 8px;
        }
    }
</style>
