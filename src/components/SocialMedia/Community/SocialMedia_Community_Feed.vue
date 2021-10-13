<template>
    <div>
        <div class="container">
            <div class="phone sociallogin page_block">

                <div class="community_body">
                    <div class="logo_header">
                        <img src="toggle.png" class="toggle_menu_btn" @click="showToggle">
                        <router-link to="/"><img src="main_logo.png" class="main_logo"></router-link>
                        <router-link to="/socialmedia/socialmedia_messaging_messages">
                            <img src="main_box.png">
                        </router-link>
                        <router-link to="/socialmedia/socialmedia_main_event_upcoming">
                            <img src="main_calendar.png">
                        </router-link>
                        <router-link to="/socialmedia/community/socialmedia_community"><img src="main_contact.png" class="main_contact"></router-link>
                        <img src="mona.png" class="main_user" @click="showSwitchGsAccount">
                    </div>
                    <p class="community_favicon"><img src="community.png" class="favicon_img">RECENT ACTIVITY<img src="community/setting.png" class="setting_img" @click="showIndustry"></p>
                    <div class="community_header">
                        <div class="community_user_info">
                            <img src="Susan Boyle.png" class="community_user_img">
                            <p><span><router-link to="/socialmedia/community/socialmedia_community">Making Big Time Money Community</router-link></span><span>Amanda Page<span class="community_number"><span class="community_dots">•</span>4m</span></span></p>
                            <img src="img/dots.png" class="community_user_detail">
                        </div>
                        <hr class="community_hr">
                        <p class="community_desc">orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien dui, commodo at fermentum vel, auctor a magna. Sed vitae imperdiet elit. Donec ac velit metus. Nam et aliquet libero. Aenean aliquam sem ut urna porttitor, eu varius nunc viverra. Phasellus ornare pellentesque lobortis. Sed viverra nisi ac ipsum commodo pulvinar.</p>
                        <!-- <video width="100%" height="300px" controls>
                            <source src="">
                        </video> -->
                        <img src="community/community_video.png" class="community_video">
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
                        <p class="community_chat_detail">Send Diamond<span class="community_dots">•</span><span @click='toggle = true'>Respond</span><span class="community_dots">•</span><span class="community_number">25m</span></p>

                        <div v-for="(item, index) in massages" :key="index">
                            <div class="community_chat">
                                <img src="Profile_on.png" class="community_chat_user_sm">
                                <div class="community_chat_content">
                                    <p class="community_chat_content_sm">
                                        <span><b>{{item.name}}</b></span>
                                        <span>{{item.msg}}</span>
                                    </p>
                                    <p><img src="diamond_frame.png">{{item.diamonds + 'K'}}</p>
                                </div>
                            </div>
                            <p class="community_chat_detail">Send Diamond<span class="community_dots">•</span>Respond<span class="community_dots">•</span><span class="community_number">25m</span></p>
                        </div>

                        <div class="community_chat_lg" v-show='toggle'>
                            <img src="Jean_Smith.png" class="community_chat_user_sm">
                            <div class="chat_sentence community_chat_send">
                                <input type="text" placeholder="Type your comment..." class="socialmedia_chat_input form-control community_chat_background">
                                <button type="button" class="btn_cam">
                                    <img src="camera.png">
                                </button>
                                <button type="button" class="btn_emoty">
                                    <img src="emoty.png">
                                </button>
                                <button type="button" class="btn_send" @click='sendMessage()'>
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
                    <div class="community_header">
                        <div class="community_user_info">
                            <img src="Susan Boyle.png" class="community_user_img">
                            <p><span><router-link to="/socialmedia/community/socialmedia_community">Making Big Time Money Community</router-link></span><span>Amanda Page<span class="community_number"><span class="community_dots">•</span>4m</span></span></p>
                            <img src="img/dots.png" class="community_user_detail">
                        </div>
                        <hr class="community_hr">
                        <p class="community_desc">orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien dui, commodo at fermentum vel, auctor a magna. Sed vitae imperdiet elit. Donec ac velit metus. Nam et aliquet libero. Aenean aliquam sem ut urna porttitor, eu varius nunc viverra. Phasellus ornare pellentesque lobortis. Sed viverra nisi ac ipsum commodo pulvinar.</p>
                        <!-- <video width="100%" height="300px" controls>
                            <source src="">
                        </video> -->
                        <img src="community/community_video.png" class="community_video">
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
                        <p class="community_chat_detail">Send Diamond<span class="community_dots">•</span><span @click='toggle = true'>Respond</span><span class="community_dots">•</span><span class="community_number">25m</span></p>

                        <div v-for="(item, index) in massages" :key="index">
                            <div class="community_chat">
                                <img src="Profile_on.png" class="community_chat_user_sm">
                                <div class="community_chat_content">
                                    <p class="community_chat_content_sm">
                                        <span><b>{{item.name}}</b></span>
                                        <span>{{item.msg}}</span>
                                    </p>
                                    <p><img src="diamond_frame.png">{{item.diamonds + 'K'}}</p>
                                </div>
                            </div>
                            <p class="community_chat_detail">Send Diamond<span class="community_dots">•</span>Respond<span class="community_dots">•</span><span class="community_number">25m</span></p>
                        </div>

                        <div class="community_chat_lg" v-show='toggle'>
                            <img src="Jean_Smith.png" class="community_chat_user_sm">
                            <div class="chat_sentence community_chat_send">
                                <input type="text" placeholder="Type your comment..." class="socialmedia_chat_input form-control community_chat_background">
                                <button type="button" class="btn_cam">
                                    <img src="camera.png">
                                </button>
                                <button type="button" class="btn_emoty">
                                    <img src="emoty.png">
                                </button>
                                <button type="button" class="btn_send" @click='sendMessage()'>
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
            <SwitchGsAccount 
                v-show="f_show_switch_gs_account"
                @close="closeModal"
            >
            </SwitchGsAccount>
            <Toggle 
                v-show="f_show_toggle"
                @close="closeViewProfile"
                @view-backdrop="closeViewProfile"
            >
            </Toggle>
        </div>
    </div>
