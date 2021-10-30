<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
            <div class="header_modal">
                <router-link to="/socialmedia/socialmedia_main" class="header_arrow">
                    <img src="img/header_arrow.png">
                </router-link>
                <a>#General</a>
                <span class="new_msg_system_done">Done</span>
            </div>
            <div class="new_msg_system_invite">
                <div class="msg_invite_title">
                    <img src="msg_system/user_plus.png">
                    <span>Invite Members</span>
                    <button>Invite Selected</button>
                </div>
                <div class="msg_invite_area">
                    <div v-for="(item, index) in inviteData" :key="index" class="msg_invite_selected">
                        <img :src="`${item.user_img}`" class="msg_invite_user">
                        <span>{{item.user_name}}</span>
                        <img :src="imgSelected(index)" @click="addFriend(index)" class="msg_invite_check">
                    </div>
                </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Search_GS',
  components: {
  },
  data () {
    return { 
        imgClicked: false,
        inviteData: [
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
            {
                user_img: "msg_system/user_2.png",
                user_name: "Carol White",
                addedFriend: true,
            },
        ]
    }
  },
    methods: {
        addFriend(index) {
            this.inviteData[index].addedFriend = !this.inviteData[index].addedFriend
        },
        imgSelected(index) {
            return !this.inviteData[index].addedFriend ? 'community/selected.png' : 'community/none.png'
        },
    }
}
</script>
<style>
    .new_msg_system_done {
        color: #13C8FF;
        font-size: 16px;
        font-weight: 600;
        position: absolute;
        top: 18px;
        right: 20px;
    }
    .new_msg_system_invite {
        margin: 80px 20px 20px;
        border-radius: 12px;
        background: white;
        height: calc(100vh - 100px);
        width: 100%;
    }
    .msg_invite_title {
        position: fixed;
        width: calc(100% - 40px);
        display: flex;
        padding: 15px;
        border-bottom: 1px solid rgba(168, 195, 236, 0.36);
    }
    .msg_invite_title img {
        height: 100%;
        margin: auto 0;
    }
    .msg_invite_title span{
        margin: auto auto auto 5px;
        font-size: 15px;
    }
    .msg_invite_title button {
        color: white;
        background: #EF8200;
        border-radius: 16px;
        padding: 3px 10px;
        margin: auto 0 auto auto;
        font-size: 14px;
    }
    .msg_invite_user {
        width: 32px;
        height: 32px;
        margin: auto 0;
    }
    .msg_invite_area {
        margin: 60px auto auto;
        padding: 15px;
        overflow: auto;
        height: calc(100% - 60px);
    }
    .msg_invite_selected {
        display: flex;
        margin: 10px auto;
    }
    .msg_invite_selected span {
        margin: auto auto auto 20px;
    }
    .msg_invite_check {
        height: 100%;
        margin: auto 0;
    }
</style>
