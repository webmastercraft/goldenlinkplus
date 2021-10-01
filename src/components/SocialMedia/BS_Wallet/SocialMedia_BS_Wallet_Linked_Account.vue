<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/bs_wallet/socialmedia_bs_wallet" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>My Linked Accounts</a>
                </div>
                <div class="wallet_linked_body">
                    <p class="glplogo_reg_des"><b><span>Select Linked Account</span><router-link to="/socialmedia/gs_wallet/socialmedia_gs_wallet_account"><span class="glplogo_reg_code">Manage</span></router-link></b></p>
                    <div class="wallet_linked_img">
                        <div v-for="(item, index) in linkedData" :key="index" @click="setActivelinked(index)">
                            <img :src="`${item.linked_img}`" :class="{activeLinked: activeLinked === index}">
                        </div>
                    </div>
                </div>
                <div class="wallet_cash_body wallet_linked_second" v-if="activeLinked === 0">
                    <div class="linked_loading_screen" v-show="isloading" >
                        <div>
                            <img src="loading_logo.png">
                            <p>loading</p>
                        </div>
                    </div>
                    <div v-show="!isloading">
                        <img src="wallet/paypal_brand_account.png" class="paypal_brand_img">
                        <div class="form-group profile_input paypal_cash_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="8000"
                            />
                            <span>USD</span>
                        </div>
                        <p>Enter Amount</p>
                        <div class="wallet_cash">
                            <p>Available Balance</p>
                            <hr>
                            <p>USD<span>25,454.82</span></p>
                            <hr>
                        </div>
                        <router-link to="/socialmedia/socialmedia_wallet_paypal_confirm"><button class="paypal_brand_btn">Next<img src="reg_next.png" class="glplogo_reg_btn_img"></button></router-link>
                    </div>
                </div>
                <div class="wallet_cash_body wallet_linked_second" v-if="activeLinked === 1">
                    <div class="linked_loading_screen" v-show="isloading" >
                        <div>
                            <img src="loading_logo.png">
                            <p>loading</p>
                        </div>
                    </div>
                    <div v-show="!isloading">
                        <img src="wallet/applepay_brand.png" class="paypal_brand_img">
                        <div class="form-group profile_input paypal_cash_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="8000"
                            />
                            <span>USD</span>
                        </div>
                        <p>Enter Amount</p>
                        <router-link to="/socialmedia/socialmedia_wallet_apple_confirm"><button class="paypal_brand_btn">Next<img src="reg_next.png" class="glplogo_reg_btn_img"></button></router-link>
                    </div>
                </div>
                <div class="wallet_cash_body wallet_linked_second" v-if="activeLinked === 2">
                    <div class="linked_loading_screen" v-show="isloading" >
                        <div>
                            <img src="loading_logo.png">
                            <p>loading</p>
                        </div>
                    </div>
                    <div v-show="!isloading">
                        <img src="wallet/googlepay_brand.png" class="paypal_brand_img">
                        <div class="form-group profile_input paypal_cash_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="8000"
                            />
                            <span>USD</span>
                        </div>
                        <p>Enter Amount</p>
                        <router-link to="/socialmedia/socialmedia_wallet_google_confirm"><button class="paypal_brand_btn">Next<img src="reg_next.png" class="glplogo_reg_btn_img"></button></router-link>
                    </div>
                </div>
                <div class="wallet_cash_body wallet_linked_second" v-if="activeLinked === 3">
                    <div class="linked_loading_screen" v-show="isloading" >
                        <div>
                            <img src="loading_logo.png">
                            <p>loading</p>
                        </div>
                    </div>
                    <div v-show="!isloading">
                        <img src="wallet/payoneer_brand.png" class="paypal_brand_img">
                        <div class="form-group profile_input paypal_cash_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder=""
                              value="8000"
                            />
                            <span>USD</span>
                        </div>
                        <p>Enter Amount</p>
                        <div class="wallet_cash">
                            <p>Available Balance</p>
                            <hr>
                            <p>USD<span>25,454.82</span></p>
                            <hr>
                        </div>
                        <router-link to="/socialmedia/socialmedia_wallet_payoneer_confirm"><button class="paypal_brand_btn">Next<img src="reg_next.png" class="glplogo_reg_btn_img"></button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Wallet_Paypal_Withdraw',
        components: {
        },
        data () {
            return {
                isloading: true,
                activeLinked: 0,
                timer: null,
                linkedData: [
                    {
                        linked_img: "wallet/linked_paypal.png"
                    },
                    {
                        linked_img: "wallet/linked_applepay.png"
                    },
                    {
                        linked_img: "wallet/linked_googlepay.png"
                    },
                    {
                        linked_img: "wallet/linked_payoneer.png"
                    }
                ]
            }
        },
        methods: {
            setActivelinked(index) {
                this.activeLinked = index;
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.isloading = true;
                this.killLoading();
            },
            killLoading() {
                this.timer = setTimeout(() => {this.isloading = false}, 1000);
            },
        },
        created () {
           this.killLoading();
        },   
    }
</script>
<style>
    .wallet_linked_body {
        margin-top: 60px;
        padding: 30px;
        position: absolute;
    }
    .wallet_linked_img {
        display: flex;
        width: 100%;
        margin-top: 20px;
    }
    .wallet_linked_img div {
        width: 22%;
        margin: auto;
    }
    .wallet_linked_img img {
        border-radius: 18px;
        width: 100%;
    }
    .wallet_linked_second {
        margin-top: 220px !important;
        border-radius: 24px 24px 0 0 !important;
    }
    .activeLinked {
        border: 1px solid #FFB803;
    }
    .paypal_brand_img {
        margin: 30px 0;
        width: auto;
    }
    .linked_loading_screen {
        width: 100%;
        height: 100vh;
        position: relative;
    }
    .linked_loading_screen div {
        position: absolute;
        top: 20%;
        right: 0;
        left: 0;
        margin: auto;
    }
    .linked_loading_screen p {
        text-align: center;
        margin: auto;
        font-size: 14px;
    }
    .linked_loading_screen img {
        width: 51px;
        height: 64px;
    }
</style>
