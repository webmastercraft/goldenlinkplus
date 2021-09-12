<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_bs_reg_profile_photo" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Basic Business Info</a>
          </div>
          <div class="content header_top height_static">
            <img src="status_double.png" class="status_img">
            <p class="status_payment_title"><b>What is the name of your Business?</b></p>
            <input type="text" placeholder="Company Name" class="form-control status_payment_login">
            <p class="status_payment_title"><b>When was it established?</b></p>
            <input type="text" placeholder="Year Established" class="form-control status_payment_login">
            <div class="sociallogo_btn status_next">
                <router-link to="/socialmedia/socialmedia_bs_recommendation_one">
                  <button class="glplogo_reg_btn">Next <img class="glplogo_reg_btn_img" src="reg_next.png"/>
                  </button>
                </router-link>
            </div>
            <router-link to="/socialmedia/socialmedia_bs_recommendation_one">
              <button class="status_skip_btn">Skip this</button>
            </router-link>
          </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "BS_Reg_Basic_Info",
  components: {
  },
  
}
</script>
<style>

</style>
