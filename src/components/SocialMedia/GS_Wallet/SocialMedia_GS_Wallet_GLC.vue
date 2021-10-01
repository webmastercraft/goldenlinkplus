<template>
    <div class="container">
        <div class="profile_phone">
            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>GLC GoldLink Coin</a>
            </div>
            <div class="wallet_glc_content">
                <div class="wallet_glc_coin">
                    <img src="wallet/GLC_coin.png">
                    <p>Current Balance<span>50 GLC</span></p>
                </div>
                <p class="wallet_glc_record">GLC Earning Records</p>
            </div>
            <div class="wallet_glc_data left-content">
                <div>
                    <div v-for="(item, index) in walletdata" :key="index" class="wallet_glc_count">
                        <p class="wallet_user_detail">Earned {{item.earned}} Diamonds</p>
                        <p class="wallet_user_date">{{item.date}}<span :class="{'wallet_user_amount': item.coin == true}">{{item.amount}} GLC</span></p>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>


export default {
    name: 'Wallet_Wallet_GLC',
    components: {
    },
    data () {
        return {
            walletdata: [
                {
                    earned: "200",
                    date: "08.14.21 09:30",
                    amount: "1",
                },
                {
                    earned: "400",
                    date: "08.14.21 08:57",
                    amount: "2",
                },
                {
                    earned: "1000",
                    date: "08.14.21 09:30",
                    amount: "1",
                },
                {
                    earned: "1000",
                    date: "08.14.21 08:57",
                    amount: "2",
                },
                {
                    earned: "2000",
                    date: "08.14.21 09:30",
                    amount: "1",
                },
                {
                    earned: "200",
                    date: "08.14.21 08:57",
                    amount: "1",
                },
                {
                    earned: "200",
                    date: "08.14.21 09:30",
                    amount: "2",
                },
                {
                    earned: "200",
                    date: "08.14.21 08:57",
                    amount: "1",
                }
            ]
        }
    },
    methods: {
        selectFollow(index) {
            this.datas[index].follow = false
            this.image1 =  this.image2;
        }
    }
}
</script>
<style>
    .wallet_glc_content {
        width: 100%;
        max-width: 414px;
        position: fixed;
        top: 60px;
        background: white;
        padding: 20px 20px 10px;
    }
    .wallet_glc_coin {
        display: flex;
    }
    .wallet_glc_coin p {
        margin: auto 0 auto auto;
        display: grid;
        text-align: right;
    }
    .wallet_glc_coin img {
        margin: auto auto auto 10px;
    }
    .wallet_glc_coin p span {
        font-size: 24px;
    }
    .wallet_glc_record {
        margin: 0;
        text-align: left;
        font-size: 15px;
    }
    .wallet_glc_data {
        width: 100%;
        max-width: 414px;
        margin: 188px auto 0;
    }
    .wallet_glc_count {
        display: flex;
        width: 100%;
        font-size: 15px;
        letter-spacing: 0.02em;
        padding: 3px 20px;
    }
    .wallet_glc_count:nth-child(odd) {
        background: #E6F7FF;
    }
</style>
