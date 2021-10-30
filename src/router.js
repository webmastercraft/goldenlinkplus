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
import SocialMedia_Privacy_Policy from './components/SocialMedia/SocialMedia_Privacy_Policy.vue';
import SocialMedia_Terms_Conditions from './components/SocialMedia/SocialMedia_Terms_Conditions.vue';
import SocialMedia_Guidelines from './components/SocialMedia/SocialMedia_Guidelines.vue';
import SocialMedia_BS_Guidelines from './components/SocialMedia/SocialMedia_BS_Guidelines.vue';
import SocialMedia_GS_Guidelines from './components/SocialMedia/SocialMedia_GS_Guidelines.vue';
import SocialMedia_Log_intro from './components/SocialMedia/SocialMedia_Log_intro.vue';
import SocialMedia_Log_verify from './components/SocialMedia/SocialMedia_Log_verify.vue';
import SocialMedia_Log_security from './components/SocialMedia/SocialMedia_Log_security.vue';
import SocialMedia_Log_touch_security from './components/SocialMedia/SocialMedia_Log_touch_security.vue';
import SocialMedia_Messaging_Messages from './components/SocialMedia/SocialMedia_Messaging_Messages.vue';
import SocialMedia_Main_Messages from './components/SocialMedia/SocialMedia_Main_Messages.vue';
import SocialMedia_Main_Messages_Chat from './components/SocialMedia/SocialMedia_Main_Messages_Chat.vue';
import SocialMedia_Main_Messages_Plus from './components/SocialMedia/SocialMedia_Main_Messages_Plus.vue';
import SocialMedia_Main_Messages_Welcome from './components/SocialMedia/SocialMedia_Main_Messages_Welcome.vue';
import SocialMedia_Main_Messages_Announcements from './components/SocialMedia/SocialMedia_Main_Messages_Announcements.vue';
import SocialMedia_Main_Messages_Resources from './components/SocialMedia/SocialMedia_Main_Messages_Resources.vue';
import SocialMedia_Main_Messages_General from './components/SocialMedia/SocialMedia_Main_Messages_General.vue';
import SocialMedia_Main_Messages_Marketing from './components/SocialMedia/SocialMedia_Main_Messages_Marketing.vue';
import SocialMedia_Main_Messages_Awesome from './components/SocialMedia/SocialMedia_Main_Messages_Awesome.vue';
import SocialMedia_Main_Messages_Brand from './components/SocialMedia/SocialMedia_Main_Messages_Brand.vue';
import SocialMedia_Main_Messages_Invite from './components/SocialMedia/SocialMedia_Main_Messages_Invite.vue';
import SocialMedia_Messaging_Chat from './components/SocialMedia/SocialMedia_Messaging_Chat.vue';
import SocialMedia_Search_Communities from './components/SocialMedia/SocialMedia_Search_Communities.vue';
import SocialMedia_Search_GS from './components/SocialMedia/SocialMedia_Search_GS.vue';
import SocialMedia_Search_Products from './components/SocialMedia/SocialMedia_Search_Products.vue';
import SocialMedia_Search_Services from './components/SocialMedia/SocialMedia_Search_Services.vue';
import SocialMedia_Search_Brands from './components/SocialMedia/SocialMedia_Search_Brands.vue';
import SocialMedia_Search_Brands_Event from './components/SocialMedia/SocialMedia_Search_Brands_Event.vue';
import SocialMedia_GS_Reg_Profile_Type from './components/SocialMedia/SocialMedia_GS_Reg_Profile_Type.vue';
import SocialMedia_GS_Reg_Profile_Photo from './components/SocialMedia/SocialMedia_GS_Reg_Profile_Photo.vue';
import SocialMedia_GS_Reg_Connect_Paypal from './components/SocialMedia/SocialMedia_GS_Reg_Connect_Paypal.vue';
import SocialMedia_GS_Reg_Start from './components/SocialMedia/SocialMedia_GS_Reg_Start.vue';
import SocialMedia_Main from './components/SocialMedia/SocialMedia_Main.vue';
import SocialMedia_Main_Create_Event from './components/SocialMedia/SocialMedia_Main_Create_Event.vue';
import SocialMedia_Main_Audio_Event from './components/SocialMedia/SocialMedia_Main_Audio_Event.vue';
import SocialMedia_Main_Activities from './components/SocialMedia/SocialMedia_Main_Activities.vue';
import SocialMedia_Main_Lounge from './components/SocialMedia/SocialMedia_Main_Lounge.vue';
import SocialMedia_Main_Lounge_Bs from './components/SocialMedia/SocialMedia_Main_Lounge_Bs.vue';
import SocialMedia_Main_Lounge_Add from './components/SocialMedia/SocialMedia_Main_Lounge_Add.vue';
import SocialMedia_Main_Lounge_Following from './components/SocialMedia/SocialMedia_Main_Lounge_Following.vue';
import SocialMedia_Main_Lounge_Event from './components/SocialMedia/SocialMedia_Main_Lounge_Event.vue';
import SocialMedia_Main_Lounge_Reward from './components/SocialMedia/SocialMedia_Main_Lounge_Reward.vue';
import SocialMedia_Main_Event_Voice from './components/SocialMedia/SocialMedia_Main_Event_Voice.vue';
import SocialMedia_Main_Event_Hallway from './components/SocialMedia/SocialMedia_Main_Event_Hallway.vue';
import SocialMedia_Main_Event_Chat from './components/SocialMedia/SocialMedia_Main_Event_Chat.vue';
import SocialMedia_Main_Event_Upcoming from './components/SocialMedia/SocialMedia_Main_Event_Upcoming.vue';
import SocialMedia_Main_My_Event from './components/SocialMedia/SocialMedia_Main_My_Event.vue';
import SocialMedia_Main_Notification_Setting from './components/SocialMedia/SocialMedia_Main_Notification_Setting.vue';
import SocialMedia_Main_Event_Host_View from './components/SocialMedia/SocialMedia_Main_Event_Host_View.vue';
import SocialMedia_Main_Event_Quick from './components/SocialMedia/SocialMedia_Main_Event_Quick.vue';
import SocialMedia_BS_Reg_Start from './components/SocialMedia/SocialMedia_BS_Reg_Start.vue';
import SocialMedia_Members_Lounge_One from './components/SocialMedia/SocialMedia_Members_Lounge_One.vue';
import SocialMedia_Members_Lounge_Two from './components/SocialMedia/SocialMedia_Members_Lounge_Two.vue';
import SocialMedia_Members_Lounge_Three from './components/SocialMedia/SocialMedia_Members_Lounge_Three.vue';
import SocialMedia_Reward from './components/SocialMedia/SocialMedia_Reward.vue';
import SocialMedia_BS_Reg_Profile_Photo from './components/SocialMedia/SocialMedia_BS_Reg_Profile_Photo.vue';
import SocialMedia_BS_Reg_Basic_Info from './components/SocialMedia/SocialMedia_BS_Reg_Basic_Info.vue';
import SocialMedia_BS_Recommendation_One from './components/SocialMedia/SocialMedia_BS_Recommendation_One.vue';
import SocialMedia_Wallet_Convert_GCoin from './components/SocialMedia/SocialMedia_Wallet_Convert_GCoin.vue';
import SocialMedia_Wallet_Convert_USD from './components/SocialMedia/SocialMedia_Wallet_Convert_USD.vue';
import SocialMedia_Wallet_CPC_Rewards from './components/SocialMedia/SocialMedia_Wallet_CPC_Rewards.vue';
import SocialMedia_Wallet_Commissions from './components/SocialMedia/SocialMedia_Wallet_Commissions.vue';
import SocialMedia_Wallet_Events from './components/SocialMedia/SocialMedia_Wallet_Events.vue';
import SocialMedia_GS_Wallet from './components/SocialMedia/GS_Wallet/SocialMedia_GS_Wallet.vue';
import SocialMedia_GS_Wallet_GLC from './components/SocialMedia/GS_Wallet/SocialMedia_GS_Wallet_GLC.vue';
import SocialMedia_GS_Wallet_Transaction from './components/SocialMedia/GS_Wallet/SocialMedia_GS_Wallet_Transaction.vue';
import SocialMedia_GS_Wallet_Paypal_Withdraw from './components/SocialMedia/GS_Wallet/SocialMedia_GS_Wallet_Paypal_Withdraw.vue';
import SocialMedia_GS_Wallet_Account from './components/SocialMedia/GS_Wallet/SocialMedia_GS_Wallet_Account.vue';
import SocialMedia_Verify_Account from './components/SocialMedia/SocialMedia_Verify_Account.vue';
import SocialMedia_Verify_Account_Success from './components/SocialMedia/SocialMedia_Verify_Account_Success.vue';

