<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png" class="upcoming_event_back"></router-link>
            <a class="upcoming_pos">My Events<img src="bottom_arrow.png" class="upcoming_arrow" @click="showMyEvent"><router-link to="/socialmedia/socialmedia_main_create_event"><img src="img/plus.png" class="my_event_btn"></router-link></a>
          </div>
          <div class="main_body main_body_audio">
            <div class="para_event"  @click="showUpcomingEvent">
              <div class="para_title">
                <p class="upcoming_orange"><b>TOMORROW 7:00 AM</b></p>
                <p><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
                <p class="para_event_title">Let’s All win the Market!! asdf asd asdfsad</p>
                <p>Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                <p>Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
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
          <MyEvent
            v-show="f_show_my_event"
            @close="closeMyEvent"
            @user-backdrop="removeFlagFromStack"
          >
          </MyEvent>
          <UpcomingEvent 
              v-show="f_show_upcoming_event"
              @user-backdrop="removeFlagFromStack"
              >
          </UpcomingEvent>
      </div>
    </div>
  </div>
</template>
<script>
import MyEvent from "../../modal/my_event.vue";
import UpcomingEvent from "../../modal/upcoming_event.vue";

export default {
  name: 'My_Event',
  components: {
    UpcomingEvent,
    MyEvent,
  },
  data() {
    return {
      f_show_my_event: false,
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
        case 'f_show_my_event':
          this.f_show_my_event = false
          break;
        default:
          break;
      }
      switch (temp) {
        case 'f_show_upcoming_event':
          this.f_show_upcoming_event = false
          break;
        default:
          break;
      }
      this.f_show_my_event = false,
      this.f_show_upcoming_event = false
    },
    showMyEvent() {
        this.f_show_my_event = true;
        this.modalStack.push('f_show_my_event');
    },
    closeMyEvent() {
        this.f_show_my_event = false;
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
  .my_event_btn {
    position: absolute;
    right: 20px;
    top: 16px;
  }
</style>
 