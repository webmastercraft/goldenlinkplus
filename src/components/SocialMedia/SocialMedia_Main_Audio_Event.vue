<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="main_audio_modal">
            <div>
              <router-link to="/"><img src="main_logo.png" class="main_logo"></router-link>
              <router-link to="/socialmedia/socialmedia_messaging_messages"><img src="main_box.png" class="main_icon"></router-link>
              <router-link to="/socialmedia/socialmedia_main_event_upcoming">
                <img src="main_calendar.png" class="main_icon">
              </router-link>
              <img src="main_contact.png" class="main_icon">
              <img src="main_user.png" class="main_user">
            </div>
            <p><img src="microphone.png" class="favicon_img">LIVE AUDIO EVENTS</p>
          </div>
          <div class="main_body main_body_audio">
            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
            </div>

            <div class="para_event">
              <div class="para_title">
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                <button>Join this Event</button>
              </div>
              <div class="para_group">
                <img src="Group_user.png">
                <p>
                  <img src="user_count.png">2501
                  <img src="msg_count.png">139
                </p>
              </div>
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

              <span class="footer_img">
              <img src="audio_events_orange.png">
              <p class="footer_select_title">Audio Events</p>
              </span>

              <router-link to="/socialmedia/socialmedia_main_create_event"><button class="audio_circle_btn">Create Audio Event</button></router-link>

              <router-link to="/socialmedia/socialmedia_main_lounge">
              <span class="footer_img_rest_right">
              <img src="lounge.png">
              <p>Lounge</p>
              </span>
              </router-link>

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
  name: 'Audio_Event',
  components: {
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
</style>
 