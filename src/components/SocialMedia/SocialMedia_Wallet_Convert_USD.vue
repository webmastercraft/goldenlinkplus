<template>
    <div>
        <div class="container">
            <div class="phone wallet_convert_body">

                <div class="wallet_convert_header">
                    <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet" class=""><img src="img/header_arrow.png" class="wallet_convert_back"></router-link>
                    <p>Convert to USD</p>
                </div>
                
                <div class="wallet_convert_area wallet_usd">
                    <div>
                        <p>Available Balance</p>
                        <p class="wallet_money"><span class="wallet_price_type">GCoins</span><span class="wallet_price">8,680</span></p>
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
                          value="8000"
                        />
                    </div>
                    <div class="wallet_convert_count">
                        <p class="wallet_convert_buy">
                            <span>USD 1 = 51.2 GCoins</span>
                        </p>
                        <p class="wallet_convert_sell">
                            <span>1 GCoin = USD 0.01953</span>
                        </p>
                    </div>
                    <div class="wallet_convert_amount">
                        <p><span>GCoins</span><span class="amount_total">156.24</span></p>
                    </div>
                    <button class="wallet_convert_btn">Convert</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Wallet_Convert_USD',
        components: {
        },
    }
</script>
<style>
    .wallet_usd {
        background: #3586CB !important;
    }
</style>
