<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_gs_reg_profile_photo" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Connect to Paypal</a>
          </div>
          <div class="content header_top height_static">
            <img src="status_three.png" class="status_img status_size">
            <p class="status_payment_title"><b>Payment and Financials</b></p>
            <p class="status_payment_word">Payout Methods</p>
            <p class="status_payment_desc">Please login in with paypal and share basic information with goldenlinkplus</p>
            <p class="status_payment_word">Login to your Paypal Account</p>
                    <input type="text" placeholder="Paypal Email" class="form-control status_payment_login">
                    <input type="text" placeholder="Password" class="form-control status_payment_login">
            <div class="sociallogo_btn status_next">
                <button class="glplogo_reg_btn" @click="showModal">Connect
                </button>
            </div>
            <router-link to="/">
              <button class="status_skip_btn">Skip this</button>
            </router-link>
          </div>

          <Modal
            v-show="isModalVisible"
            @close="closeModal"
          />
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "../../modal/gs_reg_connect.vue";

export default {
  name: "GS_Reg_Connect_Paypal",
  components: {
    Modal
  },
  data () {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>
<style>
  .sociallogin {
    background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%) !important;
  }
  .glplogo {
    text-align: left;
    width: 100%;
    margin: 30px 25px;
  }
  .socialmedia_messages_desc {
    font-size: 14px;
  }
  .socialmedia_messages {
    display: flex;
    padding: 15px 0;
    background-color: #E6F7FF;
    color: #3B3E51;
  }
  .socialmedia_messages_size {
    height: 100%;
    margin: auto;
  }
  .socialmedia_messages_p {
    margin: 0;
  }
  .search_gs_margin {
    background-color: white !important;
    margin-right: 20px;
  }
  
  .search_gs_grid {
    display: grid;
  }
  .status_size {
    width: 113px;
  }
  .status_payment_word {
    font-size: 18px;
    margin: 10px 0;
  }
  .status_payment_title {
    margin: 40px 0 20px;
    font-size: 18px;
  }
  .status_payment_desc {
    margin: 20px 50px;
  }
  .status_payment_login {
    background: #F4F9FE !important;
    border: 0 solid white !important;
    margin: 15px 25px;
    padding: 10px 30px !important;
    width: calc(100% - 50px) !important;
    border-radius: 16px;
  }
  .status_payment_login:focus {
    border-color: transparent;
  }
</style>
