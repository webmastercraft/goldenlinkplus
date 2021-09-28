<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>Withdraw Funds</a>
                </div>
                <div class="wallet_cash_body">
                    <img src="wallet/paypal_brand.png" class="cash_brand_img">
                    <div class="form-group profile_input paypal_cash_input">
                        <input
                          type="text"
                          class="form-control"
                          id="cname"
                          aria-describedby="comname"
                          placeholder=""
                          value="0"
                        />
                        <span>USD</span>
                    </div>
                    <p>Enter Amount to cash-out</p>
                    <p class="paypal_brand_reminder">Minimum withdrawal amount is $500</p>
                    <div class="wallet_cash">
                        <p>Available Balance</p>
                        <hr>
                        <p>USD<span>1,234.75</span></p>
                        <hr>
                    </div>
                    <button class="paypal_brand_btn">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Wallet_Paypal_Withdraw',
        components: {
        },
        methods: {
        }   
    }
</script>
<style>
</style>
