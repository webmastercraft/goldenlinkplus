<template>
    <div class="container">
        <div class="profile_phone">

            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet" class="header_arrow"><img src="img/header_arrow.png"></router-link>
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
                    <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_apple">
                        <p>
                            <img src="wallet/apple_pay.png">
                            <span>Apple Pay</span>
                            <img src="img/backbtn_black_right.png">
                        </p>
                    </router-link>
                    <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_google">
                        <p>
                            <img src="wallet/google_pay.png">
                            <span>Google Pay</span>
                            <img src="img/backbtn_black_right.png">
                        </p>
                    </router-link>
                    <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_payoneer">
                        <p>
                            <img src="wallet/payoneer.png">
                            <span>Payoneer</span>
                            <img src="img/backbtn_black_right.png">
                        </p>
                    </router-link>
                    <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_stripe">
                        <p>
                            <img src="wallet/stripe.png">
                            <span>Stripe</span>
                            <img src="img/backbtn_black_right.png">
                        </p>
                    </router-link>
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
    .wallet_account p {
        margin: 0;
        display: flex;
        width: 100%;
        padding: 20px 0;
    }
    .wallet_account p img:first-child {
        margin: auto 20px;
        width: 24px;
        height: 24px;
    }
    .wallet_account p img:last-child {
        width: 8px;
        height: 14px;
        margin: auto 10px auto auto;
    }
    .wallet_account p span {
        margin: auto auto auto 10px;
    }
</style>

