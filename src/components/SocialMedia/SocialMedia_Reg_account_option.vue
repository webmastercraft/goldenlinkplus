<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        <div class="glplogo">
          <router-link to="/"><img src="glplogo.png"/>
          </router-link>
          <p class="glplogo_reg_p">Enter your Email Address</p>
          <input
            type="email"
            class="form-control socialmedia_reg_email"
            id=""
            aria-describedby=""
            placeholder=""
          />
          <p class="email_validation">Email is required</p>
          <p class="code_sample">Referral Code: {{referral_code}}</p>
          <form>
              <div class="socialmedia_check">
                <div class="checkbox_check">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                  <label for="vehicle1"></label>
                  <p>YES! Send me real-time reports on marketing campaigns, fan base events, as well as sales conversions.</p>
                </div>
                <div class="checkbox_check">
                  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                  <label for="vehicle2"></label>
                  <p>YES! I understand and agree to Goldenlink+ Terms of service, including the <b>User Agreement</b> and <b><router-link to="/socialmedia/socialmedia_privacy_policy">Privacy Policy</router-link></b></p>
                </div>
              </div>
          </form>
          <p class="glplogo_reg_account_title">Set up your Account:</p>
          <button class="socialmedia_account_btn"><router-link to="/socialmedia/socialmedia_reg_touch_security" class="glplogo_reg_account_btn account_business">Register as a Business</router-link></button>
          <button class="socialmedia_account_btn"><router-link to="/socialmedia/socialmedia_reg_touch_security" class="glplogo_reg_account_btn account_gsmarketer">Register as  a GS Marketer</router-link></button>
          <div class="glplogo_reg_account_position">
            <button class="glplogo_reg_account_cancel"><router-link to="/socialmedia/socialmediastart">Cancel</router-link></button>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'SocialMedia_Reg_account_option',
  components: {
  },
  data() {
    return {
      referral_code: "123456"
    }
  }
}
</script>
<style>
  .glplogo_reg_account_title {
    margin: 30px 0 15px 0;
    font-size: 18px;
  }
  .glplogo_reg_account_btn {
    padding: 10px;
    display: block;
    border-radius: 16px;
    color: white;
    margin: 5px 0;
  }
  .account_business {
    background: #13C8FF;
  }
  .account_gsmarketer {
    background: #EF8200;
  }
  .socialmedia_account_btn {
    width: 100%;
  }
  .glplogo_reg_account_cancel {
    border-radius: 30px;
    border: 2px solid #70BCE5;
    
    padding: 8px 55px;
    text-align: center;
  }
  .glplogo_reg_account_position {
    text-align: center;
    margin: 30px 0 auto;
  }
  input[type=checkbox] {
    display:none;
  }
  .socialmedia_check {
    margin: 10px 0;
  }
  .socialmedia_check .checkbox_check {
    margin: 0;
    display: flex;
    font-size: 14px;
  }
  .socialmedia_check p {
    margin: 5px auto;
  }
  .socialmedia_reg_email {
    border-radius: 12px;
  }
  .email_validation {
    color: red;
    font-size: 13px;
    margin: 0;
  }
  .code_sample {
    margin: 5px 0 0;
  }
  .glplogo_reg_account_cancel a {
    color: #70BCE5;
  }
</style>
