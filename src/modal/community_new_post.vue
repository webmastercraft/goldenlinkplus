<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal community_new_post_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="swtich_account_header"
            id="modalTitle"
          >
                <div class="manage_area manage_area_sm">
                    <p class="community_add_title">
                        <span>New Post</span>
                        <span></span>
                    </p>
                    <div class="community_new_post_area">
                        <p class="community_desc">orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien dui, commodo at fermentum vel, auctor a magna. Sed vitae imperdiet elit. Donec ac velit metus. Nam et aliquet libero. Aenean aliquam sem ut urna porttitor, eu varius nunc viverra. Phasellus ornare pellentesque lobortis. Sed viverra nisi ac ipsum commodo pulvinar.</p>
                        <div class="newpost_img">
                            <span><img src="community/post1.png"></span>
                            <span><img src="community/post2.png"></span>
                            <span><img src="community/post3.png"></span>
                            <span><img src="community/post4.png"></span>
                            <span><img src="community/post5.png"></span>
                            <span><img src="community/post6.png"></span>
                            <span><img src="community/post7.png"></span>
                        </div>
                    </div>
                    <div class="newpost_chat_img">
                        <img src="community/camera_sky.png">
                        <img src="community/video_sky.png">
                        <img src="community/emoty.png">
                        <img src="send.png" @click="closeModal">
                    </div>
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
    .community_new_post_modal {
        height: auto !important;
        max-width: 414px !important;
        width: calc(100% - 20px) !important;
        transform: translate3d(0, 0, 0) !important;
        border-radius: 16px !important;
        margin: auto 10px;
    }
    .community_new_post_area {
        border-radius: 16px;
        border: 1px solid #AFDFF9;
        padding: 10px;
        margin: 20px auto 10px;
    }
    .manage_area_sm {
        padding: 15px !important;
    }
    .newpost_img {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    .newpost_img span {
        margin: 5px 0;
        width: 20%;
    }
    .newpost_chat_img {
        width: 100%;
        display: flex;
    }
    .newpost_chat_img img:nth-child(1) {
        margin: auto 0 auto 0;
    }
    .newpost_chat_img img:nth-child(2) {
        margin: auto auto auto 15px;
    }
    .newpost_chat_img img:nth-child(3) {
        margin: auto 15px auto auto;
    }
    .newpost_chat_img img:nth-child(4) {
        margin: auto 0 auto 0;
    }
</style>
