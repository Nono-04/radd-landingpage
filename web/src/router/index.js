import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/overlays/newyear/2024",
        name: "NewYear2024",
        component: () => import("../views/overlays/NewYear2024.vue"),
        meta: {
            isOverlay: true,
        },
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
