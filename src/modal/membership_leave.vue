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
                            <span class="community_number">{{item.mem_date}}</span>
                        </p>
                        <button class="membership_leave">Leave</button>
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
                com_name: "Money Makers Com...",
                mem_date: "You visited 1 year ago",
            },
            {
                com_img: "community/money_box.png",
                com_name: "Money Makers Com...",
                mem_date: "You visited 1 year ago",
            },
            {
                com_img: "community/money_box.png",
                com_name: "Money Makers Com...",
                mem_date: "You visited 1 year ago",
            },
            {
                com_img: "community/money_box.png",
                com_name: "Money Makers Com...",
                mem_date: "You visited 1 year ago",
            },
            {
                com_img: "community/money_box.png",
                com_name: "Money Makers Com...",
                mem_date: "You visited 1 year ago",
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
    .membership_leave {
        margin: 0 auto auto auto;
        background-color: #E8F1FA;
        color: black;
        border-radius: 16px;
        padding: 3px 0;
        width: 25%;
        font-size: 14px;
    }
</style>
