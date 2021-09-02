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
              <button class="page-button" @click="nextPage()" :disabled="(pagination+3)>=brands.length" :class="{disable: (pagination+3)>=brands.length}" style="margin-right: 15px;"><i class="fa fa-chevron-right"></i></button>
              <button class="page-button" @click="prevPage()" :disabled="(pagination-3)<0" :class="{disable: (pagination-3)<0}"><i class="fa fa-chevron-left"></i></button>
            </div>
            <hr class="brand_hr">
            <div class="content_register" v-if="isShow === true">
              <form>
                <div style="display: grid;">
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
                  <!-- <div class="form-group" v-show="brand_ownership">
                    <input
                      type="text"
                      class="form-control"
                      id="registration"
                      aria-describedby="Rewards per Click"
                      placeholder="Place of Registration"
                      v-model="brand_place"
                    />
                  </div> -->
                  <div class="form-group" v-show="brand_ownership">
                    <select class="form-control" id="">
                      <option disabled selected>Place of Registration</option>
                      <option>USA</option>
                      <option>CHINA</option>
                    </select>
                  </div>
                  <div class="form-group" v-show="brand_ownership">
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
            <div class="golden-area brands_top" v-for="(brand, index) in brands.slice(pagination, pagination+3)" :key="index" @click="editBrand(index)">
              <div v-show="!brand.editing">
                <p class="profile-title profile-title-buc">Brand Name:<span> {{brand.name}}</span><button class="remove_btn" @click="showModal(index)"><img src="img/remove1.png"></button></p>
                <p class="profile-title profile-title-buc">Brand Ownership:<span> {{brand.ownership? 'Owned' : 'Carried'}}</span></p>
                <p class="profile-title profile-title-buc">Place of Registration:<span> {{brand.place}}</span></p>
                <p class="profile-title profile-title-last-buc">Date of Registration:<span> {{brand.date}}</span></p>
              </div>
              <div v-show="brand.editing" class="brand-editing">
                <p class="profile-title profile-title-buc">
                  <input type="text" class="form-control" placeholder="Brand Name" v-model="brand.name" />
                </p>
                <p class="profile-title profile-title-buc">
                    <span class="toggle-title">Are you brand owner?</span>
                    <toggle-button :value="brand.ownership === 'Owned'" :labels="{checked: 'YES', unchecked: 'NO'}" :color="{checked: '#13C8FF', unchecked: '#FF0000', disabled: '#CCCCCC'}" :width=80 :height=30 style='float: right;' v-model="brand.ownership" />
                </p>
                <p class="profile-title profile-title-buc">
                    <select class="form-control" v-model="brand.place">
                      <option disabled>Place of Registration</option>
                      <option>USA</option>
                      <option>CHINA</option>
                    </select>
                </p>
                <p class="profile-title profile-title-last-buc">
                    <input type="date" class="form-control" placeholder="Date of Registration" v-model="brand.date" />
                </p>
                <div class="edit-button">
                    <p><button class="remove_btn" @click="updateBrand(index)"><img src="img/update.svg"></button></p>
                    <p><button class="remove_btn" @click="cancelUpdateBrand(index)"><img src="img/cancel.svg"></button></p>
                </div>
              </div>
            </div>
            <Modal
              v-show="isModalVisible"
              @close="closeModal"
            />
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button';
import Modal from "../../modal/brand_del.vue";

Vue.use(ToggleButton)

export default {
  name: 'BUC_Brands',
  components: {
    Modal
  },
  data () {
    return { 
        isModalVisible: false,
        selectedItem: -1,
        pagination: 0,
        isCRUD: false,
        isShow: false,
        brand_title: null,
        brand_ownership: true,
        brand_place: null,
        brand_date: new Date().toISOString().slice(0,10),
        brands: [
          {
            name: "Golden Link Plus 1",
            ownership: true,
            place: "USA",
            date: "2020-12-16",
            editing: false
          },
          {
            name: "Golden Link Plus 2",
            ownership: false,
            place: "CHINA",
            date: "2020-12-16",
            editing: false
          },
          {
            name: "Golden Link Plus 3",
            ownership: true,
            place: "USA",
            date: "2020-12-16",
            editing: false
          },
          {
            name: "Golden Link Plus 4",
            ownership: true,
            place: "USA",
            date: "2020-12-16",
            editing: false
          },
          {
            name: "Golden Link Plus 5",
            ownership: false,
            place: "USA",
            date: "2020-12-16",
            editing: false
          }
        ]
    }
  },
  methods: {
    removeBrand() {
      this.$delete(this.brands, this.selectedItem)
    },
    addBrand() {
      if (!this.brand_title ) 
        return false;
      let brand = {
        name: this.brand_title,
        ownership: this.brand_ownership,
        place: this.brand_place,
        date: this.brand_date,
      }
      this.brands.push(brand);
      this.hideEdit();

      this.brand_title = '';
      this.brand_ownership = true
      this.brand_place = '';
    },
    showEdit() {
      this.isShow = true;
    },
    editBrand(index) {
      if (this.isCRUD) {
        this.isCRUD = false;
        return
      }
      this.brands[index].editing = true
    },
    hideEdit() {
      this.isShow = false;
    },
    updateBrand(index) {
      this.isCRUD = true
      this.brands[index].editing = false
    },
    cancelUpdateBrand(index) {
      this.isCRUD = true
      this.brands[index].editing = false
    },
    nextPage() {
        this.pagination += 3;
    },
    prevPage() {
        this.pagination -= 3;
    },
    showModal(index) {
      this.isCRUD = true
      this.selectedItem = index
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  }
};
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
  .editing-input {
    display: inline-block !important;
    width: 50% !important;
  }
  .editing-input[type="date"] {
    width: 45% !important;
  }
  .brand-editing {
    position: relative;
  }
  .brand-editing > p {
    width: 80%;
  }
  .brand-editing .form-control:focus {
    border-color: #ced4da;
    background-color: #fff;
  }
  .brand-editing .edit-button {
    position: absolute;
    top: 0;
    right: 0;
  }
  .brand-editing .edit-button button {
    margin-right: 15px;
  }
  .page-button {
    float: right;
  }
  .page-button:first-child {
    margin-right: 15px;
  }
  .page-button svg {
    color: black !important;
  }
  .profile-title-buc span {
    font-size: 16px;
  }
</style>
