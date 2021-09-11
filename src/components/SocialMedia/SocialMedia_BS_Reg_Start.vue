<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        <div class="glplogo">
          <router-link to="/"><img src="glplogo.png"/>
          </router-link>
          <p class="glplogo_p">Welcome to Your Live<br>Audio E-commerce<br>Experience</p>
          <div class="reg_log_start">
            <img src="reg_start.png">
            <p>Start following people, creating events,<br>building communities, and launching your<br>campaigns</p>
            <router-link to="/socialmedia/socialmedia_reward">
              <button class="reg_start_btn">Get Started<img class="glplogo_reg_btn_img" src="reg_next.png"/></button>
            </router-link>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'BS_Reg_Start',
  components: {
  }
}
</script>
<style>
  .reg_log_start {
    text-align: center;
  }
  .reg_log_start p {
    margin: 20px 0 0 !important;
  }
  .reg_start_btn {
    color: white;
    background: #F4992D;
    padding: 7px 34px;
    border-radius: 16px;
    margin: 30px auto auto;
  }
</style>
