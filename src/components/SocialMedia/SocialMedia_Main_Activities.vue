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
            <p><img src="ring.png" class="favicon_img">ACTIVITIES</p>
          </div>
          <div class="main_body main_body_activities">
            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> pinged you</p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p>Ivan Tolestenko invited you as a<br>co-host in the Event How to make<br>Money Online in Money Makers<br>Community<br><button class="accept">Accept Invitation</button></p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p>scheduled <b>"Money Making Big Time"</b> with Alice Hansen for Monday, July 26 at 1:00pm</p>
              <p class="activities_num">25m</p>
            </div>
            
            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> followed you</p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> removed you from an Event <u>How to make Money Online</u><br><router-link to="/socialmedia/socialmedia_main_event_voice"><button class="rejoin">Rejoin the Event</button></router-link></p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user activities_color">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> followed you</p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user activities_color">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> followed you</p>
              <p class="activities_num">25m</p>
            </div>
            
            <div class="activities_user activities_color">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> removed you from an Event <u>How to make Money Online</u><br><router-link to="/socialmedia/socialmedia_main_event_voice"><button class="rejoin">Rejoin the Event</button></router-link></p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user activities_color">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> followed you</p>
              <p class="activities_num">25m</p>
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
  name: 'Activities',
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
    }
  },
  methods: {
    closeModal() {
      this.f_show_switch_gs_account = false;
      this.isModalVisible = false;
      this.f_show_toggle = false;
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
  .main_audio_modal {
    height: 90px;
    position: fixed;
    max-width: 414px;
    width: 100%;
    background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%);
    padding: 20px;
    z-index: 1;
  }
  .main_audio_modal .favicon_img {
    margin-right: 8px;
    text-align: left;
  }
  .main_audio_modal p {
    text-align: left;
    margin: 10px 0;
  }
  .main_body_audio {
    margin: 90px 20px 150px 20px !important;
  }
  .activities_user {
    display: flex;
    text-align: center;
    width: 100%;
    padding: 7px 20px;
    background: #D7F6FF;
  }
  .activities_user img {
    height: 100%;
    width: 32px;
    height: 32px;
  }
  .activities_user p {
    margin: auto auto auto 15px;
    text-align: left;
  }
  .activities_user .activities_num {
    text-align: right;
    float: right;
    margin: auto 0 !important;
    color: rgba(59, 62, 81, 0.6);
  }
  .activities_user .accept {
    background-color: #13C8FF;
    color: white;
    border-radius: 8px;
    letter-spacing: 0.02em;
    padding: 2px 10px;
    margin-top: 10px;
    width: 165px;
  }
  .activities_user .rejoin {
    border: 2px solid #FF0000;
    color: #FF0000;
    border-radius: 8px;
    letter-spacing: 0.02em;
    padding: 2px 10px;
    margin: 10px 0;
    width: 165px;
  }
  .main_body_activities {
    margin: 90px 0 20px 0;
    font-size: 14px;
  }
  .activities_color {
    background: white;
  }
</style>
 