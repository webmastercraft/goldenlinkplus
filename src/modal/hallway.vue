<template>
  <transition name="slide-fade" mode="out-in">
    <div class=" modal-backdrop bg-user-mask" v-on:click.self="userProfileBackdrop" style="overflow-y: auto">
      <div class="bg-user-mask" v-on:click.self="userProfileBackdrop">
        <div class="modal upcoming_modal"
          id="myModal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          @open="handleOpen" 
          ref="myModal"
        >
          <div class="user_pos modal-content">
            <header
              class="event_invite_position"
              id="modalTitle"
            >
                
            </header>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>

  export default {
    name: 'Hallway',
    components: {
      
    },
    data () {
      return {
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
      handleOpen() {
        this.$emit('handleOpen');
      },
    },
  };
</script>
<style>
    .hallway_find {
        height: 50px;
        border: 1px solid #AEE2FF;
        border-radius: 16px !important;
        padding-left: 30px !important;
        padding-right: 70px !important;
        position: relative;
    }
</style>
