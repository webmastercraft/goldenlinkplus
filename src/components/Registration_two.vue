<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <div class="content_ragister">
            <form>
              <h6>Marketing Direction</h6>
             
              <div class="form-group">
                <select class="form-control" id="v">
                  <option>Verticals</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="tc">
                  <option>Traffic Channel</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="ota">
                  <option>Offer Types Accepted</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="ota">
                  <option>Geolocation</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="kt" aria-describedby="kt" placeholder="Keyword Tags">
              </div>
             
              <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description"></textarea>
              </div>
              <router-link to="/paymentoption"  type="submit" class="btn btn-primary next_btn">
                Next
              </router-link>
              <div class="icon_text">
                <div class="later_icon"><small>i’ll do this later <img src="img/later.svg" class="img-fluid"></small></div>
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
  name: "Registration_two",
  components: {
    Navbar,
  },
};
</script>
<style></style>
