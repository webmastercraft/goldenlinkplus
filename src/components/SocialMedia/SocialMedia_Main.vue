<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
          <div class="welcome_dialog loading_screen" v-if="isPopup">
            <div class="popup_main_content">
              <p>Your email account is not yet verified. Let’s verify your email.</p>
              <div class="main_popup_btn">
                <button  @click="disablePopup(1)">Later</button>
                <button @click="disablePopup(2)">Verify Now</button>
              </div>
            </div>
          </div>
          <div class="welcome_dialog loading_screen" v-if="verifyPopup">
            <div class="popup_main_content_green">
              <p>A verification email has been sent to your registered email address. </p>
            </div>
          </div>
          <div class="main_modal">
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
            <div class="main_header">
              <router-link to="/socialmedia/socialmedia_search_products"><span><b>Products</b></span></router-link>
              <router-link to="/socialmedia/socialmedia_search_services"><span>Services</span></router-link>
              <router-link to="/socialmedia/socialmedia_search_gs"><span>GS</span></router-link>
              <router-link to="/socialmedia/socialmedia_search_brands"><span>Brands</span></router-link>
              <router-link to="/socialmedia/socialmedia_main_event_upcoming"><span>Events</span></router-link>
            </div>
            <div class="main_search">
                    <input type="text" placeholder="Search  Products..." class="form-control">
                    <img src="search.png">
            </div>
          </div>

          <swiper class="swiper">
            <swiper-slide>
              <!-- slide1 -->
              <div class="main_body">
                <img src="microphone.png" class="favicon_img">LIVE AUDIO EVENTS
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
              </div>         
            </swiper-slide>

            <swiper-slide>
              <!-- slide2 -->
              <div class="main_body">
                <p class="main_body_title"><img src="loading.png" class="favicon_img">ACTIVE COMMUNITIES</p>
                <div class="active_messages">
                    <img src="Alex_Burnham_off.png" class="messages_user_size">
                    <p>Alex Burnham<br><span class="socialmedia_messages_desc">6h</span></p>
                    <img src="send_2.png" class="active_send">
                    <img src="phone_call.png" class="active_send">
                </div>

                <div class="active_messages">
                    <img src="Chloe_Dickenson_off.png" class="messages_user_size">
                    <p>Chloe Dickenson<br><span class="socialmedia_messages_desc">6h</span></p>
                    <img src="send_2.png" class="active_send">
                    <img src="phone_call.png" class="active_send">
                </div>
                <p class="main_body_title"><img src="member's_lounge.png" class="favicon_img">ACTIVE USERS</p>

                  <div class="active_messages">
                    <img src="Alice_Wilson_on.png" class="messages_user_size">
                    <p>Alice Wilson<br><span class="socialmedia_messages_desc">Everything will be good!</span></p>
                    <img src="send_2.png" class="active_send">
                    <img src="phone_call.png" class="active_send">
                  </div>

                  <div class="active_messages">
                    <img src="Richard_Bennett_off.png" class="messages_user_size">
                    <p>Richard Bennett<br><span class="socialmedia_messages_desc">6h</span></p>
                    <img src="send_2.png" class="active_send">
                    <img src="phone_call.png" class="active_send">
                  </div>
                  
                  <div class="active_messages">
                    <img src="Alex_Burnham_off.png" class="messages_user_size">
                    <p>Alex Burnham<br><span class="socialmedia_messages_desc">6h</span></p>
                    <img src="send_2.png" class="active_send">
                    <img src="phone_call.png" class="active_send">
                  </div>

                  <div class="active_messages">
                    <img src="Chloe_Dickenson_off.png" class="messages_user_size">
                    <p>Chloe Dickenson<br><span class="socialmedia_messages_desc">6h</span></p>
                    <img src="send_2.png" class="active_send">
                    <img src="phone_call.png" class="active_send">
                  </div>
              </div>
            </swiper-slide>
          </swiper>
            
          <div class="footer_background">
            <div class="footer_modal">
              <span class="footer_img">
              <img src="Home_orange.png">
              <p class="footer_select_title">Home</p>
              </span>

              <router-link to="/socialmedia/socialmedia_main_audio_event">
                <span class="footer_img_rest_left">
                  <img src="audio_events.png">
                  <p>Audio Events</p>
                </span>
              </router-link>

              <button class="audio_circle_btn" @click="showEventType">Create Audio Event</button>

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
          <EventType 
            v-show="f_show_event_type"
            @close="closeModal"
          >
          </EventType>
          <SwitchGsAccount 
            v-show="f_show_switch_gs_account"
            @close="closeModal"
            @user-backdrop="removeFlagFromStack"
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/swiper-bundle.min.css";
import EventType from "../../modal/event_type.vue";
import SwitchGsAccount from "../../modal/switch_gs_account.vue";
import Toggle from "../../modal/toggle.vue";


