<template>
  <div>
    <div class="container">
      <div class="profile_phone">
        
          <div class="header_modal profile_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow">
              <img src="img/header_arrow.png" class="upcoming_event_back">
            </router-link>
            <a class="upcoming_pos">Upcoming Audio Events<img src="bottom_arrow.png" class="upcoming_arrow" @click="showEventLink"></a>
          </div>
          <div class="main_body upcoming_body">
            <p class="no_event_title">You have no events set as of this time</p>
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
            <EventLink 
              v-show="f_show_event_link"
              @close="closeEventLink"
              @user-backdrop="removeFlagFromStack"
            >
            </EventLink>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { default as Vuedals, Component as Vuedal, Bus as VuedalsBus } from 'vuedals';
import UpcomingEvent from "../../modal/upcoming_event.vue";
import EventLink from "../../modal/event_link.vue";

export default {
  name: 'Event_Upcoming',
  components: {
    UpcomingEvent,
    EventLink,
  },
  data () {
    return {
        f_show_upcoming_event: false,
        f_show_event_link: false,
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
      switch (temp) {
        case 'f_show_event_link':
          this.f_show_event_link = false
          break;
        default:
          break;
      }
      this.f_show_upcoming_event = false,

      this.f_show_event_link = false
    },
    showEventLink() {
        this.f_show_event_link = true;
        this.modalStack.push('f_show_event_link');
    },
    closeEventLink() {
        this.f_show_event_link = false;
    },
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
    margin-left: 10px; 
}
.upcoming_para_event {
  padding: 8px 15px;
  margin: 0;
}
.upcoming_event_back {
  position: absolute;
  top: 22px;
}
.no_event_title {
  text-align: center;
  font-size: 14px;
}
</style>
