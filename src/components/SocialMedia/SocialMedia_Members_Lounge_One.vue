<template>
  <div>
    <div class="container">
      <div class="phone overlay_desc">
        <div class="overlay_img"></div>
        <img src="Members_Lounge3.png" class="overlay_img_fix">
        <img src="Members_Lounge.png" class="overlay_img_position overlay_img_fix">
        <router-link to="/socialmedia/socialmedia_members_lounge_two" class="lounge_btn">
          <button>Next<img class="glplogo_reg_btn_img" src="reg_next.png"/></button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Members_Lounge_One',
  components: {
  },
}
</script>
<style>
.overlay_img {
    background-color: rgba(0, 0, 0, 0.6) !important;
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 414px;
}
.overlay_img_position {
  position: absolute;
}
.overlay_desc {
  min-height: auto !important;
  position: relative;
  height: 100%;
}
.lounge_btn {
  position: absolute;
  border: 2px solid #FFFFFF;
  border-radius: 30px;
  width: 176px;
  height: 43px;
  bottom: 62px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  padding: 5px;
}
.lounge_btn button {
  color: white;
}
.overlay_img_fix {
  width: 100%;
  height: 100%;
  max-width: 414px;
}
</style>
 