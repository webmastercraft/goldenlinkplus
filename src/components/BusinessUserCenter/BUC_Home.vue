<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <div class="welcome_content">
            <p class="welcome_title">Welcome to User Center Golden Link Plus!</p>
            <div class="profile">
              <router-link to="/businessusercenter/profile">
                Go to Profile Page<img src="img/backbtn_black_right.png">
              </router-link>
            </div>
            <div class="menu_content">
              <router-link class="menu_item" v-for="(item) in items" :key="item.rout" :to="`/businessusercenter/${item.rout}`">
                <div class="">
                    {{item.name}}
                </div>
              </router-link>
            </div>
            <p class="gs-account">This is a <b>Business Account.</b></p>
            <div class="welcome_bottom">
              <router-link to="/businessusercenter/create_account" class="create-account router-btn"  >
                Create a New Account
              </router-link>
            </div>
            <p class="switch"><router-link to="/usercenter">Switch to GS Account</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../layout/Navbar_BusinessUserCenter.vue';

export default {
  name: 'home',
  components: {
    Navbar,
  },
  data() {
      return { items: [
          {rout : "external_business_role", name: "External Business Role"}, 
          {rout : "coin_rewards", name: "G-coin Rewards"},
          {rout : "internal_business_role", name: "Internal Business Role"},
          {rout : "marketing_channel", name: "Marketing Channels"},
          {rout : "brands", name: "My Brands"},
          {rout : "certifications", name: "Certifications"},
          {rout : "products", name: "My Products"},
          {rout : "reviews", name: "Reviews"},
          {rout : "services", name: "My Services"},
          {rout : "account_settings", name: "Account Settings"},
          {rout : "offers", name: "My Offers"},
          {rout : "upgrade_business_account", name: "Upgrade Business Account"},
          {rout : "cpc_rewards", name: "CPC Rewards"},
          {rout : "start_campaign", name: "Start Campaign"},
          {rout : "social_media_matrix", name: "Go to Social Media Matrix"}
        ]
      }
    }
}
</script>