<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>3 Communities Found</a>
          </div>
          <div class="content left-content header_top height_static">
              <div class="socialmedia_search_para">
                <img src="marketers_int.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>Marketers Int</b><br><span class="search_commun"></span>Private Community<br>235K Members</p>
                <div class="search_transmit">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn"><img src="next_arrow.png">Join</button>
                </div>
              </div>

              <div class="socialmedia_search_para">
                <img src="international_market.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>International<br>Market</b><br><span class="search_commun"></span>Private Community<br>2K Members</p>
                <div class="search_transmit">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn"><img src="next_arrow.png">Join</button>
                </div>
              </div>

              <div class="socialmedia_search_para">
                <img src="money_builders.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>Money Builders</b><br><span class="search_commun"></span>Private Community<br>54K Members</p>
                <div class="search_transmit">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn"><img src="next_arrow.png">Join</button>
                </div>
              </div>


          </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Search Communities',
  components: {
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
  .search_commun {
    font-size: 14px;
  }
</style>
