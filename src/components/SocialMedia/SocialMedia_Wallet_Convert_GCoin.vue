<template>
    <div>
        <div class="container">
            <div class="phone wallet_convert_body">

                <div class="wallet_convert_header">
                    <router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet" class=""><img src="img/header_arrow.png" class="wallet_convert_back"></router-link>
                    <p>Convert to G-Coins</p>
                </div>
                
                <div class="wallet_convert_area">
                    <div>
                        <p>Available Balance</p>
                        <p class="wallet_money"><span class="wallet_price_type">USD</span><span class="wallet_price">570</span></p>
                    </div>
                </div>
                <div class="wallet_gcoin">
                    <p class="wllet_convert_how">How much would you like to convert?</p>
                    <div class="form-group profile_input paypal_brand_input">
                        <input
                          type="text"
                          class="form-control wallet_convert_input"
                          id="cname"
                          aria-describedby="comname"
                          placeholder=""
                              value="7680"
                        />
                    </div>
                    <div class="wallet_convert_count">
                        <p class="wallet_convert_buy">
                            <span>BUY</span>
                            <span>1 GCoin = USD 0.03953</span>
                        </p>
                        <p class="wallet_convert_sell">
                            <span>SELL</span>
                            <span>1 GCoin = USD 0.01953</span>
                        </p>
                    </div>
                    <div class="wallet_convert_amount">
                        <p><span>GCoins</span><span class="amount_total">25,600</span></p>
                    </div>
                    <button class="wallet_convert_btn">Convert</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Wallet_Convert_GCoin',
        components: {
        },
    }
</script>
<style>
    .wallet_gcoin {
        margin: 35px 45px auto;
        width: calc(100% - 90px);
        background: white;
        height: 100%;
    }
    .wallet_convert_input {
        text-align: right !important;
    }
    .wllet_convert_how {
        margin: 0;
        text-align: center;
    }
    .wallet_convert_count {
        display: flex;
        font-size: 13px;
        color: #808695;
        text-align: left;
    }
    .wallet_convert_count p {
        display: grid;
    }
    .wallet_convert_buy {
        margin: auto auto auto 0;
    }
    .wallet_convert_sell {
        margin: auto 0 auto auto;
    }
    .wallet_convert_area {
        width: 100%;
        background: #EF8200;
        height: 140px;
        text-align: center;
        color: white;
        font-size: 14px;
    }
    .wallet_convert_area p:first-child {
        margin: auto auto 0 auto;
    }
    .wallet_convert_area p:last-child {
        margin: 0 auto auto auto;
    }
    .wallet_convert_area div {
        margin: auto;
        width: 100%;
        display: grid;
        height: 100%;
    }
    .wallet_convert_area p {
        margin: auto;
    }
    .wallet_convert_header {
        width: 100%;
        max-width: 414px;
        height: 60px;
        background: white;
        text-align: center;
        position: relative;
        display: flex;
    }
    .wallet_convert_header P {
        margin: auto;
        font-size: 16px;
        font-weight: 600;
    }
    .wallet_convert_back {
        position: absolute;
        left: 20px;
        top: 22px;
    }
    .wallet_convert_body {
        display: block !important;
        background: white !important;
    }
    .wallet_convert_amount {
        border-radius: 12px;
        border: 1px solid black;
        margin: 30px auto;
        width: 55%;
    }
    .wallet_convert_amount p {
        margin: auto;
        display: flex;
    }
    .wallet_convert_amount span {
        font-size: 13px;
        margin: 10px 5px auto auto;
    }
    .amount_total {
        font-size: 32px !important;
        margin: auto auto auto 5px !important;
    }
    .wallet_convert_btn {
        color: white;
        border-radius: 30px;
        background: #F4992D;
        padding: 8px 50px;
    }
</style>
