<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="event_body_title">
            <p class="event_favicon_img"><img src="triangle.png">MAKING BIG TIME MONEY 101</p>
            <p class="event_desc">Let’s All win the Market!! Start<br>Learning today!</p>
            
              <p class="event_back">
                <router-link to="/socialmedia/socialmedia_main_event_hallway">
                  <img src="event_back.png">Hallway
                </router-link>
              <span @click="showEventSetting"><img src="img/dots.png"></span></p>
          </div>
          <div class="event_body event_quick_body">
            <div class="event_users">
                <span class="blink_span">
                    <img v-if="isAddingCoin" class="blink-img"  :class="{'blinking': isBlink1 == true}" src="coin_10.png"  @click="showBlink1">
                    <img src="Jean.png" class="event_users_img" @click="showUserProfile">Jean
                </span>
                <span class="blink_span">
                </span>
                <div class="event_para_group">
                    <p>
                        <img src="user_count_grey.png">1
                        <img src="msg_count_grey.png">0
                    </p>
                    <p>0<img src="diamond_frame.png"></p>
                    <p @click="showPrice">0<img src="event_coin.png"></p>
                </div>
            </div>
          </div>
          <div class="footer_background">
            <div class="footer_modal" v-show="!isAddingCoin">
                <router-link to="/socialmedia/socialmedia_main">
                    <span class="footer_img_rest_left">
                        <img src="Leave_Quietly.png">
                        <p>Leave Quietly</p>
                    </span>
                </router-link>
                <span class="footer_img_rest_left">
                    <router-link to="/socialmedia/socialmedia_main_event_chat">
                        <img src="chat.png">
                    </router-link>
                    <p>Chat</p>
                </span>
                <button class="audio_circle_btn figure_btn"  @click="imgClicked = !imgClicked" v-bind:class="{'hand_orange': !clicked, 'hand_black': clicked}" v-on:click ="clicked = !clicked">
                    <img :src="imgSrc"/>
                </button>
                <span class="footer_img_rest_right"  @click="showInvite">
                    <img src="invite.png">
                    <p>Invite</p>
                </span>
                <span class="footer_img_rest_right" @click="showSendGcoin">
                    <img src="send_gcoins.png">
                    <p>Send GCoins</p>
                </span>
            </div>
            <div class="footer_modal footer_modal_border" v-show="isAddingCoin">
                <button class="send_coin_btn "><img src="modal_coin.png">115, 250</button>
                <div class="charge_close" @click="doneAddingCoin">
                    <img src="cancel_coin.png">
                    <span>Close</span>
                </div>
            </div>
          </div>
          <SendGcoin 
            v-show="f_show_send_gcoin"
            @user-backdrop="removeFlagFromStack"
          >
          </SendGcoin>
          <vuedal></vuedal>
          <UserProfile 
            v-show="f_show_user_profile"
            @user-backdrop="removeFlagFromStack"
          >
          </UserProfile>
          <Invite 
            v-show="f_show_invite"
            @user-backdrop="removeFlagFromStack"
            @close="closeInviteModal"
            @share="ttt"
          >
          </Invite>
          <Price 
            v-show="f_show_price"
            @user-backdrop="removeFlagFromStack"
          >
          </Price>
          <Supporter 
            v-show="f_show_supporter"
            @user-backdrop="removeFlagFromStack"
          >
          </Supporter>
          <EventSetting 
            v-show="f_show_event_setting"
            @close="closeEventSetting"
            @user-backdrop="removeFlagFromStack"
          >
          </EventSetting>
          <UpcomingEvent 
            v-show="f_show_upcoming_event"
            @close="closeUpcomingEvent"
            @view-backdrop="closeUpcomingEvent"
          >
          </UpcomingEvent>
      </div>
    </div>
  </div>

</template>

<script>
import { default as Vuedals, Component as Vuedal, Bus as VuedalsBus } from 'vuedals';
import UserProfile from "../../modal/user_profile.vue";
import SendGcoin from "../../modal/send_gcoin.vue";
import Invite from "../../modal/invite.vue";
import Price from "../../modal/price.vue";
import Supporter from "../../modal/supporter.vue";
import EventSetting from "../../modal/event_setting.vue";
import UpcomingEvent from "../../modal/event_invite.vue";

