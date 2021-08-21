<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/usercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
            </div>
            <div>
              <img src="img/profile.png" class="profile-img" />
            </div>
            <div class="golden-area">
              <p class="golden-title">
                <b v-show="!is_editTitle">{{title}}</b>
                <input type="text" name="" v-model="title" v-show="is_editTitle">
                <img :src="`${!is_editTitle ? img_edit : img_done}`" style="margin-left: 10px;" @click="editTitle">
                <img :src="`${img_cancel}`" v-show="is_editTitle" style="margin-left: 10px;" @click="cancelEditTitle">
              </p>
              <p class="profile-title-year">Year Established:<span> 2010</span></p>
              <p class="profile-title">Company Name:<span> Gloden Link Plus</span></p>
              <p class="profile-title">Company Type:<span> Corporation</span></p>
              <p class="profile-title">Company Size:<span> 1-49 Employees</span></p>
              <p class="profile-title">Business:<span> Acope</span></p>
              <p class="profile-title">Website:<span> www.goldenlinkplus.com</span></p>
              <p class="profile-title">Description:<span><br>Golden Link Plus is a revolutionary sociWe connect businesses & marketers</span></p>
            </div>
            <hr>
            <div class="contact-area">
              <p class="contact-info"><b>Contact Information</b></p>
              <p class="profile-title">Address 1:<span> 10515 Valley Blvd</span></p>
              <p class="profile-title">Address 2:<span> #222</span></p>
              <p class="profile-title">Zip Code:<span> 91731</span></p>
              <p class="profile-title">County / CIty:<span> El Monte</span></p>
              <p class="profile-title">State / Province:<span> California</span></p>
              <p class="profile-title">Country / Region:<span> Unites States</span></p>
              <p class="profile-title">Contact Type:<span> We Chat</span></p>
              <p class="profile-title">Contact ID:<span> GoldenLinkPLus2018</span></p>
              <p class="profile-title">Contact Number:<span> +1626-6848151</span></p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Profile",
  components: {
  },
  data() {
      return { 
        title: "Gloden Link Plus",
        is_editTitle: false,
        img_edit: 'edit.png',
        img_done: 'img/update.svg',
        img_cancel: 'img/cancel.svg',
        old_title: '',
      }
    },
    methods: {
        editTitle() {
          this.old_title = this.title
          this.is_editTitle = !this.is_editTitle;
        },
        cancelEditTitle() {
          this.title = this.old_title
          this.is_editTitle = false
        }
    }
}
</script>
<style>
  
</style>
