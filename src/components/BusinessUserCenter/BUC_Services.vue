<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title  marketing_plus">
              My Services<button @click="showEdit()" :disabled="isShow" :class="{disable: isShow === true}"><i class="fas fa-plus-circle"></i></button>
            </div>
            <div class="content_register" v-if="isShow === true">
              <form>
                <div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      aria-describedby="product name"
                      placeholder="Title"
                    />
                  </div>
                  <div class="form-group">
                    <select class="form-control" id="select-brand">
                      <option disabled selected>Select Offer</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="form-control" id="product_category">
                      <option disabled selected>Product Category</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="form-control" id="">
                      <option disabled selected></option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="form-control" id="">
                      <option disabled selected></option>
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
                      id="product name"
                      aria-describedby="product name"
                      placeholder="Product Name"
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
                    <input
                      type="text"
                      class="form-control"
                      id="item_number"
                      aria-describedby="item_number"
                      placeholder="Item Number"
                    />
                  </div>
                  <div class="form-group wrapper">
                    <div class="box">
                      <div class="js--image-preview"></div>
                      <div class="upload-options">
                        <label>
                          <input type="file" class="image-upload" accept="image/*" />
                        </label>
                      </div>
                    </div>

                    <div class="box video">
                      <div class="js--image-preview"></div>
                      <div class="upload-options">
                        <label>
                          <input type="file" class="image-upload" accept="image/*" />
                        </label>
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
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="description"
                      rows="3"
                      placeholder="Description"
                    ></textarea>
                  </div>
                </div>
                <button type="button" class="btn btn_cancel" @click="hideEdit()">CANCEL</button>
                <button type="button" class="btn btn_save " @click="addProduct()">SAVE</button>
              </form>
              <hr>
            </div>
            <div class="golden-area brands_top" v-for="(product, index) in products" :key="index">
              <p class="profile-title profile-title-buc">Brand Name:<span> {{product.brand_name}}</span><button @click="removeProduct(index)" class="remove_btn"><img src="img/remove.png"></button></p>
              <p class="profile-title profile-title-buc">Product Category:<span><br> {{product.product_category}}</span></p>
              <p class="profile-title profile-title-buc">Product Name:<span> {{product.product_name}}</span></p>
              <p class="profile-title profile-title-buc">Price:<span> {{product.price}}</span></p>
              <p class="profile-title profile-title-buc">Min Qty Per Order:<span> {{product.min_qty}}</span></p>
              <p class="profile-title profile-title-buc">Service Item:<span> {{product.service_item}}</span></p>
              <p class="profile-title profile-title-buc">URL:<span> {{product.url}}</span></p>
              <p class="profile-title profile-title-buc">Uploaded Files:</p>
              <div class="form-group thumbnails upload_img">
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
                <div><img src=""></div>
              </div>
              <p class="profile-title profile-title-buc description">Description:<span><br> {{product.description}}</span></p>
              <hr>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Services',
  components: {
  },
  data () {
    return { 
        isShow: false,
        products: [
          {
            brand_name: "Golden Link Plus",
            product_category: "Marketing & Advertising Services->Public Relation Services->Public Relation Agencies",
            product_name: "Referral program",
            price: "$1000",
            min_qty: "1000",
            service_item: "CPL",
            url: "",
            uploaded_files: [],
            description: "We all know that becoming a sole distributor in business is very difficult. But in Golden Link+ you have a lot of opportunities to become the Sole marketing distributors for many businesses so easily. That is a great way you increase your income on GOLD.\n\nWe award each registrant with a $5 credit, plus another dollar ($1) credit with each referral you make.\n\n$1000 rewards is the limit. After that you will grow you social media influrence, plus benefit to sucess."
          },
          {
            brand_name: "Golden Link Plus",
            product_category: " Marketing & Advertising Services",
            product_name: "Social Media Marketing Platform",
            price: "$300",
            min_qty: "1",
            service_item: "Performance Marketing",
            url: "http://goldenlinkplus....",
            uploaded_files: [],
            description: "Golden Link Plus is a revolutionary social media marketing platform where businesses and marketers join forces to earn big profits from promoting products and services. GOLD is global with business and marketers connections in the U.S., China and many countries.\n • Intelligent business matching system \n • Online marketing self-service system\n• Online businesses channel promotion quantification system\n• Online traffic and conversion tracking system"
          },
        ]
    }
  },
  methods: {
    removeProduct(index) {
      this.$delete(this.products,index)
    },
    addProduct() {
      // this.products.push(product);
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
</style>
