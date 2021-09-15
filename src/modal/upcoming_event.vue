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
              class=""
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
                    >Join this Event
                    </button>
            </header>
          </div>
        </div>
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
</style>
