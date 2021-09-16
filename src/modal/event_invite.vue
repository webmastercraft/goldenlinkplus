<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal_event_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="host_view_position"
          id="modalTitle"
        >
            <button
            type="button"
            class="close_btn type_close"
            @click="close"
            aria-label="Close modal"
            >
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <p class="medium_1_title">TOMORROW   7:00 AM</p>
              <p class="medium_title">Let’s All win the Market!!<br>Start Learning today!</p>
              
              <p class="event_invite_para"><span>from</span><img src="triangle.png" class="favicon_img"><span class="event_para_small">MAKING BIG TIME MONEY 101...</span></p>
              <hr class="event_invite_hr">
              <div class="event_user">
                <img src="Jean_Smith.png">
                <img src="George Dy.png">
                <img src="Alex Smith.png">
                <img src="Susan Boyle.png">
                <img src="Peter Rogers.png">
              </div>
              <p class="event_invite_para"><span class="event_para_small">with Jean Smith, George Dy, Alex Smith, Susan Boyle, Peter Rogers</span></p>
              <hr class="event_invite_hr">
              <p class="event_invite_title">Invite 1,000 people to your Event!</p>
              <div class="event_invite_url">
                      <input type="text" placeholder="" class="form-control" value="https://www.goldenlinkplus.com/join/452%">
              </div>
              <div class="event_user">
                <p><img src="share.png"><br><span>Share</span></p>
                <p><img src="tweet.png"><br><span>Tweet</span></p>
                <p><img src="copy_link.png"><br><span>Copy Link</span></p>
                <p><img src="add_tocal.png"><br><span>Add to Cal</span></p>
              </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>
  .header_event {
  border-radius: 30px;
}
.event_invite_hr {
  margin: 10px 20px 20px;
}
.event_invite_para {
  margin: 10px 20px;
  display: inline-block;
  font-size: 16px;
}
.event_invite_para img {
  margin: 0 5px 0 10px;
}
.event_invite_para span {
  font-size: 16px;
}
.event_invite_para .event_para_small {
  font-size: 14px;
  letter-spacing: 0.05em;
}
.event_user {
  margin: 0 20px;
  text-align: center;
  display: flex;
}
.event_user img {
  margin: auto;
}
.event_invite_title {
  color: #F4992D;
  font-size: 18px;
  margin: 0 20px;
}
.event_invite_url {
  margin: 10px 20px 20px;
}
.event_invite_url input {
  height: 50px;
  padding: 0 38px;
  background-color: #F4F9FE;
  border: 0 solid white;
  border-radius: 12px;
}
.event_user p {
  margin: auto;
}
.event_user span {
  margin-top: 10px;
  display: block;
}
.event_done {
  border-radius: 30px;
  background-color: #F4992D;
  color: white;
  padding: 8px 50px;
  margin: 30px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.medium_1_title img {
  float: right;
  margin-top: 5px;
}
.event_invite_position {
  text-align: left;
  overflow: auto;
  height: 1000px;
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 414px;
}
.each_height {
  height: 1000px !important;
}
.modal_event_transform {
  transform: translate(0, 25%) !important;
}
</style>
