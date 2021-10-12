<template>
    <div class="container">
        <div class="user_center_area">
                <router-link to="/socialmedia/socialmedia_main_lounge_bs">
                    <img src="cancel_black.png"  class="user_center_close">
                </router-link>
                <p class="switch_title">Business Information Settings</p>
                <div class="user_center_profile profile_logo">
                    <img src="profile/profile_logo.png">
                    <div>
                        <p class="update_title">Dr Approved Massage Chairs</p>
                        <router-link to="/socialmedia/bs_center/socialmedia_bs_update_profile">
                            <p class="update_profile">Update Profile</p>
                        </router-link>
                    </div>
                </div>
                <router-link to="/socialmedia/bs_center/socialmedia_bs_internal_role">
                    <p class="switch_content">Internal Business Role</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/bs_center/socialmedia_bs_brands">
                    <p class="switch_content">My Brands</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/bs_center/socialmedia_bs_product">
                    <p class="switch_content">My Products</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/bs_center/socialmedia_bs_services">
                    <p class="switch_content">My Services</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/bs_center/socialmedia_bs_offers">
                    <p class="switch_content">My Offers</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/bs_center/socialmedia_bs_reward">
                    <p class="switch_content">G-Coin Rewards</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/bs_center/socialmedia_bs_update_account">
                    <p class="switch_content">Upgrade Business Account</p>
                </router-link>
                <hr class="switch_hr">
                <p class="switch_content">Create a New DBA for this business</p>
                <hr class="switch_hr">
                <router-link to="/socialmedia/bs_center/socialmedia_bs_campaign">
                    <p class="switch_content">Start my Campaign</p>
                </router-link>
                <hr class="switch_hr">
                
        </div>
    </div>
</template>

<script>

  export default {
    name: 'BS_User_Center',
    components: {
    },  
    data () {
      return {
      }
    },
  }
</script>
<style>
    .user_center_area {
        padding: 20px;
        background: white;
        width: 100%;
        max-width: 414px;
        min-height: 100vh;
        text-align: left;
    }
    .user_center_close {
        float: right;
        margin-top: 3px;
    }
    .user_center_profile {
        display: flex;
        width: 100%;
        margin: 15px 0;
    }
    .user_center_profile div {
        margin: auto auto auto 20px;
    }
    .update_profile {
        color: #13C8FF;
        font-size: 15px;
        margin: 0;
    }
    .update_title {
        font-size: 16px;
        margin: 0;
    }
</style>
