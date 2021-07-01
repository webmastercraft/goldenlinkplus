<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            <div class="account-title">
              External Business Role
            </div>
            <div class="role-title">
              <p>Contact 0</p>
              <p>Notify 0</p>
              <p>Views 70</p>
            </div>
            <div>
              <img src="img/profile(external).png" class="profile-img" />
            </div>
            <div class="golden-area">
              <p class="profile-title profile-title-buc">Company Name:<span> Gloden Link Plus</span></p>
              <p class="profile-title profile-title-buc">Year Established:<span> 2018</span></p>
              <p class="profile-title profile-title-buc">Company Type:<span> S Corporation</span></p>
              <p class="profile-title profile-title-buc">Business Type:<span> Service</span></p>
              <p class="profile-title profile-title-buc">Industry:<span><br>Marketing & Advertising Services ->Internet Marketing Services ->Social Media Marketing Services</span></p>
              <p class="profile-title profile-title-buc">Company Size:<span></span></p>
              <p class="profile-title profile-title-buc">Capital:<span></span></p>
              <p class="profile-title profile-title-buc">Website:<span> www.goldenlinkplus.com</span></p>
              <p class="profile-title profile-title-buc">Description:<span><br> Golden Link Plus is a revolutionary social media marketing platform where businesses and marketers join forces to earn big profits from promoting products and services. GOLD is global with business and marketers connections in the U.S., China and many countries.<br>• Intelligent business matching system<br>• Online marketing self-service system<br>• Online businesses channel promotion quantification system<br>• Online traffic and conversion tracking system</span></p>
              <p class="profile-title profile-title-buc">Keywords:<span><br> Social media marketing, CPA network, Performance marketing, Affiliate marketing, Advertising agency, Target business search, Industry business chain, Internal business chain, Online Traffic, Branding</span></p>
            </div>
            <hr>
            <div class="contact-area">
              <p class="profile-title profile-title-buc">Marketing Channel<br><span>Distributor:<span class="channel-color"> 0</span><br>Chain Store:<span class="channel-color"> 0</span><br>Franchisee:<span class="channel-color"> 70</span></span></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BUC_External_Business_Role',
  components: {
  }
}
</script>
<style>
  .channel-color {
    color: #13C8FF !important;
  }

  .profile-title-buc {
    margin: 0 21px 21px 22px !important;
  }
</style>
