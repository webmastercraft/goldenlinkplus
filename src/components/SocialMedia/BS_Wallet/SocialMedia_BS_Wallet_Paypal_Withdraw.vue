<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet" class="header_arrow"><img src="img/header_arrow.png"></router-link>
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
    .wallet_cash_body {
        width: 100%;
        max-width: 414px;
        margin-top: 100px;
        background: white;
        border-radius: 24px 24px 0 0;
    }
    .wallet_cash_body p {
        margin: auto auto 20px;
    }
    .paypal_cash_input {
        margin: auto;
        position: relative;
        width: 50% !important;
    }
    .paypal_cash_input input {
        text-align: right;
        height: 45px;
        border-radius: 16px !important;
        padding: 10px 20px 10px 60px !important;
    }
    .paypal_cash_input span {
        position: absolute;
        top: 10px;
        left: 15px;
    }
    .cash_brand_img {
        width: 187px;
        height: 51px;
        margin: 30px 0;
    }
    .wallet_cash {
        width: calc(100% - 40px);
        margin: 0 20px;
        text-align: left;
        font-size: 15px;
    }
    .wallet_cash p {
        margin: 0;
    }
    .wallet_cash hr {
        margin: 10px 0;
    }
    .wallet_cash p span {
        float: right;
    }
</style>
