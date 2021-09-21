<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="userProfileBackdrop">
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
                    <button class="event_setting_btn" @click="showShareEvent "><img src="event_setting/share.png">Share this Event</button>
                    <button class="event_setting_btn" @click="showSearchEvent"><img src="event_setting/search.png">Search this Event</button>
                    <button class="event_setting_btn"><img src="event_setting/rules.png">Event Rules</button>
                    <button class="event_setting_btn"><img src="event_setting/report.png">Report Recent Speaker</button>
                    <button class="event_setting_end_btn" @click="showCloseEvent">End this Event</button>
                </div>
            </header>
        </div>
      </div>
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
    </div>
  </transition>
</template>

<script>
import CloseEvent from "./close_event.vue";
import ShareEvent from "../modal/share_event.vue";
import SearchEvent from "../modal/search_event.vue";

  export default {
    name: 'Event_Setting',
    components: {
      CloseEvent,
      SearchEvent,
      ShareEvent
    },  
    data () {
      return {
        ringClicked: true,
        f_show_share_event: false,
        f_show_close_event: false,
        f_show_search_event: false,
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

        closeSearchProfile() {
        this.f_show_search_event = false;
        },
        closeCloseEvent() {
        this.f_show_close_event = false;
        },
        closeShareProfile() {
        this.f_show_share_event = false;
        },
        removeShareFlagFromStack() {
            this.f_show_share_event = !this.f_show_share_event;
        },
        removeSearchFlagFromStack() {
            this.f_show_search_event = !this.f_show_search_event;
        },
        removeCloseFlagFromStack() {
            this.f_show_close_event = !this.f_show_close_event;
        }
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
        transform: translate3d(0, 3%, 0) !important;
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
