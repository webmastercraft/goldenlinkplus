<template>
  <div>
    <div class="container">
        <div class="phone header_phone">
          <div class="header_modal">
            <router-link to="/businessusercenter/upgrade_business_account" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>SECURE CHECKOUT</a>
          </div>
          <div class="content left-content header_top">
            <p class="secure_checkout_title">Order Details</p>
            <p class="secure_checkout_desc">1-Year BUSINESS</p>
            <p class="secure_checkout_desc">Premium Membership<span class="stage_right"><b>$3000</b></span></p>
            

            <hr class="stage_date_money">
            <p class="stage_total">Subtotal(USD)<span class="stage_right"><b>$3000</b></span></p>
            <button class="stage_paypal_btn"><img src="img/paypal.png" class="paypal_btn_img">alicedu@goldenlinkplus.com</button>
            <button class="gs_account_stage_checkout_btn">Agree and Pay<img src="reg_next.png" class="glplogo_reg_btn_img">
            </button>
            <p class="secure_checkout_footer">You agree to authorize the use of your Paypal account for this transaction and future payments</p>
            
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Business Secure Checkout",
  components: {
  },
  data () {
    return {
  }
  }
}
</script>
<style>
  .header_phone {
    position: relative;
  }
  .header_modal a {
    line-height: 60px;
    font-weight: 600;
    width: 100%;
    display: inline-block;
  }

  .header_top ul {
    padding: revert;
    list-style-type: disc;
    margin: 0 10px 0 0;
    font-size: 14px;
  }
  .header_arrow {
    text-align: left;
    margin-left: 22px;
    position: absolute;
  }
  
  .stage_date_money {
    margin: 20px 10px 20px 20px;
  }
  .stage_right {
    float: right;
  }
  .stage_total {
    margin: 20px;
  }
  .stage_paypal_btn {
    border: 1px solid #E8F1FA;
    text-align: center;
    margin: 0 20px 20px 20px;
    width: calc(100% - 40px);
    padding: 5px;
  }
  .paypal_btn_img {
    width: 50px;
    margin-right: 20px;
  }
  .gs_account_stage_checkout_btn {
    color: white;
    background-color: #F4992D;
    width: calc(100% - 40px);
    margin: 0 20px;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 20px;
  }
  .secure_checkout_title {
    margin: 20px;
  }
  .secure_checkout_desc {
    margin: 0 20px;
  }
  .secure_checkout_footer {
    text-align: center;
    font-size: 14px;
    margin: 0 20px;
  }
</style>
