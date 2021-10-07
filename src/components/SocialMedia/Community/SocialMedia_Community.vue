<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/community/socialmedia_community_feed" class="header_arrow">
                        <img src="img/header_arrow.png">
                    </router-link>
                    <a class="upcoming_pos">Community<img src="community/setting.png" class="my_event_btn"></a>
                </div>
                <div class="content left-content header_top height_static">
                    <div class="community_header_img">
                        <img src="community/world.png" class="community_world_img">
                        <img src="international_user.png" class="community_world_user">
                    </div>
                    <div class="community_title">
                        <p class="community_title_p"><img src="triangle.png" class="favicon_img">Money Makers Community<img src="img/dots.png" @click="showCommunityView"></p>
                        <p class="community_title_detail"><img src="community/key.png" class="favicon_img">Private Community •  125 Members</p>
                        <div class="community_title_img">
                            <router-link to="/socialmedia/community/socialmedia_community_member">
                                <img src="Lily.png">
                                <img src="Irma.png">
                                <img src="Collen.png">
                                <img src="Brandie.png">
                                <img src="Philip.png">
                                <img src="Geoffrey Mott.png">
                                <img src="eduardo.png">
                            </router-link>
                        </div>
                        <div class="community_title_btn">
                            <button>Leave</button>
                            <button>+ Invite</button>
                        </div>
                        <hr class="community_title_hr">
                        <div class="community_chat_type">
                            <img src="mona.png" class="community_chat_type_img">
                            <div>
                                <div class="chat_sentence community_chat_send">
                                    <input type="text" placeholder="What’s on your mind" class="community_chat_input form-control community_chat_background">
                                        
                                    <button type="button" class="btn_send" @click="showNewPost">
                                        <img src="send.png">
                                    </button>
                                </div>
                                <p>
                                    <img src="community/camera.png">
                                    <img src="community/video.png">
                                </p>
                            </div>
                        </div>
                        <hr class="community_hr">
                        <div class="community_chat_header">
                            <div class="community_user_info">
                                <img src="Susan Boyle.png" class="community_user_img">
                                <p><span><router-link to="/socialmedia/community/socialmedia_community">Amanda Page</router-link></span><span>Yesterday at 7:00 AM</span></p>
                                <img src="img/dots.png" class="community_user_detail" @click="showPostReport">
                            </div>
                            <hr class="community_hr">
                            <p class="community_desc">orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien dui, commodo at fermentum vel, auctor a magna. Sed vitae imperdiet elit. Donec ac velit metus. Nam et aliquet libero. Aenean aliquam sem ut urna porttitor, eu varius nunc viverra. Phasellus ornare pellentesque lobortis. Sed viverra nisi ac ipsum commodo pulvinar.</p>
                            <!-- <video width="100%" height="300px" controls>
                                <source src="">
                            </video> -->
                            <img src="community/world_whole.png" class="community_video">
                            <!-- <vue-player 
                                src="sample.mp4" 
                                poster="poster.jpg" 
                                title="this is a title" 
                                v-model="playing">
                            </vue-player> -->
                            <hr class="community_hr">
                            <p class="community_utility">
                                <span>275 Comments</span>
                                <span>Comment<img src="community/messaging.png"></span>
                                <span>Share<img src="community/replay.png"></span>
                            </p>
                            <hr class="community_hr">
                            <div class="community_chat">
                                <img src="Profile_on.png" class="community_chat_user">
                                <div class="community_chat_content">
                                    <p><span><b>Rayford Chenail</b></span><span>Nice post! Surely this will help  as others!</span></p>
                                    <p><img src="diamond_frame.png">123K</p>
                                </div>
                            </div>
                            <p class="community_chat_detail"><b>Private Community<span class="community_dots">•</span>Respond<span class="community_dots">•</span></b><span class="community_number">25m</span></p>
                            <div class="community_chat">
                                <img src="Profile_on.png" class="community_chat_user_sm">
                                <div class="community_chat_content">
                                    <p class="community_chat_content_sm"><span><b>Rayford Chenail</b></span><span>Nice post! Surely this will help  as others!</span></p>
                                    <p><img src="diamond_frame.png">123K</p>
                                </div>
                            </div>
                            <p class="community_chat_detail"><b>Private Community<span class="community_dots">•</span>Respond<span class="community_dots">•</span></b><span class="community_number">25m</span></p>
                            <div class="community_chat">
                                <img src="Profile_on.png" class="community_chat_user_sm">
                                <div class="community_chat_content">
                                    <p class="community_chat_content_sm"><span><b>Rayford Chenail</b></span><span>Nice post! Surely this will help  as others!</span></p>
                                    <p><img src="diamond_frame.png">123K</p>
                                </div>
                            </div>
                            <p class="community_chat_detail"><b>Private Community<span class="community_dots">•</span>Respond<span class="community_dots">•</span></b><span class="community_number">25m</span></p>
                            <div class="community_chat_lg">
                                <img src="Jean_Smith.png" class="community_chat_user_sm">
                                <div class="chat_sentence community_chat_send">
                                    <input type="text" placeholder="Type your comment..." class="socialmedia_chat_input form-control community_chat_background">
                                    <button type="button" class="btn_cam">
                                        <img src="camera.png">
                                    </button>
                                    <button type="button" class="btn_emoty">
                                        <img src="emoty.png">
                                    </button>
                                    <button type="button" class="btn_send">
                                        <img src="send.png">
                                    </button>
                                </div>
                            </div>
                            <div class="community_chat_lg">
                                <img src="Jean_Smith.png" class="community_chat_user">
                                <div class="chat_sentence community_chat_send_lg">
                                    <input type="text" placeholder="Type your comment..." class="socialmedia_chat_input form-control community_chat_background_lg">
                                    <button type="button" class="btn_cam">
                                        <img src="camera.png">
                                    </button>
                                    <button type="button" class="btn_emoty">
                                        <img src="emoty.png">
                                    </button>
                                    <button type="button" class="btn_send">
                                        <img src="send.png">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CommunityView 
                v-show="f_show_community_view"
                @close="closeViewProfile"
                @view-backdrop="closeViewProfile"
            >
            </CommunityView>
            <PostReport 
                v-show="f_show_post_report"
                @view-backdrop="closeViewProfile"
            >
            </PostReport>
            <NewPost 
                v-show="f_show_new_post"
                @close="closeViewProfile"
                @view-backdrop="closeViewProfile"
            >
            </NewPost>
        </div>
    </div>
