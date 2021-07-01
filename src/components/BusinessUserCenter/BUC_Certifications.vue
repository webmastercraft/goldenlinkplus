<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              Certifications<router-link to="/businessusercenter/certifications/edit"><i class="fas fa-plus-circle"></i></router-link>
            </div>
            <div class="golden-area brands_top">
              <p class="profile-title profile-title-buc">Document Type:<span> Business Permit</span></p>
              <p class="profile-title profile-title-buc">Document Name:<span><br> CA Seller’s Permit</span></p>
              <p class="profile-title profile-title-buc">Product Name:<span> GLP</span></p>
              <p class="profile-title profile-title-buc">Registration Number:<span> 1234567</span></p>
              <p class="profile-title profile-title-buc">Issued by:<span> Other Government Agency</span></p>
              <p class="profile-title profile-title-buc">Date Issued:<span> 01/01/2013</span></p>
              <p class="profile-title profile-title-buc">Expiry Date:<span> 01/01/2022</span></p>
              <p class="profile-title profile-title-buc">Uploaded Files:
              </p>
              <div class="form-group thumbnails upload_img">
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
              </div>
              <p class="profile-title profile-title-buc">Description:<span><br> CA Seller’s Permit</span></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Certifications',
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
