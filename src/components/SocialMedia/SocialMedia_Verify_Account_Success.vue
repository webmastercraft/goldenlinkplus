<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">Verify Your Account
                    <router-link to="/socialmedia/socialmedia_main_lounge_bs">
                        <span class="profile_done">Done</span>
                    </router-link>
                </p>
                <div class="verify_account_success">
                    <img src="connect_modal.png">
                    <p>Thank you for sending your verification requirements. Our verification process takes 1-2 days. We will send you an email and notification when verification is done.</p>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Verify_Account_Success',
        components: {
        },  
    }
</script>
<style>
    .verify_account_success p {
        margin: 20px auto auto;
        padding: 0 10px;
    }
    .verify_account_success {
        text-align: center;
        margin: 150px auto auto;
    }
</style>
