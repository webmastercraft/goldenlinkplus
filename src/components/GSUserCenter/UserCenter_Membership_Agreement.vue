<template>
  <div>
    <div class="container">
        <div class="phone header_phone">
          <div class="header_modal">
            <router-link to="/usercenter/upgrade_gs_account" class="header_arrow"><img src="img/header_arrow.png">
            </router-link>
            <a href="#">MEMBERSHIP AGREEMENT</a>
          </div>
          <div class="content left-content header_top">
            <p class="membership_agree_sentence">The following the terms of use constitute a legal agreement between you, the visitor of the Golden Link Plus website, and Gold, the service owner (“Gold”, “We, “Us”, “GS”, GS marketers or “Gold Striker'') and governs your use of the Gold Service (the “Service”). Please read this Agreement carefully before using or registering for the Service. For the purpose of this Agreement, by using and registering for the Service, you agree to the terms and conditions of this agreement. IF YOU DON'T AGREE WITH THE TERMS AND CONDITIONS OF THIS AGREEMENT, DO NOT USE OR REGISTER FOR THE SERVICE. YOU SHOULD REVIEW THE TERMS FREQUENTLY AS Gold MAY CHANGE THIS AGREEMENT AT ANY TIME BY POSTING A REVISED VERSION. YOUR CONTINUED USE OF THE SERVICE AFTER SUCH NOTICE CONSTITUTES YOUR CONSENT TO THE TERMS OF THE AGREEMENT INCLUDING UPDATED VERSIONS. All GS members must agree with GoldenLink+ policies and maintain their marketing campaign in good standing, not violate the GOLD rules, not to run malicious traffic, not to solicit fake clicks. If all these conditions are met, members can maintain their membership and continue to increase their revenue and sell or transfer their accounts upon the Platform's approval. To assist with the platform growth in a proper direction and avoiding unfair or illegal activities or events on GOLD, GOLD will maintain records of all activities and comments regardless if good or poor, this includes: stars, reviews, followers, amount of Diamonds and G-Coins reward, as well as conversion rates for businesses and GS marketers. </p>
            <router-link to="/usercenter/upgrade_gs_account">
              <button class="gs_account_stage_checkout_btn  rotate_btn">
                <img src="reg_next.png" class="reg_next_rotate">Back
              </button>
            </router-link>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Membership Agreement",
  components: {
  },
}
</script>
<style>
  .header_phone {
    position: relative;
  }
  .header_top ul {
    padding: revert;
    list-style-type: disc;
    margin: 0 10px 0 0;
    font-size: 14px;
  }
  .header_top table {
    margin: 10px auto;
    text-align: center;
    font-size: 14px;
    color: #3B3E51;
    width: calc(100% - 40px);
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
  .reg_next_rotate {
    transform: rotate(180deg);
    margin-right: 25px;
  }
  .membership-table th{
    height: 65px;
    width: 50%;
  }
  .membership-table td{
    height: 90px;
    width: 50%;
  }
  .membership-table .th20 {
    background-color: #E8F1FA;
    font-weight: 400;
  }
  .membership-table .th21 {
    background-color: #F4F9FE;
    font-weight: 400;
  }
  .membership-table .td20 {
    background-color: #B3EEFC;
  }
  .membership-table .td21 {
    background-color: #CFF6FF;
  }
  .rotate_btn {
    margin-top: 20px;
  }
  .membership_agree_sentence {
    margin: 20px;
    font-size: 14px;
  }
</style>
