<template>
    <div class="container">
        <div class="profile_phone">
            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>My Commissions</a>
            </div>
            <div class="wallet_original_data left-content">
                <div>
                    <div v-for="(item, index) in walletoriginaldata" :key="index" class="wallet_user_count">
                        <p class="wallet_user_detail"><b>{{item.title}}</b><span>{{item.state}}</span></p>
                        <p class="wallet_user_date">{{item.date}}<span :class="{'wallet_user_amount': item.coin == true}">${{item.amount}}</span></p>
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
            walletoriginaldata: [
                {
                    title: "G-Coins from Events",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "5",
                },
                {
                    title: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "5",
                },
                {
                    title: "G-Coins from Events",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "5",
                },
                {
                    title: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "5",
                },
                {
                    title: "G-Coins from Events",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "5",
                },
                {
                    title: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "5",
                },
                {
                    title: "G-Coins from Events",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "5",
                },
                {
                    title: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "5",
                },
                {
                    title: "G-Coins from Events",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "5",
                },
                {
                    title: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "5",
                },
                {
                    title: "G-Coins from Events",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "5",
                },
                {
                    title: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "5",
                },
            ]
        }
    }
}
</script>
<style>
    .wallet_original_data {
        width: 100%;
        max-width: 414px;
        margin: 80px auto 0;
    }
</style>
