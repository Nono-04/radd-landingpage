import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader

Vue.use (Vuetify);

export default new Vuetify ({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        options: {
            customProperties: true
        },
        dark: true,
        themes: {
            light: {
                primary: '#8e91fb',
                secondary: '#dae1e7',
                accent: '#0b5b30',
                background: '#eff5fb'
            },
            dark: {
                primary: '#8e91fb',
                secondary: '#101519',
                accent: '#1ce379',
                background: '#324a5f'
            }
        }
    }
});
