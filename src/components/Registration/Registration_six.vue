<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar :current=5></navbar>
          <Status :current=6></Status>
          <div class="content_register">
            <form>
              <h6>Create Offer</h6>
              
              <div class="form-group">
                <select class="form-control" id="select-product">
                  <option>Select Product</option>
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
                  <option>Select Offer Type</option>
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
              <router-link to="/registration/seven"  type="submit" class="btn btn-primary next_btn" tag="button">
                Next
              </router-link>
             
              <div class="icon_text">
                <div class="later_icon">
                  <router-link to="/registration/seven">
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
  name: "Registration_six",
  components: {
    Navbar,
    Status
  }
}
</script>
<style>
  
</style>
