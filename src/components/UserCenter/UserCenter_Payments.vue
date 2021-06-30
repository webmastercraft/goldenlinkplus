<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal left-content">
            <div class="close_btn">
              <router-link to="/usercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title">
              Payments and Financials
            </div>
            <div class="payout-title">
              <p>Payout Methods</p>
            </div>
            <p class="payment-desc">Please login in with paypal and share basic information with goldenlinkplus</p>
            <p class="connect-paypal">Connect your Paypal Account</p>
            <a href="#" class="paypal_btn"><i class="fab fa-paypal"></i>Log in with PayPal</a>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Payments",
  components: {
  }
}
</script>
<style>
  
</style>
