<template>
  <transition name="modal-fade">
    <div class="modal-backdrop event_select bg-view-mask" v-on:click.self="userProfileBackdrop">
      <div class="bg-view-mask user_modal_width">
        <div class="modal event_select_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          @open="handleOpen"
        >
            <header
                class="modal-header"
                id="modalTitle"
            >
                <div class="upcoming_select_btn">
                    <button @click="userProfileBackdrop" class="bg-mask"><img src="upcoming/upcoming_select.png">Upcoming Audio Events</button>
                    <router-link to="/socialmedia/socialmedia_main_my_event"><button>My Events</button></router-link>
                </div>
            </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Event_Link',
    components: {
    },  
    data () {
      return {
      }
    },
    methods: {
        closeModal() {
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
    },
  };
</script>
<style>
</style>
