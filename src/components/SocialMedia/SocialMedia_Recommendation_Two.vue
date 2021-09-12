<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/socialmedia_recommendation_one" class="header_arrow"><img src="img/header_arrow.png"></router-link>
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
                        <p class="recom_great">Great! Looking good...</p>
                        <div class="recom_btn">
                          <router-link to="/socialmedia/socialmedia_recommendation_three">
                            <button>CONTINUE...</button>
                          </router-link>
                        </div>
                        <p class="recom_select" @click="selectedAll"><b>{{isSelectedAll?'or select individually':'Select All'}}</b></p>
                      </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: 'Recommendation_Two',
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
            recom_img: "recommendation/recom_user8.png",
            recom_name: "Mary Vaughn  "
          },
          {
            addedFriend: true,
            recom_img: "recommendation/recom_user9.png",
            recom_name: "Elmer Laverty"
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
.recom_user_padding {
  padding: 50px 40px;
  text-align: center;
}
.recom_users {
  width: 33.33%;
  padding: 10px;
  position: relative;
}
.recom_users p {
  margin: 0;
  font-size: 14px;
  margin: 10px 0 0;
}
.recom_user_img {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 20px;
  height: 255px;
  overflow: auto;
}
.recom_great {
  text-align: center;
  margin: auto auto 15px;
  font-size: 15px;
}
.recom_plus {
  position: absolute;
  left: 18px;
  top: 50px;
  width: 20px;
  height: 20px;
}
.recom_select {
  margin: 40px 0 0;
  font-size: 15px;
  color: #13C8FF;
}
.recom_blank {
  margin: 45px auto auto;
}
</style>
