<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="main_audio_modal">
            <div class="logo_header">
                <img src="toggle.png" class="toggle_menu_btn" @click="showToggle">
                <router-link to="/"><img src="main_logo.png" class="main_logo"></router-link>
                <router-link to="/socialmedia/socialmedia_messaging_messages"><img src="main_box.png"></router-link>
                <router-link to="/socialmedia/socialmedia_main_event_upcoming">
                  <img src="main_calendar.png">
                </router-link>
                <router-link to="/socialmedia/community/socialmedia_community_feed_link"><img src="main_contact.png" class="main_contact"></router-link>
                <img src="Jean_Smith.png" class="main_user" @click="showSwitchBsAccount">
            </div>
            <p><img src="member's_lounge.png" class="favicon_img">MEMBER’S LOUNGE</p>
          </div>
          <div class="main_body main_body_audio">
           
            <div class="lounge_content">
              <router-link class="menu_item" v-for="(item) in items" :key="item.rout" :to="`/${item.rout}`">
                <div>
                    <p><img :src="`${item.img}`"><br>
                    <span>{{item.name}}</span></p>
                </div>
              </router-link>
            </div>
          </div>
          <div class="footer_background">
            <div class="footer_modal">
              <router-link to="/socialmedia/socialmedia_main">
              <span class="footer_img_rest_left">
              <img src="Home.png">
              <p>Home</p>
              </span>
              </router-link>

              <router-link to="/socialmedia/socialmedia_main_audio_event">
              <span class="footer_img_rest_left">
              <img src="audio_events.png">
              <p>Audio Events</p>
              </span>
              </router-link>

              <router-link to="/socialmedia/socialmedia_main_create_event"><button class="audio_circle_btn">Create Audio Event</button></router-link>

              <span class="footer_img footer_img_rest_right">
              <img src="lounge_orange.png">
              <p class="footer_select_title">Lounge</p>
              </span>

              <router-link to="/socialmedia/socialmedia_main_activities">
                <span class="footer_img_rest_right">
                  <img src="activities.png">
                  <p>Notification</p>
                </span>
              </router-link>
              
            </div>
          </div>
          <SwitchBsAccount 
            v-show="f_show_switch_bs_account"
            @close="closeModal"
            @user-backdrop="removeFlagFromStack"
          >
          </SwitchBsAccount>
          <Toggle 
              v-show="f_show_toggle"
              @close="closeViewProfile"
              @view-backdrop="closeViewProfile"
              @showTermCondition="termCondition"
              @showPrivacyPolicy="privacyPolicy"
              @showGuideline="guideline"
              @showBSAgreement="bsAgreement"
              @showGSAgreement="gsAgreement"
              @showTranslate="translate"
          >
          </Toggle>
          <TermCondition 
              v-show="f_show_term_condition"
              @close="backTermCondition"
              @view-backdrop="closeViewProfile"
          >
          </TermCondition>
          <PrivacyPolicy 
              v-show="f_show_privacy_policy"
              @close="backPrivacyPolicy"
              @view-backdrop="closeViewProfile"
          >
          </PrivacyPolicy>
          <Guideline 
              v-show="f_show_guideline"
              @close="backGuideline"
              @view-backdrop="closeViewProfile"
          >
          </Guideline>
          <BSAgreement 
              v-show="f_show_bs_agreement"
              @close="backBSAgreement"
              @view-backdrop="closeViewProfile"
          >
          </BSAgreement>
          <GSAgreement 
              v-show="f_show_gs_agreement"
              @close="backGSAgreement"
              @view-backdrop="closeViewProfile"
          >
          </GSAgreement>
          <Translate 
              v-show="f_show_translate"
              @close="backTranslate"
              @view-backdrop="closeViewProfile"
          >
          </Translate>
      </div>
    </div>
  </div>
</template>
<script>
import SwitchBsAccount from "../../modal/switch_bs_account.vue";
import Toggle from "../../modal/toggle.vue";
import TermCondition from "../../modal/term_condition.vue";
import PrivacyPolicy from "../../modal/privacy_policy.vue";
import Guideline from "../../modal/guideline.vue";
import BSAgreement from "../../modal/bs_agreement.vue";
import GSAgreement from "../../modal/gs_agreement.vue";
import Translate from "../../modal/translate.vue";

