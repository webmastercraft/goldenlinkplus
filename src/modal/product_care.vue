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
                <p class="switch_content">Acupunture</p>
                <hr class="switch_hr">
                <p class="switch_content">Biometric Monitors</p>
                <hr class="switch_hr">
                <p class="switch_content">Diabetes Care</p>
                <hr class="switch_hr">
                <p class="switch_content">Hearing Aids</p>
                <hr class="switch_hr">
                <p class="switch_content">Medical Alarm Systems</p>
                <hr class="switch_hr">
                <p class="switch_content">Medicine and Drugs</p>
                <hr class="switch_hr">
                <p class="switch_content">Mobility and Accessibility</p>
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
    name: 'Product_Care',
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
</style>
