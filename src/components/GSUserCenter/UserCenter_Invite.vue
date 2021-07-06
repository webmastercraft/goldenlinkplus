<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/usercenter/"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title">
              Invite
            </div>
            <hr class="referrals-hr">
            
            <h6>Invite via QR Code</h6>
            <img src="img/QRcode.png" class="qr_scan" />
            <button><p class="qr_scan_color">Scan QR Code</p></button>

            <hr class="hr_qr_up">
            <div>
              <h6 class="qr_h6">Use Invite code</h6>
              <hr class="hr_qr_down">
              <div>
                <input type="text" class="qr-group" name="invite_code" value="GID9174"><button><img src="img/QRuse.png"></button>
              </div>
            </div>

            <hr class="hr_qr_up">
            <div>
              <h6 class="qr_h6">Use Promotion Link</h6>
              <hr class="hr_qr_down">
              <div>
                <input type="text" class="qr-group" name="invite_code" value="https://www.goldenlinkplus.c"><button><img src="img/QRuse.png"></button>
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
                ></textarea>
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
            <div class="social_invite_img">
              <a href=""><img src="img/facebook.png"></a>
              <a href=""><img src="img/twitter.png"></a>
              <a href=""><img src="img/instagram.png"></a>
            </div>
            <div class="invite_desc">
            <p><b>Description:</b></p>
            <p>•<span class="text-para">An email invitation will be sent to your contacts or partners with the registration link provided.</span></p>
            <p>•<span class="text-para">We won't keep, store or have access to your password and your contacts will be secured.</span></p>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Invite",
  components: {
  }
}
</script>
<style>
  .qr_scan {
    max-width: 100%;
    height: auto;
    margin: 0 20px 20px;
  }
  .qr_scan_color {
    color: #F4992D;
    margin: 0 10px;
  }
  .hr_qr_up {
    margin: 60px 7px 0 8px !important;
  }
  .hr_qr_down {
    margin: 0 7px 15px 8px !important;
  }
  .qr-group {
    float: left;

  }
  .qr_h6 {
    margin: 15px 0;
  }
  .qr-group {
    padding: 14px 10px 14px 14px;
    background: #F4F9FE;
    border-radius: 12px;
    border: none;
    margin: 0 0 0 40px;
    max-width: calc(100% - 130px);
  }
  input.qr-group:focus-visible {
    outline-color: transparent;
  }
  .qr-content {
    padding: 0 !important;
  }

  .email_btn {
    background: #13C8FF;
    border-radius: 12px;
    padding: 15px 120px;
    color: white;
  }
  .email_btn:hover {
    color: white;
  }

  .social_invite_img {
    text-align: left;
    margin: 0 40px 65px;
  }

  .social_invite_img img {
    margin: 0 15px;
  }

  .invite_desc {
    text-align: left;
    margin-left: 40px;
    margin: 0 45px 0 40px;
  }

  .text-para {
    margin-left: 15px;
  }

  .qr_area {
    padding: 10px 10px;
    width: calc(100% - 60px);
    background: #F4F9FE;
    border-radius: 12px;
    border: none;
  }

  textarea {
    outline-color: transparent;
  }
</style>
