<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              My Products<router-link to="/businessusercenter/products/edit"><i class="fas fa-plus-circle"></i></router-link>
            </div>
            <div class="golden-area brands_top">
              <p class="profile-title profile-title-buc">Brand Name:<span> Gloden Link Plus</span><button class="remove_btn"><img src="img/remove.png"></button></p>
              <p class="profile-title profile-title-buc">Product Category:<span><br> Mature->Erotic->Erotic Games</span></p>
              <p class="profile-title profile-title-buc">Product Name:<span> GLP</span></p>
              <p class="profile-title profile-title-buc">Price:<span> $100</span></p>
              <p class="profile-title profile-title-buc">Min Qty Per Order:<span> GLP</span></p>
              <p class="profile-title profile-title-buc">Service Item:<span> 1</span></p>
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
              <p class="profile-title profile-title-buc">Description:<span><br> Promotion</span></p>
              <hr>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Products',
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
