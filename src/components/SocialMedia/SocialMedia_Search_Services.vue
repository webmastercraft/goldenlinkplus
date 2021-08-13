<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>5 Services Found</a>
          </div>
          <div class="content left-content header_top height_static">
            
              <div class="socialmedia_search_para">
                <img src="divine_salon.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>Divine Salon</b><br><span class="search_area">San Diego, California</span><br><img src="gcoins.png" class="search_coins_img"><span class="search_coins"></span>6 G-Coin Rewards<br><span class="search_check_offer"><b>Check Offer</b></span></p>
                <div class="search_transmit">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn_disable"><img src="airplane.png">Send</button>
                </div>
              </div>

              <div class="socialmedia_search_para">
                <img src="fix_tech_support.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>PC Fix Tech Support</b><br><span class="search_area">New Jersey City, New Jersey</span><br><img src="gcoins.png" class="search_coins_img"><span class="search_coins"></span>5 G-Coin Rewards<br><span class="search_check_offer"><b>Check Offer</b></span></p>
                <div class="search_transmit">
                <button class="follow_btn_disable">Following</button>
                <router-link to="/socialmedia/socialmedia_messaging_chat"><button class="send_btn"><img src="airplane.png">Send</button></router-link>
                </div>
              </div>

              <div class="socialmedia_search_para">
                <img src="gold_lotus_spa.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>Gold Lotus Spa</b><br><span class="search_area">Los Angeles, California</span><br><img src="gcoins.png" class="search_coins_img"><span class="search_coins"></span>10 G-Coin Rewards<br><span class="search_check_offer"><b>Check Offer</b></span></p>
                <div class="search_transmit">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn_disable"><img src="airplane.png">Send</button>
                </div>
              </div>

              <div class="socialmedia_search_para">
                <img src="autoshine_detailing.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>Autoshine Detailing</b><br><span class="search_area">Los Angeles, California</span><br><img src="gcoins.png" class="search_coins_img"><span class="search_coins"></span>20 G-Coin Rewards<br><span class="search_check_offer"><b>Check Offer</b></span></p>
                <div class="search_transmit">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn_disable"><img src="airplane.png">Send</button>
                </div>
              </div>

              <div class="socialmedia_search_para">
                <img src="bistro_catering.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>Bistro Catering</b><br><span class="search_area">Los Angeles, California</span><br><img src="gcoins.png" class="search_coins_img"><span class="search_coins"></span>15 G-Coin Rewards<br><span class="search_check_offer"><b>Check Offer</b></span></p>
                <div class="search_transmit">
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
  name: 'Search Services',
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
</style>
