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
              <router-link to=""><span>See All Chat Members</span></router-link></p>
          </div>
          <div class="left-content event_chat_window">
                    <div class="event_chat_text">
                        <img src="mona.png" class="chat_logo">
                        <div class="socialmedia_chat_para">
                          <p class="chat_time">2 minutes ago<br><span class="chat_sentence">Hey, what’s up Guys!!</span></p>
                          <img src="chat_diamond.png"><span>125</span>
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
                    <div class="event_chat_text">
                        <img src="mona.png" class="chat_logo">
                        <div class="socialmedia_chat_para">
                          <p class="chat_time">2 minutes ago<br><span class="chat_sentence">Hey, what’s up Guys!!</span></p>
                          <img src="chat_diamond.png"><span>125</span>
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
                    <div class="event_chat_text">
                        <img src="mona.png" class="chat_logo">
                        <div class="socialmedia_chat_para">
                          <p class="chat_time">2 minutes ago<br><span class="chat_sentence">Hey, what’s up Guys!!</span></p>
                          <img src="chat_diamond.png"><span>125</span>
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
                    <div class="event_chat_text">
                        <img src="mona.png" class="chat_logo">
                        <div class="socialmedia_chat_para">
                          <p class="chat_time">2 minutes ago<br><span class="chat_sentence">Hey, what’s up Guys!!</span></p>
                          <img src="chat_diamond.png"><span>125</span>
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
          </div> 
      </div>
    </div>
</template>
<script>


export default {
  name: 'Event_Chat',
  components: {
  },
}
</script>
<style>
.event_chat {
  display: block !important;
}
.event_chat_window {
  margin: 20px 20px 15px;
  background-color: white !important;
  border-radius: 16px;
  width: calc(100% - 40px);
  height: 500px;
}
.event_chat_send {
  width: calc(100% - 40px);
  margin: 0 20px;
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
  padding: 20px 20px 0;
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
</style>
 