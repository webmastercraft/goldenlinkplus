<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content left-content">
          <navbar></navbar>
          <div class="back_usercenter">
            <router-link to="/usercenter">
               <img src="img/backbtn_black_left.png">
            </router-link>
          </div>
          <p class="create_account"><b>Create a New Account</b></p>
          <router-link to="/usercenter/create_business_account" class="create_account account_plus"  >
            <i class="fa fa-plus"></i>Create a Business Account
          </router-link>
          <p class="account_explain">This account lets you setup and launch exciting campaigns for your business. <b><router-link to="/">Learn more</router-link></b></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../layout/Navbar_GSUserCenter.vue';

export default {
  name: 'Create_Account',
  components: {
    Navbar,
  }
}
</script>
<style></style>
