<template>
    <div class="container">
        <v-card min-width="315px" class="mx-auto socials noselect">
            <v-card-title class="title">
                <span>You can find me here</span>
            </v-card-title>

            <div class="cat-campfire">
                <img
                    class="noselect"
                    src="catssitting.webp"
                    @click="playSound()"
                    alt="Cats on Campfire"
                />
            </div>

            <v-card-text>
                <v-row>
                    <v-col>
                        <v-btn icon @click="opensocial('twitch')">
                            <v-icon color="#9146FF">mdi-twitch</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn icon @click="opensocial('twitter')">
                            <v-icon color="#1DA1F2">mdi-twitter</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn icon @click="opensocial('youtube')">
                            <v-icon color="red">mdi-youtube</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn icon @click="opensocial('discord')">
                            <mdi-discord
                                style="width: 24px; height: 24px"
                                class="v-icon"
                            ></mdi-discord>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn icon @click="opensocial('instagram')">
                            <v-icon color="#E1306C">mdi-instagram</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn icon @click="opensocial('ko-fi')">
                            <v-icon color="#F16061">mdi-coffee</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn icon @click="opensocial('games')">
                            <v-icon color="#9146FF">mdi-gamepad-variant</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <div class="embed">
            <stream-embed />
        </div>

        <div class="lurk-leo">
            <img class="noselect" src="lurk.png" alt="Lurk Leo" />
        </div>

        <div class="radd-eyes compact" style="bottom: 0; position: absolute; left: 0">
            <raddeyes />
        </div>
    </div>
</template>

<script>
    import raddeyes from "@/components/raddeyes.vue";
    import Vue from "vue";

    import StreamEmbed from "@/components/streamEmbed.vue";

    export default Vue.extend({
        components: { raddeyes, StreamEmbed },
        name: "HomeView",
        data() {
            return {};
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

            playSound() {
                // 1% chance to play different audio
                if (Math.random() < 0.075) {
                    const audio = new Audio("cat2.mp3");
                    audio.play();
                    console.log("Sound played");
                    return;
                }
                const audio = new Audio("cat1.mp3");
                audio.play();
                console.log("Sound played");
            },
        },
    });
</script>

<style scoped>
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5em;
        padding-bottom: 0;
    }

    .radd-eyes {
        position: fixed !important;
        bottom: 0;
        left: 0;
    }

    .socials {
        left: 50%;
        transform: translateX(-50%);
        top: 22vh;
        position: absolute;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .embed {
        width: 75%;
        height: 75%;
        top: 40vh;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
    }

    .lurk-leo {
        position: absolute;
        right: 0;
        top: 123px;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }

    .lurk-leo img {
        animation: lurk 30s ease-in-out infinite;
    }

    @keyframes lurk {
        0% {
            transform: translateX(-100%);
        }
        10% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(0);
        }
        60% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .cat-campfire {
        left: 50%;
        transform: translateX(-50%);
        margin-top: -130px;
        position: absolute;
    }

    @media (max-width: 750px) {
        .cat-campfire {
            display: none;
        }
    }

    @media (max-width: 930px) {
        .embed {
            top: 50vh;
        }
    }

    @media (max-width: 520px) {
        .lurk-leo {
            display: none;
        }

        .radd-eyes {
            display: none;
        }

        .embed {
            width: 100%;
        }
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
