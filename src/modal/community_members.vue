<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-mask upcoming_modal_position" v-on:click.self="userProfileBackdrop">
      <div class="event_invite_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="event_invite_body"
          id="modalTitle"
        >
            <div class="community_members_area">
                <p class="community_members_title">All members</p>
                <hr class="community_members_hr">
                <p class="community_members_title">Selected</p>
                <div class="community_members_selected">
                    <img src="community/community_user.png" class="community_members_user">
                    <span>Alice Wilson</span>
                    <img src="img/remove1.png" class="community_members_remove">
                </div>
                <hr class="community_members_hr">
                <div class="profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder="Enter Name"
                      value=""
                    />
                </div>
                <div class="community_members_selected" v-for="(item, index) in memberData" :key="index">
                    <img :src="`${item.user_logo}`" class="community_members_user">
                    <span>{{item.user_name}}</span>
                    <img :src="imgSelected(index)" class="community_members_remove" @click="addFriend(index)">
                </div>
            </div>
            
        </header>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Community_Members',
    components: {
      
    },
    data () {
      return {
        imgClicked: false,
        memberData: [
            {
                user_logo: "community/community_user.png",
                user_name: "Alice Wilson",
                addedFriend: true,
            },
            {
                user_logo: "community/community_user.png",
                user_name: "Alice Wilson",
                addedFriend: true,
            },
            {
                user_logo: "community/community_user.png",
                user_name: "Alice Wilson",
                addedFriend: true,
            },
            {
                user_logo: "community/community_user.png",
                user_name: "Alice Wilson",
                addedFriend: true,
            },
            {
                user_logo: "community/community_user.png",
                user_name: "Alice Wilson",
                addedFriend: true,
            },
            {
                user_logo: "community/community_user.png",
                user_name: "Alice Wilson",
                addedFriend: true,
            },
        ]
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
      addFriend(index) {
          this.memberData[index].addedFriend = !this.memberData[index].addedFriend
      },
      imgSelected(index) {
        return !this.memberData[index].addedFriend ? 'community/selected.png' : 'community/none.png'
      },
    },
  };
</script>
<style>
    .community_members_area {
        margin: 20px 15px;
    }
    .community_members_title {
        margin: 10px;
        font-size: 16px;
    }
    .community_members_selected {
        display: flex;
        margin: 15px auto 0;
        font-size: 15px;
    }
    .community_members_selected span {
        margin: auto auto auto 0;
    }
    .community_members_user {
        width: 32px;
        height: 32px;
        margin: auto 20px auto 0;
    }
    .community_members_remove {
        margin: auto 0 auto auto;
        height: 100%;
    }
    .community_members_hr {
        margin: 20px auto;
    }
</style>
