<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        <div class="glplogo_reg">
          <router-link to="/"><img src="glplogo.png" class="glplogo_reg_img"/>
          </router-link>
          <p class="glplogo_reg_p">Enter the code we sent to your number</p>
          <input
            type="password"
            class="form-control social_input_password"
            id=""
            aria-describedby=""
            placeholder=""
          />
          <p class="glplogo_reg_des">Enter code in 180s<span class="glplogo_reg_code">Resend Code</span></p>
          <div class="sociallogo_btn">
            <router-link to="/socialmedia/socialmedia_log_touch_security">
              <button class="glplogo_reg_btn">Next <img class="glplogo_reg_btn_img" src="reg_next.png"/>
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'SocialMedia_Log_verify',
  components: {
  }
}
</script>
<style>
  .glplogo_reg {
    text-align: left;
    width: 100%;
    margin: 30px 40px;
  }
  .glplogo_reg_p {
    margin: 0 0 10px 0;
  }
  .glplogo_reg_img {
    margin: 250px 0 30px 0;
  }
  .social_input_password {
    border-radius: 12px !important;
    border: 0 solid white !important;
    margin-bottom: 20px;
    font-size: 25px !important;
    background-color: #F4F9FE !important;
    text-align: center;
  }
  .glplogo_reg_des {
    font-size: 14px;
    margin: 0;
    text-align: left;
  }
  .glplogo_reg_btn_img {
    margin: 0 0 2px 10px;
  }
</style>
