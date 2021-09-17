<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-on:click.self="userProfileBackdrop">
      <div class="modal_event_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="host_view_position"
          id="modalTitle"
        >
            <div class="invite_modal">
                <p class="invite_title">Invite People to this Event<span @click="close"><img src="share.png">SHARE</span></p>
                <div class="invite_find">
                        <input type="search" placeholder="Find People" class="form-control">
                        <img src="Search_modal.png">
                </div>
                <div class="invite_users">
                  <div v-for="(item, index) in HostData" :key="index" class="invite_user">
                    <img :src="`${item.host_img}`">
                    <span>{{item.host_name}}</span>
                  </div>
                </div>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Inivite',
    data () {
        return {
            HostData: [
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
                },
                {
                    host_img: "Ray_big_on.png",
                    host_name: "Joseph Merk",
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
    },
  };
</script>
<style>
    .invite_title {
        margin: 0;
    }
    .invite_modal {
        margin: 20px 25px 0;
        font-size: 15px;
        letter-spacing: -0.02em;
        width: calc(100% - 50px);
    }
    .invite_title span {
        color: #F4992D;
        float: right;
    }
    .invite_title img {
        margin-right: 5px;
        width: 19px;
        height: 24px;
    }
    .invite_find input {
        width: 100%;
        height: 45px;
        border: 1px solid #AEE2FF;
        border-radius: 16px !important;
        padding-left: 30px !important;
        padding-right: 70px !important;
        position: relative;
    }
    .invite_find {
        margin: 20px 0;
    }
    .invite_find img {
        position: absolute;
        top: 75px;
        right: 55px;
    }
    .invite_users {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        text-align: center;
    }
    .invite_user {
        width: 25%;
        display: grid;
        margin: auto auto 15px;
        height: 100px;
        padding: 0 5px;
    }
    .invite_user img {
        margin: 0 auto auto;
        width: 56px;
        height: 56px;
    }
    .invite_user span {
        margin: 0;
    }
</style>
