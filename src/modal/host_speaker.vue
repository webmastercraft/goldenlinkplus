<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask" v-on:click.self="viewProfileBackdrop">
        <div class="modal modal_user_profile"
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
                @click="closeModal"
                aria-label="Close modal"
              >
                <i class="fa fa-times-circle" aria-hidden="true"></i>
              </button>
              <div v-for="(item, index) in viewdata" :key="index">
                <div class="view_profile">
                  <img :src="`${item.user_img}`" class="view_img">
                  <div class="view_icon">
                    <img src="view_mute.png" class="view_mute">
                    <button class="view_follow_btn" :disabled="!item.follow" @click="selectFollow(index)" :class="{'view_following_btn': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                  </div>
                </div>
                <div class="view_profile_title">
                  <p class="view_name"><b>{{item.name}}</b><span>Follows You</span></p>
                  <p class="view_followers"><b>{{item.coin_followers}}</b> followers<span><b>{{item.coin_following}}</b> following</span></p>
                  <p class="view_mark">{{item.front_name}} @ <b>{{item.last_name}}</b></p>
                </div>
              </div>
              <hr class="view_hr">
              <div class="view_details">
                <p class="view_date">TODAY<br>10:30PM</p>
                <p class="view_details_title"><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101<br>Let’s All win the Market!! We can...</p>
                <img :src="ringSrc" class="view_ring" @click="ringClicked = !ringClicked">
              </div>
              <div class="view_btn">
                <div class="view_color_btn">
                  <router-link to="/socialmedia/socialmedia_messaging_chat">
                    <button class="view_sky">Send Message</button>
                  </router-link>
                  <button class="view_green" @click="showProfile">View Full Profile</button>
                </div>
                <button>Make Co-host</button>
                <button>Move to Audience</button>
                <button>Remove User from Event</button>
              </div>
          </header>
        </div>
      </div>
      <ProfileOption 
        v-show="f_show_view_profile"
        @close="showProfile"
      >
      </ProfileOption>
    </div>
  </transition>
</template>

<script>
  import ProfileOption from "./profile_option.vue";

  export default {
    name: 'User',
    components: {
      ProfileOption,
    },  
    data () {
      return {
        ringClicked: true,
        viewdata: [
          {
            user_img: "Alex_Truman.png",
            follow: true,
            name: "Alex Truman",
            coin_followers: "256",
            coin_following: "52",
            front_name: "Marketing Executive",
            last_name: "The A Show",
          }
        ],
        f_show_view_profile: false
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      selectFollow(index) {
        this.viewdata[index].follow = false;
      },
      viewProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-view-mask"){
          this.$emit('view-backdrop');
        }
      },
      showProfile() {
        this.f_show_view_profile = !this.f_show_view_profile;
      },
    },
    computed: {
      ringSrc: function () {
        return this.ringClicked ? 'view_ring.png' : 'view_ring-gold.png'
      },
    }
  };
</script>
<style>
.view_img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.view_icon {
  margin-top: 40px;
  width: 100%;
}
.view_follow_btn {
  background-color: #EF8200;
  padding: 5px 10px;
  width: 95px;
  border-radius: 25px;
  color: white;
  font-size: 13px;
  float: right;
}
.view_following_btn {
  background-color: rgba(19, 200, 255, 0.5);
}
.view_icon button img {
  margin: 0 0 3px 3px;
}
.view_mute {
  float: left;
  margin-left: 20px;
}
.view_profile_title {
  text-align: left;
  margin: 20px 5px;
  font-weight: 400;
}
.view_name {
  font-size: 17px;
  margin: 3px 0;
}
.view_name span {
  color: #BFC1CE;
  font-size: 14px;
  margin-left: 10px;
}
.view_followers {
  font-size: 15px;
  margin: 3px 0;
}
.view_followers span {
  margin-left: 20px;
}
.view_followers img {
  margin: 0 5px 4px 0;
}
.view_check {
  color: #13C8FF;
  font-size: 15px;
  margin: 10px 0;
}
.view_mark {
  font-size: 14px;
  margin: 10px 0;
}
.view_hr {
  margin: 15px 5px;
}
.view_details {
  display: flex;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  margin: 0 5px;
}
.view_date {
  margin: auto 0 0 0;
}
.view_ring {
  height: 100%;
  margin: auto 0 auto auto;
}
.view_details_title {
  margin: 0 0 0 auto;
}
.view_details_title img {
  margin: 0 5px 3px 0;
}
.view_color_btn button {
  width: calc(50% - 5px);
  color: white;
  border-radius: 16px;
  height: 50px;
}
.view_sky {
  background-color: rgba(0, 180, 255, 0.3) !important;
  margin-right: 5px !important;
}
.view_green {
  background-color: #39B54A !important;
  margin-left: 5px !important;
}
</style>
