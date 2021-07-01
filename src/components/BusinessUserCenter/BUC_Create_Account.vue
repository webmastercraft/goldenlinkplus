<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content left-content">
          <navbar></navbar>
          <div class="back_usercenter">
            <router-link to="/businessusercenter">
               <img src="img/backbtn_black_left.png">
            </router-link>
          </div>
          <p class="create_account"><b>Create a New Account</b></p>
          <div class="account-desc">
              <p>Creating a new account allows you to use Goldenlink Plus in different ways, while still having just one login.</p>
          </div>
          <router-link to="/businessusercenter/create_new_DBA" class="create_account account_plus"  >
            <i class="fa fa-plus"></i>Create a new DBA for this business
          </router-link>
          <p class="account_explain">Create a 'Do-As-Business (DBA)' name. Each DBA has its own product brands and service categories. <b><router-link to="/">Learn more</router-link></b></p>
          <router-link to="/businessusercenter/create_GS_marketer_account" class="create_account account_plus"  >
            <i class="fa fa-plus"></i>Create a GS Marketer Account
          </router-link>
          <p class="account_explain">Create a GS Marketer account and take advantage of our referral program benefit. <b><router-link to="/">Learn more</router-link></b></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../layout/Navbar_BusinessUserCenter.vue';

export default {
  name: 'BUC_Create_Account',
  components: {
    Navbar,
  }
}
</script>
<style>
  .content .account-desc p {
    text-align: left;
    margin: 0 25px 25px;
  }
</style>
