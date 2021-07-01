<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              CPC Rewards<router-link to="/businessusercenter/cpc_rewards/edit"><i class="fas fa-plus-circle"></i></router-link>
            </div>
            <div class="offer_btn">
            <button class="btn running_btn">Running</button>
            </div>
            <div class="golden-area brands_top">
              <p class="profile-title profile-title-buc">Title:<span> $300增会增会限限量布限限量布</span></p>
              <p class="profile-title profile-title-buc">Offer:<span> Random</span></p>
              <p class="profile-title profile-title-buc">Rewards per Click:<span> $1000</span></p>
              <p class="profile-title profile-title-buc">Begin Date:<span> 07/14/2020</span></p>
              <p class="profile-title profile-title-buc">End Date:<span> 21:05:00</span></p>
            </div>
            <hr>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CPC Rewards',
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
