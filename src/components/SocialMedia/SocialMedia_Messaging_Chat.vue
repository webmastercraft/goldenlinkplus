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
                <div class="content left-content socialmedia_chat_window">
                    <div class="socialmedia_chat_text">
                        <img src="mona.png" class="chat_logo">
                        <div class="socialmedia_chat_para">
                          <p class="chat_time">2 minutes ago<br><span class="chat_sentence">Hey, what's upu Ray!!</span></p>
                        </div>
                    </div>
                    <img src="Ray_small.png" class="chat_logo_small">
                    <div class="socialmedia_chat_text">
                        <img src="Ray.png" class="chat_logo">
                        <div class="socialmedia_chat_para">
                          <p class="chat_time">1 minutes ago<br><span class="chat_sentence">I am good! thanks Lets meet<br>tonight at 8.</span></p>
                        </div>
                    </div>
                    <div class="socialmedia_chat_text">
                        <img src="mona.png" class="chat_logo">
                        <div class="socialmedia_chat_para">
                          <p class="chat_time">Just now<br><span class="chat_sentence">Okay thanks!</span></p>
                        </div>
                    </div>
                </div>
                <div class="chat_sentence">
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
  }
}
</script>
<style>
  .sociallogin {
    background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%) !important;
  }

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
  .chat_time {
    font-size: 11px;
    margin: 0 0 0 10px;
    
    border-radius: 8px;
    padding: 10px;
  }
  .chat_sentence {
    font-size: 16px;
  }
  .socialmedia_chat_para {
    width: 100%;
    background-color: #E6F7FF;
    display: flex;
  }
  .socialmedia_chat_text {
    display: flex;
    margin: 20px 20px 0;
  }
  .chat_logo {
    height: 40px;
    width: 40px;
    border-radius: 50%;
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
    height: 45px;
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
  .height_static {
    min-height: 100%;
  }
</style>
