import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Registration_home from './components/Registration/Home.vue';
import Registration_one from './components/Registration/Registration_one.vue';
import Registration_two from './components/Registration/Registration_two.vue';
import Registration_three from './components/Registration/Registration_three.vue';
import Registration_four from './components/Registration/Registration_four.vue';
import Registration_five from './components/Registration/Registration_five.vue';
import Registration_six from './components/Registration/Registration_six.vue';
import Registration_seven from './components/Registration/Registration_seven.vue';

import UserCenter_home from './components/UserCenter/Home.vue';
import UserCenter_Profile from './components/UserCenter/UserCenter_Profile.vue';
import UserCenter_Create_Account from './components/UserCenter/UserCenter_Create_Account.vue';
import UserCenter_Marketing_Direction from './components/UserCenter/UserCenter_Marketing_Direction.vue';
import UserCenter_Marketing_Direction_Add from './components/UserCenter/UserCenter_Marketing_Direction_Add.vue';
import UserCenter_Internal_Business_Role from './components/UserCenter/UserCenter_Internal_Business_Role.vue';
import UserCenter_My_Referrals from './components/UserCenter/UserCenter_My_Referrals.vue';
import UserCenter_My_Commissions from './components/UserCenter/UserCenter_My_Commissions.vue';
import UserCenter_Payments from './components/UserCenter/UserCenter_Payments.vue';
import UserCenter_Messaging from './components/UserCenter/UserCenter_Messaging.vue';
import UserCenter_Coin_Award from './components/UserCenter/UserCenter_Coin_Award.vue';

Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            components: { default: Home }
        },
        {
            path: '/registration',
            name: 'home',
            components: { default: Registration_home }
        },
        {
            path: '/registration/one',
            name: 'one',
            components: { default: Registration_one },
        },
        {
            path: '/registration/two',
            name: 'two',
            components: { default: Registration_two },

        },
        {
            path: '/registration/three',
            name: 'three',
            components: { default: Registration_three },
        },
        {
            path: '/registration/four',
            name: 'four',
            components: { default: Registration_four },
        },
        {
            path: '/registration/five',
            name: 'five',
            components: { default: Registration_five },
        },
        {
            path: '/registration/six',
            name: 'six',
            components: { default: Registration_six },
        },
        {
            path: '/registration/seven',
            name: 'seven',
            components: { default: Registration_seven },
        },
        {
            path: '/usercenter',
            name: 'home',
            components: { default: UserCenter_home }
        },
        {
            path: '/usercenter/profile',
            name: 'profile',
            components: { default: UserCenter_Profile },

        },
        {
            path: '/usercenter/create_account',
            name: 'create_account',
            components: { default: UserCenter_Create_Account },
        },
        {
            path: '/usercenter/marketing_direction',
            name: 'marketing_direction',
            components: { default: UserCenter_Marketing_Direction },
        },
        {
            path: '/usercenter/marketing_direction_add',
            name: 'marketing_direction_add',
            components: { default: UserCenter_Marketing_Direction_Add },
        },
        {
            path: '/usercenter/internal_business_role',
            name: 'internal_business_role',
            components: { default: UserCenter_Internal_Business_Role },
        },
        {
            path: '/usercenter/my_referrals',
            name: 'my_referrals',
            components: { default: UserCenter_My_Referrals },
        },
        {
            path: '/usercenter/my_commissions',
            name: 'my_commissions',
            components: { default: UserCenter_My_Commissions },
        },
        {
            path: '/usercenter/payments',
            name: 'payments',
            components: { default: UserCenter_Payments },
        },
        {
            path: '/usercenter/messaging',
            name: 'messaging',
            components: { default: UserCenter_Messaging },
        },
        {
            path: '/usercenter/coin_award',
            name: 'coin_award',
            components: { default: UserCenter_Coin_Award },
        }
    ],

});