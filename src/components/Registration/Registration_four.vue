<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar :current=3></navbar>
          <Status :current=4></Status>
          <div class="content_register">
            <h6>Add Your Products</h6>
            <form>
              <div v-for="index in products_count" :key="index">
                <div class="form-group">
                  <select class="form-control" id="select-brand">
                    <option>Select Brand</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="form-control" id="product_category">
                    <option>Product Category</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="form-control" id="">
                    <option></option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <select class="form-control" id="">
                    <option></option>
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
                <hr>
              </div>
              <button type="button" class="btn btn-primary next_btn add" @click="addProduct">Add more</button>
              <router-link to="/registration/five"  type="submit" class="btn btn-primary next_btn" tag="button">
                Next
              </router-link>
             
              <div class="icon_text">
                <div class="later_icon">
                  <router-link to="/registration/five">
                    <small>i’ll do this later <img src="img/later.svg" class="img-fluid"/></small>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../../layout/Navbar.vue';
import Status from "../../layout/Status.vue";

export default {
  name: "Registration_four",
  components: {
    Navbar,
    Status
  },
  data() {
    return {
      products_count: 1,
    }
  },
  methods: {
    addProduct() {
      this.products_count++;
    }
  }
}
</script>
<style>
  
</style>
