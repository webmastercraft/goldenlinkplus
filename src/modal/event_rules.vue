<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-mask community_share_end_modal" v-on:click.self="userProfileBackdrop">
      <div class="event_invite_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="event_setting_position"
          id="modalTitle"
        >
            <div class="event_setting_area">
              <p class="event_rules_title"><img src="triangle.png" class="favicon_img">MAKING BIG TIME MONEY 101</p>
              <p class="event_rules_title_lg">Event Rules</p>
              <p class="event_rules_title_md">Respect Each Other</p>
              <p class="event_rules_title_sm">We welcomeall members to share their thought about sustainability but need to show respect to different speakers</p>
              <p class="event_rules_title_md">Respect Each Other</p>
              <p class="event_rules_title_sm">We welcomeall members to share their thought about sustainability but need to show respect to different speakers</p>
              <p class="event_rules_title_md">Respect Each Other</p>
              <p class="event_rules_title_sm">We welcomeall members to share their thought about sustainability but need to show respect to different speakers</p>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Event_Rules',
    methods: {
        close() {
            this.$emit('close');
        },
        userProfileBackdrop(evt) {

            if(evt.target.classList.length > 0 && "bg-mask"){
                this.$emit('user-backdrop');
            }
        },
    },
  };
</script>
<style>
  .event_setting_area {
    padding: 20px;
  }
  .event_rules_title {
    margin: auto;
    display: flex;
    font-size: 14px;
    letter-spacing: 0.08em;
  }
  .event_rules_title_lg {
    margin: 10px auto;
    font-size: 18px;
  }
  .event_rules_title_md {
    margin: 5px auto;
    font-size: 16px;
  }
  .event_rules_title_sm {
    margin: auto;
    font-size: 14px;
  }
</style>
