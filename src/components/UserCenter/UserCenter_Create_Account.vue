<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          
          <div class="back_btn">
            <router-link to="/#">
               <i class="fa fa-angle-left"></i>
            </router-link>
          </div>
          <p class="create-account"><b>Create a New Account</b></p>
          <router-link to="/create_business_account" class="create-account business_plus"  >
          <i class="fa fa-plus"></i>Create a Business Account
          </router-link>
          <p class="business_explain">This account lets you setup and launch exciting campaigns for your business. <b><router-link to="/">Learn more</router-link></b></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../layout/Navbar_login.vue';

export default {
  name: 'Create_Account',
  components: {
    Navbar,
  }
}
</script>
<style></style>
