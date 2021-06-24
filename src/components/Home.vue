<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <div class="welcome_content">
            <h4>Welcome to Goldenlink+</h4>
            <p>
              Tell us about you marketing experience and you will be on your way
              to promote businesses.
            </p>
            <p>
              Step one: complete your Gold Striker (aka GS marketer) account set
              up first. Enter your social handle experience as well as audience
              size.
            </p>
            <router-link to="/registration_one"  >
              Get Started
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../layout/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  }
}
</script>
<style></style>
