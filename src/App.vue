<template>
    <v-app>
        <v-main>
                <router-view />
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "App",
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
