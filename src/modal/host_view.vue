<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-on:click.self="userProfileBackdrop">
      <div class="modal_event_transform host_view_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="host_view_position"
          id="modalTitle"
        >
            <p class="host_view_title"><img src="participant.png">Raised Hands</p>
            <div class="host_view_user"  v-on:click="test">
                <img src="Jean_Smith.png" class="host_user">
                <p>Carol White</p>
                <button class="host_btn">
                    <img src="mic.png" class="mic_img"><img src="check.png">
                </button>
            </div>
              <div class="host_view_user" v-for="(item, index) in HostData" :key="index" v-on:click="test">
                <img :src="`${item.host_img}`" class="host_user">
                <p>{{item.host_name}}</p>
                <button class="host_btn_dis">
                    <img src="mic_dis.png" class="mic_img"><img src="check_dis.png">
                </button>
              </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    data () {
        return {
            HostData: [
                {
                    host_img: "Collen.png",
                    host_name: "Carla Rose",
                },
                {
                    host_img: "Brandie.png",
                    host_name: "Wendy Jones",
                },
                {
                    host_img: "Conniel.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Priscilla.png",
                    host_name: "Leah Lawson",
                },
                {
                    host_img: "Wendy.png",
                    host_name: "Mary Lopez",
                },
                {
                    host_img: "Susan Boyle.png",
                    host_name: "Lydia Murphy",
                }
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
    },
  };
</script>
<style>
    .host_view_title {
        color: #EF8200;
        font-size: 18px;
        margin: 20px;
    }
    .host_view_title img {
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .host_view_user {
        margin: 20px 25px;
        width: calc(100% - 50px);
        display: flex;
    }
    .host_view_user p {
        margin: auto auto auto 15px;
        width: 150px;
    }
    .host_view_user .host_btn {
        margin: auto;
        width: 70px;
        height: 30px;
        border-radius: 16px;
        background-color: #E6F7FF;
    }
    .host_view_user .host_btn img {
        margin: 0 5px;
    }
    .host_user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .host_view_modal {
        width: 100%;
        max-width: 414px;
    }
    .host_view_position {
        text-align: left;
        overflow: auto;
        height: 100vh;
        background: white;
        border-radius: 12px;
        width: 100%;
        max-width: 414px;
    }
    .host_btn_opacity {
        opacity: 0.5;
    }
    .host_modal_transform {
        transform: translate(0, 33%) !important;
    }
    .host_btn_dis {
        background-color: #F4F9FE;
        margin: auto;
        width: 70px;
        height: 30px;
        border-radius: 16px;
    }
    .host_btn_dis img {
        margin: 0 5px;
    }
</style>
