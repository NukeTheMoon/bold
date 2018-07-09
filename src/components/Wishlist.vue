<template>
    <div>
        <template v-if="items.length">
            <table class="margin-bottom-md">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nazwa</th>
                        <th>Browar</th>
                        <th>Cena szt.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :class="{ highlighted: checked[item.key]}" :key="item.key">
                        <td><input type="checkbox" v-model="checked[item.key]"></td>
                        <td>{{ item.name }}</td>
                        <td v-show="item.attributes.browar">{{ item.attributes.browar }}</td>
                        <td>{{ item.price.value.toFixed(2) }} PLN</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn-alt" :class="{ 'btn-disabled': !anyChecked }" @click="remove()">Usuń zaznaczone</button>
        </template>
        <p v-else>Twoja lista życzeń jest pusta.</p>
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
                return this.$store.state.wishlist.all
            },
            anyChecked () {
                return Object.keys(this.checked).some(key => this.checked[key])
            },
            checkedKeys () {
                return Object.keys(this.checked).filter(key => this.checked[key])
            }
        },
        methods: {
            remove () {
                this.$store.commit('wishlist/removeProducts', this.checkedKeys)
                this.checked = {}
            }
        }
    }
</script>

<style scoped>

</style>
