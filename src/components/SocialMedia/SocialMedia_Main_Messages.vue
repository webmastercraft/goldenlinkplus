<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Messages</a>
          </div>
          <div class="new_msg_area">
            <div class="new_msg_brand">
              <div v-for="(item, index) in msgBrandData" :key="index" class="new_msg_brand_img" @click="setActiveHost(index)">
                  <img :src="`${item.brand_user_img}`" :class="{activeNewbrand: activeHost === index}">
              </div>
              <div class="new_msg_brand_img">
                <img src="community/plus.png" @click="brandPlus">
              </div>
            </div>
            <div class="new_msg_content">
              <div class="new_msg_para" v-if="activeHost === 0">
                <router-link to="/socialmedia/socialmedia_main_messages_chat">
                  <div class="new_msg_para_each">
                    <div class="new_msg_user_total">
                      <img src="Ray_big.png" class="new_msg_user">
                      <img src="community/dot_green.png" class="new_msg_state">
                    </div>
                    <div class="new_msg_title">
                        <span class="socialmedia_messages_p">Rayford Chenail</span>
                        <span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span>
                    </div>
                  </div>
                </router-link>
                <router-link to="/socialmedia/socialmedia_main_messages_chat">
                  <div class="new_msg_para_each">
                    <div class="new_msg_user_total">
                      <img src="Ray_big.png" class="new_msg_user">
                      <img src="community/dot_grey.png" class="new_msg_state">
                    </div>
                    <div class="new_msg_title">
                        <span class="socialmedia_messages_p">Rayford Chenail</span>
                        <span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span>
                    </div>
                  </div>
                </router-link>
                <div class="new_msg_para_each_white">
                  <div class="new_msg_user_total">
                    <img src="Ray_big.png" class="new_msg_user">
                    <img src="community/dot_grey.png" class="new_msg_state">
                  </div>
                  <div class="new_msg_title">
                      <span class="socialmedia_messages_p">Rayford Chenail</span>
                      <span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span>
                  </div>
                </div>
                <div class="new_msg_para_each_white">
                  <div class="new_msg_user_total">
                    <img src="Ray_big.png" class="new_msg_user">
                    <img src="community/dot_green.png" class="new_msg_state">
                  </div>
                  <div class="new_msg_title">
                      <span class="socialmedia_messages_p">Rayford Chenail</span>
                      <span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span>
                  </div>
                </div>
                <div class="new_msg_para_each_white">
                  <div class="new_msg_user_total">
                    <img src="Ray_big.png" class="new_msg_user">
                    <img src="community/dot_green.png" class="new_msg_state">
                  </div>
                  <div class="new_msg_title">
                      <span class="socialmedia_messages_p">Rayford Chenail</span>
                      <span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span>
                  </div>
                </div>
                <div class="new_msg_para_each_white">
                  <div class="new_msg_user_total">
                    <img src="Ray_big.png" class="new_msg_user">
                    <img src="community/dot_green.png" class="new_msg_state">
                  </div>
                  <div class="new_msg_title">
                      <span class="socialmedia_messages_p">Rayford Chenail</span>
                      <span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span>
                  </div>
                </div>
                <div class="new_msg_para_each_white">
                  <div class="new_msg_user_total">
                    <img src="Ray_big.png" class="new_msg_user">
                    <img src="community/dot_green.png" class="new_msg_state">
                  </div>
                  <div class="new_msg_title">
                      <span class="socialmedia_messages_p">Rayford Chenail</span>
                      <span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span>
                  </div>
                </div>
              </div>
              <div class="new_msg_para_brand_padding" v-if="activeHost === 1">
                <div class="new_brand_title">
                  <img src="community/brand_each_1.png">
                  <p><span>Elite Promotions</span><span>Community Chat</span></p>
                </div>
                <p class="new_brand_content">
                  <span>Information<img src="community/plus.png" @click="msgPlus"></span>
                  <span>
                    <router-link to="/socialmedia/socialmedia_main_messages_welcome"># Welcome and Rules</router-link>
                  </span>
                  <span>
                    <router-link to="/socialmedia/socialmedia_main_messages_announcements"># Announcements</router-link>
                  </span>
                  <span>
                    <router-link to="/socialmedia/socialmedia_main_messages_resources"># Resources</router-link>
                  </span>
                </p>
                <p class="new_brand_content">
                  <span>Text Channels<img src="community/plus.png" @click="msgPlus"></span>
                  <span>
                    <router-link to="/socialmedia/socialmedia_main_messages_general"># General</router-link>
                  </span>
                  <span>
                    <router-link to="/socialmedia/socialmedia_main_messages_marketing"># Marketing</router-link>
                  </span>
                  <span>
                    <router-link to="/socialmedia/socialmedia_main_messages_awesome"># Awesome Tips</router-link>
                  </span>
                  <span># Pushing Things</span>
                  <span># Being an Elite</span>
                </p>
              </div>
              <div class="new_msg_para_brand_padding" v-if="activeHost === 2">
                <!-- <div class="new_msg_user_total">
                  <img src="Ray_big.png" class="new_msg_user">
                  <img src="community/dot_green.png" class="new_msg_state">
                </div>
                <div class="new_msg_title">
                    <span class="socialmedia_messages_p">Rayford Chenail</span>
                    <span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span>
                </div> -->
              </div>
              <div class="new_msg_para_brand_padding" v-if="activeHost === 3">
                <!-- <div class="new_msg_user_total">
                  <img src="Ray_big.png" class="new_msg_user">
                  <img src="community/dot_green.png" class="new_msg_state">
                </div>
                <div class="new_msg_title">
                    <span class="socialmedia_messages_p">Rayford Chenail</span>
                    <span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span>
                </div> -->
              </div>
            </div>
          </div>
          <MsgPlus 
              v-show="f_msg_plus"
              @close="closeViewProfile"
              @view-backdrop="closeViewProfile"
          >
          </MsgPlus>
          <BrandPlus 
              v-show="f_brand_plus"
              @close="closeViewProfile"
              @view-backdrop="closeViewProfile"
          >
          </BrandPlus>
      </div>
    </div>
  </div>
