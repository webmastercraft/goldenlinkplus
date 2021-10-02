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
                <p class="manage_content title_orange">Manage Communities</p>
                <p class="manage_content">You can manage all the groups you are a member all at once.</p>
                <hr class="manage_hr">
                <p class="manage_content" @click="showIndustrySystem">Quick Join</p>
                <hr class="manage_hr">
                <p class="manage_content" @click="showIndustrySystem">Leave Communities</p>
                <hr class="manage_hr">
                <p class="manage_content" @click="showIndustrySystem">Follow / Unfollow</p>
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
    .community_manage_modal {
        height: auto !important;
        max-width: 414px !important;
        width: calc(100% - 50px) !important;
        transform: translate3d(0, 0, 0) !important;
        border-radius: 16px !important;
        margin: auto 25px;
    }
    .manage_area {
        padding: 14px 24px;
        background: white;
        width: 100%;
        max-width: 414px;
        min-height: auto;
        text-align: left;
    }
    .manage_hr {
        margin: 10px auto;
    }
    .manage_content {
        margin: 10px auto;
        font-size: 15px;
    }
    .title_orange {
        color: #EF8200;
        font-size: 16px;
        font-weight: 600;
    }
</style>
