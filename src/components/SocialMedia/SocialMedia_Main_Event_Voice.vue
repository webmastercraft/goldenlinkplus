<template>
  <div>
    <div class="container">
      <div class="loading_screen" v-show="isloading" >
        <img src="loading_logo.png">
      </div>
      <div class="phone sociallogin" v-show="!isloading">
        
          <div class="event_body_title">
            <p class="event_favicon_img"><img src="triangle.png">MAKING BIG TIME MONEY 101</p>
            <p class="event_desc">Let’s All win the Market!! Start<br>Learning today!</p>
            
              <p class="event_back">
                <router-link to="/socialmedia/socialmedia_main_event_hallway">
                  <img src="event_back.png">Go to Hallway
                </router-link>
              <span><img src="img/dots.png"></span></p>
          </div>
          <div class="event_body">
            <div class="event_users">
              <span><img src="Jean.png" class="event_users_img" @click="showUserProfile">Jean</span>
              <span><img src="50k_coin.png" class="event_coin"><button>00:14:59</button></span>
              <div class="event_para_group">
                    <p>
                      <img src="user_count_grey.png">2501
                      <img src="msg_count_grey.png">139
                    </p>
                    <p>13.9 K<img src="diamond.png"></p>
                    <p>625.4 K<img src="event_coin.png"></p>
                    <p><img src="login_users.png"></p>
              </div>
              
            </div>
            <div class="event_user_group">
              <div v-for="(item, index) in datas" :key="index" class="event_each_user">
                
                <div class="event_icon">
                  <img :src="`${item.image_url}`">
                  <div>
                  <img :src="`${item.image_star_url}`" class="event_star">
                  <img :src="`${item.image_mute_url}`" class="event_mute">
                  <img :src="`${item.image_diamond_url}`" class="event_diamond">
                  </div>
                </div>
                <p class="coin_letter"><img src="event_user_coin.png" class="event_user_coin">{{item.event_user_coin}}K</p>
                <p>{{item.name}}</p>
              </div>
            </div>
            <div class="event_ranking">
              <button class="audience_btn" :class="{'border_btn': isAudience == true}" @click="showAudience"><b>Audience</b></button>
              <button class="speakers_btn" :class="{'border_btn': isAudience != true}" @click="showSpeakers"><b>Speakers</b></button>
            </div>

            <div v-if="isAudience == true" class="coin_letter">
            <p class="event_ranking_title">Top 18 GCoins sent by audience</p>
            </div>
            <div v-else class="coin_letter">
            <p class="event_ranking_title">Top 5 GCoins sent by speakers</p>
            </div>

            <div v-if="isAudience == true">
              <div v-for="(item, index) in rangking1" :key="index" class="rangking_data">
                <img :src="`${item.rangking_image}`">
                <p>{{item.rangking_name}}<span>{{item.rangking_coin}}</span></p>
              </div>
            </div>
            <div v-else>
              <div v-for="(item, index) in rangking2" :key="index" class="rangking_data">
                <img :src="`${item.rangking_image}`">
                <p>{{item.rangking_name}}<span>{{item.rangking_coin}}</span></p>
              </div>
            </div>
            <div class="event_mute_group">
              <div v-for="(item, index) in mutedata" :key="index" class="mute_user">
                
                <div class="mute_icon">
                  <img :src="`${item.mute_image}`" class="mute_user_img">
                </div>
                <p>{{item.mute_user}}</p>
              </div>
            </div>
          </div>
          <div class="footer_background">
            <div class="footer_modal">
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

              
                <button class="audio_circle_btn figure_btn"  @click="imgClicked = !imgClicked" v-bind:class="{'hand_orange': !clicked, 'hand_black': clicked}"
    v-on:click ="clicked = !clicked">
                  <img :src="imgSrc"/>
                </button>
                <span class="footer_img_rest_right" >
                  <img src="invite.png">
                  <p>Invite</p>
                </span>

              
              <span class="footer_img_rest_right" @click="showSendGcoin">
              <img src="send_gcoins.png">
              <p>Send GCoins</p>
              </span>
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
      </div>
    </div>
  </div>

