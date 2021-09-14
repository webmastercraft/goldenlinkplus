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
            <p class="medium_1_title">To Qualify as GS Regular and Gold Members</p>
            <ul>
              <li>All GS members must agree with GoldenLink+ policies and maintain their marketing campaign in good standing, not violate the GOLD rules, not to run malicious traffic, not to solicit fake clicks. If all these conditions are met, members can maintain their membership and continue to increase their revenue and sell or transfer their accounts upon the Platform's approval.</li>
            </ul>
            <ul>
              <li>GOLD will maintain records of all activities and comments regardless if good or poor, this includes: conversion rates, starts, reviews, followers, amount of Diamonds and G-Coins received,  and conversion sales revenue.</li>
            </ul>

            <p class="medium_1_title">Withdrawing Funds</p>
            <ul>
              <li><b>Note:</b> When businesses are making offers for commission, G-Coins rewards, CPC G-Coins, GOLD takes a 50% split (check below). GOLD owns the rights for the share ratio and also the right to modify at any time.</li>
            </ul>
            <table class="membership-table">
              <tr>
                <th class="th20">G-Coins Reward</th>
                <th class="th21">50% GS<br>50% GOLD</th>
              </tr>
              <tr>
                <td class="td20">G-Coins CPC</td>
                <td class="td21">50% GS<br>50% GOLD</td>
              </tr>
            </table>

            <ul>
              <li>You may keep your balance on hand to use for future events. By keeping your G-Coin balance on GOLD, it is possible your G-Coin value may grow.</li>
            </ul>

            <ul>
              <li>GS Marketer：When the value in the account is equivalent to $50, funds can be cashed out, except for the first $5 promotional offer, following the completion of your registration.</li>
            </ul>

            <ul>
              <li>G-Coins cash out:  Based on your current balance, plus current G-Coin value.</li>
            </ul>

            <ul>
              <li>Commission cash out: To avoid account disputes and provide for possible returns, the account balance minimum must remain at least $50.  As your sales continue to grow, GOLD maintains the right to adjust this minimum cash deposit amount.</li>
            </ul>
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
  
  .medium_1_title {
    margin: 20px 20px 10px 20px;
    color: #EF8200;
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
</style>
