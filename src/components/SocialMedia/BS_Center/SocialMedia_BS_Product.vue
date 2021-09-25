<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">My Products
                    <router-link to="/socialmedia/bs_center/socialmedia_bs_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                
                <p class="update_profile_content">Brand Name</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="Goldenlinkplus"
                    />
                </div>
                <p class="update_profile_content">Product Category</p>
                <div class="form-group profile_input profile_role_input"  @click="showIndustry">
                    <select class="form-control" id="year_established">
                        <option>Biometric Monitors</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Product Name</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="GLP"
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
                <p class="update_profile_content">Service Item</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="1"
                    />
                </div>
                <p class="update_profile_content">URL</p>
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
                <p class="update_profile_content">Product images<span class="profile_upload_btn">Upload</span></p>
                <div class="profile_upload_img">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                </div>
                <p class="update_profile_content">Product Videos<span class="profile_upload_btn">Upload</span></p>
                <div class="profile_upload_img">
                    <video><source src="" type=""></video>
                    <video><source src="" type=""></video>
                    <video><source src="" type=""></video>
                    <video><source src="" type=""></video>
                    <video><source src="" type=""></video>
                </div>
                <p class="update_profile_content">Product Description</p>
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
                <button class="profile_brand_btn">Add this Product</button>
                <div class="profile_brand_add" v-for="(item, index) in productData" :key="index" @click="bsProduct">
                    <p>Product Name: {{item.productname}}</p>
                    <p>Brand Name: {{item.brandname}}</p>
                    <p>Product Category: {{item.category}}</p>
                    <p>Price: ${{item.price}}</p>
                    <p>Minuimum of Quantity: {{item.quantity}}</p>
                    <p>Service Item: {{item.service}}</p>
                    <p>URL: {{item.url}}</p>
                    <p class="update_profile_content">Product images</p>
                    <div class="profile_upload_img">
                        <img src="">
                        <img src="">
                        <img src="">
                        <img src="">
                    </div>
                    <p class="update_profile_content">Product Videos</p>
                    <div class="profile_upload_img">
                        <video><source src="" type=""></video>
                        <video><source src="" type=""></video>
                        <video><source src="" type=""></video>
                        <video><source src="" type=""></video>
                    </div>
                    <p class="update_profile_content">Product Description</p>
                    <p class="update_profile_content">Golden Link Plus is a revolutinary social media marketing platform where businesses and marketers join forces to earn big profits from promoting products and services. Gold is global with business and marketers connections in the U.S., China and many countries.</p>
                    <p>• Intelligent business matching system</p>
                    <p>• Online marketing self-service system</p>
                    <p>• Online business channel promotion quantification system</p>
                    <p>• Online traffic and conversino tracking system</p>
                </div>
        </div>
        <BsProduct 
            v-show="f_bs_product"
            @close="closeViewProfile"
            @view-backdrop="closeViewProfile"
        >
        </BsProduct>
        <Industry 
            v-show="f_show_industry"
            @view-backdrop="closeViewProfile"
            @showIndustrySystem="industrySystem"
        >
        </Industry>
        <IndustrySystem 
            v-show="f_industry_system"
            @close="backIndustrySystem"
            @view-backdrop="closeViewProfile"
            @showIndustryService="industryService"
        >
        </IndustrySystem>
        <IndustryService
            v-show="f_industry_service"
            @close="backIndustryService"
            @view-backdrop="closeViewProfile"
        >
        </IndustryService>
    </div>
</template>

<script>
    import BsProduct from "../../../modal/bs_product.vue";
    import Industry from "../../../modal/product.vue";
    import IndustrySystem from "../../../modal/product_health.vue";
    import IndustryService from "../../../modal/product_care.vue";

    export default {
        name: 'BS_Product',
        components: {
            BsProduct,
            Industry,
            IndustrySystem,
            IndustryService,
        },  
        data () {
                return {
                    f_bs_product: false,
                    f_show_industry: false,
                    f_industry_system: false,
                    f_industry_service: false,
                    productData: [
                        {
                            productname: "GLP",
                            brandname: "Goldenlinkplus",
                            category: "Marketing & Advertising Services",
                            price: "300",
                            quantity: "1",
                            service: "Perfomance Marketing",
                            url: "https://www.goldenlinkplus.com",
                        },
                        {
                            productname: "GLP",
                            brandname: "Goldenlinkplus",
                            category: "Marketing & Advertising Services",
                            price: "300",
                            quantity: "1",
                            service: "Perfomance Marketing",
                            url: "https://www.goldenlinkplus.com",
                        }
                    ]
            }
        },
        methods: {
            bsProduct() {
                this.f_bs_product = true;
            },
            closeViewProfile() {
                this.f_bs_product = false;
                this.f_show_industry = false;
                this.f_industry_system = false;
                this.f_industry_service = false;
            },
            showIndustry() {
                this.f_show_industry = true;
            },
            industrySystem() {
                this.f_industry_system = true;
            },
            industryService() {
                this.f_industry_service = true;
            },
            backIndustrySystem() {
                this.f_industry_system = false;
            },
            backIndustryService() {
                this.f_industry_service = false;
            }
        }
    }
</script>
<style>
    .profile_upload_btn {
        color: #13C8FF;
        margin-left: 15px;
    }
    .profile_upload_img {
        display: flex;
    }
    .profile_upload_img img{
        width: 64px;
        height: 64px;
        margin: auto;
        background: #F4F9FE;
        border-radius: 8px;
    }
    .profile_upload_img video {
        width: 64px;
        height: 64px;
        margin: auto;
        background: #F4F9FE;
        border-radius: 8px;
    }
</style>
