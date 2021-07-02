<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              My Offers<button @click="showEdit()" :disabled="isShow" :class="{disable: isShow === true}"><i class="fas fa-plus-circle"></i></button>
            </div>
            <div class="content_register" v-if="isShow === true">
              <form>
                <div class="form-group">
                  <select class="form-control" id="select-product">
                    <option disabled selected>Select Product</option>
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
                    id="title"
                    aria-describedby="title"
                    placeholder="Title"
                  />
                </div>
                
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="preview-url"
                    aria-describedby="preview-url"
                    placeholder="Preview URL"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="price"
                    aria-describedby="price"
                    placeholder="Price"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="minimum quantity per order"
                    aria-describedby="minimum quantity per order"
                    placeholder="Minimum Quantity per Order"
                  />
                </div>
                <div class="form-group">
                  <select class="form-control" id="select_offer_type">
                    <option disabled selected>Select Offer Type</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="description"
                    rows="3"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="offer-commission"
                    aria-describedby="offer-commission"
                    placeholder="Offer Commission"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="cpc"
                    aria-describedby="cpc"
                    placeholder="CPC"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="targeted-locations"
                    aria-describedby="targeted-locations"
                    placeholder="Targeted Locations"
                  />
                </div>
                <div class="form-group">
                  <div class="image-title">Upload Banners</div>
                  <div class="image-content">
                    <div>
                      <div class="js--image-preview for-image"></div>
                      <div class="upload-options for-upload">

                        <label>
                          <input type="file" class="image-upload" accept="image/*" />
                        </label>
                      </div>
                    </div>
                    <div>
                      <div>Recommended size</div>
                      <div class="for-size">
                        <div>
                          <p>300 * 250px</p>
                          <p>250 * 250px</p>
                          <p>180 * 150px</p>
                          <p>300 * 100px</p>
                        </div>
                        <div>
                          <p>728 * 90px</p>
                          <p>160 * 600px</p>
                          <p>120 * 600px</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group thumbnails">
                  <div><img src=""></div>
                  <div><img src=""></div>
                  <div><img src=""></div>
                  <div><img src=""></div>
                  <div><img src=""></div>
                </div>
                <hr>
                <button type="button" class="btn btn_cancel" @click="hideEdit()">CANCEL</button>
                <button type="button" class="btn btn_save " @click="saveOffer()">SAVE</button>
              </form>
            </div>
            
            <div class="offer_btn">
              <button class="btn running_btn">Running</button>
              <button class="btn track_btn">TRACK</button>
            </div>
            <div class="golden-area brands_top">
              <p class="profile-title profile-title-buc">Title:<span> {{title}}</span></p>
              <p class="profile-title profile-title-buc">Product:<span><br> {{product}}</span></p>
              <p class="profile-title profile-title-buc">Preview URL:<span>{{preview_url}}</span></p>
              <p class="profile-title profile-title-buc">Type:<span> {{type}}</span></p>
              <p class="profile-title profile-title-buc">Description:<span><br>{{description}}</span></p>
              <p class="profile-title profile-title-buc">Offer Commission:<span> {{commission}}</span></p>
              <p class="profile-title profile-title-buc">CPC:<span> {{cpc}}</span></p>
              <p class="profile-title profile-title-buc">Targeted Locations:<span> {{location}}</span></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Offers',
  components: {
  },
  data () {
    return { 
        isShow: false,
        title: "$300增会增会限限量布限限量布",
        product: "Social Media Marketing",
        preview_url: "",
        type: "CPS",
        description: "$300 增会员 （Premium member）\n限佣金惠offer\n1 G-Coins/CPC\n8895 G-Coins/CPS\n同 时保留推荐将10% 现金奖励",
        commission: "50",
        cpc: "0",
        location: "Global",
    }
  },
  methods: {
    saveOffer() {
      // this.offers.push(offer);
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
