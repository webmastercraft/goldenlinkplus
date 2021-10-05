<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal swtich_account_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="swtich_account_header"
            id="modalTitle"
          >
              
                <img src="close.png"  class="switch_close" @click="closeModal">
              
              <div class="switch_area">
                <p class="switch_title">Switch Account</p>
                <div class="switch_header">
                    <p>Bundle GS and Business Profiles.<br>Easily switch between profiles.</p>
                    <button>GET THIS</button>
                </div>
                <router-link to="/socialmedia/socialmedia_main_lounge_bs">
                    <div class="switch_user">
                        <img src="Jean_Smith.png">
                        <p>Your Business Account<br><b>$3800</b></p>
                    </div>
                </router-link>
                <p class="switch_title">Activity</p>
                <router-link to="/socialmedia/socialmedia_main_create_event"><p class="switch_content">Schedule an Event</p></router-link>
                <p class="switch_title">Account</p>
                <router-link to="/socialmedia/socialmedia_verify_account">
                  <p class="switch_content green_text">Verify this Account</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/socialmedia_gs_profile"><p class="switch_content">View Profile</p></router-link>
                <hr class="switch_hr">
                <p class="switch_content">Membership</p>
                <hr class="switch_hr">
                <p class="switch_content">Security</p>
                <hr class="switch_hr">
                <router-link to="/socialmedia/socialmedia_main_notification_setting">
                    <p class="switch_content">Notification Settings</p>
                </router-link>
                <p class="switch_title">Communities</p>
                <router-link to="/socialmedia/socialmedia_main_notification_setting">
                    <p class="switch_content">Create a Community</p>
                </router-link>
                <p class="switch_title">Finances</p>
                <p class="switch_content">Cash Balance<span><b>$254</b></span></p>
                <hr class="switch_hr">
                <p class="switch_content">G-Coins Balance<span><b>254,236</b></span></p>
                <hr class="switch_hr">
                <p class="switch_content">Cash-in</p>
                <hr class="switch_hr">
                <p class="switch_content">Withdraw funds</p>
                <hr class="switch_hr">
                <p class="switch_content">Transaction History</p>
              </div>
          </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Switch_GS_Account',
    components: {
    },  
    data () {
      return {
        f_show_view_profile: false
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      viewProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-view-mask"){
          this.$emit('view-backdrop');
        }
      },
    },
  }
</script>
<style>
    .view_img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .view_icon {
        margin-top: 40px;
        width: 100%;
    }
    .view_follow_btn {
        background-color: #EF8200;
        padding: 5px 10px;
        width: 95px;
        border-radius: 25px;
        color: white;
        font-size: 13px;
        float: right;
    }
    .view_following_btn {
        background-color: rgba(19, 200, 255, 0.5);
    }
    .view_icon button img {
        margin: 0 0 3px 3px;
    }
    .view_mute {
        float: left;
        margin-left: 20px;
    }
    .view_profile_title {
        text-align: left;
        margin: 20px 5px;
        font-weight: 400;
    }
    .view_name {
        font-size: 17px;
        margin: 3px 0;
    }
    .view_name span {
        color: #BFC1CE;
        font-size: 14px;
        margin-left: 10px;
    }
    .view_followers {
        font-size: 15px;
        margin: 3px 0;
    }
    .view_followers span {
        margin-left: 20px;
    }
    .view_followers img {
        margin: 0 5px 4px 0;
    }
    .view_check {
        color: #13C8FF;
        font-size: 15px;
        margin: 10px 0;
    }
    .view_mark {
        font-size: 14px;
        margin: 10px 0;
    }
    .view_hr {
        margin: 15px 5px;
    }
    .view_details {
        display: flex;
        font-size: 14px;
        font-weight: 300;
        text-align: left;
        margin: 0 5px;
    }
    .view_date {
        margin: auto 0 0 0;
    }
    .view_ring {
        height: 100%;
        margin: auto 0 auto auto;
    }
    .view_details_title {
        margin: 0 0 0 auto;
    }
    .view_details_title img {
        margin: 0 5px 3px 0;
    }
    .view_color_btn button {
        width: calc(50% - 5px);
        color: white;
        border-radius: 16px;
        height: 50px;
    }
    .view_sky {
        background-color: rgba(0, 180, 255, 0.3) !important;
        margin-right: 5px !important;
    }
    .view_green {
        background-color: #39B54A !important;
        margin-left: 5px !important;
    }
    .swtich_account_modal {
        height: 100vh !important;
        max-width: 414px !important;
        margin-right: 100px;
        width: calc(100% - 100px) !important;
        transform: translate3d(0, 0, 0) !important;
        border-radius: 0 !important;
    }
    .swtich_account_header {
        position: relative;
        text-align: left;
        overflow: auto;
    }
    .switch_area {
        padding: 10px 20px;
        background: white;
        width: 100%;
        max-width: 414px;
        min-height: 100vh;
        text-align: left;
    }
    .switch_title {
        margin: 0;
        color: #EF8200;
        font-size: 16px;
        font-weight: 600;
    }
    .switch_close {
        float: right;
        top: 10px;
        right: 10px;
        position: absolute;
    }
    .switch_header {
        border: 1px solid black;
        border-radius: 16px;
        padding: 15px;
        font-size: 14px;
        margin: 10px 0;
    }
    .switch_header p {
        margin: 0 auto 0 0;
    }
    .switch_header button {
        background: #13C8FF;
        color: white;
        border-radius: 8px;
        width: 100%;
        padding: 7px;
        margin-top: 10px;
    }
    .switch_user {
        display: flex;
        width: 100%;
        font-size: 15px;
        margin: 10px 0;
    }
    .switch_user img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: auto 0;
    }
    .switch_user p {
        margin: 0 auto 0 10px;
    }
    .switch_content {
        margin: 20px 0;
        font-size: 15px;
    }
    .switch_hr {
        margin: 0;
    }
    .switch_content span {
        margin-left: 20px;
    }
</style>
