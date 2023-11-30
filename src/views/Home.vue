<template>
    <div>
        <div class="title noselect">
            <v-avatar size="75px">
                <img
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/ed2b2bc8-c614-413a-afab-d514c8cde52b-profile_image-70x70.png"
                    alt="Raddtrap"
                />
            </v-avatar>
            <h1>Raddtrap</h1>
        </div>

        <div class="socials noselect">
            <v-row>
                <v-btn icon @click="opensocial('twitch')">
                    <v-icon color="#9146FF">mdi-twitch</v-icon>
                </v-btn>
                <v-btn icon @click="opensocial('twitter')">
                    <v-icon color="#1DA1F2">mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon @click="opensocial('youtube')">
                    <v-icon color="red">mdi-youtube</v-icon>
                </v-btn>
                <v-btn icon @click="opensocial('discord')">
                    <mdi-discord style="width: 24px; height: 24px" />
                </v-btn>
                <v-btn icon @click="opensocial('instagram')">
                    <v-icon color="#E1306C">mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon @click="opensocial('ko-fi')">
                    <v-icon color="#F16061">mdi-coffee</v-icon>
                </v-btn>
                <v-btn icon @click="opensocial('games')">
                    <v-icon color="#9146FF">mdi-gamepad-variant</v-icon>
                </v-btn>
            </v-row>
        </div>

        <div class="embed" @click="enableEmbed()">
            <div class=" embed greylayer" v-if="!embed">
                <div class="greylayer-center">
                    <v-icon color="white" size="80px">mdi-play-circle</v-icon>
                </div>
            </div>
            <div
                id="twitch-embed" class="embed"
                :style="!embed ? 'pointer-events: none;' : ''"
            ></div>
        </div>

        <div
            v-if="!embed"
            class="radd-eyes compact"
            style="bottom: 0; position: absolute; left: 0; z-index: 9999"
        >
            <raddeyes />
        </div>
    </div>
</template>

<script>
    import raddeyes from "@/components/raddeyes.vue";
    import Vue from "vue";

    export default Vue.extend({
        components: { raddeyes },
        name: "HomeView",
        data() {
            return {
                embed: false,
            };
        },
        methods: {
            opensocial(social) {
                switch (social) {
                    case "twitch":
                        window.open("https://twitch.tv/raddtrap", "_blank");
                        break;
                    case "twitter":
                        window.open("https://twitter.com/raddtrap", "_blank");
                        break;
                    case "youtube":
                        window.open("https://www.youtube.com/@raddtrap", "_blank");
                        break;
                    case "discord":
                        window.open("https://discord.gg/tQkgWhg", "_blank");
                        break;
                    case "instagram":
                        window.open("https://instagram.com/raddtrap", "_blank");
                        break;
                    case "ko-fi":
                        window.open("https://ko-fi.com/raddtrap", "_blank");
                        break;
                    case "games":
                        window.open("https://games.raddtrap.live", "_blank");
                        break;
                }
            },

            enableEmbed() {
                this.embed = true;
                console.log("Embed enabled");
            },
        },

        mounted() {
            const embed = new Twitch.Embed("twitch-embed", {
                width: "100%",
                height: "100%",
                channel: "raddtrap",
                layout: "video-with-chat",
                autoplay: true,
                muted: false,
            });

            embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
                const player = embed.getPlayer();
                player.play();
            });
        },
    });
</script>

<style scoped>
    .title {
        text-align: center;
        font: 100 5rem/1.2 "Roboto", sans-serif;
        text-transform: lowercase;
    }

    .title h1 {
        animation: float 1.5s ease-in;
        margin-top: 1rem;
    }

    @keyframes float {
        0% {
            transform: translateY(-20vh);
        }
        100% {
            transform: translateY(0);
        }
    }

    .title img {
        animation: fadeIn 3s;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .greylayer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
        pointer-events: none;
        z-index: 9999;
    }

    .greylayer-center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
    }

    .radd-eyes {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .socials {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 2rem;
    }

    .embed {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: calc(80vh - 2rem);
        margin-top: 3rem;
    }

    .socials .v-btn {
        margin: 0 0.5rem;
    }

    .socials .v-btn .v-icon {
        font-size: 2rem;
    }

    .socials .v-btn .v-icon:hover {
        transform: scale(1.2);
    }

    .socials .v-btn .v-icon:active {
        transform: scale(1.1);
    }

    .socials .v-btn .v-icon:active {
        transform: scale(1.1);
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
    }

    .compact {
        transform: scale(0.5);
        transform-origin: bottom left;
    }
</style>
