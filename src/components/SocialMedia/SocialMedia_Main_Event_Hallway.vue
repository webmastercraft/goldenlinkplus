<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
          <div class="welcome_dialog loading_screen" v-if="isPopup">
            <div class="popup_lounge_content" @click="disablePopup(1)">
              <p><img src="popup_heart.png"><span>Alice Hansen followed you</span></p>
              <!-- <div class="lounge_popup_btn">
                <button >Maybe Later</button>
                <router-link to="/socialmedia/socialmedia_main_event_voice"><button>Join as Speaker</button></router-link>
              </div> -->
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
            <p><img src="microphone.png" class="favicon_img">LIVE AUDIO EVENTS</p>
          </div>
          <div class="main_body main_body_audio">
            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                </router-link>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <button>Join this Event</button>
                </router-link>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                </router-link>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <button>Join this Event</button>
                </router-link>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                </router-link>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <button>Join this Event</button>
                </router-link>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                </router-link>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <button>Join this Event</button>
                </router-link>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                </router-link>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <router-link to="/socialmedia/socialmedia_main_event_voice">
                  <button>Join this Event</button>
                </router-link>
                </router-link>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>
          </div>
          <router-link to="/socialmedia/socialmedia_main_event_voice" class="footer_background hallway_bottom">
            <div>
              <div class="hallway_bottom">
                
                <span class="hallway_log">
                  <img src="hallway_user.png">
                  <span>+254 others</span>
                </span>

                <router-link to="/socialmedia/socialmedia_main_create_event"><button class="audio_circle_btn">Create Audio Event</button></router-link>

                <span class="hallway_icon">
                  <router-link to="/socialmedia/socialmedia_main">
                    <img src="thumbs.png">
                  </router-link>
                  <img src="invite.png" @click="showHallway" class="invite_correct_btn">
                  <img :src="imgSrc" @click="micClicked = !micClicked" class="hallway_mic_btn">
                </span>

              </div>
            </div>
          </router-link>
          <Hallway 
                v-show="f_show_hallway"
                @user-backdrop="removeFlagFromStack"
          >
          </Hallway>
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
import { default as Vuedals, Component as Vuedal, Bus as VuedalsBus } from 'vuedals';
import Hallway from "../../modal/hallway.vue";
import SwitchGsAccount from "../../modal/switch_gs_account.vue";
import Toggle from "../../modal/toggle.vue";

export default {
  name: 'Event_Hallway',
  components: {
    SwitchGsAccount,
    Hallway,
    Toggle,
  },
  data () {
    return {
      isPopup: false,
      verifyPopup: false,
      micClicked: false,
      f_show_hallway: false,
      f_show_toggle: false,
      f_show_switch_gs_account: false,
      modalStack: [],
    }
  },
  methods: {
    closeModal() {
      this.f_show_switch_gs_account = false;
      this.f_show_toggle = false;
      this.isModalVisible = false;
    },
    showHallway() {
        this.f_show_hallway = true;
        this.modalStack.push('f_show_hallway');
    },
    showToggle() {
        this.f_show_toggle = true;
    },
    removeFlagFromStack() {

      let temp = this.modalStack.pop(-1);

      switch (temp) {
        case 'f_show_hallway':
          this.f_show_hallway = false
          break;
        default:
          break;
      }
      this.f_show_hallway = false
    },
    showSwitchGsAccount() {
      this.f_show_switch_gs_account = true;
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
  computed: {
    imgSrc: function () {
      return this.micClicked ? 'mic_small.png' : 'mic_small_dis.png'
    }
  },
  created () {
    setTimeout(() => {
          this.isPopup = true;
    }, 3000);
  },
}
</script>
<style>
  .hallway_bottom {
    background-image: none !important;
    border-radius: 30px 30px 0 0;
    display: flex;
    bottom: 0;
    max-width: 414px;
    width: 100%;
    height: 90px;
    background: white;
    position: fixed;
  }
  .hallway_log {
    width: 50%;
    display: flex;
    margin: 40px auto 0;
    padding-left: 20px;
  }
  .hallway_log img{
    width: 89px;
    height: 37px;
    float: left;
  }
  .hallway_log span {
    margin: auto;
    font-size: 13px;
    letter-spacing: 0.02em;
  }
  .hallway_icon {
    width: 50% !important;
    text-align: right !important;
    padding-right: 20px;
    display: flex;
    padding: 35px 25px 0px;
  }
  .hallway_bottom button {
    bottom: 40px !important;
  }
  .hallway_icon img {
    width: 27px;
    height: 27px;
    margin: auto;
  }
  .logo_header {
    display: flex;
  }
  .logo_header a{
    margin: auto;
  }
  .hallway_icon a {
    margin: auto;
  }
  .invite_correct_btn {
    width: 20px !important;
    height: 20px !important;
  }
  .hallway_mic_btn {
    width: 13px !important;
    height: 18px !important;
  }
</style>
 