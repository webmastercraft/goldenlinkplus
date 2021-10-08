<template>
    <div class="container">
        <div class="profile_phone">

            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_stripe" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>Paypal</a>
            </div>
            <div class="add_modal">
                <div class="paypal_brand_img">
                    <img src="wallet/paypal_brand.png">
                </div>
                <div class="paypal_brand_content">
                    <img src="connect_modal.png" class="linked_account_success">
                    <p class="linked_account_success_desc">Your Stripe Account alicedu@goldenlinkplus.com is now successfully linked to your wallet</p>
                    <div class="sociallogo_btn">
                        <button class="paypal_brand_btn">DONE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Wallet_Stripe_Success',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style>
</style>

