<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal bs_user_center_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="swtich_account_header"
            id="modalTitle"
          >
              <div class="switch_area">
                <img src="profile/back.png" @click="closeModal" class="bg-view-mask">
                <p class="switch_content">Affiliate Marketing Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Content Marketing Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Email Marketing Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Mobile Marketing Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Online Marketing Platform</p>
                <hr class="switch_hr">
                <p class="switch_content">Social Media Marketing Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Other</p>
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
    name: 'Industry_Service',
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
    .bs_user_center_modal {
        height: 100vh !important;
        max-width: 414px;
        margin-right: 140px;
        width: calc(100% - 140px) !important;
        transform: translate3d(0, 0, 0) !important;
        border-radius: 0 !important;
    }
</style>
