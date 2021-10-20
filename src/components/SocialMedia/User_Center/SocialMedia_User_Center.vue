<template>
    <div class="container">
        <div class="user_center_area">
                <router-link to="/socialmedia/socialmedia_main_lounge">
                    <img src="cancel_black.png"  class="user_center_close">
                </router-link>
                <p class="switch_title">GS Information Settings</p>
                <div class="user_center_profile profile_logo">
                    <img src="view_user.png">
                    <div>
                        <p class="update_title">Ana Smith</p>
                        <router-link to="/socialmedia/user_center/socialmedia_gs_update_profile">
                            <p class="update_profile">Update Profile</p>
                        </router-link>
                    </div>
                </div>
                <router-link to="/socialmedia/user_center/socialmedia_gs_internal_role">
                    <p class="switch_content">Internal Business Role</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/user_center/socialmedia_gs_marketing">
                    <p class="switch_content">My Marketing Direction</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/user_center/socialmedia_gs_social">
                    <p class="switch_content">My Social Media</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/user_center/socialmedia_gs_referrals">
                    <p class="switch_content">My Referrals</p>
                </router-link>
                <hr class="switch_hr">
                <!-- <router-link to="">
                    <p class="switch_content">My Offers</p>
                </router-link>
                <hr class="switch_hr"> -->
                <router-link to="/usercenter/upgrade_gs_account">
                    <p class="switch_content">Upgrade my GS Account</p>
                </router-link>
                <hr class="switch_hr">
                <router-link to="/socialmedia/user_center/socialmedia_gs_invite">
                    <p class="switch_content">Invite People</p>
                </router-link>
                <hr class="switch_hr">
        </div>
    </div>
</template>

<script>

  export default {
    name: 'User_Center',
    components: {
    },  
    data () {
      return {
      }
    },
  }
</script>
<style>

</style>
