<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">My Marketing Direction
                    <router-link to="/socialmedia/user_center/socialmedia_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                <div class="content content_modal gs_marketing_modal">
                    <div class="marketing_list gs_marketing_list" v-for="(market, key) in markets" :key="key">
                        <p class="marketing_subtitle">{{market.title}}<img src="img/plus.png" class="gs_marketing_plus"></p>
                        <span v-for="(item, index) in market.items" :key="index">
                            {{item}}<button class="marketing_btn" @click="deleteRow(key, index)"><i class="fa fa-times" aria-hidden="true"></i></button>
                        </span>
                    </div>
                </div>
                <p class="update_profile_content">Description</p>
                <div class="form-group profile_input profile_role_input">
                    <textarea
                      class="form-control"
                      id="keywords"
                      rows="8"
                      placeholder="Business Description"
                    >
                    </textarea>
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
                    }, 
                    {
                        title: "Keyword Tags", 
                        items: ['Gold', 'Social Media']
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
    .gs_marketing_modal {
        margin: 0 !important;
        padding: 0 !important;
        border-radius: 0 !important;
    }
    .gs_marketing_list {
        margin: 0 !important;
    }
    .content_modal span .marketing_btn svg {
        color: #13C8FF;
    }
    .content_modal .marketing_list span {
        background: white;
    }
    .gs_marketing_plus {
        width: 20px;
        height: 20px;
        margin-left: 20px;
        margin-bottom: 3px;
    }
</style>
