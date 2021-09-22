<template>
    <div class="container">
        <div class="profile_phone">

            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/socialmedia_main_lounge" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>Your 25 Events</a>
            </div>
            <div class="main_body lounge_event_body">
            <div class="lounge_event">
              <div class="para_title">
                <p class="upcoming_orange"><b>JULY 25TH 2021 9:00 AM CST</b></p>
                <p class="lounge_event_title"><img src="lounge_users.png" class="lounge_users"><span>Let’s All win the Market!! asdf asd asdfsad</span></p>
                <p>from<img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
              </div>
            </div>
            <hr class="lounge_hr">
            <div class="lounge_event">
              <div class="para_title">
                <p class="upcoming_orange"><b>JULY 25TH 2021 9:00 AM CST</b></p>
                <p class="lounge_event_title"><img src="lounge_users.png" class="lounge_users"><span>Let’s All win the Market!! asdf asd asdfsad</span></p>
                <p>from<img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
              </div>
            </div>
            <hr class="lounge_hr">
            <div class="lounge_event">
              <div class="para_title">
                <p class="upcoming_orange"><b>JULY 25TH 2021 9:00 AM CST</b></p>
                <p class="lounge_event_title"><img src="lounge_users.png" class="lounge_users"><span>Let’s All win the Market!! asdf asd asdfsad</span></p>
                <p>from<img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
              </div>
            </div>
            <hr class="lounge_hr">
            <div class="lounge_event">
              <div class="para_title">
                <p class="upcoming_orange"><b>JULY 25TH 2021 9:00 AM CST</b></p>
                <p class="lounge_event_title"><img src="lounge_users.png" class="lounge_users"><span>Let’s All win the Market!! asdf asd asdfsad</span></p>
                <p>from<img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
              </div>
            </div>
            <hr class="lounge_hr">
          </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Lounge_Add',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style>
    .lounge_users {
        height: 100%;
        margin: auto 10px auto 0;
    }
    .lounge_event_title {
        display: flex;
        width: 100%;
    }
    .lounge_event_title span {
        margin: auto;
        font-size: 16px;
    }
    .lounge_event p {
        font-size: 13px;
        letter-spacing: 0.08em;
        margin: 0;
    }
    .lounge_event {
        margin: 20px 0;
    }
    .lounge_event_body {
        margin: 60px 20px 0 !important;
    }
</style>
