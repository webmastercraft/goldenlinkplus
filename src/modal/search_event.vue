<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-mask" v-on:click.self="userProfileBackdrop">
      <div class="share_event_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="event_setting_position"
          id="modalTitle"
        >
            <div class="invite_modal">
                <div class="invite_find search_find">
                        <input type="search" placeholder="Find People" class="form-control">
                        <img src="Search_modal.png">
                </div>
                <div class="invite_users_search">
                  <div v-for="(item, index) in HostData" :key="index" class="invite_user_search">
                    <div class="background-Image">
                        <img :src="`${item.host_img}`">
                    </div>
                    <span>{{item.host_name}}</span>
                  </div>
                </div>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Search_Event',
    data () {
      return {
            HostData: [
                {
                    host_img: "Grandma.png",
                    host_name: "Jean",
                },
                {
                    host_img: "Jean_Smith.png",
                    host_name: "Priscilla",
                },
                {
                    host_img: "Judith.png",
                    host_name: "Serenity",
                },
                {
                    host_img: "Kathry.png",
                    host_name: "Jean",
                },
                {
                    host_img: "Lily.png",
                    host_name: "Savannah",
                },
                {
                    host_img: "Susan Boyle.png",
                    host_name: "Colleen",
                },
                {
                    host_img: "Savannah.png",
                    host_name: "Tanya",
                },
                {
                    host_img: "Brandie.png",
                    host_name: "Kathryn",
                },
                {
                    host_img: "Alex Smith.png",
                    host_name: "Brandie",
                },
                {
                    host_img: "esther.png",
                    host_name: "Irma",
                },
                {
                    host_img: "view_user.png",
                    host_name: "Philip",
                },
                {
                    host_img: "Susan_Doyle.png",
                    host_name: "Shane",
                },
                {
                    host_img: "Kathry.png",
                    host_name: "Jean",
                },
                {
                    host_img: "Lily.png",
                    host_name: "Savannah",
                },
                {
                    host_img: "Susan Boyle.png",
                    host_name: "Colleen",
                },
                {
                    host_img: "Savannah.png",
                    host_name: "Tanya",
                },
                {
                    host_img: "Savannah.png",
                    host_name: "Tanya",
                },
                {
                    host_img: "Brandie.png",
                    host_name: "Kathryn",
                },
                {
                    host_img: "Alex Smith.png",
                    host_name: "Brandie",
                },
                {
                    host_img: "esther.png",
                    host_name: "Irma",
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
                console
                this.$emit('user-backdrop');
            }
        },
    },
  };
</script>
<style>
    .search_find {
        position: relative;
        margin: 20px 20px 10px !important;
    }
    .search_find img {
        position: absolute;
        right: 20px !important;
        top: 13px;
    }
    .invite_users_search {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        text-align: center;
    }
    .invite_user_search {
        width: 25%;
        display: grid;
        margin: auto;
        height: 100px;
        padding: 0 5px;
    }
    .invite_user_search img {
        margin: 10px auto auto;
        width: 56px;
        height: 56px;
    }
    .invite_user_search span {
        margin: 0;
    }
</style>
