<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="main_audio_modal">
            <div>
              <router-link to="/"><img src="main_logo.png" class="main_logo"></router-link>
              <router-link to="/socialmedia/socialmedia_messaging_messages"><img src="main_box.png" class="main_icon"></router-link>
              <img src="main_calendar.png" class="main_icon">
              <img src="main_contact.png" class="main_icon">
              <router-link to="/socialmedia/socialmedia_main_switch_account">
                <img src="mona.png" class="main_user">
              </router-link>
            </div>
            <p><img src="member's_lounge.png" class="favicon_img">MEMBER’S LOUNGE</p>
          </div>
          <div class="main_body main_body_audio">
           
            <div class="lounge_content">
              <router-link class="menu_item" v-for="(item) in items" :key="item.rout" :to="`/socialmedia/${item.rout}`">
                <div>
                    <p><img :src="`${item.img}`"><br>
                    <span>{{item.name}}</span></p>
                </div>
              </router-link>
            </div>
            

            
          </div>
          <div class="footer_background">
            <div class="footer_modal">
              <router-link to="/socialmedia/socialmedia_main">
              <span class="footer_img_rest_left">
              <img src="Home.png">
              <p>Home</p>
              </span>
              </router-link>

              <router-link to="/socialmedia/socialmedia_main_audio_event">
              <span class="footer_img_rest_left">
              <img src="audio_events.png">
              <p>Audio Events</p>
              </span>
              </router-link>

              <router-link to="/socialmedia/socialmedia_main_create_event"><button class="audio_circle_btn">Create Audio Event</button></router-link>

              <span class="footer_img footer_img_rest_right">
              <img src="lounge_orange.png">
              <p class="footer_select_title">Lounge</p>
              </span>

              <router-link to="/socialmedia/socialmedia_main_activities">
                <span class="footer_img_rest_right">
                  <img src="activities.png">
                  <p>Notification</p>
                </span>
              </router-link>
              
            </div>
          </div>
            
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Lounge',
  components: {
  },
  data() {
      return { items: [
          {rout : "socialmedia_bs_profile", img: "lounge_profile.png", name: "My Profile"}, 
          {rout : "", img: "lounge_usercenter.png", name: "My User Center"},
          {rout : "socialmedia_main_lounge_add", img: "lounge-addons.png", name: "My Add-ons"},
          {rout : "", img: "lounge_membership.png", name: "My Membership"},
          {rout : "", img: "lounge_wallet.png", name: "My Wallet"},
          {rout : "", img: "lounge_communities.png", name: "My Communities"},
          {rout : "", img: "lounge_event.png", name: "My Events"},
          {rout : "", img: "lounge_interests.png", name: "My Interests"},
          {rout : "", img: "lounge_rewards.png", name: "My Rewards"},
        ]
      }
  }
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
  .main_body_audio {
    margin: 90px 20px 150px 20px !important;
  }
  .lounge_content {
    width: 100%;
    margin: 20px auto 0;
    display: flex;
    flex-wrap: wrap;
  }
  .lounge_content .menu_item {
    margin: 5px;
    height: 85px;
    width: calc(50% - 10px);
    text-align: left;
    position: relative;
    border-radius: 5px;
    background: white;
  }
  .lounge_content .menu_item div {
    position: absolute;
    color: #3B3E51;
    font-size: 13px;
    bottom: 10px;
    left: 10px;
    text-decoration: none;
    letter-spacing: 0.04em;
  }
  .lounge_content p {
    margin: 0 0 0 10px;
  }
  .lounge_content img {
    margin-bottom: 10px;
  }
</style>
 