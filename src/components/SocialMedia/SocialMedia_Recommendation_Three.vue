<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/socialmedia_recommendation_two" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>Connect</a>
                </div>
                <div class="content left-content header_top height_static">
                    <div class="recom_user_padding">
                      <p class="recom_title">Follow new friends to have<br>access to their events...</p>
                      <div class="recom_user_img">
                        <div class="recom_users"  v-for="(item, index) in recomData" :key="index">
                          <img :src="`${item.recom_img}`">
                          <img :src="imgSrc(index)" class="recom_plus" @click="addFriend(index)">
                          <p>{{item.recom_name}}</p>
                        </div>
                      </div>
                      <div>
                        
                        <div class="recom_btn recom_blank">
                          <router-link to="/socialmedia/socialmedia_bs_reg_start">
                            <button>Follow<img class="glplogo_reg_btn_img" src="reg_next.png"/></button>
                          </router-link>
                        </div>
                        <p class="recom_select" @click="selectedAll"><b>{{isSelectedAll?'Deselect all':''}}</b></p>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: 'Recommendation_Three',
    components: {
    },
    data () {
      return {
        isSelectedAll: true,
        recomData: [
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user1.png",
            recom_name: "Melissa Brown"
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user2.png",
            recom_name: "Mary Cross"
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user3.png",
            recom_name: "Dawn Matthews"
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user4.png",
            recom_name: "Victoria Wells"
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user5.png",
            recom_name: "Mary Vaughn  "
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user6.png",
            recom_name: "Elmer Laverty"
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user7.png",
            recom_name: "Victoria Wells"
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user9.png",
            recom_name: "Mary Vaughn  "
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user10.png",
            recom_name: "Elmer Laverty"
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user3.png",
            recom_name: "Dawn Matthews"
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user4.png",
            recom_name: "Victoria Wells"
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user5.png",
            recom_name: "Mary Vaughn  "
          },
        ]
      }
    },
    methods: {  
      displayPlus() {
        this.imgClicked = true;
      },
      selectedAll(){
        this.isSelectedAll = !this.isSelectedAll;
        for (var i = 0; i < this.recomData.length; i++) {
          this.recomData[i].addedFriend = this.isSelectedAll;
        }
      },
      addFriend(index) {
        if (!this.isSelectedAll) {
          this.recomData[index].addedFriend = !this.recomData[index].addedFriend
        }
      },
      imgSrc(index) {
        return !this.recomData[index].addedFriend ? 'recommendation/recom_plus.png' : 'recommendation/recom_tick.png'
      },
    },
    computed: {
    }
}
</script>
<style>

</style>
