<template>
    <div class="container">
        <div class="profile_role_area">
                <p class="switch_title profile_role_para">Internal Business Role
                    <router-link to="/socialmedia/user_center/socialmedia_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                <div class="profile_map_role">
                    <img src="profile/role_blank.png" class="profile_role_img">
                    <img v-for="(item,  index1) in headquarters" :key="'headquarters'+index1" src="profile/LOGO-G1.png" class="profile_map_each_1" @click="bsInternal(index1, 0)">
                    <img v-for="(item,  index2) in branches" :key="'branches'+index2" src="profile/LOGO-G1.png" class="profile_map_each_2" @click="bsInternal(index2, 1)">
                </div>
                <div class="profile_role_para">
                    <p class="update_profile_content">Search location<span class="profile_done" @click="showIndustry">Add Location</span></p>
                    <div class="form-group profile_input profile_role_input">
                        <input
                          type="text"
                          class="form-control"
                          id="cname"
                          aria-describedby="comname"
                          placeholder="Location"
                          value=""
                        />
                    </div>
                    <p class="update_profile_content">All {{headquarters.length + branches.length}}</p>
                    <p class="update_profile_content">Headquarters {{headquarters.length}}</p>
                    <p class="update_profile_content">Branches {{branches.length}}</p>
                </div>
        </div>
        <BsInternal 
            v-show="f_bs_internal"
            :addition=0
            :role=selected_location_role
            :current_index=selected_location_id
            @close="closeViewProfile"
            @view-backdrop="closeViewProfile"
        />
        <Industry 
            v-show="f_show_industry"
            @view-backdrop="closeViewProfile"
            @showIndustrySystem="industrySystem"
        />
        <IndustrySystem 
            v-show="f_industry_system"
            :addition=1
            :role=-1
            :current_index=-1
            @close="backIndustrySystem"
            @view-backdrop="closeViewProfile"
        />
    </div>
</template>

<script>
    import BsInternal from "../../../modal/bs_internal.vue";
    import Industry from "../../../modal/profile_map.vue";
    import IndustrySystem from "../../../modal/bs_internal.vue";

    export default {
        name: 'GS_Internal_Role',
        components: {
            BsInternal,
            Industry,
            IndustrySystem,
        },  
        data () {
            return {
                f_bs_internal: false,
                f_show_industry: false,
                f_industry_system: false,
                headquarters: [
                    {
                        // role: Headquarters, //Branches
                        address1: "Los Angeles",
                        address2: "California",
                        zipcode: "458786",
                        contact_name: "Alice Hansen"
                    }
                ],
                branches: [
                    {
                        // role: Headquarters, //Branches
                        address1: "Los Angeles",
                        address2: "California",
                        zipcode: "458786",
                        contact_name: "Alice Hansen"
                    }
                ],
                selected_location_id: -1,
                selected_location_role: -1
            }
        },
        methods: {
            bsInternal(index, role) {
                this.f_bs_internal = true;
                this.selected_location_id = index;
                this.selected_location_role = role;
            },
            closeViewProfile() {
                this.f_bs_internal = false;
                this.f_show_industry = false;
                this.f_industry_system = false;
            },
            showIndustry() {
                this.f_show_industry = true;
            },
            industrySystem() {
                this.f_industry_system = true;
            },
            backIndustrySystem() {
                this.f_industry_system = false;
            },
        },
        mounted() {
            // getMarketingdirection().then(res => {
            //   console.log("******************************************",res)
            // });
        }
    }
</script>
<style>
</style>
