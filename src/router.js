import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Registration_one from './components/Registration_one.vue';
import Registration_two from './components/Registration_two.vue';
import Searchlocation from './components/Searchlocation.vue';
import Paymentoption from './components/Paymentoption.vue';

Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    routes: [{
            path: '/',
            name: 'home',
            components: { default: Home }
        },
        {
            path: '/registration_one',
            name: 'registration_one',
            components: { default: Registration_one },
        },
        {
            path: '/registration_two',
            name: 'registration_two',
            components: { default: Registration_two },
        },
        {
            path: '/searchlocation',
            name: 'searchlocation',
            components: { default: Searchlocation },

        },
        {
            path: '/paymentoption',
            name: 'paymentoption',
            components: { default: Paymentoption },
        }
    ],

});