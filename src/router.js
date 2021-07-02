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

import UserCenter_home from './components/GSUserCenter/Home.vue';
import UserCenter_Profile from './components/GSUserCenter/UserCenter_Profile.vue';
import UserCenter_Create_Account from './components/GSUserCenter/UserCenter_Create_Account.vue';
import UserCenter_Marketing_Direction from './components/GSUserCenter/UserCenter_Marketing_Direction.vue';
import UserCenter_Marketing_Direction_Add from './components/GSUserCenter/UserCenter_Marketing_Direction_Add.vue';
import UserCenter_Internal_Business_Role from './components/GSUserCenter/UserCenter_Internal_Business_Role.vue';
import UserCenter_My_Referrals from './components/GSUserCenter/UserCenter_My_Referrals.vue';
import UserCenter_My_Commissions from './components/GSUserCenter/UserCenter_My_Commissions.vue';
import UserCenter_Payments from './components/GSUserCenter/UserCenter_Payments.vue';
import UserCenter_Messaging from './components/GSUserCenter/UserCenter_Messaging.vue';
import UserCenter_Coin_Award from './components/GSUserCenter/UserCenter_Coin_Award.vue';

import BUC_Home from './components/BusinessUserCenter/BUC_Home.vue';
import BUC_Create_Account from './components/BusinessUserCenter/BUC_Create_Account.vue';
import BUC_Profile from './components/BusinessUserCenter/BUC_Profile.vue';
import BUC_External_Business_Role from './components/BusinessUserCenter/BUC_External_Business_Role.vue';
import BUC_Internal_Business_Role from './components/BusinessUserCenter/BUC_Internal_Business_Role.vue';
import BUC_Brands from './components/BusinessUserCenter/BUC_Brands.vue';
import BUC_Products from './components/BusinessUserCenter/BUC_Products.vue';
import BUC_Services from './components/BusinessUserCenter/BUC_Services.vue';
import BUC_Offers from './components/BusinessUserCenter/BUC_Offers.vue';
import BUC_Start_Campaign from './components/BusinessUserCenter/BUC_Start_Campaign.vue';
import BUC_Marketer_Profile from './components/BusinessUserCenter/BUC_Marketer_Profile.vue';
import BUC_Coin_Rewards from './components/BusinessUserCenter/BUC_Coin_Rewards.vue';
import BUC_Marketing_Channel from './components/BusinessUserCenter/BUC_Marketing_Channel.vue';
import BUC_CPC_Rewards from './components/BusinessUserCenter/BUC_CPC_Rewards.vue';

import Overlay_Del_Brand from './components/Overlay/Overlay_Del_Brand.vue';
import Overlay_Del_Product from './components/Overlay/Overlay_Del_Product.vue';

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
            path: '/usercenter/marketing_direction/add',
            name: 'marketing_direction_add',
            components: { default: UserCenter_Marketing_Direction_Add },
        },
        {
            path: '/usercenter/internal_business_role',
            name: 'internal_business_role',
            components: { default: UserCenter_Internal_Business_Role },
        },
        {
            path: '/usercenter/referrals',
            name: 'referrals',
            components: { default: UserCenter_My_Referrals },
        },
        {
            path: '/usercenter/commissions',
            name: 'commissions',
            components: { default: UserCenter_My_Commissions },
        },
        {
            path: '/usercenter/payments',
            name: 'payments',
            components: { default: UserCenter_Payments },
        },
        {
            path: '/usercenter/notifications',
            name: 'notifications',
            components: { default: UserCenter_Messaging },
        },
        {
            path: '/usercenter/coins_award',
            name: 'coins_award',
            components: { default: UserCenter_Coin_Award },
        },
        {
            path: '/overlay_del_brand',
            name: 'coins_award',
            components: { default: Overlay_Del_Brand },
        },
        {
            path: '/overlay_del_product',
            name: 'coins_award',
            components: { default: Overlay_Del_Product },
        },
        {
            path: '/businessusercenter',
            name: 'home',
            components: { default: BUC_Home },
        },
        {
            path: '/businessusercenter/create_account',
            name: 'create_account',
            components: { default: BUC_Create_Account },
        },
        {
            path: '/businessusercenter/profile',
            name: 'profile',
            components: { default: BUC_Profile },
        },
        {
            path: '/businessusercenter/external_business_role',
            name: 'external_business_role',
            components: { default: BUC_External_Business_Role },
        },
        {
            path: '/businessusercenter/internal_business_role',
            name: 'internal_business_role',
            components: { default: BUC_Internal_Business_Role },
        },
        {
            path: '/businessusercenter/brands',
            name: 'brands',
            components: { default: BUC_Brands },
        },
        {
            path: '/businessusercenter/products',
            name: 'products',
            components: { default: BUC_Products },
        },
        {
            path: '/businessusercenter/services',
            name: 'services',
            components: { default: BUC_Services },
        },
        {
            path: '/businessusercenter/offers',
            name: 'offers',
            components: { default: BUC_Offers },
        },
        {
            path: '/businessusercenter/start_campaign',
            name: 'start_campaign',
            components: { default: BUC_Start_Campaign },
        },
        {
            path: '/businessusercenter/marketer_profile',
            name: 'marketer_profile',
            components: { default: BUC_Marketer_Profile },
        },
        {
            path: '/businessusercenter/coin_rewards',
            name: 'coin_rewards',
            components: { default: BUC_Coin_Rewards },
        },
        {
            path: '/businessusercenter/marketing_channel',
            name: 'marketing_channel',
            components: { default: BUC_Marketing_Channel },
        },
        {
            path: '/businessusercenter/cpc_rewards',
            name: 'cpc_rewards',
            components: { default: BUC_CPC_Rewards },
        }
    ],

});
