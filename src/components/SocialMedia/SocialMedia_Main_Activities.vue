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
              <img src="main_user.png" class="main_user">
            </div>
            <p><img src="ring.png" class="favicon_img">ACTIVITIES</p>
          </div>
          <div class="main_body main_body_activities">
            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> pinged you</p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p>Ivan Tolestenko invited you as a<br>co-host in the Event How to make<br>Money Online in Money Makers<br>Community<br><button class="accept">Accept Invitation</button></p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p>scheduled <b>"Money Making Big Time"</b> with Alice Hansen for Monday, July 26 at 1:00pm</p>
              <p class="activities_num">25m</p>
            </div>
            
            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> followed you</p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> removed you from an Event <u>How to make Money Online</u><br><button class="rejoin">Rejoin the Event</button></p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user activities_color">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> followed you</p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user activities_color">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> followed you</p>
              <p class="activities_num">25m</p>
            </div>
            
            <div class="activities_user activities_color">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> removed you from an Event <u>How to make Money Online</u><br><button class="rejoin">Rejoin the Event</button></p>
              <p class="activities_num">25m</p>
            </div>

            <div class="activities_user activities_color">
              <img src="Geoffrey Mott.png">
              <p><b>Geoffrey Mott</b> followed you</p>
              <p class="activities_num">25m</p>
            </div>
            

            
          </div>
          <!-- <div class="footer_background">
            <div class="footer_modal">
              <router-link to="/socialmedia/socialmedia_main">
                <span class="footer_img_rest_left">
                  <img src="home.png">
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

              <router-link to="/socialmedia/socialmedia_main_lounge">
              <span class="footer_img_rest_right">
              <img src="lounge.png">
              <p>Lounge</p>
              </span>
              </router-link>

              <span class="footer_img footer_img_rest_right">
              <img src="activities_orange.png">
              <p class="footer_select_title">Activities</p>
              </span>
            </div>
          </div> -->
            
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Activities',
  components: {
  }
}
</script>
<style>
  .main_audio_modal {
    height: 90px;
    position: fixed;
    width: 414px;
    background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%);
    padding: 20px;
  }
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
  .activities_user {
    display: flex;
    text-align: center;
    width: 100%;
    padding: 7px 20px;
  }
  .activities_user img {
    height: 100%;
    width: 32px;
    height: 32px;
  }
  .activities_user p {
    margin: auto auto auto 15px;
    text-align: left;
  }
  .activities_user .activities_num {
    text-align: right;
    float: right;
    margin: auto 0 !important;
    color: rgba(59, 62, 81, 0.6);
  }
  .activities_user .accept {
    background-color: #13C8FF;
    color: white;
    border-radius: 8px;
    letter-spacing: 0.02em;
    padding: 2px 10px;
    margin-top: 10px;
    width: 165px;
  }
  .activities_user .rejoin {
    border: 2px solid #FF0000;
    color: #FF0000;
    border-radius: 8px;
    letter-spacing: 0.02em;
    padding: 2px 10px;
    margin: 10px 0;
    width: 165px;
  }
  .main_body_activities {
    margin: 90px 0 20px 0;
    font-size: 14px;
  }
  .activities_color {
    background: white;
  }
</style>
 