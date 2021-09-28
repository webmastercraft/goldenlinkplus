<template>
    <div class="container">
        <div class="profile_phone">
            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet" class="header_arrow"><img src="img/header_arrow.png"></router-link>
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
    .wallet_input {
        border: 1px solid #AEE2FF;
        border-radius: 16px;
    }
    .wallet_input select {
        background: transparent;
        border: 0;
        padding: 0 20px;
        appearance: none;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAGCAYAAAAVMmT4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACuSURBVHgBXY+xDcIwEEXvEtHTI0joXFIiFIHZwGzgNehgAzYAJsCUVDhBQJk2JQgGcA2SD1sCYfm6f//9fzosxrMVAUxaCU21Vgai4Vy03xaPAKQTAnIsDF4W6yEXeQTmDqy973X6uDeHbsYAAQUSik6f7Z+3xnxB1wi5K1xcKjVPfcIFyjDQy5ixhJsAXHoOw7MjLiRaXP83JM+V2v4Uxg8VXHByAUsgr6ddGXofEI1IzTtVuf8AAAAASUVORK5CYII=);
        background-repeat: no-repeat;
        background-position: calc(100% - 10px) 50%;
    }
    .wallet_transaction {
        display: flex;
        width: 100%;
        margin: 10px 0;
    }
    .transaction_type {
        width: calc(55% - 5px);
        margin: auto 5px auto 0;
    }
    .transaction_date {     
        width: calc(45% - 5px);
        margin: auto 0 auto 5px;
    }
    .transaction_view:focus {
        border-color: #AFDFF9 !important;
        background-color: unset !important;
    }
    .transaction_select {
        width: 100%;
        max-width: 414px;
        position: fixed;
        top: 60px;
        background: white;
        padding: 20px 20px 10px;
    }
    .wallet_data {
        margin: 188px 20px 0;
        max-width: 414px;
        width: calc(100% - 40px);
    }
</style>
