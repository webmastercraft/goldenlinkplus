<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask event_invite_modal_position" v-on:click="userProfileBackdrop">
      <div class="event_invite_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="event_invite_body"
          id="modalTitle"
        >
            <div class="gcoin_modal">
                <p class="gcoin_title">G-Coins Pot Queue<img src="profile/profile_plus.png" @click="showGcoinPotFromQuene"></p>
                <p class="gcoin_queue_title">
                  <span>Sender</span>
                  <span>Reward</span>
                  <span>Claim TIme</span>
                </p>
                <div v-for="(item, index) in gcoinData" :key="index" class="gcoin_queue_data">
                  <img :src="`${item.user_img}`">
                  <span class="gcoin_queue_name">{{item.user_name}}</span>
                  <span>{{item.user_reward}}</span>
                  <span>{{item.time}}</span>
                </div>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Gcoin_Queue',
    components: {
    },  
    data() {
      return {
        promotion_link: "www.goldenlinkplus.com",
        modalStack: [],
        gcoinData: [
          {
            user_img: "event_setting/user_1.png",
            user_name: "Ann Jimenez",
            user_reward: "50K",
            time: "00:29:59"
          },
          {
            user_img: "event_setting/user_2.png",
            user_name: "George Filman",
            user_reward: "7.5K",
            time: "00:14:59"
          },
          {
            user_img: "event_setting/user_3.png",
            user_name: "James Letter...",
            user_reward: "30K",
            time: "00:9:59"
          },
          {
            user_img: "event_setting/user_4.png",
            user_name: "Lucas Jimenez",
            user_reward: "400",
            time: "00:14:59"
          },
        ]
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      closeModal() {
          this.f_show_close_event = false;
          this.$emit('close');
      },
      userProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-mask"){
          this.$emit('disable-self');
        }
      },
      showGcoinQueue() {
        this.$emit('share1');
      },
      showGcoinPotFromQuene() {
        this.$emit('showGcoinPot')
      },
      removeFlagFromStack() {

        let temp = this.modalStack.pop(-1);

        
        switch (temp) {
          case 'f_show_gcoin_pot':
            this.f_show_gcoin_pot = false
            break;
          default:
            break;
        }
        this.f_show_gcoin_pot = false
      },
    }
  };
</script>
<style>
  .gcoin_queue_title {
    background: #EF8200;
    border-radius: 8px 8px 0px 0px;
    margin: 10px auto auto;
    color: white;
    display: flex;
    height: 32px;
  }
  .gcoin_queue_title span:nth-child(1) {
    margin: auto;
  }
  .gcoin_queue_title span:nth-child(2) {
    margin: auto 20px auto 0;
  }
  .gcoin_queue_title span:nth-child(3) {
    margin: auto 10px auto 0;
  }
  .gcoin_queue_data {
    display: flex;
    padding: 15px 0;
  }
  .gcoin_queue_data img {
    margin: auto 0 auto 10px;
  }
  .gcoin_queue_data span {
    margin: auto;
  }
  .gcoin_queue_data span:first-child {
    margin: auto 0 auto auto;
  }
  .gcoin_queue_data span:last-child {
    margin: auto 10px auto auto;
  }
  .gcoin_queue_data:nth-child(odd) {
    background-color: #F4F9FE;
  }
  .gcoin_queue_data:nth-child(even) {
    background-color: #FFFFFF;
  }
  .gcoin_queue_name {
    margin: auto 10px !important;
  }
</style>
