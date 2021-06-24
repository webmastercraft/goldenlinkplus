<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <Status :current=2></Status>
          <div class="content_ragister">
            <form>
              <h6>Your Internal Business Role</h6>
             
              <div class="form-group s_filed">
                <input type="Search" class="form-control" id="kt" aria-describedby="kt" placeholder="Search Location">
                <span class="search_p"><a href="#"><img src="img/plus_search.svg"></a></span>
              </div>
             
              <div class="form-group">
                <img src="img/map.png" class="img-fluid">
              </div>
              <router-link to="/registration_three"  type="submit" class="btn btn-primary next_btn" tag="button">
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
  name: "Registration_two",
  components: {
    Navbar,
    Status
  }
}
</script>
<style></style>
