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
              <div class="main_new_msg_brand">
                <img src="community/subtract.png" :class="{activeNewbrand: activeHost < 0}" @click="setActiveHost(-1)">
              </div>
              <div v-for="(item, index) in msgGroup" :key="index" class="main_new_msg_brand" @click="setActiveHost(index)">
                  <img :src="`${item.img}`" :class="{activeNewbrand: activeHost === index}">
              </div>
              <div class="new_msg_brand_img">
                <img src="community/plus.png" @click="brandPlus">
              </div>
            </div>
            <div class="new_msg_content">
              <div class="new_msg_para" v-if="activeHost < 0 ">
                <div v-for="(item,  index) in msgData" :key="index">
                  <router-link to="/socialmedia/socialmedia_main_messages_chat" v-if="item.route_active">
                    <div class="new_msg_para_each">
                      <div class="new_msg_user_total">
                        <img :src="`${item.user_img}`" class="new_msg_user">
                        <img :src="`${item.online?'/community/dot_green.png':'/community/dot_grey.png'}`" class="new_msg_state">
                      </div>
                      <div class="new_msg_title">
                          <span class="socialmedia_messages_p">{{item.user_name}}</span>
                          <span class="socialmedia_messages_desc">{{item.user_detail}}</span>
                      </div>
                    </div>
                  </router-link>
                  <div class="new_msg_para_each_white" v-if="!item.route_active">
                    <div class="new_msg_user_total">
                      <img :src="`${item.user_img}`" class="new_msg_user">
                      <img :src="`${item.online?'/community/dot_green.png':'/community/dot_grey.png'}`" class="new_msg_state">
                    </div>
                    <div class="new_msg_title">
                        <span class="socialmedia_messages_p">{{item.user_name}}</span>
                        <span class="socialmedia_messages_desc">{{item.user_detail}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="new_msg_para_brand_padding" v-if="activeHost >= 0">
                <div class="new_brand_title">
                  <img :src="`${msgGroup[activeHost].img}`">
                  <p>{{msgGroup[activeHost].description}}</p>
                </div>
                <p class="new_brand_content" v-for="(channel, cid) in msgGroup[activeHost].channels" :key="cid">
                  <span>{{channel.title}}<img src="community/plus.png"  @click="msgPlus(cid)"></span>
                  <span v-for="(item, lid) in channel.list" :key="lid">
                    <router-link :to="item.link"># {{item.txt}}</router-link>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <MsgPlus 
              v-show="f_msg_plus"
              v-on:childToParent="addChannel"
              @close="closeViewProfile"
              @view-backdrop="closeViewProfile"
          >
          </MsgPlus>
          <BrandPlus 
              v-show="f_brand_plus"
              v-on:childToParent="addGroup"
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
      activeHost: -1,
      current_channal: -1,
      msgBrandImages: [
        {
            brand_user_img: "community/subtract.png",
        },
        {
            brand_user_img: "community/brand_each_1.png",
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
              online: true,
              route_active: true,
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              online: true,
              route_active: true,
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              online: false,
              route_active: false,
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              online: true,
              route_active: false,
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              online: false,
              route_active: false,
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              online: false,
              route_active: false,
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              online: true,
              route_active: false,
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
            {
              user_img: "Ray_big.png",
              online: false,
              route_active: false,
              user_name: "Rayford Chenail",
              user_detail: "I sent you an email, I hope you... • 2h"
            },
      ],
      msgGroup: [
        {
          img: "community/brand1.png",
          description: "Elite Promotions Community Chat",
          channels: [
            {
              title: "Information",
              list: [ 
                {
                  txt: "Welcome and Rules",
                  link: "/socialmedia/socialmedia_main_messages_welcome"
                },
                {
                  txt: "Announcements",
                  link: "/socialmedia/socialmedia_main_messages_announcements"
                },
                {
                  txt: "Resources",
                  link: "/socialmedia/socialmedia_main_messages_resources"
                }
              ]
            },
            {
              title: "Text Channels",
              list: [ 
                {
                  txt: "General",
                  link: "/socialmedia/socialmedia_main_messages_general"
                },
                {
                  txt: "Marketing",
                  link: "/socialmedia/socialmedia_main_messages_marketing"
                },
                {
                  txt: "Awesome Tips",
                  link: "/socialmedia/socialmedia_main_messages_awesome"
                },
                {
                  txt: "Pushing Things",
                  link: ""
                },
                {
                  txt: "Being an Elite",
                  link: ""
                }
              ]
            }
          ]
        },
        {
          img: "community/brand3.png",
          description: "Brand3 Promotions Community Chat",
          channels: []
        },
        {
          img: "community/brand4.png",
          description: "Brand4 Promotions Community Chat",
          channels: []
        }
      ]
    }
  },
  methods: {
    msgPlus(index) {
        this.current_channal = index;
        this.f_msg_plus = true;
    },
    addChannel (value) {
      var _data = {
        txt: value,
        link: ""
      }
      this.msgGroup[this.activeHost].channels[this.current_channal].list.push(_data);
      this.f_msg_plus = false;
    },
    addGroup(new_txt, new_img) {
      var _data = {
        img: new_img,
        description: new_txt,
        channels: []
      }
      this.msgGroup.push(_data);
      this.f_brand_plus = false;
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
  .main_new_msg_brand {
  }
  .main_new_msg_brand img {
    border: 3px solid #cce5fe;
    margin: 10px auto;
  }
  .main_new_msg_brand img.activeNewbrand {
    border-color: #F4992D;
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
    font-size: 14px;
    word-break: break-word;
    width: 50%;
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
