<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/community/socialmedia_community_about" class="header_arrow">
                        <img src="img/header_arrow.png">
                    </router-link>
                    <a class="upcoming_pos">Community Members</a>
                </div>
                <div class="content left-content community_member_body height_static">
                    <div class="invite_find community_find">
                            <input type="search" placeholder="Find People" class="form-control">
                            <img src="Search_modal.png">
                    </div>
                    <p class="manage_content title_orange">Administrators</p>
                    <hr class="community_hr">
                    <!-- <div class="community_about_header">
                        <p class="community_desc">orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien dui, commodo at fermentum vel, auctor a magna. Sed vitae imperdiet elit. Donec ac velit metus. Nam et aliquet libero. Aenean aliquam sem ut urna porttitor, eu varius nunc viverra. Phasellus ornare pellentesque lobortis. Sed viverra nisi ac ipsum commodo pulvinar.</p>
                        <p class="community_about_desc"><img src="community/about_key.png" class="about_icon">Private Community</p>
                        <p class="community_about_desc"><img src="community/about_eye.png" class="about_icon">125 Members</p>
                        <hr class="community_hr">
                        <p class="community_about_desc"><b>Members • 125<span>See All</span></b></p>
                        <hr class="community_hr">
                        <p class="community_about_desc"><b>Activity</b></p>
                        <p class="community_about_desc_flex"><img src="community/about_post.png"><span>200 new posts today<span>4,904 in the last month</span></span></p>
                        <p class="community_about_desc_flex"><img src="community/about_contact.png"><span>125 total members<span>+ 11 in the last week</span></span></p>
                        <p class="community_about_desc"><img src="community/about_calendar.png" class="about_icon">Created 1 month ago</p>
                        <hr class="community_hr">
                        <p class="community_about_desc"><b>Community rules from the admins</b></p>
                        <p class="community_about_desc"><b>1. Be Kind and Courteous</b></p>
                        <p class="community_about_desc_detail">We're all in this together to create a welcoming environment. Let's treat everyone with respect.</p>
                        <p class="community_about_desc"><b>2. Be Gererous</b></p>
                        <p class="community_about_desc_detail">Support each other for all of us to succeed. Give 'likes' to the products posted by other members. Even if you are not interested  in the product, your friends might be. There is no exercise better for the heart than lifting people up.</p>
                    </div> -->
                    <!-- <div class="invite_find lounge_following_find">
                        <input type="search" placeholder="Find People" class="form-control">
                        <img src="Search_modal.png">
                    </div> -->
                    <div class="socialmedia_search_para" v-for="(item, index) in admindatas" :key="index">
                        <img :src="`${item.image_url}`" class="lounge_following_user">
                        <p class="community_member_text following_para"><img src="community/star_green.png"><br><span class="text_color_softblack">{{item.user}}</span><br><span class="text_color_grey">Joined {{item.year}} year ago</span></p>
                        <div class="search_transmit">
                            <button class="follow_btn" :disabled="!item.follow" @click="selectFollow1(index)" :class="{'follow_btn_disable': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                            <router-link to="/socialmedia/socialmedia_messaging_chat">
                                <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}">Message</button>
                            </router-link>  
                        </div>
                    </div>
                    <p class="manage_content title_orange">Co-Administrators</p>
                    <hr class="community_hr">
                    <div class="socialmedia_search_para" v-for="(item, index) in coadmindatas" :key="index">
                        <img :src="`${item.image_url}`" class="lounge_following_user">
                        <p class="community_member_text following_para"><img src="community/star_sky.png"><br><span class="text_color_softblack">{{item.user}}</span><br><span class="text_color_grey">Joined {{item.year}} year ago</span></p>
                        <div class="search_transmit">
                            <button class="follow_btn" :disabled="!item.follow" @click="selectFollow2(index)" :class="{'follow_btn_disable': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                            <router-link to="/socialmedia/socialmedia_messaging_chat">
                                <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}">Message</button>
                            </router-link>  
                        </div>
                    </div>
                    <p class="manage_content title_orange">Members</p>
                    <hr class="community_hr">
                    <div class="socialmedia_search_para" v-for="(item, index) in memberdatas" :key="index">
                        <img :src="`${item.image_url}`" class="lounge_following_user">
                        <p class="community_member_text following_para"><span class="text_color_softblack">{{item.user}}</span><br><span class="text_color_grey">Joined {{item.year}} year ago</span></p>
                        <div class="search_transmit">
                            <button class="follow_btn" :disabled="!item.follow" @click="selectFollow3(index)" :class="{'follow_btn_disable': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                            <router-link to="/socialmedia/socialmedia_messaging_chat">
                                <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}">Message</button>
                            </router-link>  
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Community_Member',
        components: {
        },
        data () {
            return {
                admindatas: [
                    {
                        image_url: "Ray_big_on.png",
                        user: "Rayford Chenail",
                        year: 1,
                        follow:true
                    }
                ],
                coadmindatas: [
                    {
                        image_url: "Ray_big_on.png",
                        user: "Rayford Chenail",
                        year: 1,
                        follow:true
                    }
                ],
                memberdatas: [
                    {
                        image_url: "Ray_big_on.png",
                        user: "Rayford Chenail",
                        year: 1,
                        follow:true
                    },
                    {
                        image_url: "Ray_big_on.png",
                        user: "Rayford Chenail",
                        year: 1,
                        follow:true
                    },
                    {
                        image_url: "Ray_big_on.png",
                        user: "Rayford Chenail",
                        year: 1,
                        follow:true
                    },
                    {
                        image_url: "Ray_big_on.png",
                        user: "Rayford Chenail",
                        year: 1,
                        follow:true
                    }
                ]
            }
        },
        methods: {
            selectFollow1(index) {
                this.admindatas[index].follow = false
                this.image1 =  this.image2;
            },
            selectFollow2(index) {
                this.coadmindatas[index].follow = false
                this.image1 =  this.image2;
            },
            selectFollow3(index) {
                this.memberdatas[index].follow = false
                this.image1 =  this.image2;
            },
        }
    }
</script>
<style>
    .community_member_body {
        margin: 80px 20px 20px 20px;
        border-radius: 12px;
        overflow: hidden;
        min-height: calc(100vh - 26px);
        padding: 0 20px 20px;
    }
    .community_member_text {
        font-size: 15px;
        line-height: 20px;
    }
    .text_color_grey {
        color: #65676B;
    }
    .text_color_softblack {
        color: #3B3E51;
        font-weight: 600;
    }
</style>
