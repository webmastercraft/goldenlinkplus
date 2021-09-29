<template>
  <div>
    <div class="container">
      <div class="phone passcode">
        <div class="glplogo_reg_security">
          <p class="glplogo_reg_security_title"><b>Passcode Reset</b></p>
          <p class="glplogo_reg_p passcode_txt">Please Enter the One-Time Passcode<br>sent to your mobile number.</p>
          <input
            type="text"
            class="form-control social_input_password passcode_value"
            id=""
            aria-describedby=""
            placeholder="Input Passcode"
          />
          <p class="passcode_send">Enter code in 180s<span class="glplogo_reg_code">Resend Code</span></p>
          <div class="sociallogo_btn">
            <router-link to="/socialmedia/socialMedia_log_security_passreset">
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
};
</script>

<style>
  .glplogo_reg_passcode {
    font-size: 14px;
    margin: 0 0 200px 0;
  }
  .passcode_txt {
    color: #39B54A;
    font-size: 16px;
  }
  .passcode_value {
    font-size: 20px !important;
  }
  .passcode_send {
    text-align: left;
  }
</style>
