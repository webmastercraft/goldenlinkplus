<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">Start Campaign
                    <router-link to="/socialmedia/user_center/socialmedia_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                <p class="search_filter">Search Filters</p>
                <div class="content content_modal gs_marketing_modal">
                    <div class="marketing_list gs_marketing_list" v-for="(market, key) in markets" :key="key">
                        <p class="marketing_subtitle">{{market.title}}<img src="img/plus.png" class="gs_marketing_plus"></p>
                        <span v-for="(item, index) in market.items" :key="index">
                            {{item}}<button class="marketing_btn" @click="deleteRow(key, index)"><i class="fa fa-times" aria-hidden="true"></i></button>
                        </span>
                    </div>
                </div>
                <hr class="community_hr">
                <p class="bs_campaign_footer">
                    <span>GOLD STRIKERS</span>
                    <button class="bs_campaign_select">Select All</button>
                    <button class="bs_campaign_invite">INVITE SELECTED</button>
                </p>
                <div class="user_info bs_campaign_info" v-for="(user, index) in users" :key="index">
                    <img :src="`${user.image}`">
                    <router-link to="/businessusercenter/marketer_profile">{{user.name}}</router-link>
                    <div class="user_edit">
                        <img class="img_icon img_edit" src="img/dots.png">
                        <img class="img_icon img_inbox" src="img/msg_box.png">
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GS_Marketing',
        components: {
        },  
        data () {
            return {
                markets: [
                    {
                        title: "Verticals", 
                        items: ['Food Beverage and Tobacco', 'Media']
                    }, 
                    {
                        title: "Traffic Channels", 
                        items: ['Email Marketing', 'Social Media', 'News Media Online', 'SEM', 'SEO']
                    }, 
                    {
                        title: "Offer Types Accepted", 
                        items: ['CPS', 'CPC', 'CPA']
                    }, 
                    {
                        title: "Geolocation", 
                        items: ['China', 'United States']
                    } 
                ],
                users: [
                    {
                        GID: 9210,
                        image: "eduardo.png",
                        name : "Somaly Seng"
                    },
                    {
                        GID: 9220,
                        image: "eduardo.png",
                        name : "Dblue Fishing"
                    },
                    {
                        GID: 9230,
                        image: "eduardo.png",
                        name : "GoldenLink Plus"
                    },
                    {
                        GID: 9240,
                        image: "eduardo.png",
                        name : "Jason Guo"
                    },
                    {
                        GID: 9250,
                        image: "eduardo.png",
                        name : "Jason Guo"
                    },
                ]
            }
        },
        methods: {
            deleteRow(key, index) {
                this.markets[key].items.splice(index,1)
            }
        }
    }
</script>
<style>
    .search_filter {
        margin: 10px auto auto;
    }
    .bs_campaign_footer {
        display: flex;
        font-size: 15px;
        margin: auto;
    }
    .bs_campaign_footer button {
        font-size: 14px;
        color: white;
        border-radius: 20px;
        padding: 6px 10px;
    }
    .bs_campaign_footer span {
        color: #EF8200;
        font-weight: 600;
        margin: auto auto auto 0;
    }
    .bs_campaign_select {
        background: #13C8FF;
        margin: auto 5px auto auto;
    }
    .bs_campaign_invite {
        background: #39B54A;
        margin: auto 0;
    }
    .bs_campaign_info {
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin: 15px auto !important;
    }
    .bs_campaign_info img {
        max-width: 45px !important;
        margin-left: 0 !important;
    }
</style>