</template>
<script>
import MsgPlus from "../../modal/msg_plus.vue";
import BrandPlus from "../../modal/brand_plus.vue";

export default {
  name: 'Messaging_Messages',
  components: {
    MsgPlus,
    BrandPlus
  },
  data() {
    return {
      f_msg_plus: false,
      f_brand_plus: false,
      activeHost: 0,
      msgBrandData: [
              {
                  brand_user_img: "community/subtract.png",
              },
              {
                  brand_user_img: "community/brand1.png",
              },
              {
                  brand_user_img: "community/brand3.png",
              },
              {
                  brand_user_img: "community/brand4.png",
              }
      ],
      msgData: [
            {
              user_img: "Ray_big.png",
              state_img: "community/dot_green.png",
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              state_img: "community/dot_grey.png",
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              state_img: "community/dot_green.png",
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              state_img: "community/dot_green.png",
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              state_img: "community/dot_green.png",
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
      ]
    }
  },
  methods: {
    msgPlus() {
        this.f_msg_plus = true;
    },
    brandPlus() {
        this.f_brand_plus = true;
    },
    closeViewProfile() {
        this.f_msg_plus = false;
        this.f_brand_plus = false;
    },
    setActiveHost(index) {
      this.activeHost = index;
    },
  }
}
</script>
<style>
  .notification_non {
    background-color: white;
  }
  .new_msg_area {
    margin: 60px 0 0;
    /*background: red;*/
    width: 100%;
    max-width: 414px;
    display: flex;
  }
  .new_msg_brand {
    width: 20%;
    padding: 5px 0;
  }
  .new_msg_content {
    width: 80%;
    background: white;
  }
  .new_msg_user {
    width: 40px;
    height: 40px;
    margin: auto 10px;
  }
  .new_msg_title {
    display: grid;
    text-align: left;
  }
  .new_msg_user_total {
    position: relative;
  }
  .new_msg_state {
    position: absolute;
    width: 12px;
    height: 12px;
    bottom: 4px;
    right: 10px;
  }
  .new_msg_brand_img img {
    margin: 10px auto;
  }
  .new_msg_para {
    display: grid;
    color: #3B3E51;
  }
  .new_msg_para_each {
    padding: 10px 0;
    display: flex;
    background-color: #E6F7FF;
  }
  .new_msg_para_each_white {
    padding: 10px 0;
    display: flex;
  }
  .new_msg_para_brand {
    display: grid;
    color: #3B3E51;
  }
  .new_brand_title {
    display: flex;
    padding: 10px;
  }
  .new_brand_title p {
    margin: auto 10px;
    text-align: left;
    display: grid;
    font-size: 14px;
  }
  .new_brand_title img {
    margin: auto 0;
  }
  .new_msg_para_brand_padding {
    color: #3B3E51;
  }
  .new_brand_content {
    text-align: left;
    margin: 10px 20px 15px;
    font-size: 15px;
    display: grid;
    line-height: 30px;
  }
  .new_brand_content span:nth-child(1) {
    color: #EF8200;
    font-weight: 600;
  }
  .new_brand_content img {
    width: 16px;
    height: 16px;
    margin: auto auto auto 20px;
  }
  .activeNewbrand {
    border-radius: 50%;
    border: 3px solid #F4992D;
  }
</style>