export default {
  name: 'Event_Voice',
  components: {
      Vuedal,
      UserProfile,
      SendGcoin,
      Invite,
      Price,
      Supporter,
      EventSetting,
      UpcomingEvent
  },
  data () {
    return {
        isAddingCoin: false,
        isBlink: false,
        isDiamond: false,
        isBlink1: false,
        isModalVisible: false,
        clicked: false,
        imgClicked: false,
        isAudience: true,
        f_show_user_profile: false,
        f_show_send_gcoin: false,
        f_show_invite: false,
        f_show_price: false,
        f_show_supporter: false,
        f_show_event_setting: false,
        f_show_upcoming_event: false,
        modalStack: [],
    }
  },
  
  methods: {
    addingCoin() {
        this.isAddingCoin = true;
        this.f_show_send_gcoin = false;
    },
    doneAddingCoin() {
        this.isAddingCoin = false;
    },
    showBlink() {
        if (this.isAddingCoin) {
            this.isBlink = true
            setTimeout(() => {
                this.isBlink = false
            }, 2000)
        }
    },
    showBlink1() {
        if (this.isAddingCoin) {
            this.isBlink1 = true
            setTimeout(() => {
                this.isBlink1 = false
            }, 2000)
        } 
    },
    showIt() {
        Vuedals.$emit('new', {
            name: 'showing-the-money',

            component: {
                name: 'the-money',

                template: `
                    <div>
                        <h1>THE MONEY!</h1>
                        <p>Money, money, money, moooneeyyy $ $ $ $</p>
                    </div>
                `
              }
            });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeUserProfileModal() {
      this.isModalVisible = false;
    },
    closeSendGcoinModal() {
      this.isModalVisible = false;
    },
    removeFlagFromStack() {
      let temp = this.modalStack.pop(-1);

      switch (temp) {
        case 'f_show_send_gcoin':
          this.f_show_send_gcoin = false
          break;
        case 'f_show_user_profile':
          this.f_show_user_profile = false
          break;
        case 'f_show_invite':
          this.f_show_invite = false
          break;
        case 'f_show_price':
          this.f_show_price = false
          break;
        case 'f_show_supporter':
          this.f_show_supporter = false
          break;
        case 'f_show_event_setting':
          this.f_show_event_setting = false
          break;
        default:
          break;
      }
      this.f_show_send_gcoin = false,

      this.f_show_user_profile = false,

      this.f_show_invite = false,

      this.f_show_price = false,

      this.f_show_supporter = false,

      this.f_show_event_setting = false
    },
    showUserProfile() {
        if (!this.isAddingCoin) {
            this.f_show_user_profile = true;
            this.modalStack.push('f_show_user_profile');
        } else {
            this.isAddingCoin = true;
        }
    },
    showSendGcoin() {
      this.f_show_send_gcoin = true;
      this.modalStack.push('f_show_send_gcoin');
    },
    showInvite() {
      this.f_show_invite = true;
    },
    showPrice() {
        this.f_show_price = true;
        this.modalStack.push('f_show_price');
    },
    showSupporter() {
        this.f_show_supporter = true;
        this.modalStack.push('f_show_supporter');
    },
    showEventSetting() {
        this.f_show_event_setting = true;
        this.modalStack.push('f_show_event_setting');
    },
    ttt() {
      this.f_show_upcoming_event = true; // showing child
      this.f_show_invite = false;
      // this.$emit('close'); // disable myself to parent
    },
    closeEventSetting() {
        this.f_show_event_setting = false;
    },

    closeInviteModal() {
        this.f_show_invite = false;
    },
    closeUpcomingEvent() {
      this.f_show_upcoming_event = false;
    },
  },
  computed: {
    imgSrc: function () {
      return this.imgClicked ? 'figure_orange.png' : 'figure.png'
    },
  }
}
</script>

<style>
  .event_quick_body {
    margin-bottom: 110px;
  }
</style>
 