<template>
    <section>
        <span>Welcome</span>
        <v-btn color="primary" @click="logout">
            <v-icon left>mdi-logout</v-icon>
            Logout
        </v-btn>
    </section>
</template>

<script lang="ts">
    import Vue from "vue"; // @ is an alias to /src
    import pb from "@/plugins/pb";
    export default Vue.extend({
        name: "HomeView",
        components: {},
        data() {
            return {};
        },
        computed: {},
        methods: {
            logout() {
                pb.authStore.clear();
                this.$router.push({ name: "Login" });
            },
        },
    });
</script>
