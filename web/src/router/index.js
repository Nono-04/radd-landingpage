import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index.js';

Vue.use (VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import ('@/views/Home.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/login',
        name: 'Login',
        component: () => import ('@/views/auth/Login.vue'),
        meta: {
            requiresAuth: false
        }
    }, {
        path: '/register',
        name: 'Register',
        component: () => import ('@/views/auth/Register.vue'),
        meta: {
            requiresAuth: false
        }
    },

];

const router = new VueRouter ({mode: 'history', routes});
import pb from '@/plugins/pb';

router.beforeEach (async (to, from, next) => {
    if (!pb.authStore.isValid && to.meta.requiresAuth) {
        try {
            await pb.collection ('users').authRefresh ();
        } catch (error) {
            return next ({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    }

    next ();
});

export default router;
