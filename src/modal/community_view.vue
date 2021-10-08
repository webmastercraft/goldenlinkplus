<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal swtich_account_modal"
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
                <p class="manage_content" @click="showCommunityShare">Share Community</p>
                <hr class="switch_hr">
                <router-link to="/socialmedia/community/socialmedia_community_edit">
                  <p class="manage_content">Edit Description</p>
                </router-link>
                <hr class="switch_hr">
                <p class="manage_content community_view_checkbox">
                <span>Make Membership For Approval Only</span>
                <img :src="imgSrc1" @click="imgClicked1 = !imgClicked1">
                </p>
                <hr class="switch_hr">
                <p class="manage_content community_view_checkbox">
                  <span>Limit Hosting to Admins</span>
                  <img :src="imgSrc2" @click="imgClicked2 = !imgClicked2">
                </p>
                <hr class="switch_hr">
                <p class="manage_content community_view_red" @click="closeModal">Leave Community</p>
                <hr class="switch_hr">
                <p class="manage_content community_view_red" @click="showCommunityDelete">Delete Community</p>
              </div>
          </header> 
        </div>
      </div>
      <CommunityShare 
          v-show="f_show_community_share"
          @view-backdrop="closeViewProfile"
      >
      </CommunityShare>
      <CommunityDelete 
          v-show="f_show_community_delete"
          @view-backdrop="closeViewProfile"
          @close="closeViewProfile"
      >
      </CommunityDelete>
    </div>
  </transition>
</template>

<script>
  import CommunityShare from "../modal/community_share.vue";
  import CommunityDelete from "../modal/community_delete.vue";

  export default {
    name: 'Community_Share',
    components: {
      CommunityShare,
      CommunityDelete
    },  
    data () {
      return {
        f_show_community_share: false,
        f_show_view_profile: false,
        f_show_community_delete: false,
        imgClicked1: false,
        imgClicked2: false,
      } 
    },
    methods: {
      closeModal() {
        this.f_show_new_post = false;
        this.f_show_community_delete = false;
        this.$emit('close');
      },
      showCommunityShare() {
          this.f_show_community_share = true;
      },
      showCommunityDelete() {
          this.f_show_community_delete = true;
      },
      viewProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-view-mask"){
          this.$emit('view-backdrop');
        }
      },
      closeViewProfile() {
          this.f_show_community_share = false;
          this.f_show_community_delete = false;
      },
    },
    computed: {
      imgSrc1: function () {
        return this.imgClicked1 ? 'community/selected.png' : 'community/none.png'
      },
      imgSrc2: function () {
        return this.imgClicked2 ? 'community/selected.png' : 'community/none.png'
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
  .community_view_checkbox {
    display: flex;
  }
  .community_view_checkbox img{
    height: 100%;
    margin: auto 0 auto auto;
  }
</style>
