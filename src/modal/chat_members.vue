<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-on:click.self="userProfileBackdrop">
      <div class="modal_price_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="host_view_position"
          id="modalTitle"
        >
          <div class="chat_modal">
            <div class="chat_modal_fixed">
                <p class="chat_modal_title">Most Active</p>
                <swiper class="swiper" :options="swiperOption">
                        <swiper-slide class="swiperslide_btn chat_user_flow">
                            <div v-for="(item, index) in chatdata" :key="index" class="chat_modal_content">
                                <img :src="`${item.chat_user}`" class="chat_user_img">
                                <img src="dot_green.png" class="chat_dot">
                            </div>
                        </swiper-slide>
                </swiper>
                <p class="chat_modal_title">Other Members</p>
            </div>
            <div class="chat_other_modal">
                <div class="socialmedia_search_para" v-for="(item, index) in otherdata" :key="index">
                    <div class="other_modal">
                        <img :src="`${item.image_url}`">
                        <img src="dot_green.png" class="other_dot">
                    </div>
                    <p class="socialmedia_search_title search_para"><b>{{item.name}}</b><br><span class="search_commun"></span>Chief Executive Officer<br>Gecko & Co</p>
                    <div class="search_transmit">
                        <button class="follow_btn" :disabled="!item.follow" @click="selectFollow(index)" :class="{'follow_btn_disable': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                        <router-link to="/socialmedia/socialmedia_messaging_chat">
                          <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}">Message</button>
                        </router-link>
                    </div>
                </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/swiper-bundle.min.css"

  export default {
    name: 'Chat_Members',
    components: {
        Swiper,
        SwiperSlide
    },
    data () {
      return {
        chatdata: [
            {
                chat_user: "chatuser/chat1.png"
            },
            {
                chat_user: "chatuser/chat2.png"
            },
            {
                chat_user: "chatuser/chat3.png"
            },
            {
                chat_user: "chatuser/chat4.png"
            },
            {
                chat_user: "chatuser/chat5.png"
            },
            {
                chat_user: "chatuser/chat6.png"
            },
            {
                chat_user: "chatuser/chat7.png"
            },
        ],
        otherdata: [
            {
                image_url: "Grandma.png",
                name: "Willard Jones",
                follow: true,
            },
            {
                image_url: "Serenity.png",
                name: "Willard Jones",
                follow: true,
            },
            {
                image_url: "Brandie.png",
                name: "Willard Jones",
                follow: true,
            },
            {
                image_url: "Alex Smith.png",
                name: "Willard Jones",
                follow: true,
            },
            {
                image_url: "Lily.png",
                name: "Willard Jones",
                follow: true,
            },
            {
                image_url: "Serenity.png",
                name: "Willard Jones",
                follow: true,
            }
        ],
        swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 0,
        }
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      userProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-mask"){
          this.$emit('user-backdrop');
        }
      },
      handleOpen() {
        this.$emit('handleOpen');
      },
      selectFollow(index) {
      this.otherdata[index].follow = false
    },
    },
  };
</script>
<style>
    .chat_modal {
        margin: 20px;
    }
    .chat_modal_title {
        margin: 0;
        color: #EF8200;
        font-size: 18px;
    }
    .chat_modal_content {
        position: relative;
        margin: 0 20px 0 0;
    }
    .chat_user_img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
    .chat_dot {
        position: absolute;
        bottom: 0;
        right: 5px;
    }
    .chat_user_flow {
        margin: 10px 0;
    }
    .chat_modal_fixed {
        position: fixed;
        width: calc(100% - 40px);
        top: 0;
        background-color: white;
        padding-top: 10px;
        z-index: 1;
    }
    .chat_other_modal {
        margin: 140px 0 100px;
    }
    .other_modal {
        position: relative;
        margin: auto 10px auto 0;
    }
    .other_dot {
        position: absolute;
        right: 0;
        bottom: 0;
    }
    .other_modal img:first-child {
        width: 55px;
        height: 55px;
    }
</style>