</template>
<script>
import CommunityView from "../../../modal/community_view.vue";
import PostReport from "../../../modal/community_post-report.vue";
import NewPost from "../../../modal/community_new_post.vue";

export default {

    name: 'Community',
    components: {
            CommunityView,
            PostReport,
            NewPost
    },
    data () {
        return {
            f_show_community_view: false,
            f_show_post_report: false,
            f_show_new_post: false,
        }
    },
    methods: {
        closeModal() {
            this.f_show_community_view = false;
            this.f_show_new_post = false;
            this.isModalVisible = false;
        },
        showPostReport() {
            this.f_show_post_report = true;
        },
        showNewPost() {
            this.f_show_new_post = true;
        },
        showCommunityView() {
            this.f_show_community_view = true;
        },
        closeViewProfile() {
            this.f_show_community_view = false;
            this.f_show_post_report = false;
            this.f_show_new_post = false;
        },
        
    }
  
}
</script>
<style>
    .community_world_img {
        width: 100%;
    }
    .community_header_img {
        position: relative;
    }
    .community_world_user {
        position: absolute;
        left: 40%;
        top: 80%;
        border-radius: 50%;
        border: 4px solid white;
        height: 75px;
        width: 75px;
    }
    .community_title {
        padding: 50px 15px 0;
    }
    .community_title_p {
        font-size: 18px;
        margin: auto;
    }
    .community_title_p img:last-child {
        float: right;
        margin-top: 10px;
    }
    .community_title_detail {
        margin: auto;
        font-size: 14px;
        color: #65676B;
    }
    .community_title_detail .favicon_img {
        margin-bottom: 5px;
    }
    .community_title_img {
        margin: 15px auto;
    }
    .community_title_img img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 5px;
    }
    .community_title_btn {
        display: flex;
        width: 100%;
    }
    .community_title_btn button {
        color: white;
        padding: 4px 15px;
        border-radius: 16px;
    }
    .community_title_btn button:first-child {
        background: #C4C4C4;
        margin: auto auto auto 0;
    }
    .community_title_btn button:last-child {
        background: #EF8200;
        margin: auto 0 auto auto;
    }
    .community_title_hr {
        margin: 20px auto;
    }
    .community_chat_type {
        display: flex;
    }
    .community_chat_type_img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin: 0 5px auto 0;
    }
    .community_chat_type p {
        display: flex;
        margin: 5px auto;
    }
    .community_chat_type p img {
        margin-right: 10px;
        opacity: 0.4;
    }
    .community_chat_input {
        width: 100%;
        border: 0 solid white !important;
        padding-right: 45px !important;
    }
    .community_chat_type>div {
        width: 100%;
    }
    .community_chat_header {
        background: white;
        border-radius: 16px;
        color: #3B3E51;
        margin: 10px auto;
    }
</style>
