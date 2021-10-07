<template>
    <div class="container">
        <div class="profile_phone">

            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_account" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>Google Pay</a>
            </div>
            <div class="add_modal">
                <div class="paypal_brand_img">
                    <img src="wallet/googlepay_brand.png">
                </div>
                <div class="paypal_brand_content">
                    <p>Login to your Google Account</p>
                    <div class="form-group profile_input paypal_brand_input">
                        <input
                          type="text"
                          class="form-control"
                          id="cname"
                          aria-describedby="comname"
                          placeholder="Paypal Email"
                          value=""
                        />
                    </div>
                    <div class="form-group profile_input paypal_brand_input">
                        <input
                          type="text"
                          class="form-control"
                          id="cname"
                          aria-describedby="comname"
                          placeholder="Password"
                          value=""
                        />
                    </div>
                    <div class="sociallogo_btn">
                        <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_google_success"><button class="paypal_brand_btn">LINK</button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Wallet_Google',
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

