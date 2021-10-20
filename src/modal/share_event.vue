<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-mask community_share_end_modal" v-on:click.self="userProfileBackdrop">
      <div class="event_invite_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="event_setting_position"
          id="modalTitle"
        >
            <p class="medium_1_title">Wed, Jun 30 6:00 AM<img src="view_ring.png" class="share_ring"></p>
              <p class="medium_title">Let’s All win the Market!!<br>Start Learning today!</p>
              
              <p class="event_invite_para"><span>from</span><img src="triangle.png" class="favicon_img"><span class="event_para_small">MAKING BIG TIME MONEY 101...</span></p>
              <hr class="event_invite_hr">
              <div class="event_setting_logo">
                <img src="Jean_Smith.png">
                <img src="George Dy.png">
                <img src="Alex Smith.png">
                <img src="Susan Boyle.png">
                <img src="Peter Rogers.png">
              </div>
              <div class="event_setting_logo">
                <img src="Grandma.png">
                <img src="Kathry.png">
                <img src="esther.png">
                <img src="Savannah.png">
                <img src="view_user.png">
              </div>
              <p class="event_invite_para"><span class="event_para_small">with Jean Smith, George Dy, Alex Smith, Susan Boyle, Peter Rogers</span></p>
              <div class="event_setting_user">
                <p><img src="share.png"><br><span>Share</span></p>
                <p><img src="tweet.png"><br><span>Tweet</span></p>
                <p><img src="copy_link.png"><br><span>Copy Link</span></p>
                <p><img src="add_tocal.png"><br><span>Add to Cal</span></p>
              </div>
              <div class="cancel_btn_pos">
                <button class="share_cancel" @click="userProfileBackdrop">Cancel</button>
              </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Share_Event',
    methods: {
        close() {
            this.$emit('close');
        },
        userProfileBackdrop(evt) {

            if(evt.target.classList.length > 0 && "bg-mask"){
                this.$emit('user-backdrop');
            }
        },
    },
  };
</script>
<style>
    .share_cancel {
        background-color: #F4992D;
        color: white;
        padding: 8px 55px;
        border-radius: 30px;
        margin: 30px auto;
    }
    .cancel_btn_pos {
        text-align: center;
    }
    .share_event_transform {
        transform: translate(0, 14%) !important;
    }
    .event_setting_user {
      margin: 10px 20px;
      text-align: center;
      display: flex;
    }
    .event_setting_user img {
      margin: auto;
    }
    .event_setting_user p {
      margin: auto;
    }
    .event_setting_user span {
      margin-top: 10px;
      display: block;
    }
    .event_setting_position {
      text-align: left;
      overflow: auto;
      height: auto;
      background: white;
      border-radius: 12px 12px 0 0;
      width: 100%;
      max-width: 414px;
    }
    .share_ring {
      position: absolute;
      right: 0;
      bottom: 4px;
    }
    .event_setting_logo {
      margin: 10px 20px;
      display: flex;
      text-align: center;
    }
    .event_setting_logo img {
      width: 55px;
      height: 55px;
      border-radius: 50%;
      margin: auto;
    }
</style>
