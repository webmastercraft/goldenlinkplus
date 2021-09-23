<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">G-Coin Rewards
                    <router-link to="/socialmedia/bs_center/socialmedia_bs_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                
                <p class="update_profile_content">Title</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder="Your Title"
                      value=""
                    />
                </div>
                <p class="update_profile_content">Select Offer</p>
                <div class="form-group profile_input profile_role_input">
                    <select class="form-control" id="year_established">
                        <option>Type</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Copies Issued</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="1000"
                    />
                </div>
                <p class="update_profile_content">Effective Date</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="date"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value=""
                    />
                </div>
                <button class="profile_brand_btn">Add this Reward</button>
                <div class="profile_brand_add" v-for="(item, index) in rewardData" :key="index">
                    <p>Title: {{item.title}}</p>
                    <p>Pocket Type: {{item.pocket}}</p>
                    <p>Amount: {{item.amount}}</p>
                    <p>Copies Issued: {{item.issued}}</p>
                    <p>Effectivity Date: {{item.date}}</p>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BS_Reward',
        components: {
        },  
        data () {
                return {
                    rewardData: [
                        {
                            title: "$300 Promo Reward",
                            pocket: "Random",
                            amount: "$1000",
                            issued: "1000",
                            date: "09/13/2021"
                        },
                        {
                            title: "$300 Promo Reward",
                            pocket: "Random",
                            amount: "$1000",
                            issued: "1000",
                            date: "09/13/2021"
                        },
                        {
                            title: "$300 Promo Reward",
                            pocket: "Random",
                            amount: "$1000",
                            issued: "1000",
                            date: "09/13/2021"
                        },
                    ]
            }
        }
    }
</script>
<style>
    .profile_brand_btn {
        color: white;
        background: #EF8200;
        border-radius: 8px;
        width: 100%;
        padding: 5px 0;
        margin-bottom: 20px;
    }
    .profile_brand_add {
        background: #E6F7FF;
        border-radius: 16px;
        margin: 10px 0;
        padding: 10px 25px;
    }
    .profile_brand_add p {
        margin: 10px 0;
    }
</style>
