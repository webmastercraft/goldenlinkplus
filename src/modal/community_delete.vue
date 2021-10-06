<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal community_post_report_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="swtich_account_header"
            id="modalTitle"
          >
              <div class="community_delete_area">
                <p class="community_delete_desc">Deleting this community will remove all associated administrators and members. Are you sure want to delete this community?</p>
                <div class="community_delete_btn">
                  <button><router-link to="/socialmedia/community/socialmedia_community_feed">Delete</router-link></button>
                  <button @click="closeModal">NO</button>
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
  .community_delete_desc {
    text-align: center;
  }
  .community_delete_area {
    padding:24px;
    background: white;
    width: 100%;
    max-width: 414px;
    min-height: auto;
  }
  .community_delete_btn {
    width:100%;
    display: flex;
  }
  .community_delete_btn button {
    border-radius: 8px;
    width: 48%;
    color: white;
    padding: 5px 0;
  }
  .community_delete_btn button:nth-child(1) {
    background-color: #CCD6DD;
    margin: auto auto auto 0;
  }
  .community_delete_btn button:nth-child(1) a {
    color: white;
  }
  .community_delete_btn button:nth-child(2) {
    background-color: #EF8200;
    margin: auto 0 auto auto;
  }
</style>
