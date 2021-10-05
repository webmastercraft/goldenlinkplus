<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal community_manage_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="swtich_account_header"
            id="modalTitle"
          >
              <div class="manage_area">
                <p class="manage_content title_orange">Gold Striker Information</p>
                <p class="manage_content">Company / Name: <b>Kathryn Murphy</b></p>
                <p class="manage_content">Contact Name: <b>Kathryn Murphy</b></p>
                <p class="manage_content">Telephone: <b>+1626-684-8151</b></p>
                <p class="manage_content">Email Address:<br><b>contact@kathrynmurphy.com</b></p>
                <p class="manage_content">Skype ID: <b>kathrynmurphy</b></p>
              </div>
          </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Referral',
    components: {
    },  
    data () {
      return {
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
      close() {
        this.$emit('close');
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
    .community_manage_modal {
        height: auto !important;
        max-width: 414px !important;
        width: calc(100% - 20px) !important;
        transform: translate3d(0, 0, 0) !important;
        border-radius: 16px !important;
        margin: auto 10px;
    }
</style>
