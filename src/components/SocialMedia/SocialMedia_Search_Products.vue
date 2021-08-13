<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>3 Products Found</a>
          </div>
          <div class="content left-content header_top height_static">
            
              <div class="socialmedia_search_para">
                <img src="starbucks.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>Starbucks</b><br><span class="search_area">Los Angeles, California</span><br><img src="gcoins.png" class="search_coins_img"><span class="search_coins"></span>6 G-Coin Rewards<br><span class="search_check_offer"><b>Check Offer</b></span></p>
                <div class="search_transmit">
                <button class="follow_btn">Follow <img src="contact.png"></button>
                <button class="send_btn_disable"><img src="airplane.png">Send</button>
                </div>
              </div>

              <div class="socialmedia_search_para">
                <img src="coach.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>Coach</b><br><span class="search_area">Los Angeles, California</span><br><img src="gcoins.png" class="search_coins_img"><span class="search_coins"></span>20 G-Coin Rewards<br><span class="search_check_offer"><b>Check Offer</b></span></p>
                <div class="search_transmit">
                <button class="follow_btn_disable">Following</button>
                <router-link to="/socialmedia/socialmedia_messaging_chat"><button class="send_btn"><img src="airplane.png">Send</button></router-link>
                </div>
              </div>

              <div class="socialmedia_search_para">
                <img src="paint_company.png" class="socialmedia_search_logo_size">
                <p class="socialmedia_search_title search_para"><b>The Paint Company</b><br><span class="search_area">San Diego, California</span><br><img src="gcoins.png" class="search_coins_img"><span class="search_coins"></span>13 G-Coin Rewards<br><span class="search_check_offer"><b>Check Offer</b></span></p>
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
  name: 'Search Products',
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
  .send_btn {
    background: #13C8FF;
  }
  .follow_btn_disable {
    background: #13C8FF;
    opacity: 20%;
  }
  .send_btn_disable {
    background: #13C8FF;
    opacity: 20%;
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
