<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <navbar></navbar>
          <Status :current=7></Status>
          <div class="content_ragister">
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
                <input
                  type="text"
                  class="form-control"
                  id="select-offer"
                  aria-describedby="select-offer"
                  placeholder="Select Offer"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="selected-red-packet-type"
                  aria-describedby="selected-red-packet-type"
                  placeholder="Selected Red Packet Type"
                />
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
import Navbar from "../layout/Navbar.vue";
import Status from "../layout/Status.vue";

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
