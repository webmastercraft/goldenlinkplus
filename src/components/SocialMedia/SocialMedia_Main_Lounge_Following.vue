<template>
    <div class="container">
        <div class="profile_phone">
            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/socialmedia_main_lounge" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>You are Following 785 People</a>
            </div>
            <div class="add_modal left-content">
                <div class="invite_find lounge_following_find">
                    <input type="search" placeholder="Find People" class="form-control">
                    <img src="Search_modal.png">
                </div>
                <div class="socialmedia_search_para" v-for="(item, index) in datas" :key="index">
                    <img :src="`${item.image_url}`" class="lounge_following_user">
                    <p class="socialmedia_search_title following_para"><b>{{item.name}}</b><br><span class="search_commun"></span>{{item.user}}<br>{{item.price}}</p>
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
</template>
<script>


export default {
  name: 'Lounge_Following',
  components: {
  },
  data () {
    return {
      datas: [
          { image_url: "Ray_big_on.png",
            name: "Willard Jones",
            user: "Chief Executive Officer",
            price: "Gecko & Co",
            follow:true
          },
          { image_url: "Ray_big_on.png",
            name: "Willard Jones",
            user: "Chief Executive Officer",
            price: "Gecko & Co",
            follow:true
          },
          { image_url: "Ray_big_on.png",
            name: "Willard Jones",
            user: "Chief Executive Officer",
            price: "Gecko & Co",
            follow:true
          },
          { image_url: "Ray_big_on.png",
            name: "Willard Jones",
            user: "Chief Executive Officer",
            price: "Gecko & Co",
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
    .lounge_following_user {
        width: 45px;
        height: 45px;
        margin: auto;
    }
    .lounge_following_find {
        position: relative;
        margin: 0 !important;
    }
    .lounge_following_find img {
        top: 13px !important;
        right: 22px !important;
    }
    .following_para {
        margin: 0 10px;
        width: 100%;
    }
</style>
