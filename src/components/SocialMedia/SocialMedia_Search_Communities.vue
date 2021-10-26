<template>
  <div>
    <div class="container">
      <div class="profile_phone">
        
          <div class="header_modal profile_modal">
            <router-link to="/socialmedia/socialmedia_main_lounge" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Your 24 Communities<router-link to="/socialmedia/community/socialmedia_community_create"><img src="profile/profile_plus.png" class="search_plus_img"></router-link></a>


          </div>
          <div class="add_modal left-content">
              <div v-for="(item, index) in linkData" :key="index" class="feed_link_data">
                <img :src="`${item.brand_img}`" class="feed_link_brand_img">
                <p class="feed_link_p">
                  <span class="feed_link_group_span"><span>{{item.group_name}}</span><img src="triangle.png"></span>
                  <span class="feed_link_member_span">{{item.member_number}} Members</span>
                  <span class="feed_link_view_span"><img :src="`${item.view_img}`"><span>{{item.view_text}}</span></span>
                </p>
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
      linkData: [
        {
          brand_img: "community/brand1.png",
          group_name: "Elite Marketing Group",
          member_number: "288K",
          view_img: "community/grey_lock.png",
          view_text: "Private Community",
          
        },
        {
          brand_img: "community/brand2.png",
          group_name: "4M Future Marketing",
          member_number: "1.3M",
          view_img: "community/grey_eye.png",
          view_text: "Public Community ",
        },
        {
          brand_img: "community/brand3.png",
          group_name: "Boom Promoters Inc",
          member_number: "50K",
          view_img: "community/grey_eye.png",
          view_text: "Public Community ",
        },
        {
          brand_img: "community/brand4.png",
          group_name: "Goldrushers",
          member_number: "125K",
          view_img: "community/grey_eye.png",
          view_text: "Public Community ",
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
  .notification_non {
    background-color: white;
  }
  .search_commun {
    font-size: 14px;
  }
  .search_plus_img {
    position: absolute;
    top: 18px;
    right: 20px;
    z-index: 1;
  }
</style>
