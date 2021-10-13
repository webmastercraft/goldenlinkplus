<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
          <div class="welcome_dialog loading_screen" v-if="isPopup">
            <div class="popup_lounge_content">
              <p><img src="popup_hand.png"><span>Jean Smith invited you to join as a speaker</span></p>
              <div class="lounge_popup_btn">
                <button  @click="disablePopup(1)">Maybe Later</button>
                <router-link to="/socialmedia/socialmedia_main_event_voice"><button>Join as Speaker</button></router-link>
              </div>
            </div>
          </div>
          <div class="main_audio_modal">
            <div class="logo_header">
                <img src="toggle.png" class="toggle_menu_btn" @click="showToggle">
                <router-link to="/"><img src="main_logo.png" class="main_logo"></router-link>
                <router-link to="/socialmedia/socialmedia_messaging_messages"><img src="main_box.png"></router-link>
                <router-link to="/socialmedia/socialmedia_main_event_upcoming">
                  <img src="main_calendar.png">
                </router-link>
                <router-link to="/socialmedia/community/socialmedia_community"><img src="main_contact.png" class="main_contact"></router-link>
                <img src="mona.png" class="main_user" @click="showSwitchGsAccount">
            </div>
            <p><img src="member's_lounge.png" class="favicon_img">MEMBER’S LOUNGE</p>
          </div>
          <div class="main_body main_body_audio">
           
            <div class="lounge_content">
              <router-link class="menu_item" v-for="(item) in items" :key="item.rout" :to="`/socialmedia/${item.rout}`">
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
          <SwitchGsAccount 
            v-show="f_show_switch_gs_account"
            @close="closeModal"
          >
          </SwitchGsAccount>
          <Toggle 
              v-show="f_show_toggle"
              @close="closeViewProfile"
              @view-backdrop="closeViewProfile"
          >
          </Toggle>
      </div>
    </div>
  </div>
</template>
<script>
import SwitchGsAccount from "../../modal/switch_gs_account.vue";
import Toggle from "../../modal/toggle.vue";

export default {
  name: 'Lounge',
  components: {
    Toggle,
    SwitchGsAccount,
  },
  data() {
    return {
      isPopup: false,
      verifyPopup: false,
      f_show_toggle: false,
      f_show_switch_gs_account: false,
      items: [
          {rout : "socialmedia_gs_profile", img: "lounge_profile.png", name: "My Profile"}, 
          {rout : "user_center/socialmedia_user_center", img: "lounge_usercenter.png", name: "My User Center"},
          {rout : "socialmedia_main_lounge_add", img: "lounge-addons.png", name: "My Add-ons"},
          {rout : "", img: "lounge_membership.png", name: "My Membership"},
          {rout : "gs_wallet/socialmedia_gs_wallet", img: "lounge_wallet.png", name: "My Wallet"},
          {rout : "socialmedia_search_communities", img: "lounge_communities.png", name: "My Communities"},
          {rout : "socialmedia_main_lounge_event", img: "lounge_event.png", name: "My Events"},
          {rout : "", img: "lounge_interests.png", name: "My Interests"},
          {rout : "socialmedia_main_lounge_reward", img: "lounge_rewards.png", name: "My Rewards"},
        ]
      }
  },
  methods: {
    closeModal() {
      this.f_show_switch_gs_account = false;
      this.f_show_toggle = false;
      this.isModalVisible = false;
    },
    showSwitchGsAccount() {
      this.f_show_switch_gs_account = true;
    },
    showToggle() {
        this.f_show_toggle = true;
    },
    closeViewProfile() {
      this.f_show_toggle = false;
    },
    disablePopup(index) {
      this.isPopup = false
      if (index > 1) {
        this.verifyPopup = true;
        setTimeout(() => {
          this.verifyPopup = false;
        }, 1500);
      }
    },
    activePopup() {
      this.isPopup = true
    },
  },
  created () {
    setTimeout(() => {
          this.isPopup = true;
    }, 3000);
  },
}
</script>
<style>
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
  .popup_lounge_content {
    padding: 20px 35px;
    background: rgba(59, 62, 81, 0.9);
  }
  .popup_lounge_content p {
    display: flex;
    color: white;
  }
  .popup_lounge_content p span {
    text-align: left;
  }
  .popup_lounge_content p img {
    margin: auto 20px auto auto;
  }
  .lounge_popup_btn {
    display: flex;
    width: 100%;
    margin-top: 15px;
  }
  .lounge_popup_btn button{
    color: #13C8FF;
    border-radius: 16px;
    background: white;
    padding: 3px 15px;
  }
  .lounge_popup_btn button:nth-child(1) {
    margin: auto auto auto 0;
  }
  .lounge_popup_btn button:nth-child(2) {
    margin: auto 0 auto auto;
  }
</style>
 