<template>
  <div>
    <div class="container">
      <div class="phone overlay_desc">
        <div class="overlay_img"></div>
        <img src="Members_Lounge3.png" class="overlay_img_fix">
        <img src="Members_Lounge2.png" class="overlay_img_position overlay_img_fix">
        <router-link to="/socialmedia/socialmedia_main" class="lounge_btn_start">
          <button>START</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Members_Lounge_Three',
  components: {
  },
}
</script>
<style>
.lounge_btn_start {
  position: absolute;
  border: 2px solid #FFFFFF;
  border-radius: 30px;
  width: 176px;
  height: 43px;
  top: 62px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  padding: 5px;
}
.lounge_btn_start button {
  color: white;
}
</style>
 