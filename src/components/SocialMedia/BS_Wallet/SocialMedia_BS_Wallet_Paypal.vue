<template>
    <div class="container">
        <div class="profile_phone">

            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_account" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>Paypal</a>
            </div>
            <div class="add_modal">
                <div class="paypal_brand_img">
                    <img src="wallet/paypal_brand.png">
                </div>
                <div class="paypal_brand_content">
                    <p>Login to your Paypal Account</p>
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
                    <p class="paypal_brand_reminder">Reminder: For successful linking, make sure your first and last name in your Goldenlinkplus and paypal accounts are exactly the same</p>
                    <div class="sociallogo_btn">
                        <button class="paypal_brand_btn">LINK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Wallet_Paypal',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style>
    .paypal_brand_img {
        text-align: center;
        width: 100%;
    }
    .paypal_brand_img img {
        width: 65%;
        height: 10%;
        margin: 30px 0;
    }
    .paypal_brand_content {
        margin: 20px;
        text-align: center;
    }
    .paypal_brand_content p {
        margin: 10px auto;
        letter-spacing: -0.02em;
    }
    .paypal_brand_input {
        width: 100% !important;
    }
    .paypal_brand_input input {
        border-radius: 16px !important;
        padding: 10px 25px !important;
        height: 45px !important;
    }
    .paypal_brand_reminder {
        font-size: 14px;
        color: #808695;
    }
    .paypal_brand_btn {
        background-color: #F4992D;
        color: white;
        padding: 8px 65px;
        border-radius: 30px;
        font-size: 18px;
        margin: 30px auto;
    }
</style>

