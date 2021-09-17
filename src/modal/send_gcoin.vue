<template>
  <transition name="slide-fade" mode="out-in">
    <div class=" modal-backdrop bg-user-mask" v-on:click.self="userProfileBackdrop" style="overflow-y: auto">
      <div class="bg-user-mask" v-on:click.self="userProfileBackdrop">
        <div class="modal modal_new"
          id="myModal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
          @open="handleOpen" 
          ref="myModal"
        >
          <div class="user_pos modal-content">
            <header
              class="modal-header"
              id="modalTitle"
            >
                <div clas s="connect_modal">
                  <p class="coin_title">Send G-Coins </p>
                  <hr class="coin_hr">
                  <div class="event_mute_group">
                    <div v-for="(item, index) in coindata" :key="index" class="mute_user">
                      
                      <div>
                        <img :src="`${item.coin_image}`" class="mute_user_img" @click="addingCoin">
                      </div>
                      <p class="coins_modal">{{item.coin}}</p>
                    </div>
                  </div>
                  <hr class="coin_hr">
                  <button class="send_coin_btn"><img src="modal_coin.png">115, 250</button>
                  <button class="charge_coin_btn" @click="showChargeGcoin">Recharge<img src="sky_arrow.png"></button>
                </div>
            </header>
          </div>
        </div>
      </div>
      <ChargeGcoin 
        v-show="f_show_charge_gcoin"
        @close="closeChargeGcoin"
        @view-backdrop="closeChargeGcoin"
      >
      </ChargeGcoin>
    </div>
  </transition>
</template>

<script>
  import ChargeGcoin from "./charge_gcoin.vue";
  export default {
    name: 'Send',
    components: {
      ChargeGcoin
    },
    data () {
      return {
        coindata: [
          {
          coin_image: "coin_10.png",
          coin: 10,
          },
          {
          coin_image: "coin_20.png",
          coin: 20,
          },
          {
          coin_image: "coin_50.png",
          coin: 50,
          },
          {
          coin_image: "coin_80.png",
          coin: 80,
          },
          {
          coin_image: "coin_100.png",
          coin: 100,
          },
          {
          coin_image: "coin_150.png",
          coin: 150,
          },
          {
          coin_image: "coin_180.png",
          coin: 180,
          },
          {
          coin_image: "coin_200.png",
          coin: 200,
          },
        ],
        f_show_charge_gcoin: false,
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
      showChargeGcoin() {
        this.f_show_charge_gcoin = true;
      },
      closeChargeGcoin() {
        this.f_show_charge_gcoin = false;
      },
      addingCoin() {
        this.$parent.addingCoin();
      }
    },
  };
</script>
<style>
.coin_title {
  text-align: left !important;
  color: #EF8200;
  font-size: 18px;
  font-weight: 500;
}
.coin_hr {
  margin: 20px 0 !important;
}
.coins_modal {
  font-weight: 400;
  margin: 0 !important;
} 
.send_coin_btn {
  background-color: #EF8200;
  border-radius: 30px !important;
  color: white;
  padding: 5px 10px !important;
  margin: 0 !important;
  width: 125px !important;
  float: left;
}
.charge_coin_btn {
  border: 1px solid #13C8FF;
  color: #13C8FF;
  border-radius: 30px;
  padding: 5px 10px !important;
  margin: 0 !important;
  width: 125px !important;
  float: right;
}
.charge_coin_btn img {
  margin: 0 6px 1px !important;
}
.charge_high {
  height: 465px;
}
.modal_new {
  max-width: 414px !important;
  margin: 0 !important;
}
</style>
