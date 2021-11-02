<template>
    <div class="container">
        <div class="user_center_phone">
            <div class="upgrade_account_area">
                    <p class="switch_title">UPGRADE GS ACCOUNT
                        <router-link to="/socialmedia/user_center/socialmedia_user_center">
                            <span class="profile_done">Cancel</span>
                        </router-link>
                    </p>
            </div>
            <div class="content left-content header_top upgrade_account_area_margin">
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
                  <li>GOLD will only launch 20k paid memberships initially for Gold GS. During this early stage, we offer significant price discounts, act before prices rise.</li>
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

                <p class="gs_account_link"><router-link class="gs_account_check_link" to="/socialmedia/user_center/socialmedia_gs_update_account_how_it_works"><b>Check How It Works >></b></router-link></p>
                <p class="gs_account_link gs_account_check_link"><b>Check Membership Agreement >></b></p>

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
                <router-link to="/socialmedia/user_center/socialmedia_gs_update_account_checkout">
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GS_Update_Account',
        components: {
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
            }
        }
    }
</script>
<style>
    .user_center_phone {
        width: 100%;
        max-width: 414px;
        min-height: 100vh;
        display: block;
        justify-content: center;
        background: white;
    }
    .upgrade_account_area {
        padding: 20px 20px 0;
        background: white;
        width: 100%;
        max-width: 414px;
        height: 100%;
        text-align: left;
    }
    .upgrade_account_area_margin {
        margin: auto !important;
        padding-right: 10px;
    }
</style>
