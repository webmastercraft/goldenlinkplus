<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="overlay">
          <div class="overlay-window">
            <p>Are you sure you want to delete this Product ‘Goldenlink Plus’?</p>
            <router-link to="/" type="submit" class="btn no_btn" tag="button">NO</router-link>
            <router-link to="/" type="submit" class="btn yes_btn" tag="button">YES</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../layout/Navbar_GSUserCenter.vue';

export default {
  name: 'Overlay_Del_Product',
  components: {
  }
}
</script>
<style></style>
