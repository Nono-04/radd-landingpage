import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify.js';

import DiscordIcon from './components/icons/DiscordIcon.vue';
import GoogleIcon from './components/icons/GoogleIcon.vue';
import ResetPassword from '@/components/auth/ResetPassword.vue';

Vue.component('reset-password', ResetPassword);
Vue.component('mdi-discord', DiscordIcon);
Vue.component('mdi-google', GoogleIcon);


Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.silent = true;
window.axios = require ('axios');
Vue.use (VueToast);
window.toast = Vue.$toast;

new Vue ({
    router,
    store,
    vuetify,
    render: (h) => h (App)
}).$mount ('#app');
