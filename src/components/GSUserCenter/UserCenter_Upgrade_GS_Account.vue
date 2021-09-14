<template>
  <div>
    <div class="container">
        <div class="phone header_phone">
          <div class="header_modal">
            <router-link to="/usercenter" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>UPGRADE YOUR GS ACCOUNT</a>
          </div>
          <div class="content left-content header_top">
            <p class="medium_title">GS Guidelines</p>
            <p class="medium_1_title">Membership Policies</p>
            <p class="medium_title">Definition of direct and indirect<br>commissions</p>
            <p class="medium_2_title"><b>Direct commissions</b></p>
            <ul>
              <li>Are from shared links or marketing campaigns you made, which result in a converted sale.</li>
            </ul>
            <p class="medium_2_title"><b>Indirect commissions:</b></p>
            <ul>
              <li><b>Referral 1:</b> The conversion sales made from the GS you referred, who share the marketing link which result in the converted sale.</li>
              <li><b>Referral 2:</b>  The conversion sales made from other GS that you did not refer, this applies only to the GS Gold member who owns that business's exclusive agent rights. (That means the GS Gold membership gets the privilege for all indirect sales commissions.)</li>
            </ul>

            <p class="medium_1_title">Regular GS</p>
            <ul>
              <li>No sign up fee</li>
              <li>No exclusive marketing agent benefits</li>
              <li>You earn direct commissions of 50% of converted sales AND 6% Indirect commission from GS Marketers that you refer.</li>
              <li>Paid membership referral: 5% of business and GS Gold paid memberships.</li>
            </ul>

            <p class="medium_1_title">GS Gold</p>
            <ul>
              <li>As a GS Gold, if you bring referred business registrations, you will become the global exclusive marketing agent of that business on GOLD; also, enjoy all the privileges of direct and indirect sales commission rewards. This benefit is permanent, and cannot be lost (as long as your membership remains in good standing).</li>
            </ul>

            <table class="table0">
              <tr>
                <th scope="col" class="th01">Indirect<br>Commission<br>GOLD 50% /<br>GS 50%</th>
                <th scope="col" class="th02">Monthly<br>Sales<br>Revenue<br>See Revenue<br>Levels Below<br>Direct<br>Commission<br>(50%) All<br>Memberships</th> 
                <th scope="col" class="th03">Regular GS<br>Indirect<br>Commission<br>(6% of the<br>50%)<br>Indirect<br>Commission<br>6% /GS<br>Regular 25%</th>
              </tr>
              <tr v-for="(value, index) in values" :key="index">
                <td>{{value.gold}}</td>
                <td>{{value.all}}</td>
                <td>{{value.regular}}</td>
              </tr>
            </table>

            <ul>
              <li>GOLD will only launch 20k paid memberships initially.  During this early stage, we offer significant price discounts, act before prices rise.</li>
            </ul>
            <table class="table1">
              <tr>
                <th scope="col" class="th11">GS Gold Paid<br>Membership</th>
                <th scope="col" class="th12">Limited Time<br>Offer</th> 
              </tr>
              <tr v-for="(value, index) in percentage" :key="index">
                <td>{{value.membership}}</td>
                <td>{{value.offer}}</td>
              </tr>
            </table>

            <p class="gs_account_link gs_account_check_link"><b>Check Add-on details here >></b></p>

            <ul>
              <li>You have the right to sell, transfer or auction your ownership of these exclusive rights at your sole discretion; upon such a sale, the following fees are applied:</li>
            </ul>
            <div class="small_title">
              <p class="small_title">o   An amount of 10% of the agreed sales price is payable to Goldenlink+.</p>
              <p class="small_title">o   An amount of 15% of the agreed sales price is payable to the Business.</p>
              <p class="small_title">o   All the sales payments must go through the GOLD platform and confirm to our Terms and Conditions (click here for all the details)</p>
            </div>

            <ul>
              <li>Membership referral: 10% of business and GS Gold paid memberships.</li>
            </ul>

            <ul>
              <li>G-Coins reward, CPC G-coins, received G-Coins from events, are not considered indirect commissions.</li>
            </ul>

            <p class="upgrade_gs_para"><b>NOTE:</b></p>
            <p class="upgrade_gs_para">GS marketer must agree with the policy of commission plan. That GS knows commission refers to marketing conversion sales.  “Commission” also refers to direct and indirect commissions. For those benefit related such as : G-Coins reward, CPC G-coins, received G-Coins from events are not considered commissions</p>
            <p class="upgrade_gs_para">If you have previous sales or referrals prior to becoming a GS Gold member, those sales and referrals are not grandfathered into your membership.</p>

            <p class="gs_account_link"><router-link class="gs_account_check_link" to="/usercenter/how_it_works"><b>Check How It Works >></b></router-link></p>
            <p class="gs_account_link"><router-link class="gs_account_check_link" to="/usercenter/membership_agreement"><b>Check Membership Agreement >></b></router-link></p>

            <p class="medium_title">UPGRADE YOUR ACCOUNT</p>
            <p class="upgrade_gs_para"><span class="gs_account_color"><b>Congratulations!</b></span> You qualify in our <b>Early Bird price of $199</b> (599 Regular Price) + <b>FREE Add-on items</b> (worth $190)</p>
            <img src="img/logo.svg" class="gs_account_logo">

            
            <div class="gs_account_stage_year">
            <select class="form-control gs_account_stage_select">
              <option>1 Year</option>
              <option>2 Year</option>
              <option>3 Year</option>
              <option>4 Year</option>
              <option>5 Year</option>
            </select>
            <p><span class="gs_account_color">$199</span><br><span class="stage_green">84%OFF</span></p>
            </div>
            <p class="gs_account_stage_date">Renews July 2022 for $199</p>
            <hr class="stage_date_money">
            <p class="stage_total">Total Amount<span class="stage_right"><b>$199</b></span></p>
            <button class="stage_paypal_btn"><img src="img/paypal.png" class="paypal_btn_img">alicedu@goldenlinkplus.com</button>
            <router-link to="/usercenter/secure_checkout">
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
import Modal from "../../modal/gs_account.vue";

