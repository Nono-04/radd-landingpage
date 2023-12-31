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

            window.setInterval(() => {
                window.location.reload();
            }, 900000);
        },
    });
</script>

<style>
    #app {
        background-color: transparent !important;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        color: white;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        border: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Times New Roman", serif;
        letter-spacing: 5px;
        font-size: 75px;
        font-weight: bold;
    }

</style>
