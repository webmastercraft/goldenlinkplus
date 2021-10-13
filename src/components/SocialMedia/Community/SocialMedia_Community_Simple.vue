<template>
    <div>
        <div class="container">
            <div class="loading_screen" v-show="isloading" >
                <img src="loading_logo.png">
            </div>
            <div class="welcome_dialog loading_screen" v-if="gcoin_tap">
                <div class="welcome_dialog_content welcome_dialog_community" @click="killGcoinTap">
                    <img src="community/coin.png">
                    <p class="welcome_dialog_title community_first_post_welcome">Welcome to your new community!</p>
                    <p class="community_first_post">Create your first post</p>
                </div>
            </div>
            <div class="community_simple_phone" v-show="!isloading">
                <div class="header_modal">
                    <router-link to="/socialmedia/community/socialmedia_community_feed" class="header_arrow">
                        <img src="img/header_arrow.png">
                    </router-link>
                    <a class="upcoming_pos">Community<img src="community/setting.png" class="my_event_btn" @click="showIndustry"></a>
                </div>
                <div class="community_simple_area">
                    <div class="community_header_img">
                        <img src="community/world.png" class="community_world_img">
                        <img src="international_user.png" class="community_world_user_simple">
                        <img src="community/camera-lg.png" class="communty_camera_lg">
                    </div>
                    <div class="community_title">
                        <p class="community_title_p"><img src="triangle.png" class="favicon_img">Money Makers Community<img src="img/dots.png" @click="showCommunityView"></p>
                        <p class="community_title_detail"><img src="community/key.png" class="favicon_img">Private Community •  125 Members</p>
                        <div class="community_title_img">
                            <img src="mona.png">
                        </div>
                        <div class="community_title_btn">
                            <button>Leave</button>
                            <button @click="showCommunityAdd">+ Add Member</button>
                        </div>
                    </div>
                </div>
                <div class="community_simple_area community_simple_area_sm">
                        <div class="community_chat_type">
                            <img src="mona.png" class="community_chat_type_img">
                            <div>
                                <div class="chat_sentence community_chat_send">
                                    <input type="text" placeholder="What’s on your mind" class="community_chat_input form-control community_chat_background">
                                        
                                    <button type="button" class="btn_send">
                                        <img src="send.png">
                                    </button>
                                </div>
                                <p>
                                    <img src="community/camera.png">
                                    <img src="community/video.png">
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            <Company 
                v-show="f_show_company"
                @close="closeViewProfile"
                @view-backdrop="closeViewProfile"
            >
            </Company>
            <PostReport 
                v-show="f_show_post_report"
                @view-backdrop="closeViewProfile"
            >
            </PostReport>
            <CommunityAdd 
                v-show="f_show_community_add"
                @view-backdrop="closeViewProfile"
            >
            </CommunityAdd>
            <Industry 
                v-show="f_show_industry"
                @view-backdrop="closeViewProfile"
                @showIndustrySystem1="industrySystem1"
                @showIndustrySystem2="industrySystem2"
                @showIndustrySystem3="industrySystem3"
            >
            </Industry>
            <IndustrySystem1 
                v-show="f_industry_system1"
                @close="backIndustrySystem1"
                @view-backdrop="closeViewProfile"
            >
            </IndustrySystem1>
            <IndustrySystem2 
                v-show="f_industry_system2"
                @close="backIndustrySystem2"
                @view-backdrop="closeViewProfile"
            >
            </IndustrySystem2>
            <IndustrySystem3
                v-show="f_industry_system3"
                @close="backIndustrySystem3"
                @view-backdrop="closeViewProfile"
            >
            </IndustrySystem3>
        </div>
    </div>
</template>
<script>
import Company from "../../../modal/community_view.vue";
import PostReport from "../../../modal/community_post-report.vue";
import CommunityAdd from "../../../modal/community_add.vue";
import Industry from "../../../modal/manage_com.vue";
import IndustrySystem1 from "../../../modal/membership_com.vue";
import IndustrySystem2 from "../../../modal/membership_leave.vue";
import IndustrySystem3 from "../../../modal/membership_follow.vue";

export default {

    name: 'Community_Simple',
    components: {
            Company,
            PostReport,
            CommunityAdd,
            Industry,
            IndustrySystem1,
            IndustrySystem2,
            IndustrySystem3,
    },
    data () {
        return {
            gcoin_tap: false,
            isloading: true,
            f_show_company: false,
            f_show_post_report: false,
            f_show_community_add: false,
            f_show_industry: false,
            f_industry_system1: false,
            f_industry_system2: false,
            f_industry_system3: false,
        }
    },
    methods: {
        closeModal() {
            this.f_show_company = false;
            this.isModalVisible = false;
        },
        showPostReport() {
            this.f_show_post_report = true;
        },
        showCommunityAdd() {
            this.f_show_community_add = true;
        },
        showCommunityView() {
            this.f_show_company = true;
        },
        showIndustry() {
            this.f_show_industry = true;
        },
        industrySystem1() {
            this.f_industry_system1 = true;
        },
        industrySystem2() {
            this.f_industry_system2 = true;
        },
        industrySystem3() {
            this.f_industry_system3 = true;
        },
        closeViewProfile() {
            this.f_show_company = false;
            this.f_show_post_report = false;
            this.f_show_community_add = false;
            this.f_show_industry = false;
            this.f_industry_system1 = false;
            this.f_industry_system2 = false;
            this.f_industry_system3 = false;
        },
        backIndustrySystem1() {
            this.f_industry_system1 = false;
        },
        backIndustrySystem2() {
            this.f_industry_system2 = false;
        },
        backIndustrySystem3() {
            this.f_industry_system3 = false;
        },
        killLoading() {
            setTimeout(() => {
                this.isloading = false;
            }, 2000);

            setTimeout(() => {
                this.gcoin_tap = true
            }, 3000);
        },
        killGcoinTap() {
            this.gcoin_tap = false
        },
        
    },
    created () {
        this.killLoading();
    },
  
}
</script>
<style>
    .community_world_user_simple {
        position: absolute;
        left: 5%;
        top: 86%;
        border-radius: 50%;
        border: 4px solid white;
        height: 75px;
        width: 75px;
    }
    .community_simple_area {
        margin: 80px 20px 10px;
        text-align: left;
        width: calc(100 - 40px);
        height: auto;
        background: white;
        overflow: hidden;
        border-radius: 12px;
        padding-bottom: 10px;
    }
    .community_simple_area_sm {
        margin: 10px 20px !important;
        padding: 10px 15px !important;
    }
    .communty_camera_lg {
        position: absolute;
        top: 15px;
        z-index: 1040;
        right: 15px;
    }
    .community_simple_phone {
        width: 100%;
        max-width: 414px;
        min-height: 100vh;
        display: block;
        justify-content: center;
        text-align: center;
        background: linear-gradient(270deg, #C4FFF7 -26.45%, #CDE1FF 109.06%) !important;
        position: relative;
    }
    .community_first_post {
        background: #F4992D;
        color: white;
        border-radius: 30px;
        font-size: 18px;
        width: 80%;
        padding: 5px;
        margin: auto !important;
    }
    .community_first_post_welcome {
        margin: auto auto 10px !important;
    }
    .welcome_dialog_community {
        height: 355px !important;
        margin: calc(50vh - 177.5px) 15% !important;
        border-radius: 25px !important;
        width: 70% !important;
    }
</style>
