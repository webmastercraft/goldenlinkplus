<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              My Offers<router-link to="/businessusercenter/offers/edit"><i class="fas fa-plus-circle"></i></router-link>
            </div>
            <div class="offer_btn">
            <button class="btn running_btn">Running</button>
            <button class="btn track_btn">TRACK</button>
            </div>
            <div class="golden-area brands_top">
              <p class="profile-title profile-title-buc">Title:<span> $300增会增会限限量布限限量布</span><button class="remove_btn"><img src="img/remove.png"></button></p>
              <p class="profile-title profile-title-buc">Product:<span><br> Social Media Marketing</span></p>
              <p class="profile-title profile-title-buc">Preview URL:<span></span></p>
              <p class="profile-title profile-title-buc">Type:<span> CPS</span></p>
              <p class="profile-title profile-title-buc">Description:<span><br>$300 增会员 （Premium member）<br>限佣金惠offer<br>1 G-Coins/CPC<br>8895 G-Coins/CPS<br>同 时保留推荐将10% 现金奖励</span></p>
              <p class="profile-title profile-title-buc">Offer Commission:<span> 50</span></p>
              <p class="profile-title profile-title-buc">CPC:<span> 0</span></p>
              <p class="profile-title profile-title-buc">Targeted Locations:<span> Global</span></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Offers',
  components: {
  }
}
</script>
<style>
  .upload_img {
    margin: 0 15px 15px !important;
    width: auto !important;
  }

  .running_btn {
    background: #EA7F0B !important;
    text-align: center !important;
    padding: 4px 30px !important;
    width: auto !important;
    float: left;
    margin: 30px 5px 0 22px !important;
  }

  .track_btn {
    background: #39B54A !important;
    text-align: center !important;
    padding: 4px 30px !important;
    width: auto !important;
    float: left;
    margin: 30px 70px 0 5px !important;
  }

  .offer_btn {
    display: flex;
  }
</style>
