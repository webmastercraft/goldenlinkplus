<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <div class="welcome_content">
            <h4><b>Welcome to Goldenlink+</b></h4>
            <p class="first">
              Tell us about your business and you'll be on your way to connect GS Marketers
            </p>
            <p class="second">
              We prefer you to complete your business account and set up your ad campaign with various offers, such as: G-Coins rewards, CPC G-Coins rate, conversion commission rate. Don’t forget recharge marketing fees for your campaign. GOLD ads campaign expenses will be flexible, and reliable. Make your social media events attractive and exciting.
            </p>
            <router-link to="/registration/one" class="get_start">
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../layout/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  }
}
</script>
<style></style>
