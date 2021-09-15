<template>
  <div>
    <div class="container">
      <div class="phone passcode">
        <div class="glplogo_reg_security">
          <p class="glplogo_reg_security_title"><b>Use Passcode to Login</b></p>
          <p class="glplogo_reg_p">Enter your passcode</p>
          <input
            type="password"
            class="form-control social_input_password"
            id=""
            aria-describedby=""
            placeholder=""
          />
          <p class="glplogo_reg_passcode">I forgot my passcode</p>
          <div class="sociallogo_btn">
            <router-link to="/socialmedia/socialmedia_main">
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
  name: 'SocialMedia_Log_security',
  components: {
  }
}
</script>
<style>
  .passcode {
    background: white !important;
  }
  .glplogo_reg_security {
    text-align: center;
    width: 100%;
    margin: 30px 40px;
  }
  .glplogo_reg_p {
    margin: 0 0 10px 0;
  }
  .glplogo_reg_img {
    margin: 250px 0 30px 0;
  }
  /*.social_input_password {
    border-radius: 12px !important;
    border: 0 solid white !important;
    margin-bottom: 20px;
    max-height: 50px;
    font-size: 50px;
    background-color: #F4F9FE !important;
  }*/
  .glplogo_reg_passcode {
    font-size: 14px;
    margin: 0 0 200px 0;
  }
  .glplogo_reg_btn {
    background-color: #F4992D;
    color: white;
    padding: 8px 50px;
    border-radius: 30px;
    font-size: 18px;
    margin: 30px auto;
  }
  .glplogo_reg_btn_img {
    margin: 0 0 2px 10px;
  }
  .glplogo_reg_code {
    color: #F4992D;
    float: right;
  }
  .glplogo_reg_security_title {
    margin: 80px 0;
  }
</style>
