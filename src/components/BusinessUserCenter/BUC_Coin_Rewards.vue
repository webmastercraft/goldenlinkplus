<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              G-Coin Rewards<button @click="showEdit()" :disabled="isShow" :class="{disable: isShow === true}"><i class="fas fa-plus-circle"></i></button>
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
                      v-model="title"
                    />
                  </div>
                  <div class="form-group">
                    <select class="form-control" id="select_offer" v-model="offer">
                      <option value="null" disabled selected>Select Offer</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="form-control" id="select_red_packet_type" v-model="packet_type">
                      <option value="null" disabled selected>Select Red Packet Type</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="copies-issued"
                      aria-describedby="copies-issued"
                      placeholder="Copies Issued"
                      v-model="copies"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="datetime-local"
                      class="form-control"
                      id="effective-date"
                      aria-describedby="effective-date"
                      placeholder="Effective Date"
                      v-model="date"
                    />
                  </div>
                </div>
                <button type="button" class="btn btn_cancel" @click="hideEdit()">CANCEL</button>
                <button type="button" class="btn btn_save " @click="saveCoin()">SAVE</button>
              </form>
              <hr>
            </div>
            <div v-for="(coin, index) in coins" :key="index">
              <div class="offer_btn">
                <button class="btn running_btn">Running</button>
              </div>
              <div class="golden-area brands_top">
                <p class="profile-title profile-title-buc">Offer:<span> {{coin.offer}}</span></p>
                <p class="profile-title profile-title-buc">Packet Type:<span> {{coin.packet_type}}</span></p>
                <p class="profile-title profile-title-buc">Amount:<span> {{coin.amount}}</span></p>
                <p class="profile-title profile-title-buc">Copies Issued:<span> {{coin.copies}}</span></p>
                <p class="profile-title profile-title-buc">Effectivity Date:<span> {{coin.date}}</span></p>
              </div>
              <hr>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Coin_Rewards',
  components: {
  },
  data () {
    return { 
        isShow: false,
        title: null,
        offer: null,
        packet_type: null,
        copies: null,
        date: null,
        coins: [
          {
            offer: "$300增会增会限限量布限限量布",
            packet_type: "Random",
            amount: "$1000",
            copies: "200",
            date: "07/14/2020 21:05:00",
          },
          {
            offer: "$300增会增会限限量布限限量布",
            packet_type: "Random",
            amount: "$1000",
            copies: "200",
            date: "07/14/2020 21:05:00",
          }
        ]
    }
  },
  methods: {
    saveCoin(e) {
      if (!this.title && !this.offer && !this.packet_type && !this.copies && !this.date ) 
        return false;
      let coin = {
        offer: this.offer,
        packet_type: this.packet_type,
        amount: this.title,
        copies: this.copies,
        date: this.date,
      }
      this.coins.push(coin);
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