import SocialMedia_Wallet_Paypal_Confirm from './components/SocialMedia/SocialMedia_Wallet_Paypal_Confirm.vue';
import SocialMedia_Wallet_Apple_Confirm from './components/SocialMedia/SocialMedia_Wallet_Apple_Confirm.vue';
import SocialMedia_Wallet_Google_Confirm from './components/SocialMedia/SocialMedia_Wallet_Google_Confirm.vue';
import SocialMedia_Wallet_Payoneer_Confirm from './components/SocialMedia/SocialMedia_Wallet_Payoneer_Confirm.vue';


import SocialMedia_BS_Wallet from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet.vue';
import SocialMedia_BS_Wallet_Transaction from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Transaction.vue';
import SocialMedia_BS_Wallet_Account from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Account.vue';
import SocialMedia_BS_Wallet_Paypal from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Paypal.vue';
import SocialMedia_BS_Wallet_Paypal_Success from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Paypal_Success.vue';
import SocialMedia_BS_Wallet_Google from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Google.vue';
import SocialMedia_BS_Wallet_Google_Success from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Google_Success.vue';
import SocialMedia_BS_Wallet_Apple from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Apple.vue';
import SocialMedia_BS_Wallet_Apple_Success from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Apple_Success.vue';
import SocialMedia_BS_Wallet_Payoneer from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Payoneer.vue';
import SocialMedia_BS_Wallet_Payoneer_Success from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Payoneer_Success.vue';
import SocialMedia_BS_Wallet_Stripe from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Stripe.vue';
import SocialMedia_BS_Wallet_Stripe_Success from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Stripe_Success.vue';
import SocialMedia_BS_Wallet_Paypal_Withdraw from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Paypal_Withdraw.vue';
import SocialMedia_BS_Wallet_Linked_Account from './components/SocialMedia/BS_Wallet/SocialMedia_BS_Wallet_Linked_Account.vue';

