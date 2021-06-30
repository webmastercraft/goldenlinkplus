<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar :current=2></navbar>
          <Status :current=3></Status>
          <div class="content_register">
            <form>
              <h6>Add Your Brand</h6>
              <div class="form-group">
                <input type="text" class="form-control" id="brand" aria-describedby="brand name" placeholder="Brand Name">
              </div>
              <div class="form-group toggle-button-cover">
                <span class="toggle-title">Are you brand owner?</span>
                <toggle-button :value="true" :labels="{checked: 'YES', unchecked: 'NO'}" :color="{checked: '#13C8FF', unchecked: '#FF0000', disabled: '#CCCCCC'}" :width=80 :height=30 style='float: right;'/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="placeregistration" aria-describedby="placeofregistration" placeholder="Place of Registration">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="dateregistration" aria-describedby="dateofregistration" placeholder="Date of Registration">
              </div>
              <hr>
              <router-link to="/registration/four"  type="submit" class="btn btn-primary next_btn" tag="button">
                Next
              </router-link>
              <div class="icon_text">
                <div class="later_icon">
                  <router-link to="/registration/four">
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
import Vue from 'vue'; 
import Navbar from '../../layout/Navbar.vue';
import Status from "../../layout/Status.vue";
import ToggleButton from 'vue-js-toggle-button';

Vue.use(ToggleButton)

export default {
  name: "Registration_three",
  components: {
    Navbar,
    Status,
  },
  data() {
      return {
          currentState: false
      }
  }
}
</script>
<style></style>
