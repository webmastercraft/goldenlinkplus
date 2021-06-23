<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <div class="content_ragister">
            <form>
              <h6>Your Company Profile</h6>
              <div class="user-profile">
                <img src="img/user_img.png" class="img-fluid" />
                <span class="plus"
                  ><img src="img/plus.png" class="img-fluid"
                /></span>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="cname"
                  aria-describedby="comname"
                  placeholder="Company Name"
                />
              </div>
              <div class="form-group">
                <select class="form-control" id="year_established">
                  <option>Year Established</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="ctype">
                  <option>Company Type</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="year_established">
                  <option>Company Size</option>
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
                  id="capital"
                  aria-describedby="capital"
                  placeholder="Capital"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="bscore"
                  aria-describedby="bscore"
                  placeholder="Business Scope"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="website"
                  aria-describedby="website"
                  placeholder="Website"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Description"
                ></textarea>
              </div>

              <h6>Contact Information</h6>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  aria-describedby="address"
                  placeholder="Address 1"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  aria-describedby="address"
                  placeholder="Address 2"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="cc"
                  aria-describedby="cc"
                  placeholder="County / City"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="zc"
                  aria-describedby="zc"
                  placeholder="Zip Code"
                />
              </div>
              <div class="form-group">
                <select class="form-control" id="state">
                  <option>State / Province</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="country">
                  <option>Country / Region</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="ctype">
                  <option>Contact Type</option>
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
                  id="ci"
                  aria-describedby="ci"
                  placeholder="Contact ID"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="cn"
                  aria-describedby="cn"
                  placeholder="Contact Number"
                />
              </div>
              <router-link to="/registration_two"  type="submit" class="btn btn-primary next_btn">
                Next
              </router-link>
             
              <div class="icon_text">
                <div class="later_icon">
                  <small>i’ll do this later
                    <img src="img/later.svg" class="img-fluid"
                  /></small>
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
import Navbar from "../layout/Navbar.vue";

export default {
  name: "Registration_one",
  components: {
    Navbar,
  },
};
</script>
<style>
  
</style>
