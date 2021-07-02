<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar :current=6></navbar>
          <Status :current=7></Status>
          <div class="content_register">
            <form>
              <h6>Add G-coin Rewards</h6>
              
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
                <select class="form-control" id="select_offer">
                  <option disabled selected>Select Offer</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <select class="form-control" id="select_red_packet_type">
                  <option disabled selected>Select Red Packet Type</option>
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
                  id="copies-issued"
                  aria-describedby="copies-issued"
                  placeholder="Copies Issued"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="effective-date"
                  aria-describedby="effective-date"
                  placeholder="Effective Date"
                />
              </div>
              <hr>
              
              <button type="submit" class="btn btn-primary next_btn">FINISH</button>
             
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
  name: "Registration_seven",
  components: {
    Navbar,
    Status
  }
}
</script>
<style>
  
</style>
