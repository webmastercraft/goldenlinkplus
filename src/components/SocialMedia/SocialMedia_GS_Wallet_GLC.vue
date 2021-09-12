<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>GS Wallet<span>GLC</span></a>
          </div>
          
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Search_Products',
  components: {
  },
  data () {
    return { 
        datas: [
          {
            image_url: "starbucks.png",
            name: "Starbucks",
            address: "Los Angeles, California",
            coin: 6,
            follow: true,
          },
          {
            image_url: "coach.png",
            name: "Coach",
            address: "Los Angeles, California",
            coin: 20,
            follow: true,
          },
          {
            image_url: "paint_company.png",
            name: "The Paint Company",
            address: "San Diego, California",
            coin: 13,
            follow: true,
          }
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
  .socialmedia_search_logo_size {
    height: 100%;
    margin: 0 15px;
  }
  .socialmedia_messages_p {
    margin: 0;
  }
  .notification_non {
    background-color: white;
  }
  .search_area {
    font-size: 11px;
  }
  .socialmedia_search_title {
    font-size: 16px;
  }
  .search_coins {
    font-size: 14px;
  }
  .search_coins_img {
    margin-bottom: 4px;
    margin-right: 5px;
  }
  .search_check_offer {
    color: #13C8FF;
    font-size: 16px;
  }
  .socialmedia_search_para {
    padding: 15px 10px;
    display: flex;
  }
  .search_para {
    margin: 0;
    width: 100%;
  }
  .follow_btn {
    background: #EF8200;
  }
  .follow_btn_disable {
    background: #13C8FF33;
    color: #3DAEC9 !important;
  }
  .send_btn_disable {
    background: #13C8FF;
    opacity: 0.2;
  }
  .send_btn {
    background: #13C8FF;
    opacity: 1;
  }
  .search_transmit button {
    padding: 5px 10px;
    width: 95px;
    border-radius: 25px;
    color: white;
    font-size: 14px;
    margin: 3px 0;
  }
  .send_btn img {
    margin-right: 7px;
  }
  .send_btn_disable img {
    margin-right: 7px;
  }
</style>
