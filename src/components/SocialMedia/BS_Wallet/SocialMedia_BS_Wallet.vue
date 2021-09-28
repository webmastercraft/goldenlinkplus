<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/socialmedia_main_lounge_bs" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>BS Wallet</a>
                </div>
                <div class="wallet_body">
                    <p class="wallet_content">
                        <img src="wallet/linked.png" class="wallet_content_img"><router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_account">My Linked Accounts</router-link><span><img src="wallet/funds.png"  class="wallet_content_img"><router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_paypal_withdraw">Withdraw Fund</router-link></span>
                    </p>
                    <p class="wallet_title">
                        <span><img src="wallet/activity.png" class="wallet_title_img">RECENT ACTIVITY</span>
                        <button>
                            <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet_transaction">View All</router-link>
                        </button>
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
        name: 'BS_Wallet',
        components: {
        },
        data () {
            return {
                walletdata: [
                    {
                        name: "Mary Thompson",
                        state: "Commission Payment",
                        date: "08.14.21 09:30",
                        amount: "-10",
                        coin: true
                    },
                    {
                        name: "Adam Levigne",
                        state: "G-Coins CPC Reward",
                        date: "08.14.21 09:30 ",
                        amount: "-5",
                        coin: true
                    },
                    {
                        name: "Mary Thompson",
                        state: "G-Coins CPC Reward",
                        date: "08.14.21 09:30",
                        amount: "-5",
                        coin: true
                    },
                    {
                        name: "Adam Levigne",
                        state: "Events G-Coin Reward",
                        date: "08.14.21 09:30 ",
                        amount: "-10",
                        coin: true
                    },
                    {
                        name: "Mary Thompson",
                        state: "Events G-Coin Reward",
                        date: "08.14.21 09:30",
                        amount: "-5",
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
    .wallet_body {
        width: 100%;
        max-width: 414px;
        margin-top: 185px;
        background: white;
        padding: 100px 25px 25px;
    }
    .wallet_content_img  {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    .wallet_content {
        text-align: left;
        margin: 0;
        letter-spacing: 0.04em;
        font-size: 14px;
    }
    .wallet_content span {
        float: right;
    }
    .wallet_title {
        text-align: left;
        font-size: 14px;
        letter-spacing: 0.08em;
        margin: 40px auto 10px;
        width: 100%;
        display: flex;
    }
    .wallet_title span {
        margin: auto 0;
    }
    .wallet_title_img {
        width: 14px;
        height: 15px;
        margin-bottom: 3px;
    }
    .wallet_title button {
        background: #13C8FF;
        color: white;
        border-radius: 4px;
        padding: 5px 15px;
        margin: auto 0 auto auto;
    }
    .wallet_user_count {
        display: flex;
        width: 100%;
        font-size: 15px;
        letter-spacing: 0.02em;
        padding: 6px 10px;;
    }
    .wallet_user_count:nth-child(odd) {
        background: #E6F7FF;
    }
    .wallet_user_count:nth-child(even) {
        background: #FFFFFF;
    }
    .wallet_user_detail {
        margin: auto auto auto 0;
        text-align: left;
        display: grid;
        width: 60%;
    }
    .wallet_user_detail span {
        color: #13C8FF;
    }
    .wallet_user_date {
        margin: auto 0 auto auto;
        text-align: right;
        display: grid;
        color: #13C8FF;
        width: 40%;
    }
    .wallet_user_date span {
        color: black;
    }
    .wallet_user_amount {
        color: red !important;
    }
    .wallet_title button a {
        color: white;
    }
</style>
