<template>
  <nav role="navigation">
    <div class="back_logo">
      <router-link :to="items[current-1]" class="back_btn"><i class="fa fa-angle-left"></i></router-link>
      <router-link to="/" class="logo"><img src="img/logo.svg" /></router-link>
      <a class="search_btn"><i class="fas fa-search"></i></a>
    </div>
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><a >FAQ</a></li>
        <li><a >Terms of use</a></li>
        <li><a >Privacy Policy</a></li>
        <li><a >G-Coin Rewards</a></li>
        <li><a >Contact Us</a></li>
        <li><a >Login</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
    props: ['current'],
    data() {
      // console.log('cur', this.props.current);
      return { items: [
          'registration_one', 'registration_two', 'registration_three', 'registration_four', 'registration_five', 'registration_six', 'registration_seven'
        ]
      }
    }
  }
</script>

