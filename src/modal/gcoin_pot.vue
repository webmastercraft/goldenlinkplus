]<template>
  <transition name="modal-fade">
    <div class="modal-backdrop community_share_end_modal" v-on:click.self="userProfileBackdrop">
      <div class="event_invite_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="event_setting_position"
          id="modalTitle"
        >
            <div class="gcoin_modal">
                <p class="gcoin_title">G-Coins Pot<img src="close.png" @click="showGcoinQueue"></p>
                <p class="gcoin_title_md">How much would you like to put in pot</p>
                <div class="profile_input gcoin_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="1,000"
                    />
                    <span>GCOINS</span>
                </div>
                <p class="gcoin_title_desc">Your G-coins balance is 400,125</p>
                <p class="gcoin_title_md">Set the timer for the pot</p>
                <div class="profile_input gcoin_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="30"
                    />
                    <span>MINUTES</span>
                </div>
                <button class="gcoin_modal_btn" @click="showGcoinQueue">Look’s Good!</button>
            </div>
        </header>
      </div>

    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Gcoin_Pot',
    components: {
    },
    data () {
        return {
            HostData: [
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                    blink: false,
                },
            ]
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
      test(evt) {
        if(evt.target.classList.length > 0 && "share_span"){
          this.$emit('user-backdrop');
        }
      },
      toggleActive(index) {
            this.HostData[index].blink = true
            setTimeout(() => {
                this.HostData[index].blink = false
            }, 2000)
      },
      showGcoinQueue() {
        this.$emit('share1');
      },

    },
  };
</script>
<style>
    .gcoin_modal {
        padding: 20px;
    }
    .gcoin_title {
        color: #EF8200;
        margin: auto;
        display: flex;
        font-size: 16px;
    }
    .gcoin_title img {
        height: 100%;
        margin: auto 0 auto auto;
    }
    .gcoin_title_md {
        margin: 10px auto;
        font-size: 15px;
    }
    .gcoin_input {
        width: 100% !important;
        margin: 5px auto;
        position: relative;
        font-size: 15px;
    }
    .gcoin_input input {
        text-align: right;
        height: 40px;
        padding: 10px 20px 10px 60px !important;
    }
    .gcoin_input span {
        position: absolute;
        top: 10px;
        left: 13px;
    }
    .gcoin_title_desc {
        margin: auto auto 15px;
        font-size: 13px;
        color: #808695;
    }
    .gcoin_modal_btn {
        background: #EF8200;
        border-radius: 8px;
        color: white;
        width: 100%;
        height: 45px;
        margin: 5px auto;
    }
</style>
