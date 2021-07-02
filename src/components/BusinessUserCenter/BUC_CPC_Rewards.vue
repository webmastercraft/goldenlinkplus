<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              CPC Rewards<button @click="showEdit()" :disabled="isShow" :class="{disable: isShow === true}"><i class="fas fa-plus-circle"></i></button>
            </div>
            <div class="content_register" v-if="isShow === true">
              <form>
                <div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      aria-describedby="title"
                      placeholder="Title"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="offer"
                      aria-describedby="offer"
                      placeholder="Offer"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="rewards"
                      aria-describedby="Rewards per Click"
                      placeholder="Rewards per Click"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="datetime"
                      class="form-control"
                      id="begin_date"
                      aria-describedby="begin_date"
                      placeholder="Begin Date"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="datetime"
                      class="form-control"
                      id="end_date"
                      aria-describedby="end_date"
                      placeholder="End Date"
                    />
                  </div>
                </div>
                <button type="button" class="btn btn_cancel" @click="hideEdit()">CANCEL</button>
                <button type="button" class="btn btn_save " @click="saveCPC()">SAVE</button>
              </form>
              <hr>
            </div>
            <div class="offer_btn">
            <button class="btn running_btn">Running</button>
            </div>
            <div class="golden-area brands_top">
              <p class="profile-title profile-title-buc">Title:<span> {{title}}</span></p>
              <p class="profile-title profile-title-buc">Offer:<span> {{offer}}</span></p>
              <p class="profile-title profile-title-buc">Rewards per Click:<span> {{rewards}}</span></p>
              <p class="profile-title profile-title-buc">Begin Date:<span> {{begin_date}}</span></p>
              <p class="profile-title profile-title-buc">End Date:<span> {{end_date}}</span></p>
            </div>
            <hr>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'CPC Rewards',
  components: {
  },
  data () {
    return { 
        isShow: false,
        title: "$300增会增会限限量布限限量布",
        offer: "Random",
        rewards: "$1000",
        begin_date: "07/14/2020",
        end_date: "21:05:00",
    }
  },
  methods: {
    saveCPC() {
      // this.coins.push(coin);
      this.hideEdit();
    },
    showEdit() {
      this.isShow = true;
    },
    hideEdit() {
      this.isShow = false;
    }
  }
}
</script>
<style>
  .upload_img {
    margin: 0 15px 15px !important;
    width: auto !important;
  }

  .running_btn {
    background: #EA7F0B !important;
    text-align: center !important;
    padding: 4px 30px !important;
    width: auto !important;
    float: left;
    margin: 30px 5px 0 22px !important;
  }

  .track_btn {
    background: #39B54A !important;
    text-align: center !important;
    padding: 4px 30px !important;
    width: auto !important;
    float: left;
    margin: 30px 70px 0 5px !important;
  }

  .offer_btn {
    display: flex;
  }
</style>
