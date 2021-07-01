<template>
  <nav role="navigation">
    <div class="back_logo">
      <router-link to="/usercenter" class="user_logo"><img src="img/logo.png"></router-link>
      <router-link to="/" class="logo"><img src="img/logo.svg" />
      </router-link>
      <a class="search_btn"><i class="fa fa-search"></i></a>
    </div>
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><router-link to="/" ><img src="img/icons/FAQ.png">FAQ</router-link></li>
        <li><router-link to="/" ><img src="img/icons/termofuse.png">Terms of use</router-link></li>
        <li><router-link to="/" ><img src="img/icons/privacy.png">Privacy Policy</router-link></li>
        <li><router-link to="/" ><img src="img/icons/coin.png"> G-Coin Rewards</router-link></li>
        <li><router-link to="/" ><img src="img/icons/contact.png">Contact Us</router-link></li>
        <li><router-link to="/businessusercenter" ><img src="img/icons/switch.png">Switch to Business Account</router-link></li>
        <li><router-link to="/" ><img src="img/icons/logout.png">Login</router-link></li>
      </ul>
    </div>
  </nav>
</template>
<script>
</script>

