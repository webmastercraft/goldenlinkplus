<template>
  <transition name="slide-fade" mode="out-in">
    <div class=" modal-backdrop bg-user-mask" v-on:click.self="userProfileBackdrop" style="overflow-y: auto">
      <div class="bg-user-mask" v-on:click.self="userProfileBackdrop">
        <div class="modal"
          id="myModal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          @open="handleOpen" 
          ref="myModal"
        >
          <div class="user_pos modal-content">
            <header
              class="modal-header"
              id="modalTitle"
            >
              <div class="user_profile">
                <p>For Development Purpose Only</p>
                <div class="host_profile">
                  <button @click="showViewProfile">Host view Co-host profile</button>
                  <button @click="showViewProfile">Host view Speaker profile</button>
                  <button @click="showViewProfile">Host view Audience profile</button>
                  <button @click="showViewProfile">Host view Self profile</button>
                </div>
                <div class="co_profile">
                  <button @click="showViewProfile">Co-host view Host profile</button>
                  <button @click="showViewProfile">Co-host view Co-host profile</button>
                  <button @click="showViewProfile">Co-host view Speaker profile</button>
                  <button @click="showViewProfile">Co-host view Audience profile</button>
                  <button @click="showViewProfile">Co-host view Self profile</button>
                </div>
                <div class="speaker_profile">
                  <button @click="showViewProfile">Co-host view Host profile</button>
                  <button @click="showViewProfile">Co-host view Co-host profile</button>
                  <button @click="showViewProfile">Co-host view Speaker profile</button>
                  <button @click="showViewProfile">Co-host view Audience profile</button>
                  <button @click="showViewProfile">Co-host view Self profile</button>
                </div>
                <div class="audience_profile">
                  <button @click="showViewProfile">Audience view Any Profile</button>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <ViewProfile 
        v-show="f_show_view_profile"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </ViewProfile>
    </div>
  </transition>

</template>

<script>
  import ViewProfile from "./view_profile.vue";
  export default {
    name: 'User',
    components: {
      ViewProfile
    },
    data () {
      return {
        coindata: [
          {
          coin_image: "coin_10.png",
          coin: 10,
          },
          {
          coin_image: "coin_20.png",
          coin: 20,
          },
          {
          coin_image: "coin_50.png",
          coin: 50,
          },
          {
          coin_image: "coin_80.png",
          coin: 80,
          },
          {
          coin_image: "coin_100.png",
          coin: 100,
          },
          {
          coin_image: "coin_150.png",
          coin: 150,
          },
          {
          coin_image: "coin_180.png",
          coin: 180,
          },
          {
          coin_image: "coin_200.png",
          coin: 200,
          },
        ],
        f_show_view_profile: false,
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      userProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-mask"){
          this.$emit('user-backdrop');
        }
      },
      handleOpen() {
        this.$emit('handleOpen');
      },
      showViewProfile() {
        this.f_show_view_profile = true;
      },
      closeViewProfile() {
        this.f_show_view_profile = false;
      },
    },
  };
</script>
<style>
.user_profile {
  font-size: 16px;
}
.user_profile p {
  text-align: center;
  color: #70BCE5;
  margin: 0 0 10px;
}
.user_profile button {
  width: 100%;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 3px 0;
  text-align: left;
}
.host_profile button{
  background-color: #E6F7FF;
  
}
.co_profile button{
  background-color: #FFF3E6;
}
.speaker_profile button{
  background-color: #E1FFD6;
}
.audience_profile button{
  background-color: #EEEBFF;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */

.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(500px);
  opacity: 1;
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.4s
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;
  -webkit-transform: translate3d(0, 25%, 0);
  transform: translate3d(0, 25%, 0);
}

/* Modal Content */
.modal-content {
  position: fixed;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;
  overflow: scroll;
}
.user_pos.modal-content {
  position: relative !important;
}
</style>
