<template>
  <div>
    <div class="container">
      <div class="phone sociallogin event_chat">
        
            <div class="msg_system_modal">
                <div class="logo_header">
                    <router-link to="/socialmedia/socialmedia_main_messages" class="msg_system_toggle">
                        <img src="toggle.png">
                    </router-link>
                    <span class="msg_system_title"># Resources</span>
                    <router-link to="/socialmedia/socialmedia_main_messages_invite" class="msg_system_users">
                        <img src="users.png">
                    </router-link>
                </div>
                <p class="msg_system_content">Resources</p>
            </div>
            <div class="msg_system_window">
                <p class="msg_system_chat_date">October 19, 2021</p>
                    <div class="event_chat_content"  v-for="(item, index) in DiamondData" :key="index">
                      <div class="event_chat_text">
                          <img :src="`${item.diamond_img}`" class="chat_logo">
                          <div class="socialmedia_chat_para">
                            <p class="msg_chat_time"><span>{{item.user_name}}{{item.time}}</span><span class="msg_chat_sentence">Hey, what’s up Guys!! Can you test</span></p>
                            <div class="chat_diamond_number">
                              <div class="diamond_animation">
                                <img src="frame_diamond2.png" class="diaframe" v-if="item.diaOneActive == true" :class="{'diaOneAppear': item.diaOneActive == true}">
                                <img src="chatdia.png" v-if="item.diaTwoActive == true" class="diaframe" :class="{'diaTwoAppear': item.diaTwoActive == true}">
                                <img src="chat_diamond.png" @click="showDiaOneItem(index)">
                              </div>
                              <span>{{item.diaSize}}</span>
                            </div>
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
                user_name: "",
                time: "3m ago",
                diamond_img: "mona.png",
                diaOneActive: false,
                diaTwoActive: false,
                diaSize: 125,
            },
            {
                user_name: "Martin Cook • ",
                time: "3m",
                diamond_img: "msg_system/user_3.png",
                diaOneActive: false,
                diaTwoActive: false,
                diaSize: 14,
            },
            {
                user_name: "Samantha Briggs • ",
                time: "2m",
                diamond_img: "msg_system/user_2.png",
                diaOneActive: false,
                diaTwoActive: false,
                diaSize: 2,
            },
            {
                user_name: "George Smith • ",
                time: "1m",
                diamond_img: "msg_system/user_1.png",
                diaOneActive: false,
                diaTwoActive: false,
                diaSize: 36,
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
    .msg_system_modal {
        position: fixed;
        max-width: 414px;
        padding: 20px 20px 0;
        width: 100%;
        background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%) !important;
        z-index: 1;
    }
    .msg_system_toggle {
        margin: auto 0 !important;
    }
    .msg_system_title {
        margin: auto auto auto 20px;
    }
    .msg_system_users {
        height: 100%;
        margin: auto 0 auto auto !important;
    }
    .msg_system_content {
        margin: 10px auto;
        font-size: 20px;
        font-weight: 600;
        color: #3B3E51;
        text-align: left;
    }
    .msg_system_window {
        margin: 93px 20px 50px;
        background-color: white !important;
        border-radius: 16px;
        width: calc(100% - 40px);
        height: auto;
        padding: 5px 0;
        text-align: left;
    }
    .msg_system_chat_date {
        margin: 5px auto;
        letter-spacing: -0.02em;
        color: #687B8E;
        font-size: 13px;
        text-align: center;
    }
    .msg_chat_time {
        font-size: 12px;
        margin: auto;
        width: 100%;
        border-radius: 8px;
        padding: 10px;
        color: #687B8E;
        display: grid;
    }
    .msg_chat_sentence {
        font-size: 16px;
        color: #3B3E51;
    }
</style>