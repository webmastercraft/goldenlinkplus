<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">My Offers
                    <router-link to="/socialmedia/bs_center/socialmedia_bs_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>

                <p class="update_profile_content">Select Product</p>
                <div class="form-group profile_input profile_role_input">
                    <select class="form-control" id="year_established">
                        <option>GLP</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Title</p>
                <div class="form-group profile_input profile_role_input">
                    <select class="form-control" id="year_established">
                        <option>Goldlinkcoins Promo</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Preview URL</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="https://www.goldenlinkplus.com"
                    />
                </div>
                <p class="update_profile_content">Price</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="$100"
                    />
                </div>
                <p class="update_profile_content">Minimum Order Quantity</p>
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
                <p class="update_profile_content">Select Offer Type</p>
                <div class="form-group profile_input profile_role_input">
                    <select class="form-control" id="year_established">
                        <option>Offer</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Offer Description</p>
                <div class="form-group profile_input profile_role_input">
                    <textarea
                      class="form-control"
                      id="keywords"
                      rows="5"
                      placeholder=""
                      value=""
                    >
                    </textarea>
                </div>
                <p class="update_profile_content">Offer Commission</p>
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
                <p class="update_profile_content">CPC</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="50"
                    />
                </div>
                <p class="update_profile_content">Targeted Locations</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="Los Angeles"
                    />
                </div>
                <p class="update_profile_content">Banners<span class="profile_upload_btn">Upload</span></p>
                <div class="profile_upload_img">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                </div>
                <div class="profile_offer_btn">
                    <button class="profile_cancel_btn">Cancel</button>
                    <button class="profile_brand_btn">Add this offer</button>
                </div>
                <div class="profile_brand_add" v-for="(item, index) in productData" :key="index">
                    <div class="offer_click_btn">
                        <button>Running</button>
                        <button>TRACK</button>
                    </div>
                    <p>Title: {{item.title}}</p>
                    <p>Product: {{item.product}}</p>
                    <p>Preview: {{item.preview}}</p>
                    <p>Type: {{item.type}}</p>
                    <p class="update_profile_content">Banners Ads</p>
                    <div class="profile_upload_img">
                        <video><source src="" type=""></video>
                        <video><source src="" type=""></video>
                        <video><source src="" type=""></video>
                        <video><source src="" type=""></video>
                    </div>
                    <p class="update_profile_content">Product Description</p>
                    <p class="update_profile_content"><b>Offer Description here</b></p>
                    <p>Offer Commission: {{item.commission}}</p>
                    <p>CPC: {{item.cpc}}</p>
                    <p>Targeted Locations: {{item.targeted}}</p>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BS_Offers',
        components: {
        },  
        data () {
                return {
                    productData: [
                        {
                            title: "$300 Promo",
                            product: "Social Media Marketing",
                            preview: "Marketing & Advertising Services",
                            type: "CPS",
                            commission: "50",
                            cpc: "0",
                            targeted: "Global",
                        },
                        {
                            title: "$300 Promo",
                            product: "Social Media Marketing",
                            preview: "Marketing & Advertising Services",
                            type: "CPS",
                            commission: "50",
                            cpc: "0",
                            targeted: "Global",
                        }
                    ]
            }
        }
    }
</script>
<style>
    .profile_offer_btn {
        display: flex;
        margin-top: 15px;
    }
    .profile_cancel_btn {
        color: white;
        background: #BFC1CE;
        border-radius: 8px;
        width: 25%;
        padding: 5px 0;
        height: fit-content;
        margin-right: 5px;
    }
    .offer_click_btn {
        margin-top: 10px;
    }
    .offer_click_btn button {
        color: white;
        border-radius: 30px;
        padding: 0 20px;
        width: 35%;
        margin: 0 5px;
    }
    .offer_click_btn button:first-child {
        background: #FFB803;
    }
    .offer_click_btn button:last-child {
        background: #39B54A;
    }
</style>
