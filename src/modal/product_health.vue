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
                <p class="switch_content"  @click="showIndustryService">Health Care</p>
                <hr class="switch_hr">
                <p class="switch_content">Jewelry Cleaning and Care</p>
                <hr class="switch_hr">
                <p class="switch_content">Personal Care</p>
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
    name: 'Product_Health',
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
      showIndustryService(){
        this.$emit('showIndustryService');
      },
      close() {
        this.$emit('close');
      },
      userProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-mask"){
          this.$emit('user-backdrop');
        }
      },

      closeViewProfile() {
        this.f_industry_service = false;
      },
    },
  }
</script>
<style>
</style>
