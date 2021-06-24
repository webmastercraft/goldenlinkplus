<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <Status :current=3></Status>
          <div class="content_ragister">
            <form>
              <h6>Add Your Brand</h6>
              <div class="form-group">
                <input type="text" class="form-control" id="brand" aria-describedby="brand name" placeholder="Brand Name">
              </div>
              <div class="form-group toggle-button-cover">
                <span>Are you brand owner?</span>
                <div class="button-cover">
                  <div class="button b2" id="button-13">
                    <input type="checkbox" class="checkbox">
                    <div class="knobs">
                      <span></span>
                    </div>
                    <div class="layer"></div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="placeregistration" aria-describedby="placeofregistration" placeholder="Place of Registration">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="dateregistration" aria-describedby="dateofregistration" placeholder="Date of Registration">
              </div>
              <button type="submit" class="btn btn-primary next_btn add">Add more</button>
              <router-link to="/registration_four"  type="submit" class="btn btn-primary next_btn">
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
import Status from "../layout/Status.vue";

export default {
  name: "Registration_three",
  components: {
    Navbar,
    Status
  }
}
</script>
<style></style>
