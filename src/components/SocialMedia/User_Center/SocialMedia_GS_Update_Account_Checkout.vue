<template>
    <div class="container">
        <div class="user_center_phone">
            <div class="how_it_works_area">
                    <p class="switch_title">SECURE CHECKOUT
                        <router-link to="/socialmedia/user_center/socialmedia_gs_update_account">
                            <span class="profile_done">Cancel</span>
                        </router-link>
                    </p>
            </div>
            <div class="content left-content header_top upgrade_account_area_margin">
              <p class="secure_checkout_title">Order Details</p>
              <p class="secure_checkout_desc">1-Year GOLD GS</p>
              <p class="secure_checkout_desc">Membership with FREE<span class="stage_right"><b>$199</b></span></p>
              <p class="secure_checkout_desc">Add-ons</p>

              <hr class="stage_date_money">
              <p class="stage_total">Subtotal(USD)<span class="stage_right"><b>$199</b></span></p>
              <button class="stage_paypal_btn"><img src="img/paypal.png" class="paypal_btn_img">alicedu@goldenlinkplus.com</button>
              <button class="gs_account_stage_checkout_btn">Agree and Pay<img src="reg_next.png" class="glplogo_reg_btn_img">
              </button>
              <p class="secure_checkout_footer">You agree to authorize the use of your Paypal account for this transaction and future payments</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GS_Update_Account_Checkout',
        components: {
        },
    }
</script>
<style>
</style>
