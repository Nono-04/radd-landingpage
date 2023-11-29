<template>
    <v-app>
        <v-main>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
        <v-bottom-navigation
            :input-value="isLoggedIn"
            :value="navigationValue"
            color="primary"
            grow
            class="elevation-12"
        >
            <v-btn>
                <span>Recents</span>

                <v-icon>mdi-history</v-icon>
            </v-btn>

            <v-btn>
                <span>Favorites</span>

                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn>
                <span>Nearby</span>

                <v-icon>mdi-map-marker</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script>
    import pb from "@/plugins/pb";

    export default {
        name: "App",
        components: {},
        data() {
            return {
                navigationValue: 0,
                isLoggedIn: false,
            };
        },
        methods: {},

        computed: {},
        mounted() {
            this.isLoggedIn = pb.authStore.isValid;
            pb.authStore.onChange(() => {
                this.isLoggedIn = pb.authStore.isValid;
            });
        },
    };
</script>

<style>
    #app {
        background-color: var(--v-background-base);
    }

    body {
        background-color: var(--v-background-base);
    }
</style>

<style scoped>
    .v-size--default {
        height: 56px !important;
    }
</style>