</template>

<script>
import { default as Vuedals, Component as Vuedal, Bus as VuedalsBus } from 'vuedals';
import UserProfile from "../../modal/user_profile.vue";
import SendGcoin from "../../modal/send_gcoin.vue";

export default {
  name: 'Event_Voice',
  components: {
      Vuedal,
      UserProfile,
      SendGcoin
  },
  data () {
    return {
      isloading: true,
      isModalVisible: false,
      clicked: false,
      imgClicked: false,
      isAudience: true,
      f_show_user_profile: false,
      f_show_send_gcoin: false,
      modalStack: [],
      datas: [
        {
          image_url: "shane.png",
          image_star_url: "pink_star.png",
          image_mute_url: "mute.png",
          image_diamond_url: "diamond.png",
          event_user_coin: 892,
          name: "Shane"
        },
        {
          image_url: "kristin.png",
          image_star_url: "",
          image_mute_url: "",
          image_diamond_url: "diamond.png",
          event_user_coin: 484.2,
          name: "Kristin"
        },
        {
          image_url: "leslie.png",
          image_star_url: "pink_star.png",
          image_mute_url: "mute.png",
          image_diamond_url: "diamond.png",
          event_user_coin: 345.6,
          name: "Leslie"
        },
        {
          image_url: "eduardo.png",
          image_star_url: "pink_star.png",
          image_mute_url: "mute.png",
          image_diamond_url: "diamond.png",
          event_user_coin: 527.1,
          name: "Eduardo"
        },
        {
          image_url: "jorge.png",
          image_star_url: "",
          image_mute_url: "mute.png",
          image_diamond_url: "diamond.png",
          event_user_coin: 78.5,
          name: "Jorge"
        },
        {
          image_url: "esther.png",
          image_star_url: "pink_star.png",
          image_mute_url: "mute.png",
          image_diamond_url: "diamond.png",
          event_user_coin: 18.9,
          name: "Esther"
        },
        {
          image_url: "leslie.png",
          image_star_url: "",
          image_mute_url: "mute.png",
          image_diamond_url: "diamond.png",
          event_user_coin: 27.5,
          name: "Tanya"
        },
        {
          image_url: "shane.png",
          image_star_url: "",
          image_mute_url: "mute.png",
          image_diamond_url: "diamond.png",
          event_user_coin: 38.8,
          name: "Ronald"
        },
        {
          image_url: "esther.png",
          image_star_url: "",
          image_mute_url: "mute.png",
          image_diamond_url: "diamond.png",
          event_user_coin: 190.5,
          name: "Philip"
        },
      ],
      rangking2: [
        {
          rangking_image: "Ray.png",
          rangking_name: "Virginia Jones",
          rangking_coin: "915.6K",
        },
        {
          rangking_image: "mona.png",
          rangking_name: "Lavern Laboy",
          rangking_coin: "847.3K",
        },
        {
          rangking_image: "Jean_Smith.png",
          rangking_name: "Annette Black",
          rangking_coin: "654.2K",
        },
        {
          rangking_image: "Richard_Bennett_off.png",
          rangking_name: "Darron Kowski",
          rangking_coin: "302.8K",
        },
        {
          rangking_image: "Susan Boyle.png",
          rangking_name: "Robert Fox",
          rangking_coin: "113.3K",
        },
      ],
      rangking1: [
        {
          rangking_image: "Ray.png",
          rangking_name: "Erin Hughes",
          rangking_coin: "876.5K",
        },
        {
          rangking_image: "mona.png",
          rangking_name: "Marvin McKinney",
          rangking_coin: "678.6K",
        },
        {
          rangking_image: "Jean_Smith.png",
          rangking_name: "Lucy Fletcher",
          rangking_coin: "582.3K",
        },
        {
          rangking_image: "Richard_Bennett_off.png",
          rangking_name: "Ronald Richards",
          rangking_coin: "76.5K",
        },
        {
          rangking_image: "Susan Boyle.png",
          rangking_name: "Kathryn Murphy",
          rangking_coin: "24K",
        },
        {
          rangking_image: "Alex Smith.png",
          rangking_name: "Emily Malone",
          rangking_coin: "18.5K",
        },
        {
          rangking_image: "Collen.png",
          rangking_name: "Patricia Clark",
          rangking_coin: "12.9K",
        },
        {
          rangking_image: "Grandma.png",
          rangking_name: "Jerome Bell",
          rangking_coin: "6.7K",
        },
        {
          rangking_image: "Irma.png",
          rangking_name: "Floyd Miles",
          rangking_coin: "5.9K",
        },
        {
          rangking_image: "Lily.png",
          rangking_name: "Mary Lopez",
          rangking_coin: "3.6K",
        },
        {
          rangking_image: "Kathry.png",
          rangking_name: "Amanda Rice",
          rangking_coin: "3.2K",
        },
        {
          rangking_image: "Judith.png",
          rangking_name: "Lydia Sharp",
          rangking_coin: "1.1K",
        },
        {
          rangking_image: "Priscilla.png",
          rangking_name: "Darrell Steward",
          rangking_coin: "546",
        },
        {
          rangking_image: "Serenity.png",
          rangking_name: "Ida Baldwin",
          rangking_coin: "404",
        },
        {
          rangking_image: "Savannah.png",
          rangking_name: "Jacob Jones",
          rangking_coin: "395",
        },
        {
          rangking_image: "Wendy.png",
          rangking_name: "Linda Carroll",
          rangking_coin: "375",
        },
        {
          rangking_image: "Susan Boyle.png",
          rangking_name: "Ruth West",
          rangking_coin: "210",
        },
        {
          rangking_image: "Philip.png",
          rangking_name: "Cody Fisher",
          rangking_coin: "75",
        },
      ],
      mutedata: [
        {
          mute_image: "Irma.png",
          mute_user: "Pat",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Wendy",
        },
        {
          mute_image: "Irma.png",
          mute_user: "Tanya",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Marvin",
        },
        {
          mute_image: "Irma.png",
          mute_user: "Ronald",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Cameron",
        },
        {
          mute_image: "Irma.png",
          mute_user: "Brandon",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Randall",
        },
        {
          mute_image: "Irma.png",
          mute_user: "Jorge",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Dustin",
        },
        {
          mute_image: "Irma.png",
          mute_user: "Regina",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Gloria",
        },
        {
          mute_image: "Irma.png",
          mute_user: "Harold",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Francisco",
        },
        {
          mute_image: "Irma.png",
          mute_user: "Julie",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Savannah",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Calvin",
        },
        {
          mute_image: "Irma.png",
          mute_user: "Dwight",
        },
        {
          mute_image: "Wendy.png",
          mute_user: "Ann",
        },
        {
          mute_image: "Irma.png",
          mute_user: "Arlene",
        },
      ]
    }
  },
  
  methods: {
    killLoading() {
      setTimeout(() => {
          this.isloading = false
      }, 2000)
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
    showAudience() {
      this.isAudience = true;
    },
    showSpeakers() {
      this.isAudience = false;
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
        default:
          // statements_def
          break;
      }
      switch (temp) {
        case 'f_show_user_profile':
          this.f_show_user_profile = false
          break;
        default:
          // statements_def
          break;
      }

      this.f_show_send_gcoin = false,

      this.f_show_user_profile = false
    },
    showUserProfile() {
      this.f_show_user_profile = true;
      this.modalStack.push('f_show_user_profile');
    },
    showSendGcoin() {
      this.f_show_send_gcoin = true;
      this.modalStack.push('f_show_send_gcoin');
    }
  },
  computed: {
    imgSrc: function () {
      return this.imgClicked ? 'figure_orange.png' : 'figure.png'
    },
  },
  created () {
    this.killLoading();
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
  .event_body {
    margin: 150px 20px 150px;
    background: white;
    width: 100%;
    border-radius: 16px;
  }
  .figure_btn {
    width: 85px;
    height: 85px;
    bottom: 35px;
    left: calc(50vw - 44px);
  }
  .figure_btn img{
    margin-right: 3px;
  }
  .main_event {
    margin: 0 20px;
  }
  .event_body_title {
    position: absolute;
    text-align: left;
    width: 414px;
  }
  .event_body_title .event_favicon_img{
    margin: 20px 20px 0;
    letter-spacing: 0.08em;
    font-size: 14px;
  }
  .event_favicon_img img{
    margin-right: 8px;
  }
  .event_body_title .event_desc {
    font-size: 20px;
    margin: 10px 20px 0;
    letter-spacing: 0.02em;
  }
  .event_body_title .event_back {
    margin: 10px 20px;
  }
  .event_body_title .event_back img {
    margin: 0 5px 2px;
  }
  .event_body_title .event_back span {
    float: right;
  }
  .event_users {
    display: flex;
    padding: 15px 10px;
  }
  .event_users span {
    width: 100%;
  }
  .event_users_img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }
  .event_coin {
    width: 82px;
    height: 80px;
    border-radius: 50%;
  }
  .event_users span button {
    background: #FFB803;
    border-radius: 16px;
    color: white;
    letter-spacing: 0.1em;
    padding: 0 10px;
    margin-top: 10px;
  }
  .event_para_group {
    width: 100%;
    letter-spacing: 0.08em;
    font-size: 14px;
  }
  .event_para_group p {
    margin: 4px 0;
    text-align: right;
  } 
  .event_para_group p img {
    margin: 0 5px;
  }
  .event_user_group {
    display: flex;
    flex-wrap: wrap;
    letter-spacing: ;
  }
  .event_each_user {
    width: 33.33%;
    margin: 10px 0 20px;
  }
  .event_icon {
    position: relative;
    height: 90px;
  }
  .event_star {
    position: absolute;
    left: 20px;
    top: 0;
  }
  .event_mute {
    top: 48px;
    left: 20px;
    position: absolute;
  }
  .event_diamond {
    position: absolute;
    top: 48px;
    right: 15px;
  }
  .event_each_user p {
    margin: 0;
  }
  .coin_letter {
    letter-spacing: 0.08em;
    font-size: 13px;
  }
  .event_user_coin {
    margin: 0 10px 3px 0;
  }
  .event_ranking button{
    width: calc(50% - 40px);
    padding: 5px 10px;
  }
  .rangking_data {
    display: flex;
    margin: 10px 50px;
  }
  .rangking_data img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .rangking_data p {
    margin: auto auto auto 15px;
    width: 100%;
    text-align: left;
  }
  .rangking_data span {
    float: right;
  }
  .border_btn {
    border-bottom: 4px solid #EF8200;
  }
  .event_ranking_title {
    margin: 20px 50px;
    text-align: left;
  }
  .event_mute_group {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }
  .mute_user {
    width: 25%;
    margin-bottom: 20px;
  }
  .mute_icon {
    position: relative;
    height: 90px;
  }
  .mute_user p {
    margin: 10px 0 0;
  }
  .mute_user_img {
    border-radius: 50%;
    width: 56px;
    height: 56px;
  }
  .hand_orange {
    background-color: #E8F1FA;
    transition-duration: 1s;
    transition-property: background-color;
  }
  .hand_black {
    background-color: #3B3E51;
    transition-duration: 1s;
    transition-property: background-color;
  }
  .loading_screen {
    width: 100%;
    height: 100vh;
  }
  .loading_screen > img {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
</style>
 