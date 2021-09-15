<template>
    <div class="container">
        <div class="switch_area">
            <p class="switch_title">Switch Account<router-link to="/socialmedia/socialmedia_main"><img src="close.png"  class="switch_close"></router-link></p>
            <div class="switch_header">
                <p>Bundle GS and Business Profiles.<br>Easily switch between profiles.</p>
                <button>GET THIS</button>
            </div>
            <router-link to="/socialmedia/socialmedia_main_lounge">
                <div class="switch_user">
                    <img src="Jean_Smith.png">
                    <p>Your Business Account<br><b>$3800</b></p>
                </div>
            </router-link>
            <p class="switch_title">Account</p>
            <p class="switch_content">View Profile</p>
            <hr class="switch_hr">
            <p class="switch_content">Membership</p>
            <hr class="switch_hr">
            <p class="switch_content">Security</p>
            <hr class="switch_hr">
            <router-link to="/socialmedia/socialmedia_main_notification_setting">
                <p class="switch_content">Notification Settings</p>
            </router-link>
            <p class="switch_title">Communities</p>
            <p class="switch_content">Create a Community</p>
            <p class="switch_title">Finances</p>
            <p class="switch_content">Cash Balance<span><b>$254</b></span></p>
            <hr class="switch_hr">
            <p class="switch_content">G-Coins Balance<span><b>254,236</b></span></p>
            <hr class="switch_hr">
            <p class="switch_content">Cash-in</p>
            <hr class="switch_hr">
            <p class="switch_content">Withdraw funds</p>
            <hr class="switch_hr">
            <p class="switch_content">Transaction History</p>
        </div>
    </div>
</template>
<script>


export default {
  name: 'SocialMedia_Switch_Account',
  components: {
  }
}
</script>
<style>
    .switch_area {
        padding: 20px;
        background: white;
        width: 100%;
        max-width: 414px;
        min-height: 100vh;
    }
    .switch_title {
        margin: 0;
        color: #EF8200;
        font-size: 16px;
    }
    .switch_close {
        float: right;
    }
    .switch_header {
        display: flex;
        border: 1px solid black;
        border-radius: 16px;
        padding: 15px;
        font-size: 14px;
        margin: 10px 0;
    }
    .switch_header p {
        margin: 0 auto 0 0;
    }
    .switch_header button {
        background: #13C8FF;
        color: white;
        border-radius: 16px;
        width: 95px;
    }
    .switch_user {
        display: flex;
        width: 100%;
        font-size: 15px;
        margin: 10px 0;
    }
    .switch_user img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: auto 0;
    }
    .switch_user p {
        margin: 0 auto 0 10px;
    }
    .switch_content {
        margin: 20px 0;
        font-size: 15px;
    }
    .switch_hr {
        margin: 0;
    }
    .switch_content span {
        margin-left: 20px;
    }
</style>
