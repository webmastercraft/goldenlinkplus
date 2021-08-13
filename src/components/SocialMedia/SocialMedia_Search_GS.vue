<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>6 GS Marketers Found</a>
          </div>
          <div class="content left-content header_top height_static">
            
              <div class="socialmedia_messages search_gs_margin">
                <img src="Ray_big.png" class="socialmedia_messages_size">
                <p class="socialmedia_messages_p search_gs_name">Rayford Chenail</p>
                <div class="search_transmit search_gs_grid">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn_disable"><img src="airplane.png">Send</button>
                </div>
              </div>

            
            <div class="socialmedia_messages search_gs_margin">
              <img src="Ray_big_on.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p search_gs_name">Rayford Chenail</p>
              <div class="search_transmit search_gs_grid">
                <button class="follow_btn_disable">Following</button>
                <router-link to="/socialmedia/socialmedia_messaging_chat"><button class="send_btn"><img src="airplane.png">Send</button></router-link>
              </div>
            </div>

            <div class="socialmedia_messages search_gs_margin">
              <img src="Ray_big_on.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p search_gs_name">Rayford Chenail</p>
              <div class="search_transmit search_gs_grid">
                <button class="follow_btn_disable">Following</button>
                <router-link to="/socialmedia/socialmedia_messaging_chat"><button class="send_btn"><img src="airplane.png">Send</button></router-link>
              </div>
            </div>

            <div class="socialmedia_messages search_gs_margin">
              <img src="Ray_big_on.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p search_gs_name">Rayford Chenail</p>
              <div class="search_transmit search_gs_grid">
                <button class="follow_btn_disable">Following</button>
                <router-link to="/socialmedia/socialmedia_messaging_chat"><button class="send_btn"><img src="airplane.png">Send</button></router-link>
              </div>
            </div>

            <div class="socialmedia_messages search_gs_margin">
              <img src="Ray_big.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p search_gs_name">Rayford Chenail</p>
              <div class="search_transmit search_gs_grid">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn_disable"><img src="airplane.png">Send</button>
              </div>
            </div>

            <div class="socialmedia_messages search_gs_margin">
              <img src="Ray_big.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p search_gs_name">Rayford Chenail</p>
              <div class="search_transmit search_gs_grid">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn_disable"><img src="airplane.png">Send</button>
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
  }
  .search_gs_name {
    margin: auto auto auto 0 !important;
  }
  .search_gs_grid {
    display: grid;
  }
</style>
