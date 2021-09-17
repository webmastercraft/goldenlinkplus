<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="main_audio_modal">
            <div>
              <router-link to="/"><img src="main_logo.png" class="main_logo"></router-link>
              <div class="logo_header">
                <router-link to="/socialmedia/socialmedia_messaging_messages"><img src="main_box.png"></router-link>
                <router-link to="/socialmedia/socialmedia_main_event_upcoming">
                  <img src="main_calendar.png">
                </router-link>
                <img src="main_contact.png">
                <router-link to="/socialmedia/socialmedia_main_switch_account">
                  <img src="mona.png" class="main_user">
                </router-link>
              </div>
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
          <div class="footer_background hallway_bottom">
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
                <img src="invite.png" @click="showHallway">
                <img src="mute.png">
              </span>

            </div>
          </div>
          <Hallway 
                v-show="f_show_hallway"
                @user-backdrop="removeFlagFromStack"
          >
          </Hallway>
      </div>
    </div>
  </div>
</template>
<script>
import { default as Vuedals, Component as Vuedal, Bus as VuedalsBus } from 'vuedals';
import Hallway from "../../modal/hallway.vue";

export default {
  name: 'Event_Hallway',
  components: {
    Hallway
  },
  data () {
    return {
      f_show_hallway: false,
      modalStack: [],
    }
  },
  methods: {
    showHallway() {
        this.f_show_hallway = true;
        this.modalStack.push('f_show_hallway');
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
    }
  }
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
</style>
 