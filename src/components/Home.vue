<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <div class="test_content">
            <router-link to="/registration" class="test_reg" >
              Registration
            </router-link>
            <router-link to="/usercenter" class="test_usercenter" >
              UserCenter
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style>
.test_content a {
    background: #F4992D;
    border-radius: 20px;
    font-family: Poppins;
    font-style: normal;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    padding: 12px 14px;
    display: block;
    width: 100%;
    max-width: 150px;
    margin: 51px auto 0;
}
</style>
