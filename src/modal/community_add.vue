<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width community_simple_height" v-on:click.self="viewProfileBackdrop">
        <div class="event_invite_modal community_simple_content_height"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="swtich_account_header"
            id="modalTitle"
          >
              <div class="manage_area community_simple_border">
                <p class="community_add_title">
                  <span>Add Members</span>
                  <span>DONE</span>
                </p>
                <div class="invite_find community_find">
                        <input type="search" placeholder="Find People" class="form-control">
                        <img src="Search_modal.png">
                </div>
                <p class="community_simple_desc">Bring more people to this club</p>
                <hr class="manage_hr">
                <p class="community_simple_icon">
                    <span><img src="tweet.png">Tweet</span>
                    <span><img src="copy_link.png">Copy Link</span>
                </p>
                <p class="community_simple_share">Share a link to this club</p>
                <hr class="manage_hr">
                <p class="community_add_title">
                  <span>Recommended Members</span>
                  <span></span>
                </p>
                <div class="socialmedia_search_para" v-for="(item, index) in memberdatas" :key="index">
                    <img :src="`${item.image_url}`" class="lounge_following_user">
                    <p class="community_member_text following_para"><span class="text_color_softblack">{{item.user}}</span><br><span class="text_color_grey">Joined {{item.year}} year ago</span></p>
                    <div class="search_transmit">
                        <button class="follow_btn" :disabled="!item.follow" @click="selectFollow3(index)" :class="{'follow_btn_disable': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                        <router-link to="/socialmedia/socialmedia_messaging_chat">
                            <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}">Message</button>
                        </router-link>  
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
    name: 'Community_Post-Report',
    components: {
    },  
    data () {
        return {
            memberdatas: [
                {
                    image_url: "Ray_big_on.png",
                    user: "Rayford Chenail",
                    year: 1,
                    follow:true
                },
                {
                    image_url: "Ray_big_on.png",
                    user: "Rayford Chenail",
                    year: 1,
                    follow:true
                },
                {
                    image_url: "Ray_big_on.png",
                    user: "Rayford Chenail",
                    year: 1,
                    follow:true
                },
                {
                    image_url: "Ray_big_on.png",
                    user: "Rayford Chenail",
                    year: 1,
                    follow:true
                }
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
        selectFollow3(index) {
            this.memberdatas[index].follow = false
            this.image1 =  this.image2;
        },
    },
  }
</script>
<style>
    .community_add_title {
        margin: auto;
        display: flex;
        font-size: 16px;
        font-weight: 600;
    }
    .community_add_title span:last-child {
        margin: auto 0 auto auto;
        color: #13C8FF;
    }
    .community_simple_desc {
        font-size: 14px;
        text-align: center;
        margin: auto;
    }
    .community_simple_icon {
        display: flex;
        width: 100%;
        text-align: center;
        margin: auto;
        font-size: 14px;
        margin: 20px auto;
    }
    .community_simple_icon span img {
        margin: auto;
    }
    .community_simple_icon span {
        display: grid;
    }
    .community_simple_icon span:first-child {
        margin: auto 20px auto auto;
    }
    .community_simple_icon span:last-child {
        margin: auto auto auto 20px;
    }
    .community_simple_share {
        font-size: 14px;
        color: #808695;
        text-align: center;
    }
    .community_simple_border {
        border-radius: 12px 12px 0 0;
        height: 100%;
        position: fixed;
        overflow: auto;
    }
    .community_simple_height {
        height: 65%;
    }
    .community_simple_content_height {
        height: 100%;
    }
</style>
