<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            
            <div class="account-title">
              Marketing Channel
            </div>
            <div class="search_field">
              <input type="Search" id="keytext" class="form-control" aria-describedby="keytext" placeholder="Search Location">
              <span class="search_p"><button type="button" @click="showModal"><img src="img/plus_search.svg"></button></span>
            </div>
             
            <div class="form-group">
              <img src="img/map.png" class="img-fluid">
            </div>
          </div>
          <Modal
            v-show="isModalVisible"
            @close="closeModal"
          />
        </div>
    </div>
  </div>
</template>
<script>
import Modal from "../../modal/map_marketing.vue";

export default {
  name: "BUC_Marketing_Channel",
  components: {
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
<style>
  
</style>
