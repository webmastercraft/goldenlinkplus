<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              My Products<router-link to="/businessusercenter/services/edit"><i class="fas fa-plus-circle"></i></router-link>
            </div>
            <div class="golden-area brands_top">
              <p class="profile-title profile-title-buc">Brand Name:<span> Gloden Link Plus</span><button class="remove_btn"><img src="img/remove.png"></button></p>
              <p class="profile-title profile-title-buc">Product Category:<span><br>  Marketing & Advertising Services<br>->Public Relation Services<br>->Public Relation Agencies</span></p>
              <p class="profile-title profile-title-buc">Product Name:<span> Referral program</span></p>
              <p class="profile-title profile-title-buc">Price:<span> $1000</span></p>
              <p class="profile-title profile-title-buc">Min Qty Per Order:<span> 1000</span></p>
              <p class="profile-title profile-title-buc">Service Item:<span> CPL</span></p>
              <p class="profile-title profile-title-buc">URL:<span></span></p>
              <p class="profile-title profile-title-buc">Uploaded Files:
              </p>
              <div class="form-group thumbnails upload_img">
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
              </div>
              <p class="profile-title profile-title-buc">Description:<span><br>
We all know that becoming a sole distributor in business is very difficult. But in Golden Link+ you have a lot of opportunities to become the Sole marketing distributors for many businesses so easily. That is a great way you increase your income on GOLD.</span></p>
              <p class="profile-title profile-title-buc"><span>We award each registrant with a $5 credit, plus another dollar ($1) credit with each referral you make.</span></p>
<p class="profile-title profile-title-buc"><span>$1000 rewards is the limit. After that you will grow you social media influrence, plus benefit to sucess.</span></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Services',
  components: {
  }
}
</script>
<style>
  .upload_img {
    margin: 0 15px 15px !important;
    width: auto !important;
  }
</style>
