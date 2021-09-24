<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">My Services
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
                <div class="form-group profile_input profile_role_input">
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
                <div class="profile_brand_add" v-for="(item, index) in productData" :key="index">
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
    </div>
</template>

<script>
    export default {
        name: 'BS_Services',
        components: {
        },  
        data () {
                return {
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
        }
    }
</script>
<style>
</style>
