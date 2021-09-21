<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>2 Results Found</a>
                </div>
                <div class="content header_top height_static">
                    <div class="brand_content" v-for="(item, index) in brandData" :key="index">
                        <img :src="`${item.brand_img}`" class="brand_img">
                        <div class="brand_content_detail">
                        <p class="brand_name">{{item.brand_name}}<button class="brand_see_btn">See Events</button></p>
                        <hr class="brands_hr">
                        <button class="brands_own_btn">Owners</button>
                        <p class="brands_title"><img src="brands/brands_sm-1.png">{{item.brands_sm_1}}</p>
                        <p class="brands_title"><img src="brands/brands_sm-2.png">{{item.brands_sm_2}}</p>
                        <p class="brands_title"><img src="brands/brands_sm-3.png">{{item.brands_sm_3}}</p>
                        <button class="brands_own_btn">Carriers</button>
                        <p class="brands_title"><img src="brands/brands_sm-4.png">{{item.brands_sm_4}}</p>
                        <p class="brands_title"><img src="brands/brands_sm-5.png">{{item.brands_sm_5}}</p>
                        <p class="brands_title"><img src="brands/brands_sm-6.png">{{item.brands_sm_6}}</p>
                        <p class="brands_title"><img src="brands/brands_sm-7.png">{{item.brands_sm_7}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Search_Services',
  components: {
  },
  data () {
    return {
        brandData: [
            {
                brand_img: "brands/brands-1.png",
                brand_name: "Coca Cola",
                brands_sm_1: "The Coke People",
                brands_sm_2: "Big Brands Inc.",
                brands_sm_3: "CC Distribution",
                brands_sm_4: "4M Future Distributors Inc",
                brands_sm_5: "We are People’s Brand",
                brands_sm_6: "Holy Cow Marketing",
                brands_sm_7: "Softdrink Wordwide Distribution",
            },
            {
                brand_img: "brands/brands-2.png",
                brand_name: "Pepsi Cola",
                brands_sm_1: "The Coke People",
                brands_sm_2: "Big Brands Inc.",
                brands_sm_3: "CC Distribution",
                brands_sm_4: "4M Future Distributors Incorporated",
                brands_sm_5: "We are People’s Brand Distributors",
                brands_sm_6: "Holy Cow Marketing",
                brands_sm_7: "Softdrink Wordwide Distribution",
            }
        ]
    }
  },
}
</script>
<style>
    .brand_content {
        display: flex;
        width: calc(100% - 50px);
        margin: 25px;
        text-align: left;
    }
    .brand_img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 auto auto 0;
    }
    .brand_see_btn {
        color: #FFB803;
        border-radius: 12px;
        border: 1px solid #FFB803;
        float: right;
        font-size: 13px;
    }
    .brand_name {
        margin: 0;
        font-size: 18px;
    }
    .brand_content_detail {
        width: 80%;
    }
    .brands_hr {
        margin: 5px 0;
    }
    .brands_own_btn {
        background: #E6F7FF;
        border-radius: 8px;
        font-size: 13px;
        margin: 5px 0;
    }
    .brands_title {
        margin: 5px 0;
        font-size: 14px;
    }
    .brands_title img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin: 0 10px 3px 0;
    }
</style>
