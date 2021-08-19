<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>6 GS Marketers Found</a>
          </div>
          <div class="content left-content header_top height_static">

            <div class="socialmedia_messages search_gs_margin" v-for="(item, index) in datas" :key="index">
              <div class="dot_green">
                <img :src="`${item.image_url}`" class="socialmedia_messages_size">
                <img src="dot_green.png" v-show="!item.follow" class="over_img">
              </div>
                <p class="socialmedia_messages_p search_gs_name">Rayford Chenail</p>
                <div class="search_transmit search_gs_grid">
                <button class="follow_btn" :disabled="!item.follow" @click="selectFollow(index)" :class="{'follow_btn_disable': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                <router-link to="/socialmedia/socialmedia_messaging_chat">
                <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}"><img src="airplane.png">Send</button>
                </router-link>
                </div>
            </div>

          </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Search GS',
  components: {
  },
  data () {
    return { 
        datas: [
          {
            image_url: "Ray_big.png",
            follow: true,
          },
          {
            image_url: "Ray_big.png",
            follow: true,
          },
          {
            image_url: "Ray_big.png",
            follow: false,
          },
          {
            image_url: "Ray_big.png",
            follow: false,
          },
          {
            image_url: "Ray_big.png",
            follow: true,
          },
          {
            image_url: "Ray_big.png",
            follow: true,
          },
        ]
    }
  },
  methods: {
    selectFollow(index) {
      this.datas[index].follow = false
      this.image1 =  this.image2;
    },
  }
}
</script>
<style>
  .sociallogin {
    background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%) !important;
  }
  .glplogo {
    text-align: left;
    width: 100%;
    margin: 30px 25px;
  }
  .socialmedia_messages_desc {
    font-size: 14px;
  }
  .socialmedia_messages {
    display: flex;
    padding: 15px 0;
    background-color: #E6F7FF;
    color: #3B3E51;
  }
  .socialmedia_messages_size {
    height: 100%;
    margin: auto;
  }
  .socialmedia_messages_p {
    margin: 0;
  }
  .search_gs_margin {
    background-color: white !important;
    margin-right: 20px;
    margin-left: 20px;
  }
  .search_gs_name {
    margin: auto !important;
  }
  .search_gs_grid {
    display: grid;
  }
  .dot_green {
    position: relative;
  }
  .over_img {
    position: absolute;
    bottom: 0;
    left: 52px;
  }
</style>
