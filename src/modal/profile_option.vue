<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal modal-profile"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
            <button
              type="button"
              class="close_btn"
              @click="close"
              aria-label="Close modal"
            >
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="profile_option">
              <router-link to="/socialmedia/socialmedia_bs_profile" class="profile_buc">
                  <img src="view_user.png">
                  <p><b>Ana Smith</b></p>
                  <p class="profile_type">BUSINESS</p>
              </router-link>
              <img src="line.png" class="profile_line">
              <router-link to="/socialmedia/socialmedia_gs_profile" class="profile_gs">
                  <img src="view_user.png">
                  <p><b>Ana Smith</b></p>
                  <p class="profile_type">GS</p>
              </router-link>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'User',
    components: {
    },  
    data () {
      return {
        f_show_view_profile: false,
      }
    },
    methods: {
      close(evt) {
        if( evt.target.classList.length > 0 && "fa-times-circle"){
          this.$emit('close');
        }
      },
    }
  };
</script>
<style>
.profile_option {
  display: flex;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
}
.profile_option a {
  margin: auto;
}
.profile_option p {
  margin: 10px auto;
  letter-spacing: -0.02em;
}
.profile_line {
  height: 100%;
  margin-top: 15px;
}
.profile_buc img, .profile_gs img {
  width: 95px;
  height: 95px;
}
.profile_type {
  opacity: 0.5;
}
.modal-profile {
  margin: 40px !important;
}
</style>
