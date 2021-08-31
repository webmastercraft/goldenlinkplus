<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Messages</a>
          </div>
          <div class="content left-content header_top height_static">
            <router-link to="/socialmedia/socialmedia_messaging_chat">
              <div class="socialmedia_messages">
                <img src="Profile_on.png" class="socialmedia_messages_size">
                <p class="socialmedia_messages_p">Rayford Chenail<br><span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span></p>
                <img src="99.png" class="socialmedia_messages_size">
              </div>
            </router-link>

            <router-link to="/socialmedia/socialmedia_messaging_chat">
            <div class="socialmedia_messages">
              <img src="Profile_off.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p">Rayford Chenail<br><span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span></p>
              <img src="99.png" class="socialmedia_messages_size">
            </div>
            </router-link>

            <div class="socialmedia_messages notification_non">
              <img src="Profile_off.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p">Rayford Chenail<br><span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span></p>
              <img src="details.png" class="socialmedia_messages_size">
            </div>

            <div class="socialmedia_messages notification_non">
              <img src="Profile_on.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p">Rayford Chenail<br><span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span></p>
              <img src="details.png" class="socialmedia_messages_size">
            </div>

            <div class="socialmedia_messages notification_non">
              <img src="Profile_off.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p">Rayford Chenail<br><span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span></p>
              <img src="details.png" class="socialmedia_messages_size">
            </div>

            <div class="socialmedia_messages notification_non">
              <img src="Profile_on.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p">Rayford Chenail<br><span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span></p>
              <img src="details.png" class="socialmedia_messages_size">
            </div>

            <div class="socialmedia_messages notification_non">
              <img src="Profile_on.png" class="socialmedia_messages_size">
              <p class="socialmedia_messages_p">Rayford Chenail<br><span class="socialmedia_messages_desc">I sent you an email, I hope you... • 2h</span></p>
              <img src="details.png" class="socialmedia_messages_size">
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