import SocialMedia_Recommendation_One from './components/SocialMedia/SocialMedia_Recommendation_One.vue';
import SocialMedia_Recommendation_Two from './components/SocialMedia/SocialMedia_Recommendation_Two.vue';
import SocialMedia_Recommendation_Three from './components/SocialMedia/SocialMedia_Recommendation_Three.vue';

import SocialMedia_BS_Profile from './components/SocialMedia/SocialMedia_BS_Profile.vue';
import SocialMedia_GS_Profile from './components/SocialMedia/SocialMedia_GS_Profile.vue';
import SocialMedia_Profile_Offer from './components/SocialMedia/SocialMedia_Profile_Offer.vue';

import SocialMedia_BS_User_Center from './components/SocialMedia/BS_Center/SocialMedia_BS_User_Center.vue';
import SocialMedia_BS_Update_Profile from './components/SocialMedia/BS_Center/SocialMedia_BS_Update_Profile.vue';
import SocialMedia_BS_Update_Account from './components/SocialMedia/BS_Center/SocialMedia_BS_Update_Account.vue';
import SocialMedia_BS_Update_Business_Agreement from './components/SocialMedia/BS_Center/SocialMedia_BS_Update_Business_Agreement.vue';
import SocialMedia_BS_Update_Account_Checkout from './components/SocialMedia/BS_Center/SocialMedia_BS_Update_Account_Checkout.vue';
import SocialMedia_BS_Internal_Role from './components/SocialMedia/BS_Center/SocialMedia_BS_Internal_Role.vue';
import SocialMedia_BS_Brands from './components/SocialMedia/BS_Center/SocialMedia_BS_Brands.vue';
import SocialMedia_BS_Product from './components/SocialMedia/BS_Center/SocialMedia_BS_Product.vue';
import SocialMedia_BS_Services from './components/SocialMedia/BS_Center/SocialMedia_BS_Services.vue';
import SocialMedia_BS_Offers from './components/SocialMedia/BS_Center/SocialMedia_BS_Offers.vue';
import SocialMedia_BS_Reward from './components/SocialMedia/BS_Center/SocialMedia_BS_Reward.vue';
import SocialMedia_BS_Campaign from './components/SocialMedia/BS_Center/SocialMedia_BS_Campaign.vue';

