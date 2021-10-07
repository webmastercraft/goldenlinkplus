<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">Invite People
                    <router-link to="/socialmedia/user_center/socialmedia_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                <div class="gs_invite_text">
                    <h6 class="gs_invite_text_h6">Invite via QR Code</h6>
                    <hr class="hr_gs_invite">
                    <button><p class="qr_scan_color">Scan QR Code</p></button>
                    <hr class="hr_qr_down">
                    <p class="qr_scan"><img src="img/QRcode.png" class="qr_scan" /></p>

                    <hr class="hr_qr_up">
                    <div>
                        <h6 class="qr_h6">Use Invite code</h6>
                        <hr class="hr_qr_down">
                        <div>
                            <input type="text" class="qr-group" name="invite_code" v-model="invite">
                            <button  @click="copyInvite" class="copy_link_btn">
                                    <img :src="`${copy_imginvite}`">
                            </button>
                        </div>
                    </div>

                    <hr class="hr_qr_up">
                    <div>
                        <h6 class="qr_h6">Use Promotion Link</h6>
                        <hr class="hr_qr_down">
                        <div>
                            <input type="text" class="qr-group" name="invite_code" v-model="link">
                            <button @click="copyLink" class="copy_link_btn">
                                <img :src="`${copy_imglink}`">
                            </button>
                        </div>
                    </div>

                    <hr class="hr_qr_up">
                    <div>
                        <h6 class="qr_h6">Invite via Email</h6>
                        <hr class="hr_qr_down">
                        <div class="form-group">
                            <textarea
                            class="qr_area"
                            id="description"
                            rows="7"
                            placeholder="One email per line"
                            >
                            </textarea>
                        </div>
                    </div>

                    <router-link to="/usercenter/create_account" class="email_btn"  >
                    Send Email
                    </router-link>
                    <hr class="hr_qr_up">
                    <div>
                        <h6 class="qr_h6">Share via Social Media</h6>
                    </div>
                    <hr class="hr_qr_down">
                    <div class="social_invite_img social_invite_link">
                        <a href=""><img src="img/facebook.png"></a>
                        <a href=""><img src="img/twitter.png"></a>
                        <a href=""><img src="img/instagram.png"></a>  
                    </div>
                    <div class="invite_desc">
                        <p><span class="text-para">An email invitation will be sent to your contacts or partners with the registration link provided.</span></p>
                        <p><span class="text-para">We won't keep, store or have access to your password and your contacts will be secured.</span></p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    import VueClipboard from 'vue-clipboard2'
    
    export default {
        name: 'GS_Invite',
        components: {
        },
        data() {
            return {
                copy_imginvite: "img/QRuse.png",
                copy_imglink: "img/QRuse.png",
                invite: 'GID9174',
                link: "https://www.goldenlinkplus.com"
            }
        },
        methods: {
          copyInvite: function () {
            this.$copyText(this.invite).then(function (e) {
            }, function (e) {
            })
            var self = this;
            this.copy_imginvite = "img/QRuse_done.png";
            setTimeout(function() {
                self.copy_imginvite = "img/QRuse.png";
            }, 1000);   
          },
          copyLink: function () {
            this.$copyText(this.link).then(function (e) {
            }, function (e) {
            })
            var self = this;
            this.copy_imglink = "img/QRuse_done.png";
            setTimeout(function() {
                self.copy_imglink = "img/QRuse.png";
            }, 1000);   
          }
        }
    }
</script>
<style>
    .gs_invite_text {
        text-align: center;
    }
    .qr_scan {
        margin: 0 !important;
    }
    .qr_scan img {
        width: 50%;
        height: 50%;
        margin: auto;
    }
    .gs_invite_text_h6 {
        margin: 10px 0;
    }
    .qr_scan_color {
        color: #F4992D;
        margin: 10px auto;
    }
    .hr_gs_invite {
        margin: 0 auto;
    }
    .social_invite_link {
        margin: 0 40px 20px !important;
    }
    .copy_link_btn img{
        border-radius: 12px;
    }
</style>
