<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>5 Businesses Found</a>
          </div>
          <div class="content left-content header_top height_static">

              <div class="socialmedia_search_para" v-for="(item, index) in datas" :key="index">
                <img :src="`${item.image_url}`" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>{{item.name}}</b><br><span class="search_area">{{item.address}}</span><br><img src="gcoins.png" class="search_coins_img"><span class="search_coins"></span>{{item.coin}} G-Coin Rewards<br><span class="search_check_offer"><b>Check Offer</b></span></p>
                <div class="search_transmit">
                <button class="follow_btn" :disabled="!item.follow" @click="selectFollow(index)" :class="{'follow_btn_disable': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                <router-link to="/socialmedia/socialmedia_messaging_chat">
                <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}">Message</button>
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
  name: 'Search_Services',
  components: {
  },
  data () {
    return { 
        datas: [
          {
            image_url: "divine_salon.png",
            name: "Divine Salon",
            address: "San Diego, California",
            coin: 6,
            follow: true,
          },
          {
            image_url: "fix_tech_support.png",
            name: "PC Fix Tech Support",
            address: "New Jersey City, New Jersey",
            coin: 5,
            follow: true,
          },
          {
            image_url: "gold_lotus_spa.png",
            name: "Gold Lotus Spa",
            address: "Los Angeles, California",
            coin: 10,
            follow: true,
          },
          {
            image_url: "autoshine_detailing.png",
            name: "Autoshine Detailing",
            address: "Los Angeles, California",
            coin: 20,
            follow: true,
          },
          {
            image_url: "bistro_catering.png",
            name: "Bistro Catering",
            address: "Los Angeles, California",
            coin: 15,
            follow: true,
          },
        ]
    }
  },
  methods: {
    selectFollow(index) {
      this.datas[index].follow = false
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
  .notification_non {
    background-color: white;
  }
</style>
