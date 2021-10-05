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
                
                <router-link to="/socialmedia/socialmedia_bs_profile"><p class="switch_content">Agricultural Services</p></router-link>
                <hr class="switch_hr">
                <p class="switch_content">Construction and Contractors</p>
                <hr class="switch_hr">
                <p class="switch_content">Accommodation Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Insurance Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Non-Profit Organizations</p>
                <hr class="switch_hr">
                <p class="switch_content">Real-Estate Services</p>
                <hr class="switch_hr">
                <p class="switch_content">Transportation and Warehouse</p>
                <hr class="switch_hr">
                <p class="switch_content">Water and Sewage System</p>
                <hr class="switch_hr">
                <p class="switch_content"  @click="showIndustrySystem">Marketing and Advetising System</p>
                <hr class="switch_hr">
                <p class="switch_content">Mining and Gas Products</p>
                <hr class="switch_hr">
                <p class="switch_content">Other Services</p>
              </div>
          </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Industry',
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
</style>
