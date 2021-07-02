<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter/start_campaign"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            <div>
              <img src="img/users/Jason Guo.png" class="profile-img" />
            </div>
            <div class="golden-area">
              <p class="golden-title marketer-title"><b>Jason Guo (GID:9240)</b></p>
              <p class="profile-title">Description:</p>
            </div>
            <hr>
            <div class="contact-area">
              <p class="profile-title">Marketing Direction</p>
              <p class="profile-title">Verticals:<span><br>Animals & Pet Supplies, Apparel & Accessories, Arts & Entertainment, Baby & Toddler, Business & Industrial, Cameras & Optics, Electronics, Food, Beverages & Tobacco, Furniture, Hardware, Health & Beauty, Home & Garden, Luggage & Bags, Jewelry & Watches, Mature, Media, Office Equipment & Supplies, Religious & Ceremonial, Software, Sporting Goods, Toys & Games, Vehicles & Parts, Antiques </span></p>
              <p class="profile-title">Marketing Methods:<span><br>Social media, News media online</span></p>
              <p class="profile-title">Offer Types Accepted:<span><br>CPC, CPS, CPA, CPL, CPI, CPM</span></p>
              <p class="profile-title">Geolocation:<span><br>Unites States</span></p>
              <p class="profile-title">Description:<span><br>Jason Guo 划使用微信公众号文章推广销售相关服务  。</span></p>
            </div>
            <hr>
            <p class="profile-title">Social Media</p>
            <hr>
            <p class="profile-title">Reviews</p>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Marketer_Profile",
  components: {
  }
}
</script>
<style>
  .marketer-title {
    color: #F4992D;
    margin-bottom: 35px !important;
  }
</style>
