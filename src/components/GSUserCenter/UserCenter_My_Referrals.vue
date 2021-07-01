<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/usercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title">
              My Referrals
            </div>
            <hr class="referrals-hr">

            <button class="btn business_btn" :class="{'disable': isBusiness != true}" @click="showBusiness">Business<span>99</span></button>
            <button class="btn striker_btn" :class="{'disable': isBusiness == true}" @click="showGoldStriker">Gold Striker<span>99</span></button>
            <hr class="btn-hr">
            <div v-if="isBusiness == true">
              <p class="sub-title">{{this.business.subtitle}}</p>
              <hr class="subtitle-hr">
              <div class="referrals-info" v-for="(item, index) in business.items" :key="index">
                <p class="profile-title">Company:<span> {{item.company}}</span></p>
                <p class="profile-title">Conatct Name:<span> {{item.contactname}}</span></p>
                <p class="profile-title">Telephone:<span> {{item.telephone}}</span></p>
                <p class="profile-title">Email:<span> {{item.email}}</span></p>
                <p class="profile-title">Skype:<span> {{item.skype}}</span></p>
                <hr>
              </div>
            </div>
            <div v-else>
              <p class="sub-title">{{this.goldstriker.subtitle}}</p>
              <hr class="subtitle-hr">
              <div class="referrals-info" v-for="(item, index) in goldstriker.items" :key="index">
                <p class="profile-title">Company:<span> {{item.company}}</span></p>
                <p class="profile-title">Conatct Name:<span> {{item.contactname}}</span></p>
                <p class="profile-title">Telephone:<span> {{item.telephone}}</span></p>
                <p class="profile-title">Email:<span> {{item.email}}</span></p>
                <p class="profile-title">Skype:<span> {{item.skype}}</span></p>
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
  name: "Referrals",
  components: {
  },
  data () {
    return { 
      isBusiness: true,
      business: {
        subtitle: "BUSINESSES", 
        items: [
          {
            company: "GlodenlinkPlus",
            contactname: "Alice Du",
            telephone: "+1626-684-8151",
            email: "",
            skype: "alicedu"
          },
          {
            company: "GlodenlinkPlus",
            contactname: "Alice Du",
            telephone: "+1626-684-8151",
            email: "",
            skype: "alicedu"
          }
        ]
      }, goldstriker : {
         subtitle: "GOLD STRIKERS", 
        items: [
          {
            company: "GlodenlinkPLus GOLD",
            contactname: "Alice Hansen",
            telephone: "+1626-6848151",
            email: "",
            skype: "alicehansen"
          },
          {
            company: "Glodenstriker 1",
            contactname: "Gold Striker",
            telephone: "+1626-6848151",
            email: "",
            skype: "gold"
          }
        ]
      }
    }
  },
  methods: {
    showBusiness() {
      this.isBusiness = true;
    },
    showGoldStriker() {
      this.isBusiness = false;
    }
  }
}
</script>
<style>
  
</style>
