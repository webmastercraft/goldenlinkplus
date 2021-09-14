<template>
  <transition name="slide-fade" mode="out-in">
    <div class=" modal-backdrop bg-user-mask" v-on:click.self="userProfileBackdrop" style="overflow-y: auto">
      <div class="bg-user-mask" v-on:click.self="userProfileBackdrop">
        <div class="modal modal_user_profile"
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
                  <button @click="hostCohost">Host view Co-host profile</button>
                  <button @click="hostSpeaker">Host view Speaker profile</button>
                  <button @click="hostAudience">Host view Audience profile</button>
                  <button @click="hostSelf">Host view Self profile</button>
                </div>
                <div class="co_profile">
                  <button @click="cohostHost">Co-host view Host profile</button>
                  <button @click="hostCohost">Co-host view Co-host profile</button>
                  <button @click="cohostSpeaker">Co-host view Speaker profile</button>
                  <button @click="hostAudience">Co-host view Audience profile</button>
                  <button @click="hostSelf">Co-host view Self profile</button>
                </div>
                <div class="speaker_profile">
                  <button @click="speakerHost">Speaker view Host profile</button>
                  <button @click="speakerCohost">Speaker view Co-host profile</button>
                  <button @click="speakerSpeaker">Speaker view Speaker profile</button>
                  <button @click="speakerAudience">Speaker view Audience profile</button>
                  <button @click="hostSelf">Speaker view Self profile</button>
                </div>
                <div class="audience_profile">
                  <button @click="audienceAny">Audience view Any profile</button>
                  <button @click="audienceSelf">Audience view Self profile</button>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
      <HostCoHost 
        v-show="f_host_co_host"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </HostCoHost>
      <HostSpeaker 
        v-show="f_host_speaker"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </HostSpeaker>
      <HostAudience 
        v-show="f_host_audience"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </HostAudience>
      <HostSelf 
        v-show="f_host_self"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </HostSelf>
      <CoHostHost 
        v-show="f_co_host_host"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </CoHostHost>
      <CoHostSpeaker 
        v-show="f_co_host_speaker"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </CoHostSpeaker>
      <SpeakerHost 
        v-show="f_speaker_host"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </SpeakerHost>
      <SpeakerCoHost 
        v-show="f_speaker_co_host"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </SpeakerCoHost>
      <SpeakerSpeaker 
        v-show="f_speaker_speaker"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </SpeakerSpeaker>
      <SpeakerAudience 
        v-show="f_speaker_audience"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </SpeakerAudience>
      <AudienceAny 
        v-show="f_audience_any"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </AudienceAny>
      <AudienceSelf 
        v-show="f_audience_self"
        @close="closeViewProfile"
        @view-backdrop="closeViewProfile"
      >
      </AudienceSelf>
    </div>
  </transition>

</template>

<script>
  import HostCoHost from "./host_co-host.vue";
  import HostSpeaker from "./host_speaker.vue";
  import HostAudience from "./host_audience.vue";
  import HostSelf from "./host_self.vue";
  import CoHostHost from "./co-host_host.vue";
  import CoHostSpeaker from "./co-host_speaker.vue";
  import SpeakerHost from "./speaker_host.vue";
  import SpeakerCoHost from "./speaker_co-host.vue";
  import SpeakerSpeaker from "./speaker_speaker.vue";
  import SpeakerAudience from "./speaker_audience.vue";
  import AudienceAny from "./audience_any.vue";
  import AudienceSelf from "./audience_self.vue";

  export default {
    name: 'User',
    components: {
      HostCoHost,
      HostSpeaker,
      HostAudience,
      HostSelf,
      CoHostHost,
      CoHostSpeaker,
      SpeakerHost,
      SpeakerCoHost,
      SpeakerAudience,
      SpeakerSpeaker,
      AudienceAny,
      AudienceSelf
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
        f_host_co_host: false,
        f_host_speaker: false,
        f_host_audience: false,
        f_host_self: false,
        f_co_host_host: false,
        f_co_host_speaker: false,
        f_speaker_host: false,
        f_speaker_co_host: false,
        f_speaker_audience: false,
        f_speaker_speaker: false,
        f_audience_any: false,
        f_audience_self: false,
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
      hostCohost() {
        this.f_host_co_host = true;
      },
      hostSpeaker() {
        this.f_host_speaker = true;
      },
      hostAudience() {
        this.f_host_audience = true;
      },
      hostSelf() {
        this.f_host_self = true;
      },
      cohostHost() {
        this.f_co_host_host = true;
      },
      cohostSpeaker() {
        this.f_co_host_speaker = true;
      },
      speakerHost() {
        this.f_speaker_host = true;
      },
      speakerCohost() {
        this.f_speaker_co_host = true;
      },
      speakerSpeaker() {
        this.f_speaker_speaker = true;
      },
      speakerAudience() {
        this.f_speaker_audience = true;
      },
      audienceAny() {
        this.f_audience_any = true;
      },
      audienceSelf() {
        this.f_audience_self = true;
      },
      closeViewProfile() {
        this.f_host_co_host = false;
        this.f_host_speaker = false;
        this.f_host_audience = false;
        this.f_host_self = false;
        this.f_co_host_host = false;
        this.f_co_host_speaker = false;
        this.f_speaker_host = false;
        this.f_speaker_co_host = false;
        this.f_speaker_speaker = false;
        this.f_speaker_audience = false;
        this.f_audience_any = false;
        this.f_audience_self = false;
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
    overflow: auto;
  }
  .user_pos.modal-content {
    position: relative !important;
  }
  .modal_user_profile {
    max-width: 414px !important;
    margin: 0 10px !important;
    width: calc(100% - 20px) !important;
    transform: translate3d(0, 3%, 0) !important;
  }
</style>
