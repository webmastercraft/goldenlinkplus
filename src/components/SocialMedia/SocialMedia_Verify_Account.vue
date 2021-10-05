<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">Verify Your Account
                    <router-link to="/socialmedia/socialmedia_main_lounge_bs">
                        <span class="profile_done">Cancel</span>
                    </router-link>
                </p>
                <p class="update_profile_content">You can complete this verification to completely use your account.</p>
                <p class="update_profile_content">Fullname</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="Alice Du"
                    />
                </div>
                <p class="update_profile_content">Account</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="GS Gold"
                    />
                </div>
                <p class="verify_account_media">
                    <span>Please upload a government issued ID<br>(Your ID must have  a picture)</span>
                    <span>Upload</span>
                </p>
                <div class="profile_upload_img">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                </div>
                <p class="verify_account_media">
                    <span>Please take a selfie with your uploaded ID</span>
                    <span>Upload</span>
                </p>
                <div class="profile_upload_img">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                </div>
                <router-link to="/socialmedia/socialmedia_verify_account_success">
                    <button class="verify_account_btn">Submit for Verification</button>
                </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Verify_Account',
        components: {
        },  
    }
</script>
<style>
    .verify_account_media {
        display: flex;
        margin: auto;
        font-size: 15px;
        margin: 10px 0 5px;
    }
    .verify_account_media span:last-child {
        color: #13C8FF;
        margin: 0 0 auto auto;
    }
    .verify_account_btn {
        background: #EF8200;
        border-radius: 16px;
        font-size: 15px;
        color: white;
        width: calc(100% - 60px);
        padding: 10px 50px;
        margin: 20px 30px auto;
    }
</style>
