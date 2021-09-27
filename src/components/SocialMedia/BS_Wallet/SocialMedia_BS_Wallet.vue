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
                        <img src="wallet/linked.png" class="wallet_content_img">My Linked Accounts<span><img src="wallet/funds.png"  class="wallet_content_img">Withdraw Fund</span>
                    </p>
                    <p class="wallet_title">
                        <span><img src="wallet/activity.png" class="wallet_title_img">RECENT ACTIVITY</span>
                        <button>View All</button>
                    </p>
                    <div v-for="(item, index) in walletdata" :key="index">
                        <div class="wallet_user_count">
                            <p class="wallet_user_detail">{{item.name}}<span>{{item.state}}</span></p>
                            <p class="wallet_user_date">{{item.date}}<span>{{item.amount}}</span></p>
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
                        state: "You sent G-Coins",
                        date: "08.14.21 09:30",
                        amount: "-1000"
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
                        amount: "-1000"
                    },
                    {
                        name: "Adam Levigne",
                        state: "Received Event G-Coins",
                        date: "08.14.21 09:30 ",
                        amount: "+1000"
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
        padding: 110px 25px 25px;
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
        margin: 50px auto auto;
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
    }
    .wallet_user_detail {
        margin: auto auto auto 0;
        text-align: left;
        display: grid;
    }
    .wallet_user_detail span {
        color: #13C8FF;
    }
    .wallet_user_date {
        margin: auto 0 auto auto;
        text-align: right;
        display: grid;
        color: #13C8FF;
    }
    .wallet_user_date span {
        color: black;
    }
</style>
