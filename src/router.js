import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Registration_one from './components/Registration_one.vue';
import Registration_two from './components/Registration_two.vue';
import Registration_three from './components/Registration_three.vue';
import Registration_four from './components/Registration_four.vue';
import Registration_five from './components/Registration_five.vue';
import Registration_six from './components/Registration_six.vue';
import Registration_seven from './components/Registration_seven.vue';

Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
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
            path: '/registration_three',
            name: 'registration_three',
            components: { default: Registration_three },
        },
        {
            path: '/registration_four',
            name: 'registration_four',
            components: { default: Registration_four },
        },
        {
            path: '/registration_five',
            name: 'registration_five',
            components: { default: Registration_five },
        },
        {
            path: '/registration_six',
            name: 'registration_six',
            components: { default: Registration_six },
        },
        {
            path: '/registration_seven',
            name: 'registration_seven',
            components: { default: Registration_seven },
        }
    ],

});