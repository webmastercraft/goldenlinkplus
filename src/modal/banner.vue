<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-mask" v-on:click.self="userProfileBackdrop">
      <div class="modal_event_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="host_view_position"
          id="modalTitle"
        >
            <div class="video_modal">
              <img src="profile/detail_modal.png">
              <img src="profile/detail_modal.png">
              <img src="profile/detail_modal.png">
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
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

</style>
