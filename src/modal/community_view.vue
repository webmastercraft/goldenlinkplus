<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask community_view_modal_position" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal community_view_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="swtich_account_header"
            id="modalTitle"
          >
              <div class="manage_area">
                <router-link to="/socialmedia/community/socialmedia_community_about">
                  <p class="manage_content" @click="closeModal">About this Community</p>
                </router-link>
                <hr class="switch_hr">
                <p class="manage_content" @click="closeModal">Share Community</p>
                <hr class="switch_hr">
                <p class="manage_content" @click="closeModal">Edit Description</p>
                <hr class="switch_hr">
                <p class="manage_content" @click="closeModal">Make Membership For<br>Approval Only</p>
                <hr class="switch_hr">
                <p class="manage_content" @click="closeModal">Limit Hosting to Admins</p>
                <hr class="switch_hr">
                <p class="manage_content community_view_red" @click="closeModal">Leave Community</p>
                <hr class="switch_hr">
                <p class="manage_content community_view_red" @click="closeModal">Delete Community</p>
              </div>
          </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Company',
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
  .community_view_red {
    color: red;
  }
  .community_view_modal {
    height: auto !important;
    max-width: 414px;
    margin-right: 50px;
    width: calc(100% - 50px) !important;
    transform: translate3d(0, 0, 0) !important;
    border-radius: 16px !important;
  }
  .community_view_modal_position {
    align-items: flex-start !important;
  }
</style>
