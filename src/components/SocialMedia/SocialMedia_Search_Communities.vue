<template>
  <div>
    <div class="container">
      <div class="profile_phone">
        
          <div class="header_modal profile_modal">
            <router-link to="/socialmedia/socialmedia_main_lounge" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Your 24 Communities</a>
          </div>
          <div class="add_modal left-content">
              <div class="socialmedia_search_para" v-for="(item, index) in datas" :key="index">
                <img :src="`${item.image_url}`" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>{{item.name}}</b><br><span class="search_commun"></span>Private Community<br>{{item.price}}K Members</p>
              </div>

          </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Search_Communities',
  components: {
  },
  data () {
    return {
      datas: [
      { image_url: "marketers_int.png",
        name: "Markets Int",
        price: 235,
        follow:true
      },
      { image_url: "international_market.png",
        name: "International\nMarket",
        price: 2,
        follow:true
      },
      { image_url: "money_builders.png",
        name: "Money Builders",
        price: 54,
        follow:true
      },
      { image_url: "marketers_int.png",
        name: "Markets Int",
        price: 235,
        follow:true
      },
      { image_url: "international_market.png",
        name: "International\nMarket",
        price: 2,
        follow:true
      },
      { image_url: "money_builders.png",
        name: "Money Builders",
        price: 54,
        follow:true
      }
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
  .search_commun {
    font-size: 14px;
  }
</style>