export default {
  name: 'Lounge_BS',
  components: {
    SwitchBsAccount,
    Toggle,
    TermCondition,
    PrivacyPolicy,
    Guideline,
    BSAgreement,
    GSAgreement,
    Translate
  },
  data() {
      return {
      f_show_switch_bs_account: false,
      f_show_toggle: false,
      f_show_term_condition: false,
      f_show_privacy_policy: false,
      f_show_guideline: false,
      f_show_bs_agreement: false,
      f_show_gs_agreement: false,
      f_show_translate: false,
      modalStack: [],
      items: [
          {rout : "socialmedia/socialmedia_bs_profile", img: "lounge_profile.png", name: "My Profile"}, 
          {rout : "socialmedia/bs_center/socialmedia_bs_user_center", img: "lounge_usercenter.png", name: "My User Center"},
          {rout : "socialmedia/bs_wallet/socialmedia_bs_wallet", img: "lounge_wallet.png", name: "My Wallet"},
          {rout : "socialmedia/socialmedia_search_communities", img: "lounge_communities.png", name: "My Communities"},
          {rout : "socialmedia/socialmedia_main_lounge_event", img: "lounge_event.png", name: "My Events"},
          {rout : "socialmedia/socialmedia_main_lounge_reward", img: "lounge_rewards.png", name: "My Rewards"},
          {rout : "socialmedia/socialmedia_main_lounge_add", img: "lounge-addons.png", name: "My Add-ons"},
        ]
      }
  },
  methods: {
    closeModal() {
      this.f_show_switch_bs_account = false;
      this.f_show_toggle = false;
      this.isModalVisible = false;
    },
    showSwitchBsAccount() {
      this.f_show_switch_bs_account = true;
    },
    showToggle() {
        this.f_show_toggle = true;
    },
    removeFlagFromStack() {
      let temp = this.modalStack.pop(-1);
      switch (temp) {
        case 'f_show_switch_gs_account':
          this.f_show_switch_gs_account = false
          break;
        default:
          // statements_def
          break;
      }
      switch (temp) {
        case 'f_show_switch_bs_account':
          this.f_show_switch_bs_account = false
          break;
        default:
          // statements_def
          break;
      }
      this.f_show_switch_bs_account = false,

      this.f_show_switch_gs_account = false
    },
    termCondition() {
        this.f_show_term_condition = true;
    },
    privacyPolicy() {
        this.f_show_privacy_policy = true;
    },
    guideline() {
        this.f_show_guideline = true;
    },
    bsAgreement() {
        this.f_show_bs_agreement = true;
    },
    gsAgreement() {
        this.f_show_gs_agreement = true;
    },
    translate() {
        this.f_show_translate = true;
    },
    backTermCondition() {
        this.f_show_term_condition = false;
    },
    backPrivacyPolicy() {
        this.f_show_privacy_policy = false;
    },
    backGuideline() {
        this.f_show_guideline = false;
    },
    backBSAgreement() {
        this.f_show_bs_agreement = false;
    },
    backGSAgreement() {
        this.f_show_gs_agreement = false;
    },
    backTranslate() {
        this.f_show_translate = false;
    },
    closeViewProfile() {
      this.f_show_toggle = false;
      this.f_show_term_condition = false;
      this.f_show_privacy_policy = false;
      this.f_show_guideline = false;
      this.f_show_bs_agreement = false;
      this.f_show_gs_agreement = false;
      this.f_show_translate = false;
    },
  }
}
</script>
<style>
  .lounge_content {
    width: 100%;
    margin: 20px auto 0;
    display: flex;
    flex-wrap: wrap;
  }
  .lounge_content .menu_item {
    margin: 5px;
    height: 85px;
    width: calc(50% - 10px);
    text-align: left;
    position: relative;
    border-radius: 5px;
    background: white;
  }
  .lounge_content .menu_item div {
    position: absolute;
    color: #3B3E51;
    font-size: 13px;
    bottom: 10px;
    left: 10px;
    text-decoration: none;
    letter-spacing: 0.04em;
  }
  .lounge_content p {
    margin: 0 0 0 10px;
  }
  .lounge_content img {
    margin-bottom: 10px;
  }
</style>
 