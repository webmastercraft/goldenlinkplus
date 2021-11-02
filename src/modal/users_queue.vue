<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask event_invite_modal_position" v-on:click.self="userProfileBackdrop">
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
                <p class="gcoin_title">G-Coins Pot Queue</p>
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
        f_show_gcoin_pot: false,
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
          this.$emit('user-backdrop');
        }
      },
      showGcoinQueue() {
        this.$emit('share1');
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
      showGcoinPot() {
        this.f_show_gcoin_pot = true;
      },
      ttt1() {
        this.f_show_gcoin_queue = true; // showing child
        this.f_show_gcoin_pot = false;
        // this.$emit('close'); // disable myself to parent
      },
      closeGcoinPot() {
          this.f_show_gcoin_pot = false;
      },
      closeGcoinQueue() {
        this.f_show_gcoin_queue = false;
      },
    }
  };
</script>
<style>
</style>
