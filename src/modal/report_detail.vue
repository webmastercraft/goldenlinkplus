]<template>
  <transition name="modal-fade">
    <div class="modal-backdrop community_share_end_modal" v-on:click.self="userProfileBackdrop">
      <div class="event_invite_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="event_setting_position"
          id="modalTitle"
        >
            <div class="gcoin_modal">
                <p class="switch_title">Report Detail<span class="profile_done">Cancel</span></p>
                <p class="report_select" @click="showReportSuccess">
                    <span>Hateful Speech</span>
                    <span>Includes or portrays hate on people, gender, culture etc in his or her speech</span>
                </p>
                <p class="report_detail_title">Please explain about the incident</p>
                <div class="form-group">
                    <textarea
                        class="qr_area paypal_brand_input"
                        id="description"
                        rows="7"
                        placeholder=""
                    >
                    </textarea>
                </div>
                <p class="report_detail_file">Attach a recording (*.mp3)<span>Upload</span></p>
                <div class="report_detail_audio">
                    <img src="event_setting/mp3_file.png">
                    <img src="event_setting/mp3_file.png">
                </div>
                <div class="report_detail_btn">
                    <button>Submit Report</button>
                </div>
            </div>
        </header>
      </div>

    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Report',
    components: {
    },
    data () {
        return {
            reportselect: 0,
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
      test(evt) {
        if(evt.target.classList.length > 0 && "share_span"){
          this.$emit('user-backdrop');
        }
      },
      toggleActive(index) {
            this.HostData[index].blink = true
            setTimeout(() => {
                this.HostData[index].blink = false
            }, 2000)
      },
      showReportSuccess() {
        this.$emit('share2');
        // setTimeout(() => {
        //   this.$emit('close');
        // }, 1500);
      },
      setReport(index) {
        this.reportselect = index;
      },

    },
  };
</script>
<style>
    .report_detail_title {
        margin: 20px auto 10px;
        font-size: 15px;
    }
    .report_detail_file {
        margin: auto;
    }
    .report_detail_file span {
        margin-left: 25px;
        color: #13C8FF;
    }
    .report_detail_audio {
        margin: 5px auto;
    }
    .report_detail_audio img {
        margin: auto 5px;
    }
    .report_detail_btn {
        text-align: center;
    }
    .report_detail_btn button{
        color: white;
        background: #EF8200;
        border-radius: 16px;
        font-size: 14px;
        width: 85%;
        height: 50px;
        margin: 40px auto 20px;
    }
</style>
