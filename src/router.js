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
import UserCenter_Social_Media from './components/GSUserCenter/UserCenter_Social_Media.vue';
import UserCenter_Invite from './components/GSUserCenter/UserCenter_Invite.vue';
import UserCenter_Upgrade_GS_Account from './components/GSUserCenter/UserCenter_Upgrade_GS_Account.vue';
import UserCenter_How_It_Works from './components/GSUserCenter/UserCenter_How_It_Works.vue';
import UserCenter_Membership_Agreement from './components/GSUserCenter/UserCenter_Membership_Agreement.vue';
import UserCenter_Secure_Checkout from './components/GSUserCenter/UserCenter_Secure_Checkout.vue';

import BUC_Home from './components/BusinessUserCenter/BUC_Home.vue';
import BUC_Create_Account from './components/BusinessUserCenter/BUC_Create_Account.vue';
import BUC_Profile from './components/BusinessUserCenter/BUC_Profile.vue';
import BUC_External_Business_Role from './components/BusinessUserCenter/BUC_External_Business_Role.vue';
import BUC_Internal_Business_Role from './components/BusinessUserCenter/BUC_Internal_Business_Role.vue';
import BUC_Brands from './components/BusinessUserCenter/BUC_Brands.vue';
import BUC_Account_Settings from './components/BusinessUserCenter/BUC_Account_Settings.vue';
import BUC_Account_Settings_Deposit from './components/BusinessUserCenter/BUC_Account_Settings_Deposit.vue';
import BUC_Products from './components/BusinessUserCenter/BUC_Products.vue';
import BUC_Services from './components/BusinessUserCenter/BUC_Services.vue';
import BUC_Offers from './components/BusinessUserCenter/BUC_Offers.vue';
import BUC_Start_Campaign from './components/BusinessUserCenter/BUC_Start_Campaign.vue';
import BUC_Marketer_Profile from './components/BusinessUserCenter/BUC_Marketer_Profile.vue';
import BUC_Coin_Rewards from './components/BusinessUserCenter/BUC_Coin_Rewards.vue';
import BUC_Marketing_Channel from './components/BusinessUserCenter/BUC_Marketing_Channel.vue';
import BUC_CPC_Rewards from './components/BusinessUserCenter/BUC_CPC_Rewards.vue';
import BUC_Certifications from './components/BusinessUserCenter/BUC_Certifications.vue';
import BUC_Upgrade_Account from './components/BusinessUserCenter/BUC_Upgrade_Account.vue';
import BUC_Business_Agreement from './components/BusinessUserCenter/BUC_Business_Agreement.vue';
import BUC_Secure_Checkout from './components/BusinessUserCenter/BUC_Secure_Checkout.vue';


import Overlay_Del_Brand from './components/Overlay/Overlay_Del_Brand.vue';
import Overlay_Del_Product from './components/Overlay/Overlay_Del_Product.vue';

