<template>
    <div>
        <div class="container">
            <div class="phone sociallogin page_block">

                <div class="community_body">
                    <div>
                        <router-link to="/"><img src="main_logo.png" class="main_logo"></router-link>
                        <div class="logo_header">
                            <router-link to="/socialmedia/socialmedia_messaging_messages">
                                <img src="main_box.png">
                            </router-link>
                            <router-link to="/socialmedia/socialmedia_main_event_upcoming">
                                <img src="main_calendar.png">
                            </router-link>
                            <img src="main_contact.png">
                            <img src="mona.png" class="main_user">
                        </div>
                    </div>
                    <p class="community_favicon"><img src="community.png" class="favicon_img">RECENT ACTIVITY<img src="community/setting.png" class="setting_img"></p>
                    <div class="community_header">
                        <div class="community_user_info">
                            <img src="Susan Boyle.png" class="community_user_img">
                            <p><span>Making Big Time Money Community</span><span>Amanda Page<span class="community_number">  •  4m</span></span></p>
                            <img src="img/dots.png" class="community_user_detail">
                        </div>
                        <hr class="community_hr">
                        <p class="community_desc">orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien dui, commodo at fermentum vel, auctor a magna. Sed vitae imperdiet elit. Donec ac velit metus. Nam et aliquet libero. Aenean aliquam sem ut urna porttitor, eu varius nunc viverra. Phasellus ornare pellentesque lobortis. Sed viverra nisi ac ipsum commodo pulvinar.</p>
                        <video width="100%" height="300px" controls>
                            <source src="">
                        </video>
                        <vue-player 
                            src="sample.mp4" 
                            poster="poster.jpg" 
                            title="this is a title" 
                            v-model="playing">
                        </vue-player>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import vuePlayer from '@algz098/vue-player';

export default {
  name: 'Community_Feed',
  components: {
  },
}
</script>
<style>
    .community_body {
        margin: 20px;
        max-width: 414px;
        width: calc(100% - 40px);
    }
    .community_header {
        background: white;
        border-radius: 16px;
        padding: 15px;
        color: #3B3E51;
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
        margin: auto;
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
</style>
 