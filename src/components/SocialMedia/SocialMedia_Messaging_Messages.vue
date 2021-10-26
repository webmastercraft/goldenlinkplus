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
  .notification_non {
    background-color: white;
  }
</style>
