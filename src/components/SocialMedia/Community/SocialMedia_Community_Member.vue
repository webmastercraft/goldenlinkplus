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
                    <div class="community_member_search_para" v-for="(item, index) in admindatas" :key="index">
                        <img :src="`${item.image_url}`" class="lounge_following_user">
                        <p class="community_member_text following_member_para"><img src="community/star_green.png"><br><span class="text_color_softblack">{{item.user}}</span><br><span class="text_color_grey">Joined {{item.year}} year ago</span></p>
                    </div>
                    <div v-show='toggle'>
                        <p class="manage_content title_orange">Co-Administrators</p>
                        <hr class="community_hr">
                        <div class="community_member_search_para" v-for="(item, index) in coadmindatas" :key="index">
                            <img :src="`${item.image_url}`" class="lounge_following_user">
                            <p class="community_member_text following_member_para"><img src="community/star_sky.png"><br><span class="text_color_softblack">{{item.user}}</span><br><span class="text_color_grey">Joined {{item.year}} year ago</span></p>
                            <div class="member_admin_btn">
                                <span class="remove_admin_btn" @click='toggle = false'>Remove Admin</span>  
                            </div>
                        </div>
                    </div>
                    <p class="manage_content title_orange">Members</p>
                    <hr class="community_hr">
                    <div class="community_member_search_para" v-for="(item, index) in memberdatas" :key="index">
                        <img :src="`${item.image_url}`" class="lounge_following_user">
                        <p class="community_member_text following_member_para"><span class="text_color_softblack">{{item.user}}</span><br><span class="text_color_grey">Joined {{item.year}} year ago</span></p>
                        <div class="member_admin_btn">
                            <span class="remove_admin_btn" @click='sendMakeAdmin()'>Make Admin</span> 
                            <span class="remove_admin_btn_opacity">Remove</span> 
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
                toggle: true,
                admindatas: [
                    {
                        image_url: "Ray_big_on.png",
                        user: "Rayford Chenail",
                        year: 1,
                    }
                ],
                coadmindatas: [
                    {
                        image_url: "Ray_big_on.png",
                        user: "Rayford Chenail",
                        year: 1,
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
            sendMakeAdmin() {
                let new_msg = {
                    image_url: "Ray_big_on.png",
                    user: "Rayford Chenail",
                    year: 1,
                };
                this.coadmindatas.push(new_msg);
            }
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
        line-height: 15px;
    }
    .text_color_grey {
        color: #65676B;
    }
    .text_color_softblack {
        color: #3B3E51;
        font-weight: 600;
    }
    .remove_admin_btn {
        font-size: 13px;
        color: #808695;
        margin: auto;
        text-align: center;
    }
    .following_member_para {
        margin: auto auto auto 10px;
        width: 100%;
    }
    .remove_admin_btn_opacity {
        color: #CCD6DD;
        font-size: 13px;
        width: 65%;
        margin: auto;
        text-align: center;
    }
    .member_admin_btn {
        display: grid;
        width: 65%;
    }
    .community_member_search_para {
        padding: 10px 0;
        display: flex;
        width: 100%;
    }
</style>
