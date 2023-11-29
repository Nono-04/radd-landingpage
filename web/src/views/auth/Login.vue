<template>
    <section>
        <div class="topText">
            <h1>Sign in</h1>
        </div>
        <div class="loginForm">
            <v-alert
                v-model="showError"
                type="error"
                color="red"
                icon="mdi-account-alert-outline"
                dismissible
            >
                {{ error }}
            </v-alert>
            <v-text-field
                label="Username"
                autocomplete="username"
                type="text"
                v-model="username"
                variant="outlined"
                required
                @keyup.enter="$refs.passwordField.$refs.input.focus()"
            ></v-text-field>
            <v-text-field
                ref="passwordField"
                label="Password"
                autocomplete="current-password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                variant="outlined"
                required
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                @keyup.enter="loginWithPassword"
            ></v-text-field>
            <div style="font-size: 13px">
                <span
                    style="color: var(--v-accent-base); cursor: pointer"
                    @click="showResetPassword = true"
                    >Forgot password?
                </span>
            </div>

            <v-btn
                :loading="loading"
                color="primary"
                style="margin-bottom: 10px"
                class="mt-3"
                @click="loginWithPassword"
            >
                <v-icon left>mdi-login-variant</v-icon>
                Login
            </v-btn>
            <div
                class="mt-2"
                style="
                    width: 100%;
                    height: 14px;
                    border-bottom: 1px solid #6e7073;
                    text-align: center;
                "
            >
                <span class="orBackground" style="font-size: 14px; padding: 0 10px"> Or </span>
            </div>
            <div class="otherLogins">
                <v-row>
                    <v-spacer />
                    <v-col v-if="isAllowed('google')">
                        <v-btn icon color="secondary" @click="loginWithOAuth('google')">
                            <mdi-google style="width: 24px; height: 24px" />
                        </v-btn>
                    </v-col>
                    <v-col v-if="isAllowed('discord')">
                        <v-btn icon color="secondary" @click="loginWithOAuth('discord')">
                            <mdi-discord style="width: 24px; height: 24px" />
                        </v-btn>
                    </v-col>
                    <v-col v-if="isAllowed('apple')">
                        <v-btn icon @click="loginWithOAuth('apple')">
                            <v-icon>mdi-apple</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col v-if="isAllowed('twitch')">
                        <v-btn icon color="#a042f7" @click="loginWithOAuth('twitch')">
                            <v-icon>mdi-twitch</v-icon>
                        </v-btn>
                    </v-col>
                    <v-spacer />
                </v-row>
            </div>
        </div>
        <div class="footer" style="font-size: 13px">
            <span>Don't have an account? </span>
            <span
                style="color: var(--v-accent-base); cursor: pointer"
                @click="$router.push({ name: 'Register' })"
            >
                Sign up
            </span>
        </div>
        <v-overlay :value="showResetPassword" absolute>
            <reset-password @close="showResetPassword = false" :preFillUsername="username" />
        </v-overlay>
    </section>
</template>

<script lang="ts">
    import { mapActions, mapGetters, mapMutations } from "vuex";
    import Vue from "vue";
    import pb from "@/plugins/pb";

    export default Vue.extend({
        name: "Auth",
        components: {},
        data() {
            return {
                showPassword: false,
                showResetPassword: false,
                username: "",
                password: "",
                showError: false,
                error: "",
                authProvider: [],
                loading: false,
            };
        },
        methods: {
            isAllowed(provider) {
                return this.authProvider.some((p) => p.name === provider);
            },

            async loginWithOAuth(provider) {
                this.showError = false;
                this.loading = true;
                var scopes = [];

                if (provider === "discord") {
                    scopes = ["identify", "email"];
                }

                try {
                    await pb.collection("users").authWithOAuth2({
                        provider: provider,
                        scopes: scopes,
                    });
                    this.$toast.success("Successfully logged in!");
                    this.$router.push({ name: "Home" });
                } catch (e) {
                    this.error = e.response.message;
                    this.showError = true;
                }
                this.loading = false;
            },

            async loginWithPassword() {
                this.showError = false;
                this.loading = true;
                try {
                    await pb.collection("users").authWithPassword(this.username, this.password);
                    this.$toast.success("Successfully logged in!");
                    this.$router.push({ name: "Home" });
                } catch (e) {
                    this.error = e.response.message;
                    this.showError = true;
                }
                this.loading = false;
            },
        },
        computed: {},

        async mounted() {
            this.loading = true;
            try {
                this.authProvider = (await pb.collection("users").listAuthMethods()).authProviders;
            } catch (e) {
                this.loading = false;
                // try after 15 seconds
                window.setTimeout(async () => {
                    this.authProvider = (
                        await pb.collection("users").listAuthMethods()
                    ).authProviders;
                }, 15000);
            }
            if (pb.authStore.isValid) {
                this.$router.push({ name: "Home" });
            }

            this.loading = false;
        },
    });
</script>
<style scoped>
    .topText {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .loginForm {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: min(75%, 350px);
    }

    .otherLogins {
        margin-top: 15px;
    }

    .footer {
        position: absolute;
        bottom: 1%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .orBackground {
        background-color: var(--v-background-base);
    }
</style>
