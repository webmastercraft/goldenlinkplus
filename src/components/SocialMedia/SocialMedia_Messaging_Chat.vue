<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_messaging_messages" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Chat</a>
          </div>
          
            <div class="header_top socialmedia_chat height_static">
                <div class="socialmedia_chat_person">
                    <img src="Profile_on.png">
                    <p class="socialmedia_chat_p">Rayford Chenail</p>
                    <span class="socialmedia_chat_span">...</span>
                </div>
                <div class="left-content messaging_chat_window_area">
                    <div class="event_chat_content"  v-for="(item, index) in DiamondData" :key="index">
                      <div class="event_chat_text">
                          <img :src="`${item.diamond_img}`" class="chat_logo">
                          <div class="socialmedia_chat_para">
                            <p class="chat_time">{{item.time}}<br><span class="chat_sentence">{{item.text}}</span></p>
                          </div>
                      </div>
                    </div>
                </div>
                <div class="chat_sentence event_chat_send messaging_chat_width">
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
                
                
            </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Messaging_Chat',
  components: {
  },
  data () {
    return {
      DiamondData: [
            {
                diamond_img: "mona.png",
                diaOneActive: false,
                diaTwoActive: false,
                time: "2 minutes ago",
                text: "Hey, what's up Ray!!"
            },
            {
                diamond_img: "mona.png",
                diaOneActive: false,
                diaTwoActive: false,
                time: "1 minute ago",
                text: "I am good! thanks Lets meet tonight at 8."
            },
            {
                diamond_img: "mona.png",
                diaOneActive: false,
                diaTwoActive: false,
                time: "Just Now",
                text: "Okay thanks"
            }
      ]
    }
  }
}
</script>
<style>
  .socialmedia_chat {
    width: 100%;
    text-align: left;
  }
  .socialmedia_chat_person {
    display: flex;
    position: relative;
    font-size: 20px;
  }
  .socialmedia_chat_p {
    position: absolute;
    left: 60px;
    bottom: 0;
    margin: 0;
  }
  .socialmedia_chat_span {
    position: absolute;
    right: 10px;
    bottom: 0;
    margin: 10px 10px 0;
  }
  .socialmedia_chat_window {
    width: 100% !important;
    height: 500px !important;
    background-color: white !important;
    margin: 20px 0 15px;
    border-radius: 16px;
  }
  .chat_sentence {
    font-size: 16px;
  }
  .socialmedia_chat_para {
    width: 100%;
    background-color: #E6F7FF;
    border-radius: 8px;
    position: relative;
  }
  .socialmedia_chat_text {
    display: flex;
    margin: 20px 20px 0;
  }
  .chat_logo {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 0 10px auto auto;
  }
  .chat_logo_small {
    float: right;
    margin: 5px 20px 0 0;
  }
  .socialmedia_chat_input {
    width: 100%;
    border: 0 solid white !important;
    border-radius: 10px !important;
    padding-left: 50px !important;
    padding-right: 90px !important;
  }
  .chat_sentence .form-control:focus {
    background-color: white;
  }
  .chat_sentence {
    position: relative;
  }
  .chat_sentence > button{
    position: absolute;
    top: 5px;
  }
  .chat_sentence .btn_cam {
    left: 10px;
  }
  .chat_sentence .btn_emoty {
    right: 50px;
  }
  .chat_sentence .btn_send {
    right: 10px;
  }
  .messaging_chat_window {
    margin: 10px 0;
    background-color: white !important;
    border-radius: 16px;
    width: 100%;
    height: auto;
  }
  .messaging_chat_content {
    display: grid;
  }
  .messaging_chat_text {
    display: flex;
    width: 100%;
    padding: 10px 20px;
  }
  .messaging_chat_width {
    width: calc(100% - 40px) !important;
    margin: 0 !important;
  }
  .messaging_chat_window_area {
    margin: 10px 0 50px;
    background-color: white !important;
    border-radius: 16px;
    width: 100%;
    height: calc(100% - 85px);
    padding: 0 0 5px;
  }
</style>
