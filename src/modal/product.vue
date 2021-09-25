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
                
                <p class="switch_content">Animals and Pet Supplies</p>
                <hr class="switch_hr">
                <p class="switch_content">Apparel and Accessories</p>
                <hr class="switch_hr">
                <p class="switch_content">Arts and Entertainment</p>
                <hr class="switch_hr">
                <p class="switch_content">Baby And Toddler</p>
                <hr class="switch_hr">
                <p class="switch_content">Business and Industrial</p>
                <hr class="switch_hr">
                <p class="switch_content">Cameras and Optics</p>
                <hr class="switch_hr">
                <p class="switch_content">Electronics</p>
                <hr class="switch_hr">
                <p class="switch_content">Food and Beverages</p>
                <hr class="switch_hr">
                <p class="switch_content">Marketing and Advetising System</p>
                <hr class="switch_hr">
                <p class="switch_content"  @click="showIndustrySystem">Health and Beauty</p>
                <hr class="switch_hr">
                <p class="switch_content">Home and Garden</p>
              </div>
          </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Product',
    components: {
    },  
    data () {
      return {
        f_show_view_profile: false,

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
      showIndustrySystem() {
        this.$emit('showIndustrySystem');
      },
      closeViewProfile() {
        this.f_industry_system = false;
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