import SocialMedia_User_Center from './components/SocialMedia/User_Center/SocialMedia_User_Center.vue';
import SocialMedia_GS_Update_Profile from './components/SocialMedia/User_Center/SocialMedia_GS_Update_Profile.vue';
import SocialMedia_GS_Update_Account from './components/SocialMedia/User_Center/SocialMedia_GS_Update_Account.vue';
import SocialMedia_GS_Update_Account_How_It_Works from './components/SocialMedia/User_Center/SocialMedia_GS_Update_Account_How_It_Works.vue';
import SocialMedia_GS_Update_Account_Checkout from './components/SocialMedia/User_Center/SocialMedia_GS_Update_Account_Checkout.vue';
import SocialMedia_GS_Internal_Role from './components/SocialMedia/User_Center/SocialMedia_GS_Internal_Role.vue';
import SocialMedia_GS_Marketing from './components/SocialMedia/User_Center/SocialMedia_GS_Marketing.vue';
import SocialMedia_GS_Social from './components/SocialMedia/User_Center/SocialMedia_GS_Social.vue';
import SocialMedia_GS_Referrals from './components/SocialMedia/User_Center/SocialMedia_GS_Referrals.vue';
import SocialMedia_GS_Invite from './components/SocialMedia/User_Center/SocialMedia_GS_Invite.vue';

