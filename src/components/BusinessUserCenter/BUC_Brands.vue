<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            <div class="account-title">
              My Brands
            </div>
            
            
            <div class="golden-area brands_top">
              <p class="profile-title profile-title-buc">Brand Name:<span> Gloden Link Plus</span><button class="remove_btn"><img src="img/remove.png"></button></p>
              <p class="profile-title profile-title-buc">Brand Ownership:<span> Owned</span></p>
              <p class="profile-title profile-title-buc">Place of Registration:<span> USA</span></p>
              <p class="profile-title profile-title-buc">Date of Registration:<span> 06/2011</span></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BUC_Brands',
  components: {
  }
}
</script>
<style>
  .profile-title-buc {
    margin: 0 22px 21px 22px !important;
  }

  .brands_top {
    margin-top: 25px;
  }
</style>
