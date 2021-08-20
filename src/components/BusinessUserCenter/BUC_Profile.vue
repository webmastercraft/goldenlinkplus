<template>
  <div>
    <div class="container">
        <div class="phone">
          <div class="content content_modal">
            <div class="close_btn">
              <router-link to="/businessusercenter"><i class="fa fa-times-circle" aria-hidden="true"></i></router-link>
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
              <p class="profile-title-year">Year Established:<span> 2018</span></p>
              <p class="profile-title profile-title-buc">Company Name:<span> Gloden Link Plus</span></p>
              <p class="profile-title profile-title-buc">Company Type:<span> S Corporation</span></p>
              <p class="profile-title profile-title-buc">Business Type:<span> Service</span></p>
              <p class="profile-title profile-title-buc">Industry:<span><br>Marketing & Advertising Services ->Internet Marketing Services ->Social Media Marketing Services</span></p>
              <p class="profile-title profile-title-buc">Company Size:<span></span></p>
              <p class="profile-title profile-title-buc">Capital:<span></span></p>
              <p class="profile-title profile-title-buc">Website:<span> www.goldenlinkplus.com</span></p>
              <p class="profile-title profile-title-buc">Description:<span><br> Golden Link Plus is a revolutionary social media marketing platform where businesses and marketers join forces to earn big profits from promoting products and services. GOLD is global with business and marketers connections in the U.S., China and many countries. • Intelligent business matching system • Online marketing self-service system • Online businesses channel promotion quantification system • Online traffic and conversion tracking system</span></p>
            </div>
            <hr>
            <div class="contact-area">
              <p class="profile-title profile-title-buc">Industry Business Chain<br><span>Agency (0)<br>Marketer (0)<br>Ad Exchange/Ad Network (1)<br>Publisher (0)</span></p>
              <p class="profile-title profile-title-buc">Internal Business Chain<br><span>Headquarter (1)<br>Branch (1)</span></p>
            </div>
            <hr>
            <div class="welcome_content buc_profile">
              <div class="menu_content">
                <router-link class="menu_item" v-for="(item) in items" :key="item.rout" :to="`/businessusercenter/${item.rout}`">
                  <div class="">
                      {{item.name}}
                  </div>
                </router-link>
              </div>
            </div>
            <hr>
            <p class="contact-info">Timeline</p>
            <form>
            <input type="text" class="timeline_box" placeholder="What’s on your mind...">
            <input type="submit" class="account_post_btn" value="POST">
            </form>
          </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Profile',
  components: {
  },
  data() {
      return { items: [
          {rout : "brands", name: "My Brands"},
          {rout : "services", name: "My Services"},
          {rout : "certifications", name: "Certifications"},
          {rout : "future_marketing_trends", name: "Future Marketing Trends"},
          {rout : "existing_branches", name: "Existing Branches"}
        ],
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
  .buc_profile {
    padding: 0 15px !important;
  }
  .timeline_box {
    background: #f4f9fe;
    height: 50px;
    border: 0;
    border-radius: 12px;
    padding: 10px 20px;
    width: calc(100% - 84px);
  }

  .timeline_box:focus-visible {
    outline: none;
  }

  .account_post_btn {
    background: #F3921E;
    padding: 15px 80px;
    border-radius: 15px;
    color: white;
    border: 0;
    margin-top: 25px;
    font-weight: 600;
  }

  .profile-title-buc {
    margin: 0 21px 21px 22px  !important;
  }
</style>
