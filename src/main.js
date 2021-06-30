import Vue from 'vue';
import App from './App.vue';

import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@/assets/styles/style.css';
import '@/assets/styles/modal.css';

library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(NowUiKit);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');