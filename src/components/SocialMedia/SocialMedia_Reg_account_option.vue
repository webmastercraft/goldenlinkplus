<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        <div class="glplogo">
          <router-link to="/"><img src="glplogo.png"/>
          </router-link>
          <form>
            <div>
              <div>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1"></label>
              </div>
              <div>
                <p></p>
              </div>
              <div>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                <label for="vehicle2"></label>
              </div>
            </div>
          </form>
          <p class="glplogo_reg_account_title">Set up your Account:</p>
          <button class="socialmedia_account_btn"><router-link to="/socialmedia/socialmedia_reg_touch_security" class="glplogo_reg_account_btn account_business">Register as a Business</router-link></button>
          <button class="socialmedia_account_btn"><router-link to="/socialmedia/socialmedia_reg_touch_security" class="glplogo_reg_account_btn account_gsmarketer">Register as  a GS Marketer</router-link></button>
          <div class="glplogo_reg_account_position">
            <button><router-link to="/socialmedia/socialmediastart" class="glplogo_reg_account_cancel">Cancel</router-link></button>
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
  .glplogo_p {
    font-size: 32px;
    margin: 10px 0;
  }
  .glplogo_reg_account_title {
    margin: 65px 0 15px 0;
    font-size: 18px;
  }
  .glplogo_reg_account_btn {
    padding: 10px 75px;
    display: block;
    border-radius: 16px;
    color: white;
    margin: 7px 0;
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
    color: #70BCE5;
    padding: 8px 55px;
    text-align: center;
  }
  .glplogo_reg_account_position {
    text-align: center;
    margin: 50px 0;
  }
  input[type=checkbox] {
    display:none;
  }

  input[type=checkbox] + label {
      display:inline-block;
      padding: 0 0 0 0px;
      height: 39px;
      width: 39px;
      background-size: 100%;
      background: url('../../../public/Checkbox_non.png') no-repeat;
  }

  input[type=checkbox]:checked + label {
      background: url('../../../public/Checkbox.png') no-repeat;
      height: 39px;
      width: 39px;
      background-size: 100%;
      display:inline-block;
  }
</style>
