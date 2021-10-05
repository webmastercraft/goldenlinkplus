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
              <div class="manage_area_each">
                <div class="membership_header_fix">
                    <p class="manage_content title_orange"><img src="profile/back.png" @click="closeModal" class="bg-view-mask community_back">Community Membership</p>
                    <div class="invite_find community_find">
                            <input type="search" placeholder="Find People" class="form-control">
                            <img src="Search_modal.png">
                    </div>
                </div>
                <div class="membership_content_flow">
                    <div class="membership_group" v-for="(item, index) in membershipdata" :key="index">
                        <img :src="`${item.com_img}`">
                        <p class="membership_group_content">
                            <span class="membership_group_title"><b>{{item.com_name}}</b></span>
                            <span>{{item.com_state}}</span>
                            <span><span class="community_number">{{item.mem_number}} Members<span class="community_dots">•</span>{{item.mem_new}} New</span></span>
                        </p>
                        <button class="membership_join">Join</button>
                    </div>
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
    name: 'Industry_System',
    components: {
        
    },  
    data () {
      return {
        f_show_view_profile: false,
        membershipdata: [
            {
                com_img: "community/money_box.png",
                com_name: "Money Makers Com",
                com_state: "Public Community",
                mem_number: "123",
                mem_new: "10"
            },
            {
                com_img: "community/money_box.png",
                com_name: "Money Makers Com",
                com_state: "Public Community",
                mem_number: "123",
                mem_new: "10"
            },
            {
                com_img: "community/money_box.png",
                com_name: "Money Makers Com",
                com_state: "Public Community",
                mem_number: "123",
                mem_new: "10"
            },
            {
                com_img: "community/money_box.png",
                com_name: "Money Makers Com",
                com_state: "Public Community",
                mem_number: "123",
                mem_new: "10"
            },
            {
                com_img: "community/money_box.png",
                com_name: "Money Makers Com",
                com_state: "Public Community",
                mem_number: "123",
                mem_new: "10"
            },
        ]
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
    .community_back {
        margin: auto 20px 2px auto;
    }
    .community_find {
        margin: 20px auto;
        display: flex;
        position: relative;
    }
    .community_find img {
        position: absolute;
        right: 20px !important;
        top: 13px;
    }
    .membership_group {
        display: flex;
        margin: 10px auto;
    }
    .membership_group img{
        height: 45px;
        width: 45px;
        margin: 0 10px auto auto;
    }
    .membership_group_content {
        display: grid;
        margin: auto;
        font-size: 14px;
        color: #808695;
    }
    .membership_group_title {
        font-size: 15px;
        color: #3B3E51 !important;
    }
    .membership_join {
        margin: 0 auto auto auto;
        background-color: #13C8FF;
        color: white;
        border-radius: 16px;
        padding: 3px 0;
        width: 25%;
        font-size: 14px;
    }
    .membership_header_fix {
        position: fixed;
        width: calc(100% - 48px);
        background-color: white;
        top: 0;
    }
    .manage_area_each {
        padding: 0 24px 14px;
        background: white;
        width: 100%;
        max-width: 414px;
        height: 50vh;
        text-align: left;
    }
    .membership_content_flow {
        margin-top: 110px;
        overflow: auto;
    }
</style>
