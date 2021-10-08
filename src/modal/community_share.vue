<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask community_share_end_modal" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal community_share_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="swtich_account_header"
            id="modalTitle"
          >
                <div class="community_share_area">
                    <p>
                        <img src="share.png">
                        <span>Share</span>
                    </p>
                    <p>
                        <img src="tweet.png">
                        <span>Tweet</span>
                    </p>
                    <p>
                        <img src="copy_link.png">
                        <span>Copy Link</span>
                    </p>
                </div>
          </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Community_Post-Report',
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
      showIndustrySystem1() {
        this.$emit('showIndustrySystem1');
      },
      closeViewProfile() {
        this.f_industry_system1 = false;
      },
    },
  }
</script>
<style>
    .community_share_end_modal {
        align-items: flex-end !important;
    }
    .community_share_area {
        display: flex;
        margin: 40px 10px;
    }
    .community_share_area p {
        margin: auto;
        display: grid;
        text-align: center;
    }
    .community_share_area p img {
        margin: auto;
    }
    .community_share_area p span {
        margin: auto;
    }
    .community_share_modal {
      height: auto !important;
      max-width: 414px !important;
      width: 100% !important;
      transform: translate3d(0, 0, 0) !important;
      border-radius: 16px 16px 0 0 !important;
      margin: auto;
    }
</style>
