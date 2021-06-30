<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <Status :current=1></Status>
          <div class="content_register">
            <form>
              <h6>Your External Business Role</h6>
              
              <div class="form-group wrapper">
                <div class="box user-profile">
                  <img src="img/user_img.png" class="img-fluid" />
                  <div class="upload-options">
                    <label>
                      <input type="file" class="image-upload" accept="image/*" />
                    </label>
                  </div>
                </div>
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
                  <option>Business Type</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="choose_industry">
                  <option>Choose Industry</option>
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
                <select class="form-control" id="external_business_role">
                  <option>External Business Role</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="company_size">
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
                  id="website"
                  aria-describedby="website"
                  placeholder="Website"
                />
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
                <textarea
                  class="form-control"
                  id="keywords"
                  rows="3"
                  placeholder="Keywords"
                ></textarea>
              </div>
              <hr>
              <router-link to="/registration/two"  type="submit" class="btn btn-primary next_btn" tag="button">
                Next
              </router-link>
             
              <div class="icon_text">
                <div class="later_icon">
                  <router-link to="/registration/two">
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
  name: "Registration_one",
  components: {
    Navbar,
    Status
  }
}
</script>
<style>
  
</style>
