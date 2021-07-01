<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/usercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title">
              My Commissions
            </div>
            <hr class="referrals-hr">

            <div class="btn commission_content direct">
              <p class="commission_text">Direct</p>
              <p class="price">$1000</p>
            </div>
            <div class="btn commission_content indirect">
              <p class="commission_text">Indirect</p>
              <p class="price">$300</p>
            </div>
            
            <div class="commission_content total">
              <p class="commission_text">TOTAL</p>
              <p class="price">$1300</p>
            </div>

            <router-link to="/" class="view-link">View Statistics <i class="fa fa-signal"></i></router-link>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Commissions",
  components: {
  }
}
</script>
<style>
  
</style>
