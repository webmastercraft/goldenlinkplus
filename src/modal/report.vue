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
                    <p class="switch_title">Report<span class="profile_done">Cancel</span></p>
                    <div class="report_user_area">
                        <div v-for="(item, index) in reportData" :key="index" @click="setReport(index)" :class="{reportselect: reportselect === index}">
                            <img :src="`${item.user_img}`">
                            <span>{{item.user_name}}</span>
                        </div>
                    </div>
                    <p class="report_title">Why are you reporting this speaker?</p>
                    <p class="report_select" v-for="(item, index) in speakerData" :key="index" @click="showReportDetail(index)">
                        <span>{{item.title}}</span>
                        <span>{{item.content}}</span>
                    </p>
                </div>
            </header>
        </div>
        <ReportDetail
            v-show="f_show_report_detail"
            @user-backdrop="removeDetailFlagFromStack"
            @close="closeReportDetail"
        >
        </ReportDetail>
    </div>
  </transition>
</template>

<script>
    import ReportDetail from "../modal/report_detail.vue";
  export default {
    name: 'Report',
    components: {
        ReportDetail
    },
    data () {
        return {
            f_show_report_detail: false,
            reportselect: 0,
            reportData: [
                {
                    user_img: "event_setting/user_1.png",
                    user_name: "Carol White",
                },
                {
                    user_img: "event_setting/user_2.png",
                    user_name: "Carla Rose",
                },
                {
                    user_img: "event_setting/user_3.png",
                    user_name: "Margarette Holmes",
                },
                {
                    user_img: "event_setting/user_4.png",
                    user_name: "Keith Rogers",
                },
                {
                    user_img: "event_setting/user_2.png",
                    user_name: "Carla Rose",
                },
                {
                    user_img: "event_setting/user_3.png",
                    user_name: "Margarette Holmes",
                }
            ],
            speakerData: [
                {
                    title: "Hateful Speech",
                    content: "Includes or portrays hate on people, gender, culture etc in his or her speech"
                },
                {
                    title: "Unusual Behavior",
                    content: "Shows unusual or offensive behavior towards the people."
                },
                {
                    title: "Out of Topic",
                    content: "The speech is out of topic and not interesting for the people to hear."
                },
                {
                    title: "Profanity",
                    content: "The speaker uses offensive words to express fellings, point, or bad attitude."
                },
            ]
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
        showReportSuccess(index) {
            this.$emit('share2');
            // setTimeout(() => {
            //     console.log('sss');
            // }, 1500);
        },
        showReportDetail(index) {
            this.f_show_report_detail = true;
        },
        closeReportDetail() {
            this.f_show_report_detail = false;
        },
        removeDetailFlagFromStack() {
            this.f_show_report_detail = !this.f_show_report_detail;
        },
        setReport(index) {
            this.reportselect = index;
        },
    },
  };
</script>
<style>
    .reportselect {
        border: 2px solid #13C8FF;
    }
    .report_user_area {
        width: 100%;
        height: 100px;
        background: rgba(244, 249, 254, 0.6);
        border-radius: 12px;
        padding: 10px;
        overflow: auto;
        margin: 15px auto;
    }
    .report_user_area div {
        display: flex;
        margin: 5px auto;
        padding: 5px;
        border-radius: 8px;
    }
    .report_user_area div img {
        margin: auto 20px auto 0;
    }
    .report_user_area div span {
        margin: auto auto auto 0;
    }
    .report_select {
        display: grid;
        border: 1px solid #F1F2F2;
        border-radius: 16px;
        padding: 10px 15px;
        margin: 5px auto;
    }
    .report_select span:nth-child(1) {
        font-size: 15px;
        font-weight: 600;
    }
    .report_select span:nth-child(2) {
        font-size: 14px;
    }
    .report_title {
        color: #EF8200;
        margin: auto;
        display: flex;
        font-size: 15px;
        margin: auto auto 15px;
    }
</style>
