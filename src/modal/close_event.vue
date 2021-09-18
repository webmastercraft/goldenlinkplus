<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-mask" v-on:click.self="userProfileBackdrop">
      <div class="modal modal-profile height_auto close_event_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
            <div class="close_event_modal">
              <p>You are about the close this event. Continue closing this event?</p>
              <button @click="userProfileBackdrop">Do not close this event</button>
              <button>Yes, close this event</button>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Close_Event',
    components: {
    },  
    data () {
      return {
      }
    },
    methods: {
      userProfileBackdrop(evt) {
            if(evt.target.classList.length > 0 && "bg-mask"){
                this.$emit('user-backdrop');
            }
      },
    }
  };
</script>
<style>
  .close_event_transform {
    transform: translate3d(0, 5%, 0) !important;
    border-radius: 12px !important;
  }
  .close_event_modal {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
  .close_event_modal button {
    color: white;
    background-color: #EF8200;
    border-radius: 8px;
    width: 100%;
    padding: 10px 0;
    margin: 0 auto 5px auto;
  }
</style>
l