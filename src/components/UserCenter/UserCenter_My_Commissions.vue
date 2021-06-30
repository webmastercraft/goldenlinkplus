<template>
  <div>
    <div class="container">
        <div class="content_modal">
          <div class="window-modal">
            <div class="close_btn">
              <router-link to="/"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title">
              My Commissions
            </div>
            <hr class="referrals-hr">

            <div class="btn direct_btn">
              <p class="commission_btn">Direct</p>
              <p class="direct">$1000</p>
            </div>
            <div class="btn indirect_btn">
              <p class="commission_btn">Indirect</p>
              <p class="indirect">$300</p>
            </div>
            
            <div class="total_btn">
              <p class="commission_btn">TOTAL</p>
              <p class="total">$1300</p>
            </div>

            <router-link to="/" class="view-link">View Statistics <i class="fa fa-signal"></i></router-link>
            <!-- <p class="view-link">View Statistics<a href="#"><i class="far fa-chart-bar"></i></a></p> -->
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
