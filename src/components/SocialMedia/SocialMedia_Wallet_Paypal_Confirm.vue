<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_linked_account" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>Cash-in Confirmation</a>
                </div>
                <div class="wallet_cash_body">
                    <img src="wallet/paypal_brand_account.png" class="paypal_brand_img">
                    <p class="status_payment_word">You are about to cash-in</p>
                    <div class="form-group profile_input paypal_confirm_direction">
                        <input
                          type="text"
                          class="form-control"
                          id="cname"
                          aria-describedby="comname"
                          placeholder=""
                          value="8000"
                        />
                    </div>
                    <p>Total Amount</p>
                    <button class="paypal_brand_btn">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Wallet_Paypal_Confirm',
        components: {
        },
        methods: {
        }   
    }
</script>
<style>
    .paypal_confirm_direction {
        margin: auto;
        position: relative;
        width: 50% !important;
    }
    .paypal_confirm_direction input {
        text-align: center !important;
        height: 45px;
        border-radius: 16px !important;
        padding: 10px 20px !important;
    }
</style>
