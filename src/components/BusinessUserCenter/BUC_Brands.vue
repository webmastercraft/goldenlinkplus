<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            <div class="account-title marketing_plus">
              My Brands<button @click="showEdit()" :disabled="isShow" :class="{disable: isShow === true}"><i class="fas fa-plus-circle"></i></button>
            </div>
            <hr class="brand_hr">
            <div class="content_register" v-if="isShow === true">
              <form>
                <div v-if="isEditBrand === false" @click="editBrand()">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="title"
                      placeholder="Brand Name"
                      v-model="brand_title"
                    />
                  </div>
                  <div class="form-group toggle-button-cover">
                    <span class="toggle-title">Are you brand owner?</span>
                    <toggle-button :value="true" :labels="{checked: 'YES', unchecked: 'NO'}" :color="{checked: '#13C8FF', unchecked: '#FF0000', disabled: '#CCCCCC'}" :width=80 :height=30 style='float: right;' v-model="brand_ownership"/>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="registration"
                      aria-describedby="Rewards per Click"
                      placeholder="Place of Registration"
                      v-model="brand_place"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="date"
                      class="form-control"
                      id="date"
                      aria-describedby="begin_date"
                      placeholder="Date of Registration"
                      v-model="brand_date"
                    />
                  </div>
                </div>
                <button type="button" class="btn btn_cancel" @click="hideEdit()">CANCEL</button>
                <button type="button" class="btn btn_save " @click="addBrand()">SAVE</button>
              </form>
              <hr style="margin: 0 auto">
            </div>
            <div class="golden-area brands_top" v-for="(brand, index) in brands" :key="index" >
              <p class="profile-title profile-title-buc">Brand Name:<span> {{brand.name}}</span><button class="remove_btn" @click="removeBrand(index)"><img src="img/remove.png"></button></p>
              <p class="profile-title profile-title-buc">Brand Ownership:<span> {{brand.ownership}}</span></p>
              <p class="profile-title profile-title-buc">Place of Registration:<span> {{brand.place}}</span></p>
              <p class="profile-title profile-title-last-buc">Date of Registration:<span> {{brand.date}}</span></p>
              
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';

Vue.use(ToggleButton)

export default {
  name: 'BUC_Brands',
  components: {
  },
  data () {
    return { 
        isShow: false,
        isEditBrand: false,
        brand_title: null,
        brand_ownership: null,
        brand_place: null,
        brand_date: new Date().toISOString().slice(0,10),
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
    },
    addBrand() {
      if (!this.brand_title || !this.brand_ownership || !this.brand_place || !this.brand_date ) 
        return false;
      let brand = {
        name: this.brand_title,
        ownership: this.brand_ownership,
        place: this.brand_place,
        date: this.brand_date,
      }
      this.brands.push(brand);
      this.hideEdit();
    },
    showEdit() {
      this.isShow = true;
    },
    editBrand() {
        this.isEditBrand = true;
    },
    hideEdit() {
      this.isShow = false;
    }
  }
}
</script>
<style>
  .profile-title-buc {
    margin: 0 21px 21px 22px !important;
  }
  .profile-title-last-buc {
    margin: 0 21px 0 22px !important;
  }
  .brands_top {
    margin: 25px 15px;
    background-color: #F4F9FE;
    padding: 10px 0;
    border-radius: 12px;
  }
  .brand_hr {
    margin: 0 10px 10px 10px !important;
  }
</style>
