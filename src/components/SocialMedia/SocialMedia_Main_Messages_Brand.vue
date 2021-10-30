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
                <img :src="`${item.brand_user_img}`" :class="{activeHost: activeHost === index}">
              </div>
              <div class="new_msg_brand_img">
                <img src="community/plus.png">
              </div>
            </div>
            <div class="new_msg_content">
              <div v-for="(item, index) in msgData" :key="index" class="new_msg_para">
                <div class="new_msg_user_total">
                  <img :src="`${item.user_img}`" class="new_msg_user">
                  <img :src="`${item.state_img}`" class="new_msg_state">
                </div>
                <div class="new_msg_title">
                    <span class="socialmedia_messages_p">{{item.user_name}}</span>
                    <span class="socialmedia_messages_desc">{{item.user_detail}}</span>
                </div>
              </div>
            </div>
            
          </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Messaging_Messages',
  components: {
  },
  data() {
    return {
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
      ]
    }
  },
  methods: {
    setActiveHost(index) {
      this.activeHost = index;
    },
  }
}
</script>
<style>
</style>
