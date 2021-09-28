<template>
    <div class="container">
        <div class="profile_phone">

            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>My Linked Accounts<img src="img/plus.png" class="my_event_btn"></a>
            </div>
            <div class="add_modal">
                <div class="wallet_account">
                    <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_paypal">
                        <p>
                            <img src="wallet/paypal.png">
                            <span>Paypal</span>
                            <img src="img/backbtn_black_right.png">
                        </p>
                    </router-link>
                    <p><img src="wallet/apple_pay.png"><span>Apple Pay</span><img src="img/backbtn_black_right.png"></p>
                    <p><img src="wallet/google_pay.png"><span>Google Pay</span><img src="img/backbtn_black_right.png"></p>
                    <p><img src="wallet/payoneer.png"><span>Payoneer</span><img src="img/backbtn_black_right.png"></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Wallet_Account',
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

