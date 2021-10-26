<template>
    <div class="container">
        <div class="profile_role_area">
                <p class="switch_title profile_role_para">Internal Business Role
                    <router-link to="/socialmedia/bs_center/socialmedia_bs_user_center">
                        <span class="profile_done">DONE</span>
                    </router-link>
                </p>
                <div class="profile_map_role">
                    <img src="profile/role_blank.png" class="profile_role_img">
                    <img src="profile/LOGO-G1.png" class="profile_map_each_1" @click="bsInternal">
                    <img src="profile/LOGO-G1.png" class="profile_map_each_2" @click="bsInternal">
                </div>
                <div class="profile_role_para">
                    <p class="update_profile_content">Search location
                        <span class="profile_done" @click="showIndustry">Add Location</span>
                    </p>
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
                    <p class="update_profile_content">All 2</p>
                    <p class="update_profile_content">Headquarters 2</p>
                    <p class="update_profile_content">Branches 1</p>
                </div>
        </div>
        <BsInternal 
            v-show="f_bs_internal"
            @close="closeViewProfile"
            @view-backdrop="closeViewProfile"
        >
        </BsInternal>
        <Industry 
            v-show="f_show_industry"
            @view-backdrop="closeViewProfile"
            @showIndustrySystem="industrySystem"
        >
        </Industry>
        <IndustrySystem 
            v-show="f_industry_system"
            @close="backIndustrySystem"
            @view-backdrop="closeViewProfile"
            @showIndustryService="industryService"
        >
        </IndustrySystem>
    </div>
</template>

<script>
    import BsInternal from "../../../modal/bs_internal.vue";
    import Industry from "../../../modal/profile_map.vue";
    import IndustrySystem from "../../../modal/bs_internal.vue";

    export default {
        name: 'BS_Internal_Role',
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
            }
        },
        methods: {
            bsInternal() {
                this.f_bs_internal = true;
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
        }
    }
</script>
<style>
    .profile_role_area {
        background: white;
        width: 100%;
        max-width: 414px;
        text-align: left;
        min-height: 100vh;
    }
    .profile_role_para {
        padding: 20px;
    }
    .profile_role_img {
        max-width: 414px;
        width: 100%;
    }
    .profile_role_input {
        width: 100% !important;
        position: relative;
    }
    .profile_map_role {
        position: relative;
        width: 100%;
        max-width: 414px;
    }
    .profile_map_each_1 {
        position: absolute;
        left: 23%;
        top: 6%;
    }
    .profile_map_each_2 {
        position: absolute;
        left: 47%;
        top: 40%;
    }
</style>
