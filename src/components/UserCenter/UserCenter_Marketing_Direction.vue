<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/usercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              Marketing Direction<router-link to="/usercenter/marketing_direction/add"><i class="fas fa-plus-circle"></i></router-link>
            </div>
            <div class="marketing_list" v-for="(market, key) in markets" :key="key">
              <p class="marketing_subtitle">{{market.title}}</p>
              <span v-for="(item, index) in market.items" :key="index">
                {{item}}<button class="marketing_btn" @click="deleteRow(key, index)"><i class="fa fa-times" aria-hidden="true"></i></button>
              </span>
            </div>

            <div class="marketing_list marketing_desc">
              <p class="marketing_subtitle">Description:</p>
              <span>Golden Link Plus is a revolutionary social media marketing platform where businesses and marketers join forces to earn big profits from promoting products and services. GOLD is global with business and marketers connections in the U.S., China and many countries.</span>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Marketing_Direction',
  components: {
  },
  data () {
    return { 
      markets: [
        {
          title: "Verticals", 
          items: ['Food Beverage and Tobacco', 'Media']
        }, 
        {
          title: "Traffic Channels", 
          items: ['Email Marketing', 'Social Media', 'News Media Online', 'Video Media', 'Contest Media', 'SEM', 'SEO', 'Landing Page Design', 'Influencer']
        }, 
        {
          title: "Offer Types Accepted", 
          items: ['CPS', 'CPC', 'CPA', 'CPL', 'CPI', 'CPM']
        }, 
        {
          title: "Geolocation", 
          items: ['China', 'United States']
        }, 
        {
          title: "Keyword Tags", 
          items: ['Gold', 'Social Media']
        }, 
      ]
    }
  },
  methods: {
    deleteRow(key, index) {
      this.markets[key].items.splice(index,1)
    }
  }
}
</script>
<style>
  
</style>
