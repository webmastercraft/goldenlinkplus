<template>
  <div>
    <div class="container">
      <div class="phone sociallogin">
        
          <div class="main_audio_modal">
              <div class="logo_header">
                <router-link to="/"><img src="main_logo.png" class="main_logo"></router-link>
                <router-link to="/socialmedia/socialmedia_messaging_messages"><img src="main_box.png"></router-link>
                <router-link to="/socialmedia/socialmedia_main_event_upcoming">
                  <img src="main_calendar.png">
                </router-link>
                <router-link to="/socialmedia/community/socialmedia_community"><img src="main_contact.png" class="main_contact"></router-link>
                <img src="mona.png" class="main_user" @click="showSwitchGsAccount">
              </div>
              <p class="community_favicon"><img src="community.png" class="favicon_img">RECENT ACTIVITY<img src="community/setting.png" class="setting_img" @click="showIndustry"></p>
          </div>
          <div class="community_feed_link_area">
            <div v-for="(item, index) in linkData" :key="index" class="feed_link_data">
              <router-link to="/socialmedia/community/socialmedia_community" class="feed_link_data_a">
                <img :src="`${item.brand_img}`" class="feed_link_brand_img">
                <p class="feed_link_p">
                  <span class="feed_link_group_span"><span>{{item.group_name}}</span><img src="triangle.png"></span>
                  <span class="feed_link_member_span">{{item.member_number}} Members</span>
                  <span class="feed_link_view_span"><img :src="`${item.view_img}`"><span>{{item.view_text}}</span></span>
                  <span class="feed_link_title_span">{{item.title}}</span>
                </p>
              </router-link>
              <button class="feed_link_join" :class="`${item.join_status_class}`" @click="updateJoin(index)">{{item.join_status_class}}</button>
            </div>
          </div>
          <SwitchGsAccount 
            v-show="f_show_switch_gs_account"
            @close="closeModal"
          >
          </SwitchGsAccount>
          <Toggle 
              v-show="f_show_toggle"
              @close="closeViewProfile"
              @view-backdrop="closeViewProfile"
          >
          </Toggle>
          <Industry 
              v-show="f_show_industry"
              @view-backdrop="closeViewProfile"
              @showIndustrySystem1="industrySystem1"
              @showIndustrySystem2="industrySystem2"
              @showIndustrySystem3="industrySystem3"
          >
          </Industry>
          <IndustrySystem1 
              v-show="f_industry_system1"
              @close="backIndustrySystem1"
              @view-backdrop="closeViewProfile"
          >
          </IndustrySystem1>
          <IndustrySystem2 
              v-show="f_industry_system2"
              @close="backIndustrySystem2"
              @view-backdrop="closeViewProfile"
          >
          </IndustrySystem2>
          <IndustrySystem3
              v-show="f_industry_system3"
              @close="backIndustrySystem3"
              @view-backdrop="closeViewProfile"
          >
          </IndustrySystem3>
      </div>
    </div>
  </div>
</template>
<script>
import SwitchGsAccount from "../../../modal/switch_gs_account.vue";
import Toggle from "../../../modal/toggle.vue";
import Industry from "../../../modal/manage_com.vue";
import IndustrySystem1 from "../../../modal/membership_com.vue";
import IndustrySystem2 from "../../../modal/membership_leave.vue";
import IndustrySystem3 from "../../../modal/membership_follow.vue";

