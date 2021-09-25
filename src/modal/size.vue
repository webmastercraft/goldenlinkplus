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
                <p class="switch_content" @click="closeModal">1-49 Employees</p>
                <hr class="switch_hr">
                <p class="switch_content" @click="closeModal">50-99 Employees</p>
                <hr class="switch_hr">
                <p class="switch_content" @click="closeModal">100-499 Employees</p>
                <hr class="switch_hr">
                <p class="switch_content" @click="closeModal">500-499 Emloyees</p>
                <hr class="switch_hr">
                <p class="switch_content" @click="closeModal">500-999 Employees</p>
                <hr class="switch_hr">
                <p class="switch_content" @click="closeModal">Over 1000 Employees</p>
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
    name: 'Size',
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
