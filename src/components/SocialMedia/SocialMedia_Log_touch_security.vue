<template>
  <div>
    <div class="container">
      <div class="phone passcode">
        <div class="glplogo_reg_security">
          <p class="glplogo_reg_security_title"><b>Use TouchID to Login</b></p>
          <p class="glplogo_reg_tocuh_title">Place your finger on the device</p>
          <img class="touch_img" src="Group 743.png">
          <p class="touch_per">100%</p>
          <hr class="touch_progress">
          <router-link to="/socialmedia/socialmedia_log_security">
            <p class="glplogo_reg_passcode_ins">or use a passcode instead</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  
  export default {
    name: 'ProgressProPage',
    name: 'SocialMedia_Log_touch_security',
    components: {
    },
    data() {
      return {
          value: 100,
          max: 100
      }
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
  .glplogo_reg_passcode_ins {
    font-size: 14px;
    margin: 0 0 150px 0;
    text-decoration: underline;
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
  .glplogo_reg_tocuh_title {
    margin-top: -60px;
  }
  .touch_img {
    margin-top: 50px;
  }
  .touch_per {
    margin: 30px 60px;
  }
  .touch_progress {
    border:1px solid #ACB6E5;
    margin: 30px 50px;
  }
</style>
