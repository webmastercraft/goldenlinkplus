<template>
  <div>
    <div class="container">
      <div class="phone sociallogin event_chat">
        
            <div class="event_body_title event_chat_title">
              <p class="event_favicon_img"><img src="triangle.png">MAKING BIG TIME MONEY 101</p>
              <p class="event_desc">Let’s All win the Market!! Start<br>Learning today!</p>
              
                <p class="event_back">
                  <router-link to="/socialmedia/socialmedia_main_event_hallway">
                    <img src="event_back.png">Back
                  </router-link>
                <router-link to=""><span @click="showChatMembers">See All Chat Members</span></router-link></p>
            </div>
            <div class="left-content event_chat_window">
                    <div class="event_chat_content"  v-for="(item, index) in DiamondData" :key="index">
                      <div class="event_chat_text">
                          <img :src="`${item.diamond_img}`" class="chat_logo">
                          <div class="socialmedia_chat_para">
                            <p class="chat_time">2 minutes ago<br><span class="chat_sentence">Hey, what’s up Guys!!</span></p>
                            <div class="diamond_animation">
                              <img src="frame_diamond2.png" class="diaframe" v-if="item.diaOneActive == true" :class="{'diaOneAppear': item.diaOneActive == true}">
                              <img src="chatdia.png" v-if="item.diaTwoActive == true" class="diaframe" :class="{'diaTwoAppear': item.diaTwoActive == true}">
                              <img src="chat_diamond.png" @click="showDiaOneItem(index)">
                            </div>
                              <span>{{item.diaSize}}</span>
                          </div>
                      </div>
                          <div class="event_chat_login">
                            <img src="eduardo.png">
                            <img src="esther.png">
                            <img src="Geoffrey Mott.png">
                            <img src="Brandie.png">
                            <img src="Alex Smith.png">
                            <img src="Grandma.png">
                            <img src="Kathry.png">
                            <img src="Judith.png">
                            <img src="Irma.png">
                            <img src="Savannah.png">
                            <img src="Susan Boyle.png">
                            <img src="logins.png">
                          </div>
                    </div>
            </div>
            <div class="chat_sentence event_chat_send">
                <input type="text" placeholder="Type your message here..." class="socialmedia_chat_input form-control">
                <button type="button" class="btn_cam">
                    <img src="camera.png">
                </button>
                <button type="button" class="btn_emoty">
                    <img src="emoty.png">
                </button>
                <button type="button" class="btn_send">
                    <img src="send.png">
                </button>
            </div>
            <ChatMembers 
                v-show="f_show_chat_members"
                @user-backdrop="removeFlagFromStack"
            >
            </ChatMembers>
          </div> 
      </div>
    </div>
</template>
<script>
import { default as Vuedals, Component as Vuedal, Bus as VuedalsBus } from 'vuedals';
import ChatMembers from "../../modal/chat_members.vue";

export default {
  name: 'Event_Chat',
  components: {
    ChatMembers
  },
  data () {
    return {
        f_show_chat_members: false,
        numClicks: 0,
        modalStack: [],
        DiamondData: [
            {
                diamond_img: "mona.png",
                diaOneActive: false,
                diaTwoActive: false,
                diaSize: 120,
            },
            {
                diamond_img: "mona.png",
                diaOneActive: false,
                diaTwoActive: false,
                diaSize: 125,
            },
            {
                diamond_img: "mona.png",
                diaOneActive: false,
                diaTwoActive: false,
                diaSize: 12,
            },
            {
                diamond_img: "mona.png",
                diaOneActive: false,
                diaTwoActive: false,
                diaSize: 12,
            }
        ]
    }
  },
  methods: {
    showDiaOneItem(index) {
        if(this.DiamondData[index].diaOneActive || this.DiamondData[index].diaTwoActive ) {
          return;
        }
        this.numClicks++;
        if (this.numClicks === 1) {          // the first click in .2s
            var self = this;
            setTimeout(function() {
                switch(self.numClicks) {     // check the event type
                    case 1:
                        self.DiamondData[index].diaOneActive = true
                        break;
                    default:
                        self.DiamondData[index].diaTwoActive = true
                }
                self.numClicks = 0;               // reset the first click
            }, 200);          
        }
        setTimeout(() => {
          if (this.DiamondData[index].diaOneActive) {
            this.DiamondData[index].diaOneActive = false
            self.DiamondData[index].diaSize++;
          }
          if (this.DiamondData[index].diaTwoActive) {
            this.DiamondData[index].diaTwoActive = false
            self.DiamondData[index].diaSize--;
          }
        }, 1500)
    },
    removeFlagFromStack() {

      let temp = this.modalStack.pop(-1);

      switch (temp) {
        case 'f_show_chat_members':
          this.f_show_chat_members = false;
          break;
        default:
          break;
      }
      this.f_show_chat_members = false
    },
    showChatMembers() {
        this.f_show_chat_members = true;
        this.modalStack.push('f_show_chat_members');
    },
  }
}
</script>
<style>
.event_chat {
  display: block !important;
}
.event_chat_window {
  margin: 15px 20px 50px;
  background-color: white !important;
  border-radius: 16px;
  width: calc(100% - 40px);
  height: auto;
  padding: 0 0 5px;
}
.event_chat_send {
  width: calc(100% - 40px);
  margin: 0 20px;
  max-width: 374px;
  position: absolute !important;
  bottom: 0;
}
.event_chat_title {
  position: relative;
}
.event_chat_login {
  margin: 3px 20px 0 0;
}
.event_chat_login img{
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 1px;
  float: right;
}
.event_chat_login img:last-child {
  width: 15px;
  height: 15px;
}
.event_chat_text {
  display: flex;
  width: 100%;
}
.socialmedia_chat_para img {
  width: 21px;
  height: 16px;
  margin: 5px 5px 0 auto;
}
.socialmedia_chat_para span{
  margin: 0 10px 0 0;
}
.event_chat_content {
  display: grid;
  padding: 10px 20px 0;
}
.diaOneAppear {
  animation-name: diaOneFramesUser;
  animation-duration: 1s;
  position: absolute;
}
@keyframes diaOneFramesUser {
    0% {opacity: 0.00;}
    25% {opacity: 0.75;}
    75% {opacity: 1.00;}
    100% {opacity: 0.00;}
    from {bottom: 35px;}
    to {bottom: 35px;}
}
.diaTwoAppear {
  animation-name: diaTwoFramesUser;
  animation-duration: 1s;
  position: absolute;
}
@keyframes diaTwoFramesUser {
    0% {opacity: 0.00;}
    25% {opacity: 0.75;}
    75% {opacity: 1.00;}
    100% {opacity: 0.00;}
    from {bottom: 35px;}
    to {bottom: 35px;}
}
.diaframe {
    opacity: 0.00;
    position: absolute;
    width: 35px !important;
    height: 28px !important;
    top: 0;
    right: 0;
}
.diamond_animation {
    position: relative;
    width: 30px;
    margin: 0 auto auto;
}
.diamond_animation img {
  margin: 0;
}
</style>