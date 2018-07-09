<template>
    <div>
        <template v-if="items.length">
            <table class="margin-bottom-md">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nazwa</th>
                        <th>Browar</th>
                        <th>Ilość</th>
                        <th>Cena szt.</th>
                        <th>Cena razem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :class="{ highlighted: checked[item.product.key]}" :key="item.product.key">
                        <td><input type="checkbox" v-model="checked[item.product.key]"></td>
                        <td>{{ item.product.name }}</td>
                        <td v-show="item.product.attributes.browar">{{ item.product.attributes.browar }}</td>
                        <td>{{ item.amount }}</td>
                        <td>{{ item.product.price.value.toFixed(2) }} PLN</td>
                        <td>{{ (item.product.price.value * item.amount).toFixed(2) }} PLN</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn-alt" :class="{ 'btn-disabled': !anyChecked }" @click="remove()">Usuń zaznaczone</button>
        </template>
        <p v-else>Twój koszyk jest pusty.</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                checked: {}
            }
        },
        computed: {
            items () {
                return this.$store.state.cart.all
            },
            anyChecked () {
                return !!Object.keys(this.checked).some(key => this.checked[key])
            },
            checkedKeys () {
                return Object.keys(this.checked).filter(key => this.checked[key])
            }
        },
        methods: {
            remove () {
                this.$store.commit('cart/removeProducts', this.checkedKeys)
                this.checked = {}
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
