<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal modal_new"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header charge_high"
          id="modalTitle"
        >
            <button
              type="button"
              class="close_btn"
              @click="close"
              aria-label="Close modal"
            >
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="connect_modal">
              <p class="recharge_title"><b>Recharge G-Coins</b></p>
              <hr class="coin_hr">
              <p class="bonus_title">First Recharge Bonus!</p>
              <div class="bonus_group">
                <div v-for="(item, index) in bonusdata" :key="index" class="bonus_charge" @click="showBonusItem(index)">
                  <button></button>
                  <span>+{{item.plus}} Bonus</span>
                  <p class="bonus_coin"><img src="charge_coin.png">{{item.coin}}</p>
                  <p class="bonus_price">${{item.price}}</p>
                  <img class="bonus_img" :class="{'bonusAppear': item.bonusActive == true}">
                </div>
              </div>
              <p class="charge_balance">Your current G-Coins Balance</p>
              <p class="charge_balance_coin"><img src="charge_coin.png">100,000</p>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        isModalVisible: false,
        bonusdata: [
          {
          plus: 2,
          coin: 100,
          price: 0.99,
          bonusActive: false,
          },
          {
          plus: 6,
          coin: 500,
          price: 4.99,
          bonusActive: false,
          },
          {
          plus: 15,
          coin: 1000,
          price: 9.99,
          bonusActive: false,
          },
          {
          plus: 32,
          coin: 2000,
          price: 19.99,
          bonusActive: false,
          },
          {
          plus: 66,
          coin: 4000,
          price: 39.99,
          bonusActive: false,
          },
          {
          plus: 86,
          coin: 7000,
          price: 69.99,
          bonusActive: false,
          },
          {
          plus: 100,
          coin: 10000,
          price: 99.99,
          bonusActive: false,
          }
        ]
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      showBonusItem(index) {
            this.bonusdata[index].bonusActive = true
            setTimeout(() => {
                this.bonusdata[index].bonusActive = false
            }, 5000)
      },
    },
  };
</script>
<style>
.recharge_title {
  text-align: left !important;
  color: #EF8200;
  font-size: 18px;
  font-weight: 500;
}
.bonus_title {
  font-size: 24px !important;
  text-align: center !important;
  color: #F4992D !important;
}
.bonus_group {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.bonus_charge {
  width: calc(33.33% - 10px);
  border: 1px solid #F4992D;
  border-radius: 16px;
  margin: 5px;
  position: relative;
  overflow: hidden;
  height: 80px;
}
.bonus_charge button {
  transform: skew(30deg);
  background: #F4992D;
  border-radius: 0 !important;
  position: absolute;
  left: 40px;
  width: 80px;
  font-size: 10px;
  margin: 0 !important;
  padding: 13px 0;
  color: white;
  z-index: -1;
}
.bonus_charge span {
  color: white;
  font-size: 11px;
  float: right;
  margin: 5px;
}
.bonus_charge img {
  margin: 0 3px 4px 0 !important;
}
.bonus_group p {
  margin: 0;
}
.bonus_coin {
  width: 100%;
  position: absolute;
  top: 30px;
  color: #EF8200;
}
.bonus_price {
  position: absolute;
  width: 100%;
  top: 55px;
}
.charge_balance {
  font-weight: 400;
  margin: 5px 0 !important;
}
.charge_balance_coin {
  margin: 5px 0 !important;
}
.charge_balance_coin img{
  margin: 0 10px 4px 0 !important;
}
  .bonusAppear {
        animation-name: bonusFramesUser;
        animation-duration: 5s;
    }
    @keyframes bonusFramesUser {
    0% {opacity: 0.00;}
    25% {opacity: 1.00; width: 117px; height: 80px; background: url('../../public/bonus_blank.png') no-repeat;}
    75% {opacity: 1.00; width: 117px; height: 80px; background: url('../../public/charge_word.png') no-repeat;}
    100% {opacity: 0.00;}
    from {bottom: 0;}
    to {bottom: 0;}
  }
  .bonus_img {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
  }
</style>
