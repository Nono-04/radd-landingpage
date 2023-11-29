import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify.js';

import DiscordIcon from './components/icons/DiscordIcon.vue';

Vue.component('mdi-discord', DiscordIcon);

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.silent = true;
window.axios = require ('axios');
Vue.use (VueToast);
window.toast = Vue.$toast;

new Vue ({
    router,
    vuetify,
    render: (h) => h (App)
}).$mount ('#app');
