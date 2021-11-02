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

                    <button class="event_setting_btn" v-on:click="btnShowGcoinPot"><img src="send_gcoins.png">G-Coins Pot Settings</button>

                    <button class="event_setting_btn" @click="showShareEvent "><img src="event_setting/share.png">Share this Event</button>

                    <button class="event_setting_btn" @click="showEventRules"><img src="event_setting/rules.png">Event Rules</button>

                    <button class="event_setting_btn" @click="showSearchEvent"><img src="event_setting/search.png">Search this Event</button>

                    <button class="event_setting_btn" v-on:click="btnShowReport"><img src="event_setting/report.png">Report Recent Speaker</button>

                    <button class="event_setting_end_btn" @click="showCloseEvent">End this Event</button>

                </div>
            </header>
        </div>
      </div>
        <PotSetting 
            v-show="f_show_pot_setting"
            @close="closeModal"
            @view-backdrop="closePotSetting"
            @user-backdrop="removePotFlagFromStack"
        >
        </PotSetting>
        <CloseEvent 
            v-show="f_show_close_event"
            @close="closeModal"
            @view-backdrop="closeCloseEvent"
            @user-backdrop="removeCloseFlagFromStack"
        >
        </CloseEvent>
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
        
    </div>
  </transition>
</template>

<script>
import PotSetting from "./pot_setting.vue";
import CloseEvent from "./close_event.vue";
import ShareEvent from "../modal/share_event.vue";
import SearchEvent from "../modal/search_event.vue";
import EventRules from "../modal/event_rules.vue";

  export default {
    name: 'Event_Setting',
    components: {
        PotSetting,
        CloseEvent,
        SearchEvent,
        ShareEvent,
        EventRules,
    },  
    data () {
      return {
        ringClicked: true,
        f_show_pot_setting: false,
        f_show_share_event: false,
        f_show_close_event: false,
        f_show_search_event: false,
        f_show_event_rules: false,
        modalStack: [],
        viewdata: [
          {
            user_img: "Susan_Doyle.png",
            follow: true,
            name: "ASusan Doyle",
            coin_followers: "2",
            coin_following: "16",
            front_name: "CEO Assistant",
            last_name: "Legendary Coffee",
          }
        ],
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
        selectFollow(index) {
            this.viewdata[index].follow = false;
        },
        showCloseEvent() {
            this.f_show_close_event = !this.f_show_close_event;
        },
        showPotSetting() {
            this.f_show_pot_setting = !this.f_show_pot_setting;
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
        btnShowGcoinPot() {
            this.$emit('ShowGcoinPot');
        },
        btnShowReport() {
            this.$emit('ShowReport');
        },
        showReport() {
          this.f_show_report = true;
        },
        closeSearchProfile() {
        this.f_show_search_event = false;
        },
        closeCloseEvent() {
        this.f_show_close_event = false;
        },
        closePotSetting() {
        this.f_show_pot_setting = false;
        },
        closeShareProfile() {
        this.f_show_share_event = false;
        },
        closeRulesProfile() {
        this.f_show_event_rules = false;
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
        removeShareFlagFromStack() {
            this.f_show_share_event = !this.f_show_share_event;
        },
        removeSearchFlagFromStack() {
            this.f_show_search_event = !this.f_show_search_event;
        },
        removeCloseFlagFromStack() {
            this.f_show_close_event = !this.f_show_close_event;
        },
        removePotFlagFromStack() {
            this.f_show_pot_setting = !this.f_show_pot_setting;
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
            switch (temp) {
                case 'f_show_gcoin_queue':
                this.f_show_gcoin_queue = false
                this.f_show_event_setting = false
                break;
                default:
                break;
            }
          this.f_show_gcoin_pot = false,
          this.f_show_report = false,
          this.f_show_gcoin_queue = false
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

</style>
