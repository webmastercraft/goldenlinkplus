<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
            
            <div class="connect_modal" @click="close">
              <img src="connect_modal.png">
              <p>Great! Your Paypal Account<br>is connected.</p>
              <router-link to="/socialmedia/socialmedia_recommendation_one">
                <p>Tap to continue</p>
              </router-link>
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
    },
  };
</script>
<style>
.modal-header .upgrade_gs_para {
    font-weight: 400;
}
.connect_modal p, .connect_modal img{
  text-align: center;
  font-size: 16px;
  margin: 20px 0;
}
</style>
