<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            <div class="account-title">
              Account Settings
            </div>
            <div class="accordion">
                <div :class="{active: isActive === 1}">
                    <div class="accordion_title" @click="toggleItem(1)">
                        <h6>Contact Information</h6>
                        <div v-if="isActive === 1"><img src="img/accordion_close.png"></div>
                        <div v-else><img src="img/accordion_open.png"></div>
                    </div>
                    <div class="item-active">
                        <p class="profile-title profile-title-buc">Brand Name:<span> Gloden Link Plus</span><button class="remove_btn"><img src="img/remove.png"></button></p>
                        <p class="profile-title profile-title-buc">Brand Ownership:<span> Owned</span></p>
                        <p class="profile-title profile-title-buc">Place of Registration:<span> USA</span></p>
                        <p class="profile-title profile-title-buc">Date of Registration:<span> 06/2011</span></p>
                    </div>
                </div>
                <div :class="{active: isActive === 2}">
                    <div class="accordion_title" @click="toggleItem(2)">
                        <h6>Membership</h6>
                        <div v-if="isActive === 2"><img src="img/accordion_close.png"></div>
                        <div v-else><img src="img/accordion_open.png"></div>
                    </div>
                    <div class="item-active">
                        asdfhsakjdfhsladhflksajhdfsahfaskdfhasldkfjhaslkdjflskadhflskadhflskhdflskad
                        hflsadhflsjadhflsajhdflsjhdflsajhdflksajhdflsahdflsdfsadfsadfsadfsadfsadfsadfsdfsadfsadfsadf
                    </div>
                </div>
                <div :class="{active: isActive === 3}">
                    <div class="accordion_title" @click="toggleItem(3)">
                        <h6>Payment and Financials</h6>
                        <div v-if="isActive === 3"><img src="img/accordion_close.png"></div>
                        <div v-else><img src="img/accordion_open.png"></div>
                    </div>
                    <div class="item-active">
                        asdfhsakjdfhsladhflksajhdfsahfaskdfhasldkfjhaslkdjflskadhflskadhflskhdflskad
                        hflsadhflsjadhflsajhdflsjhdflsajhdflksajhdflsahdflsdfsadfsadfsadfsadfsadfsadfsdfsadfsadfsadf
                    </div>
                </div>
                <div :class="{active: isActive === 4}">
                    <div class="accordion_title" @click="toggleItem(4)">
                        <h6>Account Securitys</h6>
                        <div v-if="isActive === 4"><img src="img/accordion_close.png"></div>
                        <div v-else><img src="img/accordion_open.png"></div>
                    </div>
                    <div class="item-active">
                        asdfhsakjdfhsladhflksajhdfsahfaskdfhasldkfjhaslkdjflskadhflskadhflskhdflskad
                        hflsadhflsjadhflsajhdflsjhdflsajhdflksajhdflsahdflsdfsadfsadfsadfsadfsadfsadfsdfsadfsadfsadf
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      isActive: null
    }
  },
  methods: {
    toggleItem(index) {
        console.log("index", index);
        console.log("this.isActive", this.isActive);
        if(this.isActive === index)
            this.isActive = null;
        else
          this.isActive = index;
    },
  }
};
</script>

<style>
.accordion {
  margin-top: 20px;
  text-align: left;
}
.accordion > div {
    /* margin: 15px; */
}
.accordion .accordion_title {
    display: table;
    width: 100%;
    padding: 20px 30px;
    background-color: #F4F9FE;
    margin-bottom: 5px;
    cursor: pointer;
}
.accordion .accordion_title h6 {
    margin: 0;
    display: table-cell;
    vertical-align: middle;
}
.accordion .accordion_title div {
    display: table-cell;
    vertical-align: middle;
    float: right;
}
.item-active{
  color: green;
  height: 0;
  opacity: 0;
  display: none;
}
.active .item-active {
    will-change: height;
    transition: height 0.2s ease;
    height: auto;
    opacity: 1;
    display: block;
}
/* .active .accordion_title img { */
    /* transform: rotate(90deg); */
/* } */
</style>