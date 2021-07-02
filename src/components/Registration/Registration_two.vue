<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar :current=1></navbar>
          <Status :current=2></Status>
          <div class="content_register full_content">
            <form>
              <h6>Your Internal Business Role</h6>
             
              <div class="form-group s_filed">
                <input type="Search" class="form-control" id="kt" aria-describedby="kt" placeholder="Search Location">
                <span class="search_p"><button type="button" @click="showModal"><img src="img/plus_search.svg"></button></span>
              </div>
             
              <div class="form-group">
                <img src="img/map.png" class="img-fluid">
              </div>
              <Modal
                v-show="isModalVisible"
                @close="closeModal"
              />
              <router-link to="/registration/three"  type="submit" class="btn btn-primary next_btn" tag="button">
                Next
              </router-link>
              <div class="icon_text">
                <div class="later_icon">
                  <router-link to="/registration/three">
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
import Modal from "../../modal/map_internal.vue";

export default {
  name: "Registration_two",
  components: {
    Navbar,
    Status,
    Modal
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>
<style></style>
