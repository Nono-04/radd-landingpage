<template>
    <v-responsive :aspect-ratio="16 / 9" >
        <div id="twitch-embed"></div>
    </v-responsive>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        name: "StreamEmbed",
        data() {
            return {};
        },
        methods: {},

        mounted() {
            this.$nextTick(() => {
                const embed = new Twitch.Embed("twitch-embed", {
                    width: "100%",
                    height: "100%",
                    channel: "raddtrap",
                    layout: "video",
                    autoplay: true,
                    muted: false,
                });

                embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
                    const player = embed.getPlayer();
                    player.play();
                });
            });
        },
    });
</script>

<style scoped>
    #twitch-embed {
        position: relative;
        width: 100%; /* Adjust as needed */
        height: 100%; /* Adjust as needed */
        padding-bottom: 10px;
    }
</style>