export default {
  name: 'SocialMedia_Main',
  components: {
    Swiper,
    SwiperSlide,
    EventType,
    SwitchGsAccount,
    Toggle,
  },
  data () {
    return {
      isPopup: false,
      verifyPopup: false,
      isModalVisible: false,
      f_show_toggle: false,
      f_show_event_type: false,
      f_show_switch_gs_account: false,
      modalStack: [],
    }
  },
  methods: {
    closeModal() {
      this.f_show_toggle = false;
      this.f_show_event_type = false;
      this.f_show_switch_gs_account = false;
      this.isModalVisible = false;
    },
    showToggle() {
        this.f_show_toggle = true;
    },
    showEventType() {
      this.f_show_event_type = true;
    },
    showSwitchGsAccount() {
      this.f_show_switch_gs_account = true;
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
  .swiper {
    max-width: 414px;
  }
  .swiper .swiper-slide {
     display: flex;
  }
  .main_modal {
    height: 170px;
    width: 100%;
    max-width: 414px;
    position: fixed;
    background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%);
    padding: 20px;
    z-index: 99;
  }
  .main_logo {
    float: left;
  }
  .main_icon {
    margin: 0 10px;
  }
  .main_user {
    float: right;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: auto 0 auto auto;
  }
  .main_header {
    text-align: left;
    margin-top: 20px;
    width: 100%;
    display: flex;
  }
  .main_header a {
    margin: auto;
    text-align: left;
  }
  .main_header a:first-child {
    margin: auto auto auto 0;
  }
  .main_search {
    position: relative;
    margin: 10px 0;
  }
  .main_search input {
    width: 100%;
    height: 50px;
    border: 0 solid white !important;
    border-radius: 16px !important;
    padding-left: 30px !important;
    padding-right: 70px !important;
  }
  .main_search img {
    position: absolute;
    top: 17px;
    right: 30px;
  }
  .main_body {
    margin: 170px 20px 150px 20px;
    width: 100%;
    text-align: left;
  }
  .favicon_img {
    margin-right: 8px;
    margin-bottom: 3px;
  }
  .para_event {
    margin: 10px 0;
    display: flex;
    background-color: white;
    border-radius: 16px;
    padding: 20px 15px;
  }
  .para_event p {
    margin: 0;
  }
  .para_event .para_group {
    width: calc(100% - 193px);
    text-align: center;
    margin: auto;
  }
  .para_event_title {
    font-size: 15px !important;
  }
  .para_event p {
    font-size: 13px;
    letter-spacing: 0.08em;
  }
  .para_title {
    letter-spacing: 0.02em;
  }
  .favicon_img_left {
    margin-left: 5px;
  }
  .para_group p {
    margin-top: 20px;
  }
  .para_title button {
    background-color: #EF8200;
    color: white;
    border-radius: 32px;
    padding: 3px 17px;
    margin-top: 15px;
  }
  .para_group p img {
    margin: 0 3px;
  }
  .footer_modal {
    bottom: 0;
    max-width: 414px;
    width: 100%;
    height: 80px;
    background: white;
    position: fixed;
    display: block;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 42.19%);
  }
  .footer_modal span {
    width: 20%;
    text-align: center;
    padding-top: 15px;
    display: inline-block;
    float: left;
    z-index: -1;
  }
  .footer_modal span p {
    margin: 10px 0 0;
    font-size: 12px;
  }
  .footer_select_title {
    color: #EF8200;
  }
  .footer_background {
    position: fixed;
    width: 100%;
    max-width: 414px;
    height: 200px;
    bottom: 0;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 42.19%);
    z-index: 99;
  }
  .footer_img {
    border-top: 3px solid #EF8200 !important;
  }
  .footer_img_rest_left {
    float: left;
    border-top: 3px solid #e8f1fa;
  }
  .footer_img_rest_right {
    float: right !important;
    border-top: 3px solid #e8f1fa;
    position: relative;
  }
  .audio_circle_btn {
    width: calc(100% - 300px);
    background: #E8F1FA;
    border: 5px solid white;
    box-shadow: 0 0 0 2px #E8F1FA;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    position: fixed;
    left: calc(50vw - 50px);
    bottom: 30px;
  }
  .active_messages {
    padding: 10px 0 15px;
    color: #3B3E51;
    display: flex;
  }
  .active_messages .send_btn {
    padding: 5px 10px;
    width: 95px;
    border-radius: 25px;
    color: white;
    font-size: 14px;
    height: 30px;
    margin: auto;
  }
  .active_messages p {
    width: 160px;
    margin: auto;
  }
  .active_communities p {
    margin: 10px 0;
  }
  .user_inter img {
    width: 30px;
    height: 30px !important;
    border-radius: 12px;
    margin: 5px 3px;
  }
  .user_inter {
    margin: auto 12px auto;
  }
  .user_inter p {
    margin: 0 0 0 3px;
  }
  .main_markets {
    display: flex;
  }
  .main_markets img {
    height: 100%;
    border-radius: 50%;
  }
  .marketer_para {
    margin: 20px 0;
  }
  .messages_user_size {
    margin: auto;
    width: 35px;
    height: 35px;
  }
  .active_send {
    height: 100%;
    margin: auto;
  }
  .main_body_title {
    margin: 0;
  }
  .main_contact {
    margin: auto;
  }
  .toggle_menu_btn {
    margin: auto auto auto 0;
    height: 100%;
  }
  .popup_main_content {
    padding: 20px 35px;
    background: rgba(255, 184, 3, 0.95);
  }
  .popup_main_content_green {
    padding: 20px 35px;
    background: rgba(57, 181, 74, 0.9);
  }
  .popup_main_content_green p {
    color: white;
    margin: auto !important;
    text-align: left;
  }
  .popup_main_content p {
    color: white;
    margin: auto !important;
    text-align: left;
  }
  .main_popup_btn {
    display: flex;
    width: 100%;
    margin-top: 15px;
  }
  .main_popup_btn button{
    color: #FFB803;
    border-radius: 16px;
    background: white;
    padding: 3px 30px;
  }
  .main_popup_btn button:nth-child(1) {
    margin: auto auto auto 0;
  }
  .main_popup_btn button:nth-child(2) {
    margin: auto 0 auto auto;
  }
</style>
 