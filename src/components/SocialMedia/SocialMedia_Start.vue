<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        <div class="glplogo">
          <router-link to="/"><img src="glplogo.png"/>
          </router-link>
          <p class="glplogo_p">Welcome to<br>Your Social Media<br>Matrix</p>
          <img src="Group 724.png">
          <div class="sociallogo_btn">
            <button class="social_reg"><router-link to="/socialmedia/socialmedia_reg_intro" class="socialbtn">Register</router-link></button>
            <button class="social_log"><router-link to="/socialmedia/socialmedia_log_intro" class="socialbtn">Login</router-link></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'SocialMedia_Start',
  components: {
  }
}
</script>
<style>
  .sociallogin {
    background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%) !important;
  }
  .glplogo {
    text-align: left;
    width: 100%;
    margin: 30px 25px;
  }
  .socialbtn {
    color: white;
    font-size: 18px;
    line-height: 27px;
  }
</style>
