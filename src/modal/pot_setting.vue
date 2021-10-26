<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-mask" v-on:click.self="userProfileBackdrop">
      <div class="modal height_auto close_event_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
            <div class="swtich_account_header">
                    <p class="pot_setting_title">G-Coins Pot<img src="close.png" class="bg-mask" @click="userProfileBackdrop"></p>
                    <p class="update_profile_content">How much would you like to put in pot</p>
                    <div class="profile_input pot_setting_input_price">
                        <input type="text" id="cname" aria-describedby="comname" placeholder="" value="" class="form-control">
                        <span class="pot_setting_input">GCOINS</span>
                    </div>
                    <p class="pot_setting_balance">Your G-coins balance is 400,125</p>
                    <p class="update_profile_content">Set the timer for the pot</p>
                    <div class="form-group profile_input pot_setting_input_price">
                        <input type="text" id="cname" aria-describedby="comname" placeholder="" value="" class="form-control">
                        <span class="pot_setting_input">MINUTES</span>
                    </div>
                    <button class="pot_good_btn" @click="closeModal">Look’s Good!</button>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Pot_Setting',
    components: {
    },  
    data () {
      return {
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      userProfileBackdrop(evt) {
            if(evt.target.classList.length > 0 && "bg-mask"){
                this.$emit('user-backdrop');
            }
      },
    }
  };
</script>
<style>
    .pot_setting_title {
        color: #EF8200;
        font-size: 16px;
        margin: auto auto 20px;
        display: flex;
    }
    .pot_setting_title img {
        height: 100%;
        margin: 0 0 auto auto;
    }
    .pot_setting_balance {
        margin: 5px auto 20px;
        color: #808695;
        font-size: 13px;
    }
    .pot_setting_input {
        position: absolute;
        top: 8px;
        left: 15px;
        font-size: 15px;
    }
    .pot_setting_input_price{
        width: 100% !important;
        position: relative;
    }
    .pot_setting_input_price input{
        padding: 10px 20px 10px 85px !important;
        text-align: right !important;
    }
    .pot_good_btn {
        border-radius: 8px;   
        color: white;
        background-color: #EF8200;
        width: 100%;
        font-size: 16px;
        padding: 10px 0;
        margin: 20px auto auto auto;
    }
</style>
l