</template>
<script>
    import Industry from "../../../modal/manage_com.vue";
    import IndustrySystem1 from "../../../modal/membership_com.vue";
    import IndustrySystem2 from "../../../modal/membership_leave.vue";
    import IndustrySystem3 from "../../../modal/membership_follow.vue";
    import SwitchGsAccount from "../../../modal/switch_gs_account.vue";
    import Toggle from "../../../modal/toggle.vue";

    export default {
        name: 'Community_Feed',
        components: {
            Industry,
            IndustrySystem1,
            IndustrySystem2,
            IndustrySystem3,
            SwitchGsAccount,
            Toggle,
        },
        data () {
            return {
                f_show_industry: false,
                f_industry_system1: false,
                f_industry_system2: false,
                f_industry_system3: false,
                f_show_switch_gs_account: false,
                f_show_toggle: false,
                toggle: false,
                massages: []
            }
        },
        methods: {
            closeModal() {
                this.f_show_switch_gs_account = false;
                this.f_show_toggle = false;
            },
            showToggle() {
                this.f_show_toggle = true;
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
            showSwitchGsAccount() {
                this.f_show_switch_gs_account = true;
            },
            closeViewProfile() {
                this.f_show_industry = false;
                this.f_industry_system1 = false;
                this.f_industry_system2 = false;
                this.f_industry_system3 = false;
                this.f_show_toggle = false;
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
            sendMessage() {
                let new_msg = {
                    name: "Rayford Chenail",
                    msg: "Nice post! Surely this will help as others!",
                    diamonds: "123"
                };
                this.massages.push(new_msg);
            }
        }
    }
</script>
<style>
    .community_body {
        margin: 20px 20px 5px;
        max-width: 414px;
        width: calc(100% - 40px);
    }
    .community_header {
        background: white;
        border-radius: 16px;
        padding: 15px 15px 5px;
        color: #3B3E51;
        margin: 10px auto;
    }
    .page_block {
        display: block;
    }
    .community_favicon {
        margin: 10px auto;
        text-align: left;
    }
    .setting_img {
        margin-bottom: 5px;
        float: right;
    }
    .community_user_info {
        display: flex;
        width: 100%;
    }
    .community_user_info p {
        text-align: left;
        margin: auto;
        font-size: 15px;
        display: grid;
        line-height: 20px;
        margin: auto auto auto 15px;
        font-weight: 600;
    }
    .community_user_info p span:last-child {
        color: #65676B;
    }
    .community_user_img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin: auto 0;
    }
    .community_user_detail {
        height: 100%;
    }
    .community_hr {
        margin: 10px auto;
    }
    .community_number {
        font-weight: 400;
    }
    .community_desc {
        line-height: 20px;
        margin: auto;
        text-align: left;
        font-size: 14px;
    }
    .community_diamond {
        margin: auto;
        text-align: left;
    }
    .community_diamond span {
        float: right;
    }
    .community_diamond img {
        margin: auto 5px 3px auto;
    }
    .community_utility {
        margin: auto;
        display: flex;
    }
    .community_utility img {
        margin: auto auto 3px 5px;
    }
    .community_utility span {
        margin: auto;
    }
    .community_utility span:first-child {
        margin: auto auto auto 0  !important;
    }
    .community_utility span:last-child {
        margin: auto 0 auto auto !important;
    }
    .community_chat_user {
        height: 35px;
        width: 35px;
        margin: 0 7px auto auto;
    }
    .community_chat {
        display: flex;
        font-size: 14px;
    }
    .community_chat_content {
        background: #E6F7FF;
        border-radius: 8px;
        display: flex;
        padding: 10px;
    }
    .community_chat_content p {
    }
    .community_chat_content p:first-child {
        margin: auto 10px auto auto;
        display: grid;
        text-align: left;
    }
    .community_chat_content p:last-child {
        background: white;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        margin: 0 auto 10px auto;
        display: grid;
        padding: 0 8px;
    }
    .community_chat_content p:last-child img {
        margin: auto auto 0 auto;
    }
    .community_chat_detail {
        font-size: 13px;
        color: #65676B;
        text-align: right;
        margin: 5px auto;
    }
    .community_dots {
        margin: auto 10px;
    }
    .community_video {
        width: 100%;
        margin: 10px auto;
    }
    .community_chat_user_sm {
        height: 25px;
        width: 25px;
        margin: 0 7px auto 40px;
    }
    .community_chat_content_sm {
        margin: auto !important;
    }
    .community_chat_send {
        width: 100%;
        position: relative;
        border-radius: 12px;
        border: 2px solid #E6F7FF;
        height: 35px !important;
    }
    .community_chat_background {
        background: transparent !important;
        height: 32px !important;
        font-size: 0.9rem !important;
    }
    .community_chat_send > button {
        top: 2px !important;
    }
    .community_chat_lg {
        display: flex;
        margin: 10px auto;
    }
    .community_chat_background_lg {
        background: transparent !important;
        height: 35px !important;
        font-size: 1rem !important;
    }
    .community_chat_send_lg {
        width: 100%;
        position: relative;
        border-radius: 12px;
        border: 2px solid #E6F7FF;
        height: 38px !important;
    }
    .community_chat_send_lg > button {
        position: absolute;
        top: 3px;
    }
</style>

 