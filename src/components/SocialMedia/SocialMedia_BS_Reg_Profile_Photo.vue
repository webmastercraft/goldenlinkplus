<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Set Up Your Profile</a>
          </div>
          <div class="content header_top height_static">
            <img src="status_one.png" class="status_img">
            <p class="status_add_photo">Add Business Profile Photo</p>
            <p class="status_add_desc">Let’s add your business profile photo so people can easily recognize your business.</p>
            <div class="form-group wrapper">
                <div class="box user-profile">
                  <img src="img/user_img.png" class="img-fluid" />
                  <div class="upload-options">
                    <label>
                      <input type="file" class="image-upload" accept="image/*" />
                    </label>
                  </div>
                </div>
            </div>
            <div class="sociallogo_btn status_next">
              <router-link to="/socialmedia/socialmedia_bs_reg_basic_info">
                <button class="glplogo_reg_btn">Next <img class="glplogo_reg_btn_img" src="reg_next.png"/>
                </button>
              </router-link>
            </div>
            <router-link to="/socialmedia/socialmedia_bs_reg_basic_info">
              <button class="status_skip_btn">Skip this</button>
            </router-link>
          </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'BS_Reg_Profile_Photo',
  components: {
  }
}
</script>
<style>

</style>
