<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/socialmedia_main_lounge_bs" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>GS Wallet<span class="wallet_glc_right"><router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet_glc">GLC</router-link></span></a>
                </div>
                <div class="wallet_body">
                    <p class="wallet_content">
                        <img src="wallet/linked.png" class="wallet_content_img"><router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_account">My Linked Accounts</router-link><span><img src="wallet/funds.png"  class="wallet_content_img"><router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_paypal_withdraw">Withdraw Fund</router-link></span>
                    </p>
                    <p class="wallet_title">
                        <span><img src="wallet/activity.png" class="wallet_title_img">RECENT ACTIVITY</span>
                        <button><router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet_transaction">View All</router-link></button>
                    </p>
                    <div>
                        <div v-for="(item, index) in walletdata" :key="index" class="wallet_user_count">
                            <p class="wallet_user_detail"><b>{{item.name}}</b><span>{{item.state}}</span></p>
                            <p class="wallet_user_date">{{item.date}}<span :class="{'wallet_user_amount': item.coin == true}">{{item.amount}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'GS_Wallet',
        components: {
        },
        data () {
            return {
                walletdata: [
                    {
                        name: "Mary Thompson",
                        state: "You sent G-Coins",
                        date: "08.14.21 09:30",
                        amount: "-1000",
                        coin: true
                    },
                    {
                        name: "Adam Levigne",
                        state: "Received Event G-Coins",
                        date: "08.14.21 09:30 ",
                        amount: "+1000"
                    },
                    {
                        name: "Mary Thompson",
                        state: "You sent G-Coins",
                        date: "08.14.21 09:30",
                        amount: "-1000",
                        coin: true
                    },
                    {
                        name: "Adam Levigne",
                        state: "Received Event G-Coins",
                        date: "08.14.21 09:30 ",
                        amount: "+1000"
                    },
                    {
                        name: "Mary Thompson",
                        state: "You sent G-Coins",
                        date: "08.14.21 09:30",
                        amount: "-1000",
                        coin: true
                    }
                ]
            }
        },
        methods: {
        }
    }
</script>
<style>
  .sociallogin {
    background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%) !important;
  }
  .glplogo {
    text-align: left;
    width: 100%;
    margin: 30px 25px;
  }
  .socialmedia_messages_desc {
    font-size: 14px;
  }
  .socialmedia_messages {
    display: flex;
    padding: 15px 0;
    background-color: #E6F7FF;
    color: #3B3E51;
  }
  .socialmedia_search_logo_size {
    height: 100%;
    margin: 0 15px;
  }
  .socialmedia_messages_p {
    margin: 0;
  }
  .notification_non {
    background-color: white;
  }
  .search_area {
    font-size: 11px;
  }
  .socialmedia_search_title {
    font-size: 16px;
  }
  .search_coins {
    font-size: 14px;
  }
  .search_coins_img {
    margin-bottom: 4px;
    margin-right: 5px;
  }
  .search_check_offer {
    color: #13C8FF;
    font-size: 16px;
  }
  .socialmedia_search_para {
    padding: 15px 10px;
    display: flex;
  }
  .search_para {
    margin: 0;
    width: 100%;
  }
  .follow_btn {
    background: #EF8200;
  }
  .follow_btn_disable {
    background: #13C8FF33;
    color: #3DAEC9 !important;
  }
  .send_btn_disable {
    background: #13C8FF;
    opacity: 0.2;
  }
  .send_btn {
    background: #13C8FF;
    opacity: 1;
  }
  .search_transmit button {
    padding: 5px 10px;
    width: 95px;
    border-radius: 25px;
    color: white;
    font-size: 14px;
    margin: 3px 0;
  }
  .send_btn img {
    margin-right: 7px;
  }
  .send_btn_disable img {
    margin-right: 7px;
  }
  .wallet_glc_right {
    position: absolute;
    right: 20px;
    z-index: 1040;
  }
</style>
