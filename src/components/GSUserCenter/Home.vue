<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <div class="welcome_content">
            <p class="welcome_title">Welcome to User Center Golden Link Plus!</p>
            <div class="profile">
              <router-link to="/usercenter/profile">
                Go to Profile Page<img src="img/backbtn_black_right.png">
              </router-link>
            </div>
            <div class="menu_content">
              <router-link class="menu_item" v-for="(item) in items" :key="item.rout" :to="`/usercenter/${item.rout}`">
                <div class="">
                    {{item.name}}
                </div>
              </router-link>
            </div>
            <p class="gs-account">This is a <b>GS Account</b></p>
            <div class="welcome_bottom">
              <router-link to="/usercenter/create_account" class="create-account router-btn"  >
                Create a New Account
              </router-link>
            </div>
            <p class="switch"><router-link to="/businessusercenter">Switch to Business Account</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../layout/Navbar_GSUserCenter.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  data() {
      return { items: [
          {rout : "marketing_direction", name: "Marketing Direction"}, 
          {rout : "offers", name: "Offers"},
          {rout : "internal_business_role", name: "Internal Business Role"},
          {rout : "coins_award", name: "G-coin Awards"},
          {rout : "social_media", name: "Social Media"},
          {rout : "notifications", name: "Notifications"},
          {rout : "referrals", name: "My Referrals"},
          {rout : "upgrade_gs_account", name: "Upgrade Your GS Account"},
          {rout : "commissions", name: "My commissions"},
          {rout : "invite", name: "Invite"},
          {rout : "payments", name: "Payments and Financials"},
          {rout : "social_media_matrix", name: "Go to Social Media Matrix"},
        ]
      }
    }
}
</script>