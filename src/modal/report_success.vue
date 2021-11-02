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
                <p class="switch_title">Report<span class="profile_done" @click="closeModal">Close</span></p>
                <div class="report_success">
                    <img src="connect_modal.png">
                    <p>Thank you for your concern. Your concern will be reviewed and will be acted upon accordingly. </p>
                </div>
            </div>
        </header>
      </div>
      <Report 
          v-show="f_show_report"
          @user-backdrop="removeFlagFromStack"
          @close="closeReport"
          @share2="ttt2"
      >
      </Report>
    </div>
  </transition>
</template>

<script>
  import Report from "../modal/report.vue";

  export default {
    name: 'Report_Success',
    components: {
      Report,
    },  
    data() {
      return {
        promotion_link: "www.goldenlinkplus.com",
        f_show_report: false,
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
      showReportSuccess() {
        this.$emit('share2');
      },
      removeFlagFromStack() {

        let temp = this.modalStack.pop(-1);

        
        switch (temp) {
          case 'f_show_report':
            this.f_show_report = false
            break;
          default:
            break;
        }
        this.f_show_report = false
      },
      showReport() {
        this.f_show_report = true;
      },
      ttt2() {
        this.f_show_report_success = true; // showing child
        this.f_show_report = false;
        // this.$emit('close'); // disable myself to parent
      },
      closeReport() {
          this.f_show_report = false;
      },
      closeReportSuccess() {
        this.f_show_report_success = false;
      },
    }
  };
</script>
<style>
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
  .report_success {
    text-align: center;
    padding: 30px 50px;
  }
  .report_success p {
    margin: 20px auto;
  }
</style>
