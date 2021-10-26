<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask event_invite_modal_position" v-on:click.self="userProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="userProfileBackdrop">
        <div class="modal event_setting_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          @open="handleOpen"
        >
            <header
                class="modal-header"
                id="modalTitle"
            >
                <div class="event_btn">
                    <button class="event_setting_btn" @click="showGcoinPot"><img src="send_gcoins.png">G-Coins Pot Settings</button>
                    <button class="event_setting_btn" @click="showShareEvent"><img src="event_setting/share.png">Share this Event</button>
                    <button class="event_setting_btn" @click="showSearchEvent"><img src="event_setting/search.png">Search this Event</button>
                    <button class="event_setting_btn" @click="showEventRules"><img src="event_setting/rules.png">Event Rules</button>
                    <button class="event_setting_btn" @click="showReport"><img src="event_setting/report.png">Report Recent Speaker</button>
                </div>
            </header>
        </div>
      </div>
        <ShareEvent 
            v-show="f_show_share_event"
            @close="closeModal"
            @view-backdrop="closeShareProfile"
            @user-backdrop="removeShareFlagFromStack"
        >
        </ShareEvent>
        <SearchEvent 
            v-show="f_show_search_event"
            @close="closeModal"
            @view-backdrop="closeSearchProfile"
            @user-backdrop="removeSearchFlagFromStack"
        >
        </SearchEvent>
        <EventRules 
            v-show="f_show_event_rules"
            @close="closeModal"
            @view-backdrop="closeRulesProfile"
            @user-backdrop="removeRulesFlagFromStack"
        >
        </EventRules>
        <GcoinPot 
            v-show="f_show_gcoin_pot"
            @user-backdrop="removeFlagFromStack"
            @close="closeGcoinPot"
            @share1="ttt1"
        >
        </GcoinPot>
        <GcoinQueue 
            v-show="f_show_gcoin_queue"
            @close="closeGcoinQueue"
            @view-backdrop="closeGcoinQueue"
        >
        </GcoinQueue>
        <Report 
            v-show="f_show_report"
            @user-backdrop="removeFlagFromStack"
            @close="closeReport"
            @share2="ttt2"
        >
        </Report>
        <ReportSuccess 
            v-show="f_show_report_success"
            @close="closeReportSuccess"
            @view-backdrop="closeReportSuccess"
        >
        </ReportSuccess>
    </div>
  </transition>
</template>

<script>
import ShareEvent from "../modal/share_event.vue";
import SearchEvent from "../modal/search_event.vue";
import EventRules from "../modal/event_rules.vue";
import GcoinPot from "../modal/gcoin_pot.vue";
import GcoinQueue from "../modal/gcoin_pot_queue.vue";
import Report from "../modal/report.vue";
import ReportSuccess from "../modal/report_success.vue";

  export default {
    name: 'Event_Setting',
    components: {
      SearchEvent,
      ShareEvent,
      EventRules,
      GcoinPot,
      GcoinQueue,
      Report,
      ReportSuccess
    },  
    data () {
      return {
        ringClicked: true,
        f_show_share_event: false,
        f_show_search_event: false,
        f_show_event_rules: false,
        f_show_gcoin_pot: false,
        f_show_gcoin_queue: false,
        f_show_report: false,
        f_show_report_success: false,
        modalStack: [],
      }
    },
    methods: {
        closeModal() {
            this.f_show_close_event = false;
            this.$emit('close');
        },
        handleOpen() {
            this.$emit('handleOpen');
        },
        userProfileBackdrop(evt) {
            if(evt.target.classList.length > 0 && "bg-mask"){
                this.$emit('user-backdrop');
            }
        },
        showShareEvent() {
            this.f_show_share_event = true;
        },
        showSearchEvent() {
            this.f_show_search_event = true;
        },
        showEventRules() {
            this.f_show_event_rules = true;
        },
        closeSearchProfile() {
        this.f_show_search_event = false;
        },
        closeShareProfile() {
        this.f_show_share_event = false;
        },
        closeRulesProfile() {
        this.f_show_event_rules = false;
        },
        removeShareFlagFromStack() {
            this.f_show_share_event = !this.f_show_share_event;
        },
        removeSearchFlagFromStack() {
            this.f_show_search_event = !this.f_show_search_event;
        },
        removeRulesFlagFromStack() {
            this.f_show_event_rules = !this.f_show_event_rules;
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
          switch (temp) {
            case 'f_show_report':
              this.f_show_report = false
              break;
            default:
              break;
          }
          this.f_show_gcoin_pot = false,
          this.f_show_report = false
        },
        showGcoinPot() {
          this.f_show_gcoin_pot = true;
        },
        showReport() {
          this.f_show_report = true;
        },
        ttt1() {
          this.f_show_gcoin_queue = true; // showing child
          this.f_show_gcoin_pot = false;
          // this.$emit('close'); // disable myself to parent
        },
        ttt2() {
          this.f_show_report_success = true; // showing child
          this.f_show_report = false;
          // this.$emit('close'); // disable myself to parent
        },
        closeGcoinPot() {
            this.f_show_gcoin_pot = false;
        },
        closeGcoinQueue() {
          this.f_show_gcoin_queue = false;
        },
        closeReport() {
            this.f_show_report = false;
        },
        closeReportSuccess() {
          this.f_show_report_success = false;
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
    .event_setting_modal {
        max-width: 414px !important;
        transform: translate3d(0, 0%, 0) !important;
    }
    .event_btn {
        max-width: 414px;
        width: 100%;
        font-size: 16px;
    }
    .event_btn button {
        width: 100%;
        height: 50px;
        text-align: ;
    }
    .event_setting_btn {
        background-color: #E6F7FF;
        border-radius: 8px;
        color: #3B3E51;
        margin: 0 0 10px;
    }
    .event_setting_btn img {
        margin: 0 10px 3px 0;
    }
    .event_setting_end_btn {
        background: #EF8200;
        border-radius: 8px;
        color: white;
    }
</style>
