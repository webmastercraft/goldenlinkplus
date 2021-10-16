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
                  <span @click="showTermCondition">
                    Terms and Conditions
                  </span>
                  <img src="terms.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span @click="showPrivacyPolicy">
                    Privacy Policy
                  </span>
                  <img src="security.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span @click="showGuideline">
                    Social Media Guidelines
                  </span>
                  <img src="guideline.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span @click="showBSAgreement">
                    Business Membership Guidelines and Agreements
                  </span>
                  <img src="bs_agreement.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span @click="showGSAgreement">
                    GS Membership Guidelines and Agreements
                  </span>
                  <img src="gs_agreement.png">
                </p>
                <hr class="switch_hr">
                <p class="toggle_content">
                  <span @click="showTranslate">
                    Translate App to Chinese
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
      close() {
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
      closeViewProfile() {
        this.f_show_term_condition = false;
        this.f_show_privacy_policy = false;
        this.f_show_guideline = false;
        this.f_show_bs_agreement = false;
        this.f_show_gs_agreement = false;
        this.f_show_translate = false;
      },
      showTermCondition() {
        this.$emit('showTermCondition');
      },
      showPrivacyPolicy() {
        this.$emit('showPrivacyPolicy');
      },
      showGuideline() {
        this.$emit('showGuideline');
      },
      showBSAgreement() {
        this.$emit('showBSAgreement');
      },
      showGSAgreement() {
        this.$emit('showGSAgreement');
      },
      showTranslate() {
        this.$emit('showTranslate');
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
