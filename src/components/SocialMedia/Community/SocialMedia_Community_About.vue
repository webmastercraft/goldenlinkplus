<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/community/socialmedia_community" class="header_arrow">
                        <img src="img/header_arrow.png">
                    </router-link>
                    <a class="upcoming_pos">About this Community</a>
                </div>
                <div class="content left-content header_top height_static">
                    <div class="community_about_header">
                        <p class="community_desc">orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien dui, commodo at fermentum vel, auctor a magna. Sed vitae imperdiet elit. Donec ac velit metus. Nam et aliquet libero. Aenean aliquam sem ut urna porttitor, eu varius nunc viverra. Phasellus ornare pellentesque lobortis. Sed viverra nisi ac ipsum commodo pulvinar.</p>
                        <p class="community_about_desc"><img src="community/about_key.png" class="about_icon">Private Community</p>
                        <p class="community_about_desc"><img src="community/about_eye.png" class="about_icon">125 Members</p>
                        <hr class="community_hr">
                        <p class="community_about_desc"><b>Members • 125<router-link to="/socialmedia/community/socialmedia_community_member"><span>See All</span></router-link></b></p>
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
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>

export default {
    name: 'Community',
    components: {
    },
}
</script>
<style>
    .about_icon {
        margin: auto 10px 5px auto;
    }
    .community_about_header {
        background: white;
        border-radius: 16px;
        padding: 5px 15px 5px;
        color: #3B3E51;
        margin: 10px auto;
        font-size: 15px !important;
    }
    .community_about_desc {
        margin: 5px auto;
    }
    .community_about_desc_detail {
        margin: auto auto auto 17px;
    }
    .community_about_desc span {
        float: right;
        color: #13C8FF;
    }
    .community_about_desc_flex {
        display: flex;
        margin: 5px auto;
    }
    .community_about_desc_flex span {
        display: grid;
    }
    .community_about_desc_flex span>span {
        color: #65676B;    
    }
    .community_about_desc_flex img {
        margin: 2px 10px auto 0;
    }
</style>
