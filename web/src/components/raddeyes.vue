<template>
    <section>
        <img src="leo.png" id="anchor" alt="Radds Mascott Leo" />
        <div id="eyes">
            <img
                class="eye"
                src="eye.png"
                alt="Radds Mascott Leo"
                style="top: -145px; left: 133px"
            />
            <img
                class="eye"
                src="eye.png"
                alt="Radds Mascott Leo"
                style="top: -195px; left: 308px"
            />
        </div>
    </section>
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        name: "radd-eyes-component",

        mounted() {
            function angle(cx, cy, ex, ey) {
                const dy = ey - cy;
                const dx = ex - cx;
                const rad = Math.atan2(dy, dx);
                const deg = (rad * 180) / Math.PI;
                return deg;
            }

            const eyes = document.querySelectorAll(".eye");
            const anchor = document.getElementById("anchor");
            const rekt = anchor.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 2;
            const anchorY = rekt.top + rekt.height / 2;

            function updateEyesPosition(x, y) {
                const angleDeg = angle(x, y, anchorX, anchorY);

                eyes.forEach(function (eye) {
                    eye.style.transform = `rotate(${60 + angleDeg}deg)`;
                });
            }

            document.addEventListener("mousemove", function (e) {
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                updateEyesPosition(mouseX, mouseY);
            });

            document.addEventListener("touchmove", function (e) {
                const touch = e.touches[0];
                const touchX = touch.clientX;
                const touchY = touch.clientY;

                updateEyesPosition(touchX, touchY);
            });
        },
    });
</script>

<style>
    #eyes,
    #eyes img {
        position: absolute;
        pointer-events: none;
    }

    #anchor {
        position: absolute;
        bottom: 0;
        pointer-events: none;
    }
</style>