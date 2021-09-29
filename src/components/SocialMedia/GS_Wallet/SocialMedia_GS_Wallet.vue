<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/socialmedia_main_lounge" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>GS Wallet<span class="wallet_glc_right"><router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet_glc">GLC</router-link></span></a>
                </div>
                <div class="wallet_balance">
                    <p>Available Balance<img src="wallet/plus.png" class="wallet_plus_img"></p>
                    <p class="wallet_money"><span class="wallet_price_type">USD</span><span class="wallet_price">570</span></p>
                    <p class="wallet_price_detail"><span><router-link to="/socialmedia/socialmedia_wallet_cpc_rewards">Details ></router-link></span><button>Convert to GCoins</button></p>
                </div>
                <div class="wallet_body">
                    <p class="wallet_content">
                        <img src="wallet/linked.png" class="wallet_content_img"><router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet_account">My Linked Accounts</router-link><span><img src="wallet/funds.png"  class="wallet_content_img"><router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet_paypal_withdraw">Withdraw Fund</router-link></span>
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
    .wallet_balance {
        background: #EF8200;
        width: 65%;
        position: absolute;
        height: 170px;
        top: 80px;
        left: 20px;
        border-radius: 16px;
        color: white;
        text-align: left;
        padding: 20px;
        font-size: 14px;
    }
    .wallet_balance p {
        margin: auto;
    }
    .wallet_plus_img {
        float: right;
    }
    .wallet_price_type {
        margin: 10px 10px auto auto;
    }
    .wallet_price {
        font-size: 40px !important;
    }
    .wallet_money {
        display: inline-flex;
    }
    .wallet_balance button {
        color: white;
        border-radius: 8px;
        border: 1px solid white;
    }
    .wallet_price_detail {
        margin: 24px auto auto !important;
        display: flex;
    }
    .wallet_price_detail span {
        margin: auto auto auto 0;
    }
</style>