import SocialMedia_Start from './components/SocialMedia/SocialMedia_Start.vue';
import SocialMedia_Reg_intro from './components/SocialMedia/SocialMedia_Reg_intro.vue';
import SocialMedia_Reg_verify from './components/SocialMedia/SocialMedia_Reg_verify.vue';
import SocialMedia_Reg_security from './components/SocialMedia/SocialMedia_Reg_security.vue';
import SocialMedia_Reg_touch_security from './components/SocialMedia/SocialMedia_Reg_touch_security.vue';
import SocialMedia_Reg_account_option from './components/SocialMedia/SocialMedia_Reg_account_option.vue';
import SocialMedia_Log_intro from './components/SocialMedia/SocialMedia_Log_intro.vue';
import SocialMedia_Log_verify from './components/SocialMedia/SocialMedia_Log_verify.vue';
import SocialMedia_Log_security from './components/SocialMedia/SocialMedia_Log_security.vue';
import SocialMedia_Log_touch_security from './components/SocialMedia/SocialMedia_Log_touch_security.vue';
import SocialMedia_Messaging_Messages from './components/SocialMedia/SocialMedia_Messaging_Messages.vue';
import SocialMedia_Messaging_Chat from './components/SocialMedia/SocialMedia_Messaging_Chat.vue';
import SocialMedia_Search_Communities from './components/SocialMedia/SocialMedia_Search_Communities.vue';
import SocialMedia_Search_GS from './components/SocialMedia/SocialMedia_Search_GS.vue';
import SocialMedia_Search_Products from './components/SocialMedia/SocialMedia_Search_Products.vue';
import SocialMedia_Search_Services from './components/SocialMedia/SocialMedia_Search_Services.vue';



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
            path: '/usercenter/upgrade_gs_account',
            name: 'upgrade_gs_account',
            components: { default: UserCenter_Upgrade_GS_Account },
        },
        {
            path: '/usercenter/how_it_works',
            name: 'how_it_works',
            components: { default: UserCenter_How_It_Works },
        },
        {
            path: '/usercenter/membership_agreement',
            name: 'membership_agreement',
            components: { default: UserCenter_Membership_Agreement },
        },
        {
            path: '/usercenter/secure_checkout',
            name: 'secure_checkout',
            components: { default: UserCenter_Secure_Checkout },
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
            path: '/usercenter/invite',
            name: 'invite',
            components: { default: UserCenter_Invite },
        },
        {
            path: '/usercenter/coins_award',
            name: 'coins_award',
            components: { default: UserCenter_Coin_Award },
        },
        {
            path: '/usercenter/social_media',
            name: 'social_media',
            components: { default: UserCenter_Social_Media },
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
            path: '/businessusercenter/account_settings',
            name: 'account settings',
            components: { default: BUC_Account_Settings },
        },
        {
            path: '/businessusercenter/account_settings_deposit',
            name: 'account_settings_deposit',
            components: { default: BUC_Account_Settings_Deposit },
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
            path: '/businessusercenter/upgrade_business_account',
            name: 'upgrade_business_account',
            components: { default: BUC_Upgrade_Account },
        },
        {
            path: '/businessusercenter/business_agreement',
            name: 'business_agreement',
            components: { default: BUC_Business_Agreement },
        },
        {
            path: '/businessusercenter/business_secure_checkout',
            name: 'business_secure_checkout',
            components: { default: BUC_Secure_Checkout },
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
        },
        {
            path: '/businessusercenter/certifications',
            name: 'certifications',
            components: { default: BUC_Certifications },
        },
        {
            path: '/socialmedia/socialmediastart',
            name: 'socialmediastart',
            components: { default: SocialMedia_Start },
        },
        {
            path: '/socialmedia/socialmedia_reg_intro',
            name: 'socialmedia_reg_intro',
            components: { default: SocialMedia_Reg_intro },
        },
        {
            path: '/socialmedia/socialmedia_reg_verify',
            name: 'socialmedia_reg_verify',
            components: { default: SocialMedia_Reg_verify },
        },
        {
            path: '/socialmedia/socialmedia_reg_security',
            name: 'socialmedia_reg_security',
            components: { default: SocialMedia_Reg_security },
        },
        {
            path: '/socialmedia/socialmedia_reg_touch_security',
            name: 'socialmedia_reg_touch_security',
            components: { default: SocialMedia_Reg_touch_security },
        },
        {
            path: '/socialmedia/socialmedia_reg_account_option',
            name: 'socialmedia_reg_account_option',
            components: { default: SocialMedia_Reg_account_option },
        },
        {
            path: '/socialmedia/socialmedia_log_intro',
            name: 'socialmedia_log_intro',
            components: { default: SocialMedia_Log_intro },
        },
        {
            path: '/socialmedia/socialmedia_log_verify',
            name: 'socialmedia_log_verify',
            components: { default: SocialMedia_Log_verify },
        },
        {
            path: '/socialmedia/socialmedia_log_security',
            name: 'socialmedia_log_security',
            components: { default: SocialMedia_Log_security },
        },
        {
            path: '/socialmedia/socialmedia_log_touch_security',
            name: 'socialmedia_log_touch_security',
            components: { default: SocialMedia_Log_touch_security },
        },
        {
            path: '/socialmedia/socialmedia_messaging_messages',
            name: 'socialmedia_messaging_messages',
            components: { default: SocialMedia_Messaging_Messages },
        },
        {
            path: '/socialmedia/socialmedia_messaging_chat',
            name: 'socialmedia_messaging_chat',
            components: { default: SocialMedia_Messaging_Chat },
        },
        {
            path: '/socialmedia/socialmedia_search_products',
            name: 'socialmedia_search_products',
            components: { default: SocialMedia_Search_Products },
        },
        {
            path: '/socialmedia/socialmedia_search_gs',
            name: 'socialmedia_search_gs',
            components: { default: SocialMedia_Search_GS },
        },
        {
            path: '/socialmedia/socialmedia_search_services',
            name: 'socialmedia_search_services',
            components: { default: SocialMedia_Search_Services },
        },
        {
            path: '/socialmedia/socialmedia_search_communities',
            name: 'socialmedia_search_communities',
            components: { default: SocialMedia_Search_Communities },
        }
    ],

});
