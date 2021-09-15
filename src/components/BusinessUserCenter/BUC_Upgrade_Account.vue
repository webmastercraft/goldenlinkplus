<template>
  <div>
    <div class="container">
        <div class="phone header_phone">
          <div class="header_modal">
            <router-link to="/businessusercenter" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>UPGRADE YOUR BUSINESS ACCOUNT</a>
          </div>
          <div class="content left-content header_top">
            <p class="secure_checkout_title">Order Details</p>
            <p class="medium_title">BUSINESS MEMBERSHIP</p>
            <p class="medium_1_title">Regular Business</p>
            <p class="medium_2_title"><b>Option 1</b></p>
            <ul>
              <li>$500 minimum deposit, used for: G-Coins Rewards, CPC G-Coins benefits, conversion sales commissions, sending G-coins to speakers and participants.</li>
              <li>Offer set-up: No fee</li>
              <li> Reload deposits as needed</li>
              <li>No monthly fees.</li>
              <li>Set up and upload ad promotion links and campaign offers at any time.</li>
              <li>Customize traffic promotion plans and pay for all marketing expenses incurred</li>
            </ul>
            <p class="medium_2_title"><b>Option 2</b></p>
            <ul>
              <li>$200 - $499 Deposit required</li>
              <li>$10 set up fee for each promotion link</li>
              <li>Reload deposits as needed</li>
              <li>No monthly fees</li>
              <li>Set up and upload ad promotion links and campaign offers at any time</li>
            </ul>

            <p class="medium_1_title">Business Gold</p>
            <ul>
              <li>Once per year deposit of $3,000, used for G-Coins Rewards, CPC G-Coins benefits, conversion sales commissions, sending G-coins to speakers and audience.</li>
              <li>One free landing page design</li>
              <li>Profile bundle for events (act in both capacities - Business and GS)</li>
              <li>Admin rights for your events.</li>
              <li>Community Admin rights.</li>
              <li>Creation of a direct pay to your events.</li>
              <li>Unlimited number of community event creations.</li>
              <li>Review user removal details.</li>
            </ul>

            <p class="medium_title">How it Works For Our Business Partners:</p>
            <ul>
              <li>In GOLD, create and complete your profile.  Setup and post your marketing ad  by entering your offer details with Links, Banners, Video and Content</li>
              <li>Offer Type:</li>
                <ul>
                  <li>Commission rate,</li>
                  <li>CPC G-coin rate,</li>
                  <li>G-Coins rewards,</li>
                </ul>
              <li>Advertising Type</li>
            </ul>
            <div class="CP_images">
              <img src="CPC_sky.png" class="CP_img">
              <img src="CPS_orange.png" class="CP_img">
              <img src="CPA_green.png" class="CP_img">
              <img src="CPL_blue.png" class="CP_img">
              <img src="CPI_purple.png" class="CP_img">
            </div>
            
            <ul>
              <li>Branding</li>
              <p class="upgrade_buc_desc">Create Events or Communities for your brand or service. Grow your Fan base and build your Brand Matrix, use Events for communicating,  promoting, and sending G-Coins.</p>
              <li>Build your incentive program based upon your budget constraints.</li>
              <p class="upgrade_buc_desc">Reward your partners including but not limited to G-Coin rewards, CPC G-Coin, as well as conversion commissions.</p>
              <li>Business Gold member fee applies to traffic costs. Post your campaign offer details in your account on GOLD.</li>
              <p class="upgrade_buc_desc">Tap and go, the campaign will be active.  Invite friends, partners, employees, influencers, marketers, and promote your offers.  The GOLD tracking system will automatically track your campaign conversions.</p>
            </ul>

            <p class="gs_account_link"><router-link class="gs_account_check_link" to="/businessusercenter/business_agreement"><b>Check Business Agreement >></b></router-link></p>

            <p class="medium_title">UPGRADE YOUR ACCOUNT</p>
            <img src="img/logo.svg" class="buc_account_logo">
            <p class="medium_title">Business Diamond Membership</p>
            <div>
                <div class="diamond_logo">
                    <div class="check_logo">
                      <img src="img/check.png" class="business-diamond_check">
                    </div>
                    <div class="notice_list">
                      <p class="diamond_logo_p">One (1) free landing page design</p>
                    </div>
                </div>
                <div class="diamond_logo">
                    <div class="check_logo">
                      <img src="img/check.png" class="business-diamond_check">
                    </div>
                    <div class="notice_list">
                      <p class="diamond_logo_p">One (1) free set of Ad banners<br>(total of 6 banners)</p>
                    </div>
                </div>
                <div class="diamond_logo">
                    <div class="check_logo">
                      <img src="img/check.png" class="business-diamond_check">
                    </div>
                    <div class="notice_list">
                      <p class="diamond_logo_p">Profile bundle for events</p>
                    </div>
                </div>
                <div class="diamond_logo">
                    <div class="check_logo">
                      <img src="img/check.png" class="business-diamond_check">
                    </div>
                    <div class="notice_list">
                      <p class="diamond_logo_p">Admin rights for your events</p>
                    </div>
                </div>
                <div class="diamond_logo">
                    <div class="check_logo">
                      <img src="img/check.png" class="business-diamond_check">
                    </div>
                    <div class="notice_list">
                      <p class="diamond_logo_p">Unlimited Community Admin Rights</p>
                    </div>
                </div>
                <div class="diamond_logo">
                    <div class="check_logo">
                      <img src="img/check.png" class="business-diamond_check">
                    </div>
                    <div class="notice_list">
                      <p class="diamond_logo_p">Demote Host or Co-host</p>
                    </div>
                </div>
                <div class="diamond_logo">
                    <div class="check_logo">
                      <img src="img/check.png" class="business-diamond_check">
                    </div>
                    <div class="notice_list">
                      <p class="diamond_logo_p">Review user removal details</p>
                    </div>
                </div>
            </div>

            <p class="upgrade_gs_para"><b>Note:</b> The deposit is non-refundable<br>This deposit will be used for your various campaign expenses such as GS Coins Rewards Credit, CPC G-Coins benefits, Conversion sales commissions, sending G-coins to event speakers and audience</p>
            <div class="gs_account_stage_year">
            <select class="form-control gs_account_stage_select">
              <option>1 Year</option>
              <option>2 Year</option>
              <option>3 Year</option>
              <option>4 Year</option>
              <option>5 Year</option>
            </select>
            <p class="stage_orange_price">$3000</p>
            </div>
            <p class="gs_account_stage_date">Renews July 2022 for $3000</p>
            <hr class="stage_date_money">
            <p class="stage_total">Total Amount<span class="stage_right"><b>$3000</b></span></p>
            <button class="stage_paypal_btn"><img src="img/paypal.png" class="paypal_btn_img">alicedu@goldenlinkplus.com</button>
            <router-link to="/businessusercenter/business_secure_checkout">
              <button class="gs_account_stage_checkout_btn">Checkout
                <img src="reg_next.png" class="glplogo_reg_btn_img">
              </button>
            </router-link>
            <form>
              <div>
                <div class="checkbox_check">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                  <label for="vehicle1"></label>
                  <p>By conmpleting the sign-up process, I agree to be bound by the <b>Terms & Conditions</b> and <b>Privacy Policy</b> for this website.</p>
                </div>
                <p></p>
                <div class="checkbox_check">
                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                  <label for="vehicle2"></label>
                  <p>By clicking below I hereby affirm that I am at least 18 years of age and agree to the <b>Terms & Conditions</b></p>
                </div>
              </div>
            </form>
            <Modal
            v-show="isModalVisible"
            @close="closeModal"
            />
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Upgrade_Business_Account",
  components: {
    
  },
  data () {
    return {
      
    }
  }
  
}
</script>
<style>
  .header_phone {
    position: relative;
  }
  .header_modal a {
    line-height: 60px;
    font-weight: 600;
    width: 100%;
    display: inline-block;
  }
  .header_top ul {
    padding: revert;
    list-style-type: disc;
    margin: 0 10px 0 0;
    font-size: 14px;
  }
  .header_arrow {
    text-align: left;
    margin-left: 22px;
    position: absolute;
  }
  .medium_title {
    margin: 20px 20px 10px 20px;
    font-weight: 600;
  }
  .medium_1_title {
    margin: 20px 20px 10px 20px;
    color: #EF8200;
  }
  .medium_2_title {
    margin: 0 20px;
    font-weight: 500;
  }
  .upgrade_gs_para {
    margin: 10px 20px;
    font-size: 14px;
  }
  
  
  .gs_account_check_link {
    color: #13C8FF;
    font-size: 18px;
  }
  .gs_account_link {
    margin: 10px 20px;
  }
  
  .buc_account_logo {
    margin: 0 20px;
  }

  .gs_account_stage_select {
    width: 50% !important;
    background-color: #F4F9FE !important;
    border-color: white !important;
    color: #495057;
    margin: 0 20px;
  }
  .gs_account_stage_year {
    display: flex;
    text-align: right;
  }
  .gs_account_stage_year p {
    margin: 0 0 0 70px ;
    font-size: 14px;
  }
  .gs_account_stage_date {
    text-align: right;
    margin:20px 20px 0 0;
  }
  .stage_date_money {
    margin: 20px 10px 20px 20px;
  }
  .stage_right {
    float: right;
  }
  .stage_total {
    margin: 20px;
  }
  .stage_paypal_btn {
    border: 1px solid #E8F1FA;
    text-align: center;
    margin: 0 20px 20px 20px;
    width: calc(100% - 40px);
    padding: 5px;
  }
  .paypal_btn_img {
    width: 50px;
    margin-right: 20px;
  }
  .gs_account_stage_checkout_btn {
    color: white;
    background-color: #F4992D;
    width: calc(100% - 40px);
    margin: 0 20px;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 20px;
  }
  input[type=checkbox] {
    display:none;
  }

  input[type=checkbox] + label {
      display:inline-block;
      padding: 0 0 0 0px;
      height: 39px;
      width: 39px;
      background-size: 100%;
      background: url('../../../public/Checkbox_non.png') no-repeat;
      margin-right: 4px;
  }

  input[type=checkbox]:checked + label {
      background: url('../../../public/Checkbox.png') no-repeat;
      width: 39px;
      height: 39px;
      background-size: 100%;
      display:inline-block;
      margin-right: 35px;
  }
  .checkbox_check {
    display: flex;
    margin: 0 20px;
    font-size: 12px;
  }
  .checkbox_check p{
    width: calc(100% - 97px);
  }
  .CP_img {
    margin: 0 5px;
  }
  .CP_images {
    margin: 5px 20px 15px;
    text-align: center;
  }
  .upgrade_buc_desc {
    margin: 0;
    font-size: 13px;
  }
  .business-diamond_check {
    width: 70%;
  }
  .diamond_logo {
    display: table;
    text-align: left;
    margin: 10px 20px;
  }
  .diamond_logo .check_logo {
    display: table-cell;
    vertical-align: unset;
  }
  .diamond_logo_p {
    font-size: 14px;
    margin-bottom: 0;
  }
  .stage_orange_price {
    margin: 7px 0 0 70px !important;
    font-size: 16px !important;
    color: #F4992D;
  }
</style>
