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
                    <img src="profile/LOGO-G1.png" class="profile_map_each_1" @click="bsInternal">
                    <img src="profile/LOGO-G1.png" class="profile_map_each_2" @click="bsInternal">
                </div>
                <div class="profile_role_para">
                    <p class="update_profile_content">Search location<span class="profile_done">Add Location</span></p>
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
    </div>
</template>

<script>
    import BsInternal from "../../../modal/bs_internal.vue";
    export default {
        name: 'GS_Internal_Role',
        components: {
        BsInternal
        },  
        data () {
            return {
                f_bs_internal: false
            }
        },
        methods: {
            bsInternal() {
                this.f_bs_internal = true;
            },
            closeViewProfile() {
                this.f_bs_internal = false;
            }
        }
    }
</script>
<style>
</style>
