<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-mask upcoming_modal_position" v-on:click.self="userProfileBackdrop">
      <div class="event_invite_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="event_invite_body"
          id="modalTitle"
        >
            <p class="medium_1_title">TOMORROW   7:00 AM</p>
            <p class="upcoming_para"><span>from</span><img src="triangle.png" class="favicon_img"><span class="event_para_small">MAKING BIG TIME MONEY 101...</span></p>
            <p class="upcoming_title">Let’s All win the Market!! Start<br>Learning today!</p>
            <p class="upcoming_desc">Discussion will be all about making money online despite the impact of COVID pandemic</p>
            <div class="upcoming_content">
                <p>width</p>
                <div>
                    <img src="Jean_Smith.png">
                    <p>Jean Smith</p>
                </div>
                <div>
                    <img src="Jean_Smith.png">
                    <p>Jean Smith</p>
                </div>
                <div>
                    <img src="Jean_Smith.png">
                    <p>Jean Smith</p>
                </div>
            </div>
            <button
            type="button"
            class="event_done"
            @click="close"
            aria-label="Close modal"
            >Confirm Joining
            </button>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Upcoming_Event',
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
    .upcoming_modal {
        max-width: 414px !important;
        transform: translate3d(0, 37%, 0) !important;
    }
    .upcoming_para {
        font-size: 16px;
        margin: 0 20px;
        border-radius: 12px 12px 0 0 !important;
    }
    .upcoming_desc {
        margin: 0 20px;
    }
    .upcoming_content {
        display: flex;
        margin: 20px 30px 0;
        width: calc(100% - 60px);
        text-align: center;
    }
    .upcoming_content div {
        margin: auto;
    }
    .upcoming_title {
        margin: 10px 20px;
        font-size: 20px;
        font-weight: 600;
    }
    .upcmoing_event_modal {
      text-align: left;
    }
    .upcoming_modal_position {
      align-items: flex-end !important;
    }
</style>
