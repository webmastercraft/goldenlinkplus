<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="userProfileBackdrop">
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
                <router-link to="/socialmedia/socialmedia_main_lounge">
                    <div class="switch_user">
                        <img src="mona.png">
                        <p>Your GS Account<br><b>$254</b></p>
                    </div>
                </router-link>
                <p class="switch_title">Account</p>
                <router-link to="/socialmedia/socialmedia_verify_account">
                  <p class="switch_content green_text">Verify this Account</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/socialmedia_bs_profile"><p class="switch_content">View Profile</p></router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/bs_center/socialmedia_bs_user_center"><p class="switch_content">My User Center</p></router-link>
                <hr class="switch_hr">
                <p class="switch_content">Membership</p>
                <hr class="switch_hr">
                <p class="switch_content">Security</p>
                <hr class="switch_hr">
                <router-link to="/socialmedia/socialmedia_main_notification_setting">
                    <p class="switch_content">Notification Settings</p>
                </router-link>
                <p class="switch_title">Communities</p>
                <router-link to="/socialmedia/community/socialmedia_community_create">
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
    name: 'Switch_Account',
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
      userProfileBackdrop(evt) {
          if(evt.target.classList.length > 0 && "bg-mask"){
              this.$emit('user-backdrop');
          }
      },
    },
  }
</script>
<style>
  .green_text {
    color: #39B54A;
  }
</style>
