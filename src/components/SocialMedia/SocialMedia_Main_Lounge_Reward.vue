<template>
    <div class="container">
        <div class="profile_phone">

            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/socialmedia_main_lounge" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>My Rewards</a>
            </div>
            <div class="lounge_reward_modal">
                <div class="lounge_reward_content" v-for="(item, index) in rewarddata" :key="index" @click="setLock(index)">
                    <div class="lounge_click">
                        <img :src="`${item.reward_image}`" class="lounge_reward_content_img" :class="{'lounge_opacity': item.lock}">
                        <img src="lounge/key.png" class="lounge_lock" v-if="item.lock">
                    </div>
                    <p class="lounge_reward_content_p"><img src="frame_diamond2.png" class="lounge_reward_dia"><b>{{item.diamond}}</b></p>
                    <p class="reward_desc">{{item.reward_desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Lounge_Reward',
  components: {
  },
  data () {
    return {
        loungeClicked: false,
        clicked: false,
        rewarddata: [
            {
                reward_image: "lounge/reward.png",
                diamond: "11000",
                reward_desc: "Create One (1) Paid Event",
                lock: false
            },
            {
                reward_image: "lounge/reward.png",
                diamond: "11000",
                reward_desc: "Create Unlimited Communities",
                lock: false
            },
            {
                reward_image: "lounge/reward.png",
                diamond: "11000",
                reward_desc: "Create up to Three (3) Communities",
                lock: false
            },
            {
                reward_image: "lounge/reward.png",
                diamond: "11000",
                reward_desc: "Unlimited Community Admin Rights",
                lock: false
            },
            {
                reward_image: "lounge/reward.png",
                diamond: "11000",
                reward_desc: "Profile Bundle for Events",
                lock: false
            },
            {
                reward_image: "lounge/reward.png",
                diamond: "11000",
                reward_desc: "Admin rights for your events",
                lock: false
            }
        ]
    }
  },
  methods: {
    setLock(index) {
        this.rewarddata[index].lock = !this.rewarddata[index].lock; 
    }
  }
}
</script>
<style>
    .lounge_reward_content {
        width: calc(50% - 10px);
        background: white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 16px;
        margin: 5px;
        padding: 5px 0;
    }
    .lounge_reward_content p {
        margin: 0;
    }
    .lounge_reward_dia {
        width: 18.31px;
        height: 14px;
        margin: 0 5px 2px 0;
    }
    .lounge_reward_modal {
        margin: 80px 20px 0;
        max-width: 414px;
        width: calc(100% - 40px);
        display: flex;
        flex-wrap: wrap;
        height: 100%;
    }
    .reward_desc {
        font-size: 12px;
        letter-spacing: 0.04em;
        margin: 10px 10px 0 !important;
    }
    .lounge_reward_content_img {
        margin-top: 10px;
        width: 130px;
        height: 85px;
        transition-duration: 1s;
    }
    .lounge_reward_content_p {
        margin: 10px auto 0 !important;
    }
    .lounge_opacity {
        opacity: 0.5;
    }
    .lounge_click {
        position: relative;
    }
    .lounge_lock {
        position: absolute;
        top: 17%;
        right: 33%;
        transition-duration: 1.5s;
    }
</style>
