

<template>

<v-app id="inspire">
    <v-navigation-drawer clipped fixed v-model="drawer" app>
        <v-list dense>
            <v-list-tile v-for="(item, i) in items" :key="i" @click="navigateTo(item.target)">
                <v-list-tile-action>
                    <v-icon v-html="item.icon"></v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Bold FE hackathon#1</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <router-view/>
            </v-layout>
        </v-container>
    </v-content>
    <v-footer app fixed>
        <span>&copy; 2018</span>
    </v-footer>
</v-app>

</template>

<script>
import Menu from '../config/menu.js'

export default {
    data () {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            items: Menu,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'Vuetify.js'
        }
    },
    methods: {
        navigateTo (nav) {
            this.$router.push({
                path: nav
            })
        }
    },
    created () {
        this.$store.dispatch('products/fetch')
    },
    name: 'AppDark'
}
</script>

<style lang="scss">
    $accent: #0090FF;
    $sub: #aeaeae;

    @mixin button() {
        border-radius: 3px;
        color: white;
        text-align: center;
        text-transform: uppercase;
        padding: 8px 16px;
        width: 100%;
        font-size: 12px;
    }

    p {
        margin: 0;
    }

    .text-big {
        font-size: 18px;
    }

    .text-small {
        font-size: 12px;
        color: $sub;
    }

    .bold {
        font-weight: bold;
    }

    .margin-bottom-xs {
        margin-bottom: 8px;
    }

    .margin-bottom-sm {
        margin-bottom: 16px;
    }

    .margin-bottom-md {
        margin-bottom: 24px;
    }

    .margin-bottom-lg {
        margin-bottom: 32px;
    }

    .margin-bottom-xl {
        margin-bottom: 48px;
    }

    .center-inline {
        display: block;
        text-align: center;
    }

    .flex {
        display: flex;
    }

    .flex-wrap {
        flex-wrap: wrap;
    }

    .panel {
        padding: 32px;
        margin: 0 8px 24px;
        width: 250px;
        background-color: white;
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.18);
        border-radius: 2px;
    }

    .btn-main {
        @include button();
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.18);
        background-color: $accent;
    }

    .btn-alt {
        @include button();
        border: 1px solid $accent;
        color: $accent;
    }
</style>
