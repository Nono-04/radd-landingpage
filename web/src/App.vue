<template>
    <v-app v-if="!$route.meta.isOverlay">
        <v-app-bar dark app hide-on-scroll>
            <v-spacer></v-spacer>

            <div class="total-center">
                <v-avatar size="48" class="mb-2">
                    <img
                        src="https://static-cdn.jtvnw.net/jtv_user_pictures/ed2b2bc8-c614-413a-afab-d514c8cde52b-profile_image-70x70.png"
                    />
                </v-avatar>
                raddtrap
            </div>

            <v-spacer></v-spacer>

            <!-- <v-btn depressed text>

                <v-icon left color="#9146FF"> mdi-twitch </v-icon>
                Sign in with Twitch
            </v-btn>-->
            <christmaslightsVue class="christmaslights" v-if="christmasEnabled" />

        </v-app-bar>

        <snowflakes v-if="christmasEnabled" />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
    <v-app v-else>
        <router-view />
    </v-app>
</template>

<script>
    import christmaslightsVue from "@/components/christmaslights.vue";
    import snowflakes from "@/components/snowflakes.vue";

    export default {
        name: "App",
        components: { christmaslightsVue, snowflakes },
        data() {
            return {
                christmasEnabled: false,
            };
        },

        mounted() {
            const date = new Date();
            // enable christmas lights from 15th of november till end of december
            if ((date.getMonth() === 10 && date.getDate() >= 15) || date.getMonth() === 11) {
                this.christmasEnabled = true;
            }
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
    .christmaslights {
        top: 64px;
    }

    @media (max-width: 960px) {
        .christmaslights {
            top: 56px;
        }
    }

    .total-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
