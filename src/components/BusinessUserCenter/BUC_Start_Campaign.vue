<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              Start Campaign
            </div>
            <div class="search-title role-title brands_top">
              <p>Search Filters</p>
            </div>
            <div class="marketing_list campaign_top" >
              <div v-for="(market, key) in markets" :key="key" class="form-group campaign_select">
                <select class="form-control marketing_form" id="`${market.id}`">
                  <option value="" disabled selected>{{market.title}}</option>
                  <option v-for="(item, index) in market.items" :key="index" :value="index">{{item}}</option>
                </select>
              </div>
            </div>
            <hr>
            <div>Gold Strikers
              <div class="btn_right">
                <button class="btn selectall_btn">Select All</button>
                <button class="btn invite_btn">Invite Selected</button>
              </div>
            </div>
            <div class="notice_logo">
              <div>
              <img src="img/users/SS.png">
              </div>
              <div>
                <div>
                  <a>Somaly Seng</a>
                  <img src="img/dots.png">
                  <img src="img/msg_box.png">
                </div>
              </div>
            </div>
            <div class="notice_logo">
              <div>
              <img src="img/users/DF.png">
              </div>
              <div>
                <div>
                  <a>Dblue Fishing</a>
                  <img src="img/dots.png">
                  <img src="img/msg_box.png">
                </div>
              </div>
            </div>
            <div class="notice_logo">
              <div>
              <img src="img/users/GP.png">
              </div>
              <div>
                <div>
                  <a>GoldenLink Plus</a>
                  <img src="img/dots.png">
                  <img src="img/msg_box.png">
                </div>
              </div>
            </div>
            <div class="notice_logo">
              <div>
              <img src="img/users/JG.png">
              </div>
              <div>
                <div>
                  <router-link to="/businessusercenter/marketer_profile">Jason Guo</router-link>
                  <img src="img/dots.png">
                  <img src="img/msg_box.png">
                </div>
              </div>
            </div>
            <p class="profile-title-year">LOADING</p>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Start_Campaign',
  components: {
  },
  data () {
    return { 
      markets: [
        {
          title: "Verticals...", 
          id: "verticals",
          items: ['Food Beverage', 'Media']
        }, 
        {
          title: "Traffic Channels", 
          id: "traffic_channels",
          items: ['Email Marketing', 'Social Media', 'News Media Online', 'Video Media', 'Contest Media', 'SEM', 'SEO', 'Landing Page Design', 'Influencer']
        }, 
        {
          title: "Offer Types", 
          id: "offer_types",
          items: ['CPS', 'CPC', 'CPA', 'CPL', 'CPI', 'CPM']
        }, 
        {
          title: "Geolocation",
          id: "geolocation",
          items: ['US', 'UK']
        }
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
  .search-title {
    padding: 10px 0 10px 22px !important;
  }
  .upload_img {
    margin: 0 15px 15px !important;
    width: auto !important;
  }

  .selectall_btn {
    background: #EA7F0B !important;
    width: auto !important;
  }

  .invite_btn {
    background: #39B54A !important;
    width: auto !important;
  }

  .btn_right {
    float: right;
    margin-right: 20px;
    margin-top: -5px;
  }

  .offer_btn {
    display: flex;
  }

  .campaign_select {
    width: calc(50% - 10px);
    display: inline-block;
    margin: 0 5px;
  }

  .campaign_top {
    margin-top: 25px !important;
  }
</style>
