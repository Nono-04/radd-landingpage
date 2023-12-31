<template>
    <!-- All we want to do is dynamic countdown till 2024 in the timezone of the user for obs -->
    <div class="overlay">
        <div>
            <p v-if="!isNewYear">{{ countdown }}</p>
            <p v-else>Happy New Year!</p>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        name: "NewYear2024",
        data() {
            return {
                countdown: "",
                isNewYear: false,
            };
        },
        methods: {
            reloadCountdown() {
                const date = new Date();
                const newYear = new Date("2024-01-01T00:00:00");
                const diff = newYear.getTime() - date.getTime();
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                // if countdown is 0 or lower set isNewYear to true
                if (diff <= 0) {
                    this.isNewYear = true;
                }
                this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            },
        },
        mounted() {
            // do this every second
            this.reloadCountdown();

            window.setInterval(() => {
                this.reloadCountdown();
            }, 1000);
        },
    });
</script>

<style>
    #app {
        background-color: #fff;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        font-family: "Times New Roman", serif;
        letter-spacing: 5px;
        font-size: 75px;
        font-weight: bold;
        background-image: linear-gradient(
            to right,
            #462523 0,
            #cb9b51 22%,
            #f6e27a 45%,
            #e9e38d 50%,
            #f6e27a 55%,
            #cb9b51 78%,
            #462523 100%
        );
        color: transparent;
        -webkit-background-clip: text;
    }
</style>
