<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/community/socialmedia_community" class="header_arrow">
                        <img src="img/header_arrow.png">
                    </router-link>
                    <a class="upcoming_pos">Create Your Community</a>
                </div>
                <div class="content left-content header_top height_static">
                    <div class="community_about_header">
                        <div class="community_upload_img">
                            <img src="community/upload.png">
                            <div class="upload-options for-upload">
                                <label>
                                    <input type="file" class="image-upload" accept="image/*" />
                                </label>
                            </div>
                        </div>
                        <div class="profile_input profile_role_input">
                            <input
                              type="text"
                              class="form-control"
                              id="cname"
                              aria-describedby="comname"
                              placeholder="Community Name"
                              value=""
                            />
                        </div>
                        <p class="community_upload_desc">60 characters remaining</p>
                        <p class="community_upload_content">
                            <span>Membership</span>
                            <span class="community_upload_content_click" @click="showCommunityMemebership">Open to All</span>
                            <img src="sky_arrow.png">
                        </p>
                        <p class="community_upload_content">
                            <span>Who can host events</span>
                            <span class="community_upload_content_click" @click="showUpcomingEvent">All Members</span>
                            <img src="sky_arrow.png">
                        </p>
                        <p class="community_upload_content">
                            <span>Targeting</span>
                            <span class="community_upload_content_click" @click="showCommunityBrand">Brand Distribution</span>
                            <img src="sky_arrow.png">
                        </p>
                        <img src="profile/role.png" class="community_upload_map">
                        <p class="community_upload_content">
                            <span>Post Setting</span>
                            <span class="community_upload_content_click" @click="showCommunitySetting">Open</span>
                            <img src="sky_arrow.png">
                        </p>
                        <p class="community_upload_content">
                            <span>Post Permission</span>
                            <span class="community_upload_content_click" @click="showCommunityPermission">Admin Approval</span>
                            <img src="sky_arrow.png">
                        </p>
                        <div class="profile_input profile_role_input">
                            <textarea
                              class="form-control"
                              id="keywords"
                              rows="5"
                              placeholder="Description"
                              value=""
                            >
                            </textarea>
                        </div>
                        <p class="community_upload_desc">189 characters remaining</p>
                        <div class="community_upload_create_btn">
                            <router-link to="/socialmedia/community/socialmedia_community_simple"><button>Create</button></router-link>
                            <span>Cancel</span>
                        </div>
                    </div>
                </div>
            </div>
            <CommunityMembership 
                v-show="f_show_community_membership"
                @view-backdrop="closeViewProfile"
            >
            </CommunityMembership>
            <UpcomingEvent 
                v-show="f_show_upcoming_event"
                @user-backdrop="removeFlagFromStack"
                >
            </UpcomingEvent>
            <CommunityBrand 
                v-show="f_show_community_brand"
                @view-backdrop="closeViewProfile"
            >
            </CommunityBrand>
            <CommunitySetting 
                v-show="f_show_community_setting"
                @view-backdrop="closeViewProfile"
            >
            </CommunitySetting>
            <CommunityPermission 
                v-show="f_show_community_permission"
                @view-backdrop="closeViewProfile"
            >
            </CommunityPermission>
        </div>
    </div>
</template>
<script>
import CommunityMembership from "../../../modal/community_membership.vue";
import CommunityBrand from "../../../modal/community_brand.vue";
import CommunitySetting from "../../../modal/community_setting.vue";
import CommunityPermission from "../../../modal/community_permission.vue";
import UpcomingEvent from "../../../modal/community_members.vue";

export default {
    name: 'Community',
    components: {
            UpcomingEvent,
            CommunityMembership,
            CommunityBrand,
            CommunitySetting,
            CommunityPermission
    },
    data () {
        return {
            f_show_community_membership: false,
            f_show_community_brand: false,
            f_show_community_setting: false,
            f_show_community_permission: false,
            f_show_upcoming_event: false,
            modalStack: [],
        }
    },
    methods: {
        showCommunityMemebership() {
            this.f_show_community_membership = true;
        },
        showCommunityBrand() {
            this.f_show_community_brand = true;
        },
        showCommunitySetting() {
            this.f_show_community_setting = true;
        },
        showCommunityPermission() {
            this.f_show_community_permission = true;
        },
        closeViewProfile() {
            this.f_show_community_membership = false;
            this.f_show_community_brand = false;
            this.f_show_community_setting = false;
            this.f_show_community_permission = false;
        },
        showUpcomingEvent() {
        this.f_show_upcoming_event = true;
        this.modalStack.push('f_show_upcoming_event');
        },
        removeFlagFromStack() {

            let temp = this.modalStack.pop(-1);

            switch (temp) {
                case 'f_show_upcoming_event':
                this.f_show_upcoming_event = false
                break;
                default:
                break;
            }
            switch (temp) {
                case 'f_show_event_link':
                this.f_show_event_link = false
                break;
                default:
                break;
            }
            this.f_show_upcoming_event = false,

            this.f_show_event_link = false
        },
    }
}
</script>
<style>
    .community_upload_img {
        text-align: center;
        margin: 20px auto;
    }
    .community_upload_desc {
        text-align: right;
        font-size: 13px;
        margin: 5px auto;
    }
    .community_upload_content {
        display: flex;
        font-size: 15px;
        margin: 10px auto;
    }
    .community_upload_content_click {
        color: #13C8FF;
        margin: auto 0 auto auto;
    }
    .community_upload_content img {
        height: 12px;
        width: 7px;
        margin: auto 0 auto 20px;
    }
    .community_upload_map {
        width: 100%;
        height: 100%;
        margin: 15px auto;
    }
    .community_upload_create_btn {
        display: grid;
        text-align: center;
    }
    .community_upload_create_btn button {
        color: white;
        background: #EF8200;
        border-radius: 16px;
        width: 40%;
        margin: 20px auto;
        padding: 10px 20px;
        font-size: 16px;
    }
</style>
