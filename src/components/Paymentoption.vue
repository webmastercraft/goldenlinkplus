<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <div class="content_ragister">
            <form>
              <h6>Payment and Financials</h6>
              <div class="payment_option">
                <h5>Payout Methods</h5>
                <p>Please login in with paypal and share basic information with goldenlinkplus</p>
                <h5>Connect your Paypal Account</h5>
              </div>
             
              <div class="pay_btn">
                <img src="img/payment_btn.svg" class="img-fluid">
              </div>
              <button type="submit" class="btn btn-primary next_btn">Finish</button>
              <div class="icon_text">
                <div class="later_icon"><small>i’ll do this later <img src="img/later.svg" class="img-fluid"></small></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../layout/Navbar.vue";

export default {
  name: "Paymentoption",
  components: {
    Navbar,
  },
};
</script>