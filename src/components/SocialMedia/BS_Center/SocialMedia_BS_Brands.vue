<template>
    <div class="container">
        <div class="user_center_area">
                <p class="switch_title">My Brands
                    <router-link to="/socialmedia/bs_center/socialmedia_bs_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                
                <p class="update_profile_content">Brand Name</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder="Brand Name"
                      value=""
                      v-model="brand_title"
                    />
                </div>
                <div class="form-group toggle-button-cover">
                    <span class="toggle-title">Are you the Brand Owner?</span>
                    <toggle-button :value="true" :labels="{checked: 'YES', unchecked: 'NO'}" :color="{checked: '#13C8FF', unchecked: '#FF0000', disabled: '#CCCCCC'}" :width=80 :height=30 style='float: right;' v-model="brand_ownership"/>
                </div>
                <div class="form-group profile_input profile_role_input" v-show="brand_ownership">
                    <p class="update_profile_content">Place of Registration</p>
                    <select class="form-control" id="">
                      <option disabled selected>Place of Registration</option>
                      <option>USA</option>
                      <option>CHINA</option>
                    </select>
                </div>
                <div class="form-group profile_input profile_role_input" v-show="brand_ownership">
                    <p class="update_profile_content">Date of Registration</p>
                    <input
                      type="date"
                      class="form-control"
                      id="date"
                      aria-describedby="begin_date"
                      placeholder="Date of Registration"
                      v-model="brand_date"
                    />
                </div>
                <button class="profile_brand_btn" @click="addBrand()">Add this Brand</button>
                <div class="profile_brand_add" v-for="(item, index) in profileData" :key="index" @click="bsBrand">
                    <p>Brand Name: {{item.name}}</p>
                    <p>Brand Ownership: {{item.owner? 'Owned' : 'Carried'}}</p>
                    <p>Place of Registration: {{item.area}}</p>
                    <p>Date of Registration: {{item.date}}</p>
                </div>
        </div>
        <BsBrand 
            v-show="f_bs_brand"
            @close="closeViewProfile"
            @view-backdrop="closeViewProfile"
        >
        </BsBrand>
    </div>
</template>

<script>
    import Vue from 'vue';
    import ToggleButton from 'vue-js-toggle-button';
    import BsBrand from "../../../modal/bs_brand.vue";

    Vue.use(ToggleButton)

    export default {
        name: 'BS_Brands',
        components: {
            BsBrand
        },  
        data () {
            return {
                f_bs_brand: false,
                brand_title: null,
                brand_ownership: true,
                brand_place: null,
                brand_date: new Date().toISOString().slice(0,10),
                profileData: [
                    {
                        name: "Golden Link Plus",
                        owner: "Owned",
                        area: "USA",
                        date: "06/2011"
                    },
                    {
                        name: "Golden Link Plus",
                        owner: "Owned",
                        area: "USA",
                        date: "06/2011"
                    }
                ]
            }
        },
        methods: {
            bsBrand() {
                this.f_bs_brand = true;
            },
            addBrand() {
                if (!this.brand_title ) 
                    return false;
                let brand = {
                    name: this.brand_title,
                    owner: this.brand_ownership,
                    area: this.brand_place,
                    date: this.brand_date,
                  }
                this.profileData.push(brand);

                this.brand_title = '';
                this.brand_ownership = true
            },
            closeViewProfile() {
                this.f_bs_brand = false;
            }
        }
    }
</script>
<style>
    .profile_brand_btn {
        color: white;
        background: #EF8200;
        border-radius: 8px;
        width: 100%;
        padding: 5px 0;
        margin-bottom: 20px;
    }
    .profile_brand_add {
        background: #E6F7FF;
        border-radius: 16px;
        margin: 10px 0;
        padding: 10px 25px;
    }
    .profile_brand_add p {
        margin: 10px 0;
    }
</style>
