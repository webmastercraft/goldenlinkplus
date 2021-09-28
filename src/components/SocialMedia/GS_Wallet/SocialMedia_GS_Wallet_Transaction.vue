<template>
    <div class="container">
        <div class="profile_phone">
            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>All Transactions</a>
            </div>
            <div class="transaction_select">
                <div class="invite_find lounge_following_find">
                    <input type="search" placeholder="Search for Transaction" class="form-control transaction_view">
                    <img src="Search_modal.png">
                </div>
                <div class="wallet_transaction">
                    <div class="wallet_input transaction_type">
                        <select class="form-control transaction_view" id="year_established">
                            <option>Transaction Type</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="wallet_input transaction_date">
                        <select class="form-control transaction_view" id="year_established">
                            <option>Date</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="wallet_data left-content">
                <div>
                    <div v-for="(item, index) in walletdata" :key="index" class="wallet_user_count">
                        <p class="wallet_user_detail"><b>{{item.name}}</b><span>{{item.state}}</span></p>
                        <p class="wallet_user_date">{{item.date}}<span :class="{'wallet_user_amount': item.coin == true}">{{item.amount}}</span></p>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>
<script>


export default {
    name: 'Wallet_Transaction',
    components: {
    },
    data () {
        return {
            walletdata: [
                {
                    name: "Gecko and Co",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "$5",
                },
                {
                    name: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "$5",
                },
                {
                    name: "Gecko and Co",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "$5",
                },
                {
                    name: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "$5",
                },
                {
                    name: "Gecko and Co",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "$5",
                },
                {
                    name: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "$5",
                },
                {
                    name: "Gecko and Co",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "$5",
                },
                {
                    name: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "$5",
                },
                {
                    name: "Gecko and Co",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "$5",
                },
                {
                    name: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "$5",
                },
                {
                    name: "Gecko and Co",
                    state: "Business",
                    date: "08.14.21 09:30",
                    amount: "$5",
                },
                {
                    name: "Adam Levigne",
                    state: "GS Marketer",
                    date: "08.14.21 09:30 ",
                    amount: "$5",
                },
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

</style>
