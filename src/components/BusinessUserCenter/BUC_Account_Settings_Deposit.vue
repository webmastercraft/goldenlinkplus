<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter/account_settings"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            <div class="account-title  marketing_plus">
              Account Settings
            </div>
            <div class="accordion">
              <router-link to="/businessusercenter/account_settings" class="accordion_title back_account_settings">
                  <div><img src="img/accordion_open.png"></div>
                  <h6>SELECT PAYMENT METHOD</h6>
              </router-link>
            </div>
            <div class="content_register">
              <form>
                <div>
                  <div class="form-group">
                    <select class="form-control" id="select-brand">
                      <option>Paypal</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group price_type">
                    <span>USD</span>
                    <input
                      type="text"
                      class="form-control"
                      id="usd"
                      aria-describedby="usd"
                      placeholder=""
                    />
                  </div>
                  <p class="payment_left">Processing Fee:<span class="payment_right">0.99</span></p>
                  <hr class="payment_hr">
                  <b><p class="payment_left">TOTAL:<span class="payment_right">500.99</span></p></b>
                </div>
              </form>
              <button class="pay_btn">AGREE AND PAY $500.99 USD</button>
              <p class="pay_title">You agree to authorize the use of your PayPal account for this deposit and future payments.</p>
            </div>
            </div>
          </div>
          
        </div>
    </div>
</template>
<script>

export default {
  name: 'Account_Settings_Deposit',
  components: {
  }
}
</script>
<style>
  .back_account_settings img {
    margin-bottom: 5px !important;
    transform: rotate(180deg);
    margin-right: 15px;
  }
  .price_type {
    position: relative;
  }

  .price_type span {
    position: absolute;
    left: 20px;
    top: 13px;
    border-right: 2px solid #3B3E51;
    padding-right: 10px;
    color: #3B3E51;
  }

  .price_type input {
    text-align: right;
  }

  .back_btn_h6 {
    margin-right: 10px;
  }

  .payment_right {
    float: right !important;
  }

  .payment_left {
    text-align: left;
  }

  .payment_hr {
    margin: 20px -1rem !important;
  }

  .pay_btn {
    color: white;
    background: #F4992D;
    padding: 10px 15px !important;
    border-radius: 20px;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .pay_title {
    margin: auto;
  }
</style>