import SocialMedia_Community_Create from './components/SocialMedia/Community/SocialMedia_Community_Create.vue';
import SocialMedia_Community_Feed from './components/SocialMedia/Community/SocialMedia_Community_Feed.vue';
import SocialMedia_Community_Feed_Link from './components/SocialMedia/Community/SocialMedia_Community_Feed_Link.vue';
import SocialMedia_Community_About from './components/SocialMedia/Community/SocialMedia_Community_About.vue';
import SocialMedia_Community_Edit from './components/SocialMedia/Community/SocialMedia_Community_Edit.vue';
import SocialMedia_Community_Member from './components/SocialMedia/Community/SocialMedia_Community_Member.vue';
import SocialMedia_Community from './components/SocialMedia/Community/SocialMedia_Community.vue';
import SocialMedia_Community_Simple from './components/SocialMedia/Community/SocialMedia_Community_Simple.vue';



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
            path: '/socialmedia/socialmedia_privacy_policy',
            name: 'socialmedia_privacy_policy',
            components: { default: SocialMedia_Privacy_Policy },
        },
        {
            path: '/socialmedia/socialmedia_terms_conditions',
            name: 'socialmedia_terms_conditions',
            components: { default: SocialMedia_Terms_Conditions },
        },
        {
            path: '/socialmedia/socialmedia_guidelines',
            name: 'socialmedia_guidelines',
            components: { default: SocialMedia_Guidelines },
        },
        {
            path: '/socialmedia/socialmedia_gs_guidelines',
            name: 'socialmedia_gs_guidelines',
            components: { default: SocialMedia_GS_Guidelines },
        },
        {
            path: '/socialmedia/socialmedia_bs_guidelines',
            name: 'socialmedia_bs_guidelines',
            components: { default: SocialMedia_BS_Guidelines },
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
            path: '/socialmedia/socialmedia_main_messages',
            name: 'socialmedia_main_messages',
            components: { default: SocialMedia_Main_Messages },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_chat',
            name: 'socialmedia_main_messages_chat',
            components: { default: SocialMedia_Main_Messages_Chat },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_plus',
            name: 'socialmedia_main_messages_plus',
            components: { default: SocialMedia_Main_Messages_Plus },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_welcome',
            name: 'socialmedia_main_messages_welcome',
            components: { default: SocialMedia_Main_Messages_Welcome },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_announcements',
            name: 'socialmedia_main_messages_announcements',
            components: { default: SocialMedia_Main_Messages_Announcements },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_resources',
            name: 'socialmedia_main_messages_resources',
            components: { default: SocialMedia_Main_Messages_Resources },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_general',
            name: 'socialmedia_main_messages_general',
            components: { default: SocialMedia_Main_Messages_General },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_marketing',
            name: 'socialmedia_main_messages_marketing',
            components: { default: SocialMedia_Main_Messages_Marketing },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_awesome',
            name: 'socialmedia_main_messages_awesome',
            components: { default: SocialMedia_Main_Messages_Awesome },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_invite',
            name: 'socialmedia_main_messages_invite',
            components: { default: SocialMedia_Main_Messages_Invite },
        },
        {
            path: '/socialmedia/socialmedia_main_messages_brand',
            name: 'socialmedia_main_messages_brand',
            components: { default: SocialMedia_Main_Messages_Brand },
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
        },
        {
            path: '/socialmedia/socialmedia_search_brands',
            name: 'socialmedia_search_brands',
            components: { default: SocialMedia_Search_Brands },
        },
        {
            path: '/socialmedia/socialmedia_search_brands_event',
            name: 'socialmedia_search_brands_event',
            components: { default: SocialMedia_Search_Brands_Event },
        },
        {
            path: '/socialmedia/socialmedia_gs_reg_connect_paypal',
            name: 'socialmedia_gs_reg_connect_paypal',
            components: { default: SocialMedia_GS_Reg_Connect_Paypal },
        },
        {
            path: '/socialmedia/socialmedia_gs_reg_profile_photo',
            name: 'socialmedia_gs_reg_profile_photo',
            components: { default: SocialMedia_GS_Reg_Profile_Photo },
        },
        {
            path: '/socialmedia/socialmedia_gs_reg_profile_type',
            name: 'socialmedia_gs_reg_profile_type',
            components: { default: SocialMedia_GS_Reg_Profile_Type },
        },
        {
            path: '/socialmedia/socialmedia_gs_reg_start',
            name: 'socialmedia_gs_reg_start',
            components: { default: SocialMedia_GS_Reg_Start },
        },
        {
            path: '/socialmedia/socialmedia_main',
            name: 'socialmedia_main',
            components: { default: SocialMedia_Main },
        },
        {
            path: '/socialmedia/socialmedia_main_create_event',
            name: 'socialmedia_main_create_event',
            components: { default: SocialMedia_Main_Create_Event },
        },
        {
            path: '/socialmedia/socialmedia_main_audio_event',
            name: 'socialmedia_main_audio_event',
            components: { default: SocialMedia_Main_Audio_Event },
        },
        {
            path: '/socialmedia/socialmedia_main_activities',
            name: 'socialmedia_main_activities',
            components: { default: SocialMedia_Main_Activities },
        },
        {
            path: '/socialmedia/socialmedia_main_lounge',
            name: 'socialmedia_main_lounge',
            components: { default: SocialMedia_Main_Lounge },
        },
        {
            path: '/socialmedia/socialmedia_main_lounge_bs',
            name: 'socialmedia_main_lounge_bs',
            components: { default: SocialMedia_Main_Lounge_Bs },
        },
        {
            path: '/socialmedia/socialmedia_main_event_voice',
            name: 'socialmedia_main_event_voice',
            components: { default: SocialMedia_Main_Event_Voice },
        },
        {
            path: '/socialmedia/socialmedia_main_event_hallway',
            name: 'socialmedia_main_event_hallway',
            components: { default: SocialMedia_Main_Event_Hallway },
        },
        {
            path: '/socialmedia/socialmedia_main_event_chat',
            name: 'socialmedia_main_event_chat',
            components: { default: SocialMedia_Main_Event_Chat },
        },
        {
            path: '/socialmedia/socialmedia_main_event_upcoming',
            name: 'socialmedia_main_event_upcoming',
            components: { default: SocialMedia_Main_Event_Upcoming },
        },
        {
            path: '/socialmedia/socialmedia_main_my_event',
            name: 'socialmedia_main_my_event',
            components: { default: SocialMedia_Main_My_Event },
        },
        {
            path: '/socialmedia/socialmedia_recommendation_one',
            name: 'socialMedia_recommendation_one',
            components: { default: SocialMedia_Recommendation_One },
        },
        {
            path: '/socialmedia/socialmedia_recommendation_two',
            name: 'socialMedia_recommendation_two',
            components: { default: SocialMedia_Recommendation_Two },
        },
        {
            path: '/socialmedia/socialmedia_recommendation_three',
            name: 'socialMedia_recommendation_three',
            components: { default: SocialMedia_Recommendation_Three },
        },
        {
            path: '/socialmedia/socialmedia_bs_reg_start',
            name: 'socialMedia_bs_reg_start',
            components: { default: SocialMedia_BS_Reg_Start },
        },
        {
            path: '/socialmedia/socialmedia_members_lounge_one',
            name: 'socialMedia_members_lounge_one',
            components: { default: SocialMedia_Members_Lounge_One },
        },
        {
            path: '/socialmedia/socialmedia_members_lounge_two',
            name: 'socialMedia_members_lounge_two',
            components: { default: SocialMedia_Members_Lounge_Two },
        },
        {
            path: '/socialmedia/socialmedia_members_lounge_three',
            name: 'socialMedia_members_lounge_three',
            components: { default: SocialMedia_Members_Lounge_Three },
        },
        {
            path: '/socialmedia/socialmedia_reward',
            name: 'socialMedia_reward',
            components: { default: SocialMedia_Reward },
        },
        {
            path: '/socialmedia/socialmedia_bs_reg_profile_photo',
            name: 'socialmedia_bs_reg_profile_photo',
            components: { default: SocialMedia_BS_Reg_Profile_Photo },
        },
        {
            path: '/socialmedia/socialmedia_bs_reg_basic_info',
            name: 'socialmedia_bs_reg_basic_info',
            components: { default: SocialMedia_BS_Reg_Basic_Info },
        },
        {
            path: '/socialmedia/socialmedia_bs_recommendation_one',
            name: 'socialmedia_bs_recommendation_one',
            components: { default: SocialMedia_BS_Recommendation_One },
        },
        {
            path: '/socialmedia/socialmedia_bs_profile',
            name: 'socialmedia_bs_profile',
            components: { default: SocialMedia_BS_Profile },
        },
        {
            path: '/socialmedia/socialmedia_gs_profile',
            name: 'socialmedia_gs_profile',
            components: { default: SocialMedia_GS_Profile },
        },
        {
            path: '/socialmedia/socialmedia_profile_offer',
            name: 'socialmedia_profile_offer',
            components: { default: SocialMedia_Profile_Offer },
        },
        {
            path: '/socialmedia/socialmedia_main_notification_setting',
            name: 'socialmedia_main_notification_setting',
            components: { default: SocialMedia_Main_Notification_Setting },
        },
        {
            path: '/socialmedia/socialmedia_main_lounge_add',
            name: 'socialmedia_main_lounge_add',
            components: { default: SocialMedia_Main_Lounge_Add },
        },
        {
            path: '/socialmedia/socialmedia_main_lounge_following',
            name: 'socialmedia_main_lounge_following',
            components: { default: SocialMedia_Main_Lounge_Following },
        },
        {
            path: '/socialmedia/socialmedia_main_lounge_event',
            name: 'socialmedia_main_lounge_event',
            components: { default: SocialMedia_Main_Lounge_Event },
        },
        {
            path: '/socialmedia/socialmedia_main_lounge_reward',
            name: 'socialmedia_main_lounge_reward',
            components: { default: SocialMedia_Main_Lounge_Reward },
        },
        {
            path: '/socialmedia/socialmedia_verify_account',
            name: 'socialmedia_verify_account',
            components: { default: SocialMedia_Verify_Account },
        },
        {
            path: '/socialmedia/socialmedia_verify_account_success',
            name: 'socialmedia_verify_account_success',
            components: { default: SocialMedia_Verify_Account_Success },
        },
        {
            path: '/socialmedia/socialmedia_main_event_host_view',
            name: 'socialmedia_main_event_host_view',
            components: { default: SocialMedia_Main_Event_Host_View },
        },
        {
            path: '/socialmedia/socialmedia_main_event_quick',
            name: 'socialmedia_main_event_quick',
            components: { default: SocialMedia_Main_Event_Quick },
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_user_center',
            name: 'socialmedia_bs_user_center',
            components: { default: SocialMedia_BS_User_Center }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_update_profile',
            name: 'socialmedia_bs_update_profile',
            components: { default: SocialMedia_BS_Update_Profile }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_update_business_agreement',
            name: 'socialmedia_bs_update_business_agreement',
            components: { default: SocialMedia_BS_Update_Business_Agreement }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_update_account',
            name: 'socialmedia_bs_update_account',
            components: { default: SocialMedia_BS_Update_Account }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_update_account_checkout',
            name: 'socialmedia_bs_update_account_checkout',
            components: { default: SocialMedia_BS_Update_Account_Checkout }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_internal_role',
            name: 'socialmedia_bs_internal_role',
            components: { default: SocialMedia_BS_Internal_Role }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_brands',
            name: 'socialmedia_bs_brands',
            components: { default: SocialMedia_BS_Brands }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_product',
            name: 'socialmedia_bs_product',
            components: { default: SocialMedia_BS_Product }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_services',
            name: 'socialmedia_bs_services',
            components: { default: SocialMedia_BS_Services }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_offers',
            name: 'socialmedia_bs_offers',
            components: { default: SocialMedia_BS_Offers }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_reward',
            name: 'socialmedia_bs_reward',
            components: { default: SocialMedia_BS_Reward }
        },
        {
            path: '/socialmedia/bs_center/socialmedia_bs_campaign',
            name: 'socialmedia_bs_campaign',
            components: { default: SocialMedia_BS_Campaign }
        },
        {
            path: '/socialmedia/user_center/socialmedia_user_center',
            name: 'socialmedia_user_center',
            components: { default: SocialMedia_User_Center }
        },
        {
            path: '/socialmedia/user_center/socialmedia_gs_update_profile',
            name: 'socialmedia_gs_update_profile',
            components: { default: SocialMedia_GS_Update_Profile }
        },
        {
            path: '/socialmedia/user_center/socialmedia_gs_update_account',
            name: 'socialmedia_gs_update_account',
            components: { default: SocialMedia_GS_Update_Account }
        },
        {
            path: '/socialmedia/user_center/socialmedia_gs_update_account_checkout',
            name: 'socialmedia_gs_update_account_checkout',
            components: { default: SocialMedia_GS_Update_Account_Checkout }
        },
        {
            path: '/socialmedia/user_center/socialmedia_gs_update_account_how_it_works',
            name: 'socialmedia_gs_update_account_how_it_works',
            components: { default: SocialMedia_GS_Update_Account_How_It_Works }
        },
        {
            path: '/socialmedia/user_center/socialmedia_gs_internal_role',
            name: 'socialmedia_gs_internal_role',
            components: { default: SocialMedia_GS_Internal_Role }
        },
        {
            path: '/socialmedia/user_center/socialmedia_gs_marketing',
            name: 'socialmedia_gs_marketing',
            components: { default: SocialMedia_GS_Marketing }
        },
        {
            path: '/socialmedia/user_center/socialmedia_gs_social',
            name: 'socialmedia_gs_social',
            components: { default: SocialMedia_GS_Social }
        },
        {
            path: '/socialmedia/user_center/socialmedia_gs_referrals',
            name: 'socialmedia_gs_referrals',
            components: { default: SocialMedia_GS_Referrals }
        },
        {
            path: '/socialmedia/user_center/socialmedia_gs_invite',
            name: 'socialmedia_gs_invite',
            components: { default: SocialMedia_GS_Invite }
        },
        {
            path: '/socialmedia/gs_wallet/socialmedia_gs_wallet',
            name: 'socialmedia_gs_wallet',
            components: { default: SocialMedia_GS_Wallet },
        },
        {
            path: '/socialmedia/gs_wallet/socialmedia_gs_wallet_glc',
            name: 'socialmedia_gs_wallet_glc',
            components: { default: SocialMedia_GS_Wallet_GLC },
        },
        {
            path: '/socialmedia/gs_wallet/socialmedia_gs_wallet_transaction',
            name: 'socialmedia_gs_wallet_transaction',
            components: { default: SocialMedia_GS_Wallet_Transaction },
        },
        {
            path: '/socialmedia/gs_wallet/socialmedia_gs_wallet_account',
            name: 'socialmedia_gs_wallet_account',
            components: { default: SocialMedia_GS_Wallet_Account },
        },
        {
            path: '/socialmedia/gs_wallet/socialmedia_gs_wallet_paypal_withdraw',
            name: 'socialmedia_gs_wallet_paypal_withdraw',
            components: { default: SocialMedia_GS_Wallet_Paypal_Withdraw },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet',
            name: 'socialmedia_bs_wallet',
            components: { default: SocialMedia_BS_Wallet },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_transaction',
            name: 'socialmedia_bs_wallet_transaction',
            components: { default: SocialMedia_BS_Wallet_Transaction },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_account',
            name: 'socialmedia_bs_wallet_account',
            components: { default: SocialMedia_BS_Wallet_Account },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_paypal'
            ,
            name: 'socialmedia_bs_wallet_paypal',
            components: { default: SocialMedia_BS_Wallet_Paypal },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_paypal_success'
            ,
            name: 'socialmedia_bs_wallet_paypal_success',
            components: { default: SocialMedia_BS_Wallet_Paypal_Success },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_apple'
            ,
            name: 'socialmedia_bs_wallet_apple',
            components: { default: SocialMedia_BS_Wallet_Apple },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_apple_success'
            ,
            name: 'socialmedia_bs_wallet_apple_success',
            components: { default: SocialMedia_BS_Wallet_Apple_Success },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_google'
            ,
            name: 'socialmedia_bs_wallet_google',
            components: { default: SocialMedia_BS_Wallet_Google },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_google_success'
            ,
            name: 'socialmedia_bs_wallet_google_success',
            components: { default: SocialMedia_BS_Wallet_Google_Success },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_payoneer'
            ,
            name: 'socialmedia_bs_wallet_payoneer',
            components: { default: SocialMedia_BS_Wallet_Payoneer },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_payoneer_success'
            ,
            name: 'socialmedia_bs_wallet_payoneer_success',
            components: { default: SocialMedia_BS_Wallet_Payoneer_Success },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_stripe'
            ,
            name: 'socialmedia_bs_wallet_stripe',
            components: { default: SocialMedia_BS_Wallet_Stripe },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_stripe_success'
            ,
            name: 'socialmedia_bs_wallet_stripe_success',
            components: { default: SocialMedia_BS_Wallet_Stripe_Success },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_paypal_withdraw',
            name: 'socialmedia_bs_wallet_paypal_withdraw',
            components: { default: SocialMedia_BS_Wallet_Paypal_Withdraw },
        },
        {
            path: '/socialmedia/bs_wallet/socialmedia_bs_wallet_linked_account',
            name: 'socialmedia_bs_wallet_linked_account',
            components: { default: SocialMedia_BS_Wallet_Linked_Account },
        },
        {
            path: '/socialmedia/socialmedia_wallet_convert_usd',
            name: 'socialmedia_wallet_convert_usd',
            components: { default: SocialMedia_Wallet_Convert_USD },
        },
        {
            path: '/socialmedia/socialmedia_wallet_convert_gcoin',
            name: 'socialmedia_wallet_convert_gcoin',
            components: { default: SocialMedia_Wallet_Convert_GCoin },
        },
        {
            path: '/socialmedia/socialmedia_wallet_cpc_rewards',
            name: 'socialmedia_wallet_cpc_rewards',
            components: { default: SocialMedia_Wallet_CPC_Rewards },
        },
        {
            path: '/socialmedia/socialmedia_wallet_commissions',
            name: 'socialmedia_wallet_commissions',
            components: { default: SocialMedia_Wallet_Commissions },
        },
        {
            path: '/socialmedia/socialmedia_wallet_events',
            name: 'socialmedia_wallet_events',
            components: { default: SocialMedia_Wallet_Events },
        },
        {
            path: '/socialmedia/socialmedia_wallet_paypal_confirm',
            name: 'socialmedia_wallet_paypal_confirm',
            components: { default: SocialMedia_Wallet_Paypal_Confirm },
        },
        {
            path: '/socialmedia/socialmedia_wallet_apple_confirm',
            name: 'socialmedia_wallet_apple_confirm',
            components: { default: SocialMedia_Wallet_Apple_Confirm },
        },
        {
            path: '/socialmedia/socialmedia_wallet_google_confirm',
            name: 'socialmedia_wallet_google_confirm',
            components: { default: SocialMedia_Wallet_Google_Confirm },
        },
        {
            path: '/socialmedia/socialmedia_wallet_payoneer_confirm',
            name: 'socialmedia_wallet_payoneer_confirm',
            components: { default: SocialMedia_Wallet_Payoneer_Confirm },
        },
        {
            path: '/socialmedia/community/socialmedia_community_feed',
            name: 'socialmedia_community_feed',
            components: { default: SocialMedia_Community_Feed },
        },
        {
            path: '/socialmedia/community/socialmedia_community_feed_link',
            name: 'socialmedia_community_feed_link',
            components: { default: SocialMedia_Community_Feed_Link },
        },
        {
            path: '/socialmedia/community/socialmedia_community_about',
            name: 'socialmedia_community_about',
            components: { default: SocialMedia_Community_About },
        },
        {
            path: '/socialmedia/community/socialmedia_community_create',
            name: 'socialmedia_community_create',
            components: { default: SocialMedia_Community_Create },
        },
        {
            path: '/socialmedia/community/socialmedia_community',
            name: 'socialmedia_community',
            components: { default: SocialMedia_Community },
        },
        {
            path: '/socialmedia/community/socialmedia_community_edit',
            name: 'socialmedia_community_edit',
            components: { default: SocialMedia_Community_Edit },
        },
        {
            path: '/socialmedia/community/socialmedia_community_member',
            name: 'socialmedia_community_member',
            components: { default: SocialMedia_Community_Member },
        },
        {
            path: '/socialmedia/community/socialmedia_community_simple',
            name: 'socialmedia_community_simple',
            components: { default: SocialMedia_Community_Simple },
        },
    ],

});
