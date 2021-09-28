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
  .glplogo_reg_passcode {
    font-size: 14px;
    margin: 0 0 200px 0;
  }
</style>
