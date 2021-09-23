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
                <p class="switch_content">Advetising Agencies</p>
                <hr class="switch_hr">
                <p class="switch_content">Advertising Material Distribution</p>
                <hr class="switch_hr">
                <p class="switch_content">Direct Marketing Services</p>
                <hr class="switch_hr">
                <p class="switch_content"  @click="showIndustryService">Internet Marketing Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Marketing Consulting Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Public Relation Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Other Adertising Service</p>
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
    name: 'Industry_System',
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
            console.log('backdrop  industryService');
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
