<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/usercenter/marketing_direction"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              Marketing Direction
            </div>
            <div class="marketing_list" v-for="(market, key) in markets" :key="key">
              <p class="marketing_subtitle">{{market.title}}</p>
              <div class="form-group">
                <select v-if="market.title === 'Verticals'" class="form-control marketing_form" id="verticals">
                  <option value="" disabled selected>Choose Verticals</option>
                  <option value="1">Golden Link PLus</option>
                  <option value="2">Golden Link PLus 2</option>
                  <option value="3">Golden Link PLus 3</option>
                </select>
                <select v-else-if="market.title === 'Traffic Channels'" class="form-control marketing_form" id="traffic_channels">
                  <option value="" disabled selected>Choose Traffic Channels</option>
                  <option value="1">Golden Link PLus</option>
                  <option value="2">Golden Link PLus 2</option>
                  <option value="3">Golden Link PLus 3</option>
                </select>
                <select v-else-if="market.title === 'Offer Types Accepted'" class="form-control marketing_form" id="offer_type_accepted">
                  <option value="" disabled selected>Select Offer Types</option>
                  <option value="1">CPS</option>
                  <option value="2">CPC</option>
                  <option value="3">CAP</option>
                  <option value="4">CAL</option>
                  <option value="5">CAI</option>
                  <option value="6">CAM</option>
                </select>
                <input v-else-if="market.title === 'Geolocation'"
                  type="text"
                  class="form-control marketing_form"
                  id="geolocation"
                  aria-describedby="type_keywords"
                  placeholder="Type in your location"
                />
                <input v-else-if="market.title === 'Keyword Tags'"
                  type="text"
                  class="form-control marketing_form"
                  id="keyword_tags"
                  aria-describedby="type_keywords"
                  placeholder="Type in your Keywords"
                />
              </div>
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
  name: 'Marketing_Direction_Add',
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
    addRow(key) {
      this.markets[key].push({
        
      })
    },
    deleteRow(key, index) {
      this.markets[key].items.splice(index,1)
    }
  }
}
</script>
<style>
  
</style>
