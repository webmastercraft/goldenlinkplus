<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            <div class="account-title">
              My Brands
            </div>
            
            <div class="golden-area brands_top" v-for="(brand, index) in brands" :key="index" >
              <p class="profile-title profile-title-buc">Brand Name:<span> {{brand.name}}</span><button class="remove_btn" @click="removeBrand(index)"><img src="img/remove.png"></button></p>
              <p class="profile-title profile-title-buc">Brand Ownership:<span> {{brand.ownership}}</span></p>
              <p class="profile-title profile-title-buc">Place of Registration:<span> {{brand.place}}</span></p>
              <p class="profile-title profile-title-buc">Date of Registration:<span> {{brand.date}}</span></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'BUC_Brands',
  components: {
  },
  data () {
    return { 
        brands: [
          {
            name: "Golden Link Plus",
            ownership: "Owned",
            place: "USA",
            date: "12/16/2020",
          }
        ]
    }
  },
  methods: {
    removeBrand(index) {
      this.$delete(this.brands,index)
    }
  }
}
</script>
<style>
  .profile-title-buc {
    margin: 0 21px 21px 22px !important;
  }

  .brands_top {
    margin-top: 25px;
  }
</style>
