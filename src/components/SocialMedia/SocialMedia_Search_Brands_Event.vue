<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>3 Results Found</a>
                </div>
                <div class="original_modal">
                    <p class="brands_event_title"><img src="brands/brands-1.png"><span>Events from Coca Cola</span></p>
                    <div class="brands_event_content">
                        <div class="brands_event_content_para">
                            <div class="brands_event_header">
                                <p class="brands_event_words"><img src="triangle.png" class="favicon_img">COCA COLA</p>
                                <router-link to="/socialmedia/socialmedia_main_event_voice">
                                <p class="para_event_title">How to distribute big brands worldwide</p>
                                </router-link>
                                <p class="brands_event_words">Arnold Swarzeneger<img src="msg_favicon.png" class="favicon_img_left"></p>
                                <p class="brands_event_words">Ben Hugh<img src="msg_favicon.png" class="favicon_img_left"></p>
                                <p class="brands_event_words">Alex Jackson<img src="msg_favicon.png" class="favicon_img_left"></p>
                                
                            </div>
                            <div class="para_group">
                                <img src="brands/group_1.png">
                            </div>
                        </div>
                        <div class="brands_event_date">
                            <p>Wed, Sep 15 9:00 AM</p>
                            <router-link to="/socialmedia/socialmedia_main_event_voice">
                                <button class="brands_event_btn">Join this Event</button>
                            </router-link>
                        </div>
                    </div>
                    <div class="brands_event_content" v-for="(item, index) in brandeventData" :key="index">
                        <div class="brands_event_content_para">
                            <div class="brands_event_header">
                                <p class="brands_event_words"><img src="triangle.png" class="favicon_img">{{item.title}}</p>
                                <router-link to="/socialmedia/socialmedia_main_event_voice">
                                <p class="para_event_title">{{item.description}}</p>
                                </router-link>
                                <p class="brands_event_words">{{item.user1}}<img src="msg_favicon.png" class="favicon_img_left"></p>
                                <p class="brands_event_words">{{item.user2}}<img src="msg_favicon.png" class="favicon_img_left"></p>
                                <p class="brands_event_words">{{item.user3}}<img src="msg_favicon.png" class="favicon_img_left"></p>
                                
                            </div>
                            <div class="para_group">
                                <img :src="`${item.group_img}`">
                                <p>
                                    <img src="user_count.png">{{item.user_count}}
                                    <img src="msg_count.png">{{item.chat_count}}
                                </p>
                            </div>
                        </div>
                        <div class="brands_event_date">
                            <router-link to="/socialmedia/socialmedia_main_event_voice">
                                <button class="brands_event_progress_btn">Join this Event in progress</button>
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
  name: 'Search_Brands_Event',
  components: {
  },
  data () {
    return {
        brandeventData: [
            {
                title: "4M Future Distributors Inc",
                description: "The future of Coca Cola in softdrinks industry",
                user1: "Howard Stark",
                user2: "Bruce Banner",
                user3: "Natasha E.",
                group_img: "brands/group_2.png",
                user_count: "75",
                chat_count: "10",
            },
            {
                title: "Holy Cow Community",
                description: "What is means to be a Coca Cola Distributor",
                user1: "Rachel Denvers",
                user2: "Wanda Vision",
                user3: "Matt Madisson",
                group_img: "brands/group_3.png",
                user_count: "75",
                chat_count: "10",
            }
        ]
    }
  },
}
</script>
<style>
    .original_modal {
        margin: 80px 20px 0;
        width: 100%;
        text-align: left;
    }
    .brands_event_title {
        text-align: center;
        margin: auto;
    }
    .brands_event_title img {
        margin: auto 10px auto auto;
    }
    .brands_event_title span {
        margin: auto auto auto 10px;
    }
    .brands_event_content {
        margin: 10px 0;
        background-color: white;
        border-radius: 16px;
        padding: 20px 15px;
    }
    .brands_event_content_para {
        display: flex;
        margin-bottom: 10px;
    }
    .brands_event_content_para p {
        margin: 0;
    }
    .brands_event_btn {
        color: white;
        background: #EF8200;
        width: 100%;
        border-radius: 32px;
        padding: 5px 0;
    }
    .brands_event_progress_btn {
        color: white;
        background: #FFB803;
        width: 100%;
        border-radius: 32px;
        padding: 5px 0;
    }
    .brands_event_words {
        font-size: 13px;
        letter-spacing: 0.08em;
    }
    .brands_event_header {
        width: 65%;
    }
    .brands_event_header .para_event_title {
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.02em;
    }
    .brands_event_content_para .para_group {
        width: 35%;
        margin: auto;
        text-align: center;
    }
    .brands_event_date p{
        color: #F4992D;
        letter-spacing: 0.04em;
        font-size: 13px;
        text-align: center;
        margin: 3px auto;
    }
</style>
