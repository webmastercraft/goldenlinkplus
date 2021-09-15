<template>
  <div>
    <div class="container">
      <div class="profile_phone">
        
          <div class="header_modal profile_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <router-link to="/socialmedia/socialmedia_main_create_event" class="upcoming_pos">Upcoming Audio Events<img src="bottom_arrow.png" class="upcoming_arrow"></router-link>
          </div>
          <div class="main_body upcoming_body">
            <div class="para_event upcoming_para_event">
              <div class="para_title" @click="showUpcomingEvent">
                <p class="upcoming_orange"><b>TOMORROW 7:00 AM</b></p>
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                
              </div>
              <div class="para_group upcoming_group">
                <img src="Group_user.png">
              </div>
            </div>

            <div class="para_event upcoming_para_event">
              <div class="para_title" @click="showUpcomingEvent">
                <p class="upcoming_orange"><b>TOMORROW 7:00 AM</b></p>
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                
              </div>
              <div class="para_group upcoming_group">
                <img src="Group_user.png">
              </div>
            </div>

            <div class="para_event upcoming_para_event">
              <div class="para_title" @click="showUpcomingEvent">
                <p class="upcoming_orange"><b>TOMORROW 7:00 AM</b></p>
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                
              </div>
              <div class="para_group upcoming_group">
                <img src="Group_user.png">
              </div>
            </div>
            <UpcomingEvent 
                v-show="f_show_upcoming_event"
                @user-backdrop="removeFlagFromStack"
                >
            </UpcomingEvent>
            
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { default as Vuedals, Component as Vuedal, Bus as VuedalsBus } from 'vuedals';
import UpcomingEvent from "../../modal/upcoming_event.vue";

export default {
  name: 'Event_Upcoming',
  components: {
    UpcomingEvent,
  },
  data () {
    return {
        f_show_upcoming_event: false,
        modalStack: [],
    }
  },
  methods: {
    showUpcomingEvent() {
        this.f_show_upcoming_event = true;
        this.modalStack.push('f_show_upcoming_event');
    },
    removeFlagFromStack() {

      let temp = this.modalStack.pop(-1);

      switch (temp) {
        case 'f_show_upcoming_event':
          this.f_show_upcoming_event = false
          break;
        default:
          break;
      }
      this.f_show_upcoming_event = false
    }
  }
}
</script>
<style>
.upcoming_orange {
  color: #F4992D;
  margin: 5px 0 10px !important;
}
.upcoming_group {
  margin: auto !important;
}
.upcoming_body {
  margin: 80px 20px 0 !important;
}
.upcoming_pos {
  position: relative;
}
.upcoming_plus {
  position: absolute;
  text-align: right;
  right: 30px;
  top: 19px;
}
.upcoming_arrow {
    position: absolute;
    right: 65px;
    top: 28px;
}
.upcoming_para_event {
  padding: 8px 15px;
  margin: 0;
}
</style>
