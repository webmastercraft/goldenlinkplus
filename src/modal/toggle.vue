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
              <div class="switch_area">
                <p class="toggle_content">
                  <span>
                    <router-link to="/socialmedia/socialmedia_terms_conditions">Terms and Conditions</router-link>
                  </span>
                  <img src="terms.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span>
                    <router-link to="/socialmedia/socialmedia_privacy_policy">Privacy Policy</router-link>
                  </span>
                  <img src="security.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span>
                    <router-link to="/socialmedia/socialmedia_guidelines">Social Media Guidelines</router-link>
                  </span>
                  <img src="guideline.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span>
                    <router-link to="/socialmedia/socialmedia_bs_guidelines">Business Membership Guidelines and Agreements</router-link>
                  </span>
                  <img src="bs_agreement.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span>
                    <router-link to="/socialmedia/socialmedia_gs_guidelines">GS Membership Guidelines and Agreements</router-link>
                  </span>
                  <img src="gs_agreement.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span>
                    <router-link to="">Translate App to Chinese</router-link>
                  </span>
                  <img src="translator.png">
                </p>
                <hr class="switch_hr">
              </div>
          </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Toggle',
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
  .toggle_content {
    margin: 20px 0;
    font-size: 15px;
    display: flex;
  }
  .toggle_content span {
    margin: auto auto auto 0;
  }
  .toggle_content img {
    height: 100%;
    margin: 0 0 auto auto;
  }
</style>