export default {
  name: "Upgrade GS Account",
  components: {
    Modal
  },
  data () {
    return {
      values: [
        {regular: "6%", gold: "10%", all: "$1-$499"},
        {regular: "6%", gold: "20%", all: "$500-$999"},
        {regular: "6%", gold: "30%", all: "$1000-$1499"},
        {regular: "6%", gold: "40%", all: "$1500-$1999"},
        {regular: "6%", gold: "50%", all: "$2000-$2499"},
        {regular: "6%", gold: "60%", all: "$2500-$2999"},
        {regular: "6%", gold: "70%", all: "$3000-$3499"},
        {regular: "6%", gold: "80%", all: "$3500-$3999"},
        {regular: "6%", gold:"100%", all: "$4000 or more"}
      ],
      percentage: [
        {membership: "Early bird special: $199 (add-on items free)", offer: "For the first 1,000 paid members"},
        {membership: "Early price: $199 + $100 (add-on items)", offer: "For the next 2,000 paid members"},
        {membership: "Early price: $399 + $100 (add-on items)", offer: "For the next 8,000 paid members"},
        {membership: "Regular price $599 + $100 (Add-on items )", offer: "For the last 9,000 paid members"},
        {membership: "Total early stage opportunity", offer: "First 2,0000 paid members"},
      ],
      is_stage1: true,
      isModalVisible: false
    };
  },
  methods: {
    selectStage(key) {
        if (key == 1) {
            this.is_stage1 = true;
        } else {
            this.is_stage1 = false;
        }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
  .header_top table {
    margin: 10px auto;
    text-align: center;
    font-size: 14px;
    color: #3B3E51;
    width: calc(100% - 40px);
  }
  .header_top table tr:nth-child(even) {
    background-color: #E8F1FA;
  }
  .header_top table tr:nth-child(odd) {
   background-color: #F4F9FE;
  }
  .table0 th {
    color: white;
    padding: 10px;
  }
  .table0 tr {
    height: 30px;
  }
  .table0 tr td:nth-child(2) {
    text-align: right;
  }
  .table1 th {
    height: 70px;
    color: white;
  }
  .table1 tr {
    height: 70px;
  }
  .table1 tr td {
    padding: 15px 25px;
  }
  .table1 tr:nth-child(3) td:nth-child(1){
    background: #FFFCF4 !important;
  }
  .table1 tr:nth-child(3) td:nth-child(2){
    background: white !important;
  }
  .table1 tr td:nth-child(2) {
    background-color: #F3F9FF;
  }
  .table1 tr td:nth-child(1) {
    background-color: #FFF9EA;
  }
  .th03 {
    width: 110px;
    background: #B09858;
  }
  .th01 {
    width: 105px;
    background: #FFB800;
  }
  .th02 {
    width: 115px;
    background: #3B3E51;
  }
  .th11 {
    background: #FFB800;
    width: 50%;
  }
  .th12 {
    background: #B09858;
    width: 50%;
  }
  .small_title {
    margin: 20px 10px 20px 55px;
  }
  .small_title p {
    font-size: 14px;
    margin: 0;
  }
  .gs_account_check_link {
    color: #13C8FF;
    font-size: 18px;
  }
  .gs_account_link {
    margin: 10px 20px;
  }
  .gs_account_color {
    color: #F4992D;
  }
  .gs_account_logo {
    margin: 30px 20px;
  }
  .gs_account_stage {
    margin: 0 20px 20px;
    border: 2px solid #E8F1FA;
    border-radius: 12px;
    font-size: 14px;
    padding: 15px 10px;
  }
  .gs_account_stage p {
    margin: 0;
  }
  .stage_purple {
    color: #9933ff;
  }
  .stage_green {
    color: #39B54A;
  }
  .gs_account_link_modal {
    color: #13C8FF;
  }
  .gs_account_link_stage_btn {
    width: 100%;
    padding: 10px 100px;
    color: #39B54A;
    border-radius: 16px;
    margin: 5px 0;
    border: 2px solid #39B54A;
  }
  .gs_account_link_stage_btn.selected_stage {
    background-color: #39B54A;
    color: white;
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
      margin-right: 35px;
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
</style>
