<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        <div class="glplogo">
          <router-link to="/"><img src="glplogo.png"/>
          </router-link>
          <p class="glplogo_p">Welcome to<br>Your Social Media<br>Matrix</p>
          <div class="sociallogo_start_logo">
            <img src="Group 724.png" class="glplogo_p_img">
          </div>
          <p class="gs_reg_start_desc">Promote businesses, host events, mine g-coins and earn big rewards! Start by following<br>people now.</p>
           <div class="sociallogo_btn">
              <router-link to="/socialmedia/socialmedia_gs_reg_profile_type">
                <button class="status_reg_start_btn">Get Started <img class="glplogo_reg_btn_img" src="reg_next.png"/>
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
  name: 'SocialMedia_GS_Reg_Start',
  components: {
  }
}
</script>
<style>
  .glplogo_p {
    font-size: 2rem;
    margin: 10px 0;
  }
  .glplogo_p_img {
    width: 70%;
  }
  .socialbtn {
    color: white;
    font-size: 18px;
    line-height: 27px;
  }
  .social_reg {
    background-color: #F4992D;
    border-radius: 30px 0px 0px 30px;
    width: calc(50% - 25px);
    height: 40px;
  }
  .social_log {
    background-color: #FFB803;
    width: calc(50% - 25px);
    height: 40px;
    border-radius: 0px 30px 30px 0px;
  }
  .sociallogo_btn {
    margin: 25px 0 0;
    text-align: center;
  }
  .gs_reg_start_desc {
    margin: 25px 0 0;
    text-align: center;
  }
  .status_reg_start_btn {
    padding: 8px 30px;
    background-color: #F4992D;
    color: white;
    border-radius: 30px;
  }
  .sociallogo_start_logo {
    text-align: center;
  }
</style>
