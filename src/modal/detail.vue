<template>
  <transition name="modal-fade">
    <div class="modal-backdrop detail_modal_align bg-mask" v-on:click.self="userProfileBackdrop">
      <div class="detail_event_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="detail_modal_position"
          id="modalTitle"
        >
          <div class="detail_modal">
            <p>Golden Link Plus is a revolutionary social media marketing platform where businesses and marketers join forces to earn big profits from promoting products and services. GOLD is global with business and marketers connections in the U.S., China and many countries. Intelligent business matching system
            </p>
            <p>
            • Online marketing self-service system<br>• Online businesses channel promotion quantification system<br>• Online traffic and conversion tracking system</p>
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
  .detail_modal p{
    margin: 0;
  }
  .detail_modal {
    padding: 20px;
  }
  .detail_event_transform {
    transform: translate(0, 0%) !important;
  }
  .detail_modal_align {
    align-items: end !important;
  }
  .detail_modal_position {
    text-align: left;
    overflow: auto;
    height: auto;
    background: white;
    border-radius: 12px 12px 0 0;
    width: 100%;
    max-width: 414px;
  }
</style>
