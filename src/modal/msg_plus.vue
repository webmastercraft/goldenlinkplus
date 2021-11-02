<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
        <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
            <div class="modal new_msg_modal"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <header
                    class="event_setting_position"
                    id="modalTitle"
                >
                    <div class="gcoin_modal">
                        <p class="gcoin_title">Create Text Channel<img src="close.png" @click="closeModal"></p>
                        <p class="gcoin_title_md">Post images, emojis, opinions, and more...</p>
                        <input type="text" placeholder="" class="form-control new_msg_input" value="# Channel Name">
                        <p class="privacy_title_md">By creating a channel, you agree to<br>Goldenlinkplus’ <b>Community Guidelines</b></p>
                        <button class="gcoin_modal_btn" @click="closeModal">Create Channel!</button>
                    </div>
                </header>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'User',
    components: {
    },  
    data () {
        return {
          is_Internal: true,
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      viewProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-view-mask"){
          this.$emit('view-backdrop');
        }
      },
      selectInternal(key) {
        if (key == 1) {
            this.is_Internal = true;
        } else {
            this.is_Internal = false;
        }
      }
    }
  }
</script>
<style>
    .new_msg_input {
        background-color: #F4F9FE !important;
        border-color: transparent !important;
        outline: 0;
        box-shadow: none;
        height: 45px !important;
        border-radius: 16px !important;
    }
    .new_msg_modal {
        max-width: 414px !important;
        margin: auto 25px !important;
        transform: translate3d(0, 0%, 0) !important;
        border-radius: 12px !important;
        width: calc(100% - 50px) !important;
    }
</style>
