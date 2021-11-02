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
                <img src="mona.png" class="main_user" @click="showSwitchGsAccount">
              </div>
            <p><img src="microphone.png" class="favicon_img">LIVE AUDIO EVENTS</p>
          </div>
          <div class="main_body main_body_audio">
            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <div class="para_group_img" v-for="(item, index) in loginData" :key="index">
                  <img :src="`${item.user_1}`">
                  <img :src="`${item.user_2}`">
                  <img :src="`${item.user_3}`">
                </div>
                <p class="group_user_flex">
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <div class="para_group_img" v-for="(item, index) in loginData" :key="index">
                  <img :src="`${item.user_1}`">
                  <img :src="`${item.user_2}`">
                  <img :src="`${item.user_3}`">
                </div>
                <p class="group_user_flex">
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <div class="para_group_img" v-for="(item, index) in loginData" :key="index">
                  <img :src="`${item.user_1}`">
                  <img :src="`${item.user_2}`">
                  <img :src="`${item.user_3}`">
                </div>
                <p class="group_user_flex">
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <div class="para_group_img" v-for="(item, index) in loginData" :key="index">
                  <img :src="`${item.user_1}`">
                  <img :src="`${item.user_2}`">
                  <img :src="`${item.user_3}`">
                </div>
                <p class="group_user_flex">
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <div class="para_group_img" v-for="(item, index) in loginData" :key="index">
                  <img :src="`${item.user_1}`">
                  <img :src="`${item.user_2}`">
                  <img :src="`${item.user_3}`">
                </div>
                <p class="group_user_flex">
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
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

              <span class="footer_img">
              <img src="audio_events_orange.png">
              <p class="footer_select_title">Audio Events</p>
              </span>

              <router-link to="/socialmedia/socialmedia_main_create_event"><button class="audio_circle_btn">Create Audio Event</button></router-link>

              <router-link to="/socialmedia/socialmedia_main_lounge">
              <span class="footer_img_rest_right">
              <img src="lounge.png">
              <p>Lounge</p>
              </span>
              </router-link>

              <router-link to="/socialmedia/socialmedia_main_activities">
                <span class="footer_img_rest_right">
                  <img src="activities.png">
                  <p>Notification</p>
                </span>
              </router-link>

            </div>
          </div>
          <SwitchGsAccount 
            v-show="f_show_switch_gs_account"
            @close="closeModal"
          >
          </SwitchGsAccount>
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
import SwitchGsAccount from "../../modal/switch_gs_account.vue";
import Toggle from "../../modal/toggle.vue";
import TermCondition from "../../modal/term_condition.vue";
import PrivacyPolicy from "../../modal/privacy_policy.vue";
import Guideline from "../../modal/guideline.vue";
import BSAgreement from "../../modal/bs_agreement.vue";
import GSAgreement from "../../modal/gs_agreement.vue";
import Translate from "../../modal/translate.vue";

export default {
  name: 'Audio_Event',
  components: {
    SwitchGsAccount,
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
      f_show_switch_gs_account: false,
      f_show_toggle: false,
      f_show_term_condition: false,
      f_show_privacy_policy: false,
      f_show_guideline: false,
      f_show_bs_agreement: false,
      f_show_gs_agreement: false,
      f_show_translate: false,
      loginData: [
        {
          user_1: "group_1.png",
          user_2: "group_2.png",
          user_3: "group_3.png"
        }
      ]
    }
  },
  methods: {
    closeModal() {
      this.f_show_switch_gs_account = false;
      this.f_show_toggle = false;
      this.isModalVisible = false;
    },
    showToggle() {
        this.f_show_toggle = true;
    },
    showSwitchGsAccount() {
      this.f_show_switch_gs_account = true;
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
  .group_user_flex {
    display: flex;
  }
  .group_user_flex img {
    height: 100%;
    margin: auto !important;
  }
</style>
 