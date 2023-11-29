<template>
    <v-card min-width="250px" max-width="75%" light>
        <v-card-title>
            <v-icon @click="$emit('close')">mdi-close</v-icon>
            <span class="ml-2">Reset Password</span>
        </v-card-title>
        <v-card-text v-if="!success">
            <v-text-field
                v-model="email"
                label="Email"
                autocomplete="email"
                type="email"
                variant="outlined"
                required
                @keyup.enter="resetPassword"
            ></v-text-field>
            <v-btn
                :loading="loading"
                color="primary"
                style="margin-bottom: 10px; left: 50%; transform: translateX(-50%)"
                class="mt-3"
                @click="resetPassword"
            >
                <v-icon start>mdi-login-variant</v-icon>
                Reset Password
            </v-btn>
        </v-card-text>
        <v-card-text v-else>
                If an account with that email exists, we sent you an email with
                instructions to reset your password.
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
    import pb from "@/plugins/pb";
    import Vue from "vue";

    export default Vue.extend({
        name: "reset-password",
        data() {
            return {
                email: "",
                loading: false,
                success: false,
            };
        },
        methods: {
            async resetPassword() {
                this.loading = true;
                try {
                    await pb.collection("users").requestPasswordReset(this.email);
                    this.success = true;
                } catch (e) {
                    this.$toast.error(e.message);
                    this.email = "";
                }
                this.loading = false;
            },

            
        },
    });
</script>
