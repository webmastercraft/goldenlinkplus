<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Create Your Event</a>
          </div>
          <div class="content left-content header_top height_static">
            <input type="text" placeholder="Event title" class="form-control event_title">
            <p class="event_characters">60 characters remaining</p>
            <div class="event_characters_img">
              <span>with</span>
              <p><img src="Jean_Smith.png"><br>Jean Smith</p>
              <p><img src="Jean_Smith.png"><br>Jean Smith</p>
              <p><img src="Jean_Smith.png"><br>Jean Smith</p>
            </div>
            <div></div>
            <button class="event_add_btn" @click="showModal">+ Add a Co-host or Guest</button>
            <div>
                <textarea
                  class="form-control event_textarea"
                  id="description"
                  rows="5"
                  placeholder="What do you want to talk about?"
                ></textarea>
                <p class="event_characters">189 characters remaining</p>
            </div>
            <p class="event_text">TEXT CHAT</p>
            <hr class="event_text_hr">
            <div class="form-group event_allow event_text_area">
                <span class="toggle-title">Allow people to chat in the event's discussion area</span>
                <toggle-button :value="true" :labels="{checked: 'YES', unchecked: 'NO'}" :color="{checked: '#13C8FF', unchecked: '#FF0000', disabled: '#CCCCCC'}" :width=80 :height=30 style='float: right;'/>
            </div>
            <div class="event_data">
              <p class="event_text">Date<span>Today</span></p>
              <hr class="event_text_hr">

              <p class="event_text">TIME<span>7:00 AM</span></p>
              <hr class="event_text_hr">
            </div>

            <form>
              <div class="event_check">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                  <label for="vehicle1"></label>
                  <p>I want to start this event now</p>
              </div>
            </form>
              <button class="event_go" @click="showEventInvite">LET'S GO
              </button>
          </div>
          <Modal
            v-show="isModalVisible"
            @close="closeModal"
          />
          <EventInvite 
            v-show="f_show_event_invite"
            @close="closeModal"
          >
          </EventInvite>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'; 
import { default as Vuedals, Component as Vuedal, Bus as VuedalsBus } from 'vuedals';
import ToggleButton from 'vue-js-toggle-button';
import Modal from "../../modal/co_host_ghost.vue";
import EventInvite from "../../modal/event_invite.vue";

Vue.use(ToggleButton)

export default {
  name: 'Create_Your_Event',
  components: {
    Modal,
    EventInvite
  },
  data () {
    return {
      isModalVisible: false,
      f_show_event_invite: false,
      modalStack: [],
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.f_show_event_invite = false;
      this.isModalVisible = false;
    },
    showEventInvite() {
      this.f_show_event_invite = true;
    },
  }
}
</script>
<style>
  .event_title {
    background: #F4F9FE !important;
    border: 0 solid white !important;
    margin: 15px 25px 0 25px;
    padding: 0 20px !important;
    width: calc(100% - 50px) !important;
    height: 50px !important;
  }
  .event_characters {
    text-align: right;
    margin: 0 25px;
    font-size: 12px;
  }
  .event_characters_img {
    display: flex;
    margin: 20px 25px;
    width: calc(100% - 50px);
  }
  .event_characters_img p {
    margin: 0 auto;
    text-align: center;
    font-size: 12px;
  }
  .event_add_btn {
    color: #F4992D;
    border: 2px solid #F4992D;
    padding: 5px 5px;
    border-radius: 12px;
    margin: 10px auto;
    display: flex;
  }
  .event_textarea {
    margin: 20px 25px 0 25px;
    width: calc(100% - 50px) !important;
    background-color: #F4F9FE !important;
    border-radius: 12px !important;
    border: 0 solid white !important;
    padding: 15px !important;
  }
  .event_allow {
    margin: 15px 40px;
  }
  .event_text_hr {
    margin: 15px 25px;
  }
  .event_allow span {
    font-size: 16px;
  }
  .event_data span{
    float: right;
  }
  .event_allow {
    display: flex;
  }
  .event_text {
    margin: 15px 40px;
  }
  .event_check {
    margin: 50px 45px;
    font-size: 16px;
    display: flex;
    text-align: center;
  }
  .event_check label {
    margin: auto;
    text-align: center;
  }
  .event_check p {
    margin: auto;
  }
  .event_go {
    border-radius: 30px;
    background-color: #F4992D;
    color: white;
    padding: 8px 50px;
    margin: 0 auto 50px;
    display: flex;
  }
</style>
