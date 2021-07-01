<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/usercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title">
              G-Coins Award
            </div>
            <hr class="referrals-hr">

            <button class="btn business_btn" :class="{'disable': isGCoinsAward != true}" @click="showGCoinsAward">G-Coins Award</button>
            <button class="btn striker_btn" :class="{'disable': isGCoinsAward == true}" @click="showCPCAward">CPC Award</button>
            <hr class="btn-hr">
            <div v-if="isGCoinsAward == true">
              <p class="sub-title">{{this.gcoinsaward.subtitle}}<span>12</span></p>
              <hr class="subtitle-hr">
              <div class="referrals-info" v-for="(item, index) in gcoinsaward.items" :key="index">
                <p class="profile-title">Title:<span> {{item.title}}</span></p>
                <p class="profile-title">Amount:<span> {{item.amount}}</span></p>
                <p class="profile-title">Accept Date:<span> {{item.acceptdate}}</span></p>
                <p class="profile-title">Clicks:<span> {{item.clicks}}</span></p>
                <p class="profile-title">Status:<span> {{item.status}}</span></p>
                <hr>
              </div>
            </div>
            <div v-else>
              <p class="sub-title">{{this.cpcaward.subtitle}}<span>32</span></p>
              <hr class="subtitle-hr">
              <div class="referrals-info" v-for="(item, index) in cpcaward.items" :key="index">
                <p class="profile-title">Title:<span> {{item.title}}</span></p>
                <p class="profile-title">Amount:<span> {{item.amount}}</span></p>
                <p class="profile-title">Click ID:<span> {{item.clickid}}</span></p>
                <p class="profile-title">Offer ID:<span> {{item.offerid}}</span></p>
                <p class="profile-title">Create Date:<span> {{item.createdate}}</span></p>
                <hr>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "G_Coins_Award",
  components: {
  },
  data () {
    return { 
      isGCoinsAward: true,
      gcoinsaward: {
        subtitle: "G-Coins Award Total", 
        items: [
          {
            title: "GoldenlinkPlus",
            amount: "6",
            acceptdate: "12/16/2020",
            clicks: "250",
            status: "Active"
          },
          {
            title: "GoldenlinkPlus",
            amount: "6",
            acceptdate: "12/16/2020",
            clicks: "250",
            status: "Active"
          }
        ]
      }, 
      cpcaward : {
         subtitle: "CPC Award Total", 
        items: [
          {
            title: "GlodenlinkPLus",
            amount: "20",
            clickid: "0001",
            offerid: "123",
            createdate: "12/16/2020"
          },
          {
            title: "GlodenlinkPLus 2",
            amount: "12",
            clickid: "0002",
            offerid: "125",
            createdate: "12/16/2020"
          }
        ]
      }
    }
  },
  methods: {
    showGCoinsAward() {
      this.isGCoinsAward = true;
    },
    showCPCAward() {
      this.isGCoinsAward = false;
    }
  }
}
</script>
<style>
  
</style>
