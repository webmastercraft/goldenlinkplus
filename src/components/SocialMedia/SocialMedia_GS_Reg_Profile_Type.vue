<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="header_modal">
            <router-link to="/socialmedia/socialmedia_gs_reg_start" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Set Up Your Profile</a>
          </div>
          <div class="content header_top height_static">
            <img src="status_one.png" class="status_img">
            <p class="status_title">What type of marketer are you?</p>
            <div class="gs_reg_status">
              <!-- <button class="individual">An Individual</button>
              <button class="enterprise">I work for an Enterprise</button> -->
              <button class="individual" :class="{'selected_stage': is_stage1 == true}" @click="selectStage(1)">An Individual</button>
              <button  class="individual" :class="{'selected_stage': is_stage1 != true}" @click="selectStage(2)">I work for an Enterprise</button>
            </div>
            <div class="sociallogo_btn status_next">
              <router-link to="/socialmedia/socialmedia_gs_reg_profile_photo">
                <button class="glplogo_reg_btn">Next <img class="glplogo_reg_btn_img" src="reg_next.png"/>
                </button>
              </router-link>
            </div>
            <router-link to="/socialmedia/socialmedia_gs_reg_profile_photo">
              <button class="status_skip_btn">Skip this</button>
            </router-link>
          </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'GS_Reg_Profile_Type',
  components: {
  },
  data () {
    return {
      is_stage1: true
    }
  },
  methods: {
    selectStage(key) {
        if (key == 1) {
            this.is_stage1 = true;
        } else {
            this.is_stage1 = false;
        }
    }
  }
}
</script>
<style>
  .sociallogin {
    background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%) !important;
  }
  .glplogo {
    text-align: left;
    width: 100%;
    margin: 30px 25px;
  }
  .socialmedia_messages_desc {
    font-size: 14px;
  }
  .socialmedia_messages {
    display: flex;
    padding: 15px 0;
    background-color: #E6F7FF;
    color: #3B3E51;
  }
  .socialmedia_messages_size {
    height: 100%;
    margin: auto;
  }
  .socialmedia_messages_p {
    margin: 0;
  }
  .search_gs_margin {
    background-color: white !important;
    margin-right: 20px;
  }
  .search_gs_grid {
    display: grid;
  }
  .status_img {
    margin: 50px auto 0;
  }
  .status_title {
    font-size: 18px;
    margin: 130px 0 0;
  }
  .gs_reg_status {
    width: 100%;
  }
  .gs_reg_status button {
    width: calc(100% - 50px);
    padding: 8px;
    margin: 0 25px;
    border-radius: 4px;
  }
  .individual {
    background: #F4F9FE;
    color: #3B3E51;
    margin: 5px 0;
  }
  .individual.selected_stage {
    background: #13C8FF;
    color: white;
  }
  .status_next {
    margin: 120px 0 0;
  }
  .status_skip_btn {
    background-color: #13C8FF;
    opacity: 0.3;
    color: white;
    padding: 0 25px;
    border-radius: 10px;
  }
</style>
