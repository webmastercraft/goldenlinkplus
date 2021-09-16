<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <div class="test_content">
            <router-link to="/registration" >
              Registration
            </router-link>
            <router-link to="/usercenter" >
              GSUserCenter
            </router-link>
            <router-link to="/businessusercenter" >
              BusinessUserCenter
            </router-link>
            <router-link to="/socialmedia/socialmediastart" >
              SocialMedia
            </router-link>
            <router-link to="/socialmedia/socialmedia_messaging_messages" >
              Messaging
            </router-link>
            <router-link to="/socialmedia/socialmedia_search_products" >
              Search/Products
            </router-link>
            <router-link to="/socialmedia/socialmedia_search_gs" >
              Search/GS
            </router-link>
            <router-link to="/socialmedia/socialmedia_search_services" >
              Search/Services
            </router-link>
            <router-link to="/socialmedia/socialmedia_search_communities" >
              Search/Communities
            </router-link>
            <router-link to="/socialmedia/socialmedia_gs_reg_start" >
              Registration/GS
            </router-link>
            <router-link to="/socialmedia/socialmedia_bs_reg_profile_photo" >
              Registration/BS
            </router-link>
            <router-link to="/socialmedia/socialmedia_gs_wallet_glc" >
              GS Wallet
            </router-link>
            <router-link to="/socialmedia/socialmedia_bs_profile" >
              BS Profile
            </router-link>
            <router-link to="/socialmedia/socialmedia_gs_profile" >
              GS Profile
            </router-link>
            <router-link to="/socialmedia/socialmedia_main_event_host_view" >
              Event Host View
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style>
.test_content a {
    background: #F4992D;
    border-radius: 20px;
    font-family: Poppins;
    font-style: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    padding: 12px 14px;
    display: block;
    width: 50%;
    margin: 51px auto 0;
}
</style>