export default {
  name: 'Audio_Event',
  components: {
    Industry,
    IndustrySystem1,
    IndustrySystem2,
    IndustrySystem3,
    SwitchGsAccount,
    Toggle,
  },
  data() {
    return {
      f_show_industry: false,
      f_industry_system1: false,
      f_industry_system2: false,
      f_industry_system3: false,
      f_show_switch_gs_account: false,
      f_show_toggle: false,
      linkData: [
        {
          brand_img: "community/brand1.png",
          group_name: "Elite Marketing Group",
          member_number: "288K",
          view_img: "community/grey_lock.png",
          view_text: "Private Community",
          title: "Welcome to Elite Marketing Community",
          join_status_class: 'join',
          join_status: 0
        },
        {
          brand_img: "community/brand2.png",
          group_name: "4M Future Marketing",
          member_number: "1.3M",
          view_img: "community/grey_eye.png",
          view_text: "Public Community ",
          title: "THE FUTURE IS HERE",
          join_status_class: 'join',
          join_status: 0
        },
        {
          brand_img: "community/brand3.png",
          group_name: "Boom Promoters Inc",
          member_number: "50K",
          view_img: "community/grey_eye.png",
          view_text: "Public Community ",
          title: "Kabooom! Welcome!",
          join_status_class: 'join',
          join_status: 0
        },
        {
          brand_img: "community/brand4.png",
          group_name: "Goldrushers",
          member_number: "125K",
          view_img: "community/grey_eye.png",
          view_text: "Public Community ",
          title: "The goldrush is here!",
          join_status_class: 'join',
          join_status: 0
        },
        {
          brand_img: "community/brand1.png",
          group_name: "Elite Marketing Group",
          member_number: "288K",
          view_img: "community/grey_lock.png",
          view_text: "Private Community",
          title: "Welcome to Elite Marketing Community",
          join_status_class: 'join',
          join_status: 0
        },
        {
          brand_img: "community/brand2.png",
          group_name: "4M Future Marketing",
          member_number: "1.3M",
          view_img: "community/grey_eye.png",
          view_text: "Public Community ",
          title: "THE FUTURE IS HERE",
          join_status_class: 'join',
          join_status: 0
        },
        {
          brand_img: "community/brand3.png",
          group_name: "Boom Promoters Inc",
          member_number: "50K",
          view_img: "community/grey_eye.png",
          view_text: "Public Community ",
          title: "Kabooom! Welcome!",
          join_status_class: 'join',
          join_status: 0
        },
        {
          brand_img: "community/brand4.png",
          group_name: "Goldrushers",
          member_number: "125K",
          view_img: "community/grey_eye.png",
          view_text: "Public Community ",
          title: "The goldrush is here!",
          join_status_class: 'join',
          join_status: 0
        },
      ]
    }
  },
  methods: {
    closeModal() {
      this.f_show_switch_gs_account = false;
      this.f_show_toggle = false;
      this.isModalVisible = false;
    },
    showIndustry() {
        this.f_show_industry = true;
    },
    industrySystem1() {
        this.f_industry_system1 = true;
    },
    industrySystem2() {
        this.f_industry_system2 = true;
    },
    industrySystem3() {
        this.f_industry_system3 = true;
    },
    showToggle() {
        this.f_show_toggle = true;
    },
    showSwitchGsAccount() {
      this.f_show_switch_gs_account = true;
    },
    closeViewProfile() {
      this.f_show_toggle = false;
      this.f_show_industry = false;
      this.f_industry_system1 = false;
      this.f_industry_system2 = false;
      this.f_industry_system3 = false;
    },
    backIndustrySystem1() {
        this.f_industry_system1 = false;
    },
    backIndustrySystem2() {
        this.f_industry_system2 = false;
    },
    backIndustrySystem3() {
        this.f_industry_system3 = false;
    },
    updateJoin(index) {
      this.linkData[index].join_status++;
      this.linkData[index].join_status = this.linkData[index].join_status % 3;
      if (this.linkData[index].join_status == 0) {
        this.linkData[index].join_status_class = 'join';
      } else if (this.linkData[index].join_status == 1) {
        this.linkData[index].join_status_class = 'pending';
      } else if (this.linkData[index].join_status == 2) {
        this.linkData[index].join_status_class = 'joined';
      }
    }
  }
}
</script>
<style>
  .community_feed_link_area {
    background: white;
    padding: 0 15px;
    margin: 90px auto auto;
    width: 100%;
  }
  .feed_link_data {
    display: flex;
    margin: 5px auto;
    width: 100%;
  }
  .feed_link_p {
    display: grid;
    margin: auto auto auto 0;
    text-align: left;
  }
  .feed_link_brand_img {
    height: 100%;
    margin: 0 15px auto 0;
    width: 48px;
    height: 48px;
  }
  .feed_link_group_span {
    font-size: 15px;
    font-weight: 600;
    display: flex;
  }
  .feed_link_group_span img {
    margin-left: 5px;
    width: 13px;
    height: 22px;
  }
  .feed_link_member_span {
    font-size: 13px;
  }
  .feed_link_view_span {
    color: #808695;
    font-size: 13px;
    display: flex;
  }
  .feed_link_view_span img {
    width: 11px;
    margin: auto 5px auto 0;
  }
  .feed_link_view_span span {
    margin: auto auto auto 0;
  }
  .feed_link_title_span {
    font-size: 14px;
  }
  .feed_link_join {
    margin: auto 0 auto auto;
    border-radius: 16px;
    padding: 3px 0;
    width: 90px;
    font-size: 14px;
    text-transform: uppercase;
  }
  .feed_link_join.join {
    background-color: #13C8FF;
    color: white;
    border-radius: 16px;
    padding: 3px 0;
    width: 90px;
    font-size: 14px;
    text-transform: uppercase;
  }
  .feed_link_join.pending {
    background: #E8F1FA;
    color: grey;
    border-radius: 16px;
    padding: 5px 0;
    width: 90px;
    font-size: 14px;
    text-transform: uppercase;
  }
  .feed_link_join.joined {
    background: white;
    border: 1px solid #13C8FF;
    color: #13C8FF;
    border-radius: 16px;
    padding: 3px 0;
    width: 90px;
    font-size: 14px;
    text-transform: uppercase;
  }
  .feed_link_data_a {
    display: flex;
    width: calc(100% - 90px);
  }
</style>
 