<template>
  <div>
    <div class="container">
      <div class="profile_phone">
        
          <div class="header_modal profile_modal">
            <router-link to="/" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Ana’s GS Profile</a>
          </div>
          <div class="profile_session">
            <div class="profile_header">
              <div class="profile_logo">
                <img src="view_user.png">
                <img src="connect_modal.png">
              </div>
              <div class="profile_price">
                <p><img src="diamond_frame.png">2.6K</p>
                <p><img src="event_coin.png">99.5K</p>
                <p>Conversion Rate<br>80%</p>
              </div>
              <div class="profile_gs_box">
                <div class="profile_box_line">
                  <img src="profile/numbers.png">
                  <img src="profile/gs_grey.png">
                  <img src="profile/gs_orange.png">
                  <img src="profile/warning.png">
                </div>
                <div class="search_transmit btn_positions" v-for="(item, index) in datas" :key="index">
                <button class="follow_btn" :disabled="!item.follow" @click="selectFollow(index)" :class="{'follow_btn_disable': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                  <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}"><img src="airplane.png">Send</button>
                </div>
                <span>Block User</span>
              </div>
            </div>
              <p class="profile_name"><b>Ana Smith</b><span>Follows You</span></p>
              <p class="profile_follow">6.3k followers<span>1.2k following</span></p>
              <div class="profile_icon">
                <img src="profile/facebook.png">
                <img src="profile/twitter.png">
                <img src="profile/instagram.png">
                <img src="profile/youtube.png">
              </div>
              <div class="gs_profile_users">
                <img src="Collen.png">
                <img src="Conniel.png">
                <img src="Geoffrey Mott.png">
              </div>
              <p class="profile_follow">Followed by Chris Evans, Robert Downey, and 2 others</p>
              <div class="gs_profile_solo">
                <img src="Grandma.png">
                <p>Joined Jul 31, 2021<br>Nominated by Scarlett Johannsen</p>
              </div>
              <p class="profile_commun"><b>Communities</b></p>
              <div class="profile_brand">
                <img src="profile/commun6.png">
                <img src="profile/commun7.png">
                <img src="profile/commun8.png">
                <img src="profile/commun9.png">
                <img src="profile/commun10.png">
                <img src="profile/commun4.png">
                <img src="profile/commun11.png">
                <img src="profile/profile_plus.png">
              </div>
              <swiper class="swiper profile_btn" :options="swiperOption">
                  <swiper-slide class="swiperslide_btn"><button>Marketing Direction</button></swiper-slide>
                  <swiper-slide class="swiperslide_btn"><button>More About Ana</button></swiper-slide>
                  <swiper-slide class="swiperslide_btn"><button>Certifications</button></swiper-slide>
                  <swiper-slide class="swiperslide_btn"><button>Reviews</button></swiper-slide>
              </swiper>

              <swiper class="swiper">
                <swiper-slide class="slide_block">
                  <!-- Marketing Direction -->
                    <div class="gs_marketing">
                      <button>Verticals</button>
                      <p>Baby & Toddler, Health & Beauty, Mature, Media, Toys & games</p>
                      <button>Marketing Methods</button>
                      <p>SMS, Social media, News media online,<br>SEM, Landing page design, Influencer</p>
                      <button>Offer Types Accepted</button>
                      <p>CPC, CPS, CPA, CPL, CPI, CPM</p>
                      <button>Geolocation</button>
                      <p>China, United States</p>
                    </div>
                </swiper-slide>

                <swiper-slide class="slide_block">
                  <!-- More about Ana -->
                    <p class="gs_about_title">Chief Executive Office @ APPLESEED Corporation</p>
                    <p class="profile_follow">APPLESEED Corporation, a global conglomerate concentrating in industries of real estate, media and entertainment, sports, retail, IoT, healthcare and more.One of the most attractive early advantages business corporations offered to their investors, compared to earlier business entities like sole proprietorships and general partnerships, was limited liability.[clarification needed] Limited liability means that a passive shareholder in a corporation will not be personally liable either for contractually agreed obligations of the corporation, or for torts (involuntary harms) committed by the corporation against a third party. Limited liability in contract is uncontroversial because the parties to the contract could have agreed to it and could agree to waive it by contract. However, limited liability in tort remains controversial because third parties do not agree to waive the right to pursue shareholders. There is significant concern that limited liability in tort may lead to excessive corporate risk taking and more harm by corporations to third parties.</p>
                </swiper-slide>

                <swiper-slide class="slide_block">
                  <!-- Certifications -->
                    <div class="certificate_desc">
                      <img src="profile/profile_doc.png">
                      <p class="relax_desc"><b>Certification Type:</b><br>Exclusive Marketing Agent<br><b>Certification Number:</b><br>10452563<br><b>Authority of Issue:</b><br>Goldenlinkplus<b><br>Issue Date: </b>09/04/2021<br><b>Expiration Date: </b>09/04/2022<br><b>Description:</b><br>Exclusive Marketing Agent for business</p>
                    </div>
                </swiper-slide>

                <swiper-slide class="slide_block">
                  <!-- Reviews -->
                    <div class="profile_services">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <p class="relax_desc">This marketer works great for my business!<br>Highly recommended</p>
                      <div class="review_user">
                        <img src="profile/review_user.png">
                        <p><b>Willy Williams</b><br>Marketing Head, Detour</p>
                      </div>
                      <hr class="review_hr">
                    </div>
                    <div class="profile_services">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <p class="relax_desc">Woah! My sales rocketed ever since!</p>
                      <div class="review_user">
                        <img src="recommendation/recom_user5.png">
                        <p><b>Jack Hugh</b><br>Owner, Tickles</p>
                      </div>
                      <hr class="review_hr">
                    </div>
                    <div class="profile_services">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <p class="relax_desc">Great job so far I like this GS!</p>
                      <div class="review_user">
                        <img src="recommendation/recom_user3.png">
                        <p><b>Amanda Bright</b><br>CEO, Perfect Shape</p>
                      </div>
                      <hr class="review_hr">
                    </div>
                    <div class="profile_services">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <p class="relax_desc">Thanks for helping my business.This<br>Marketer really cares about your business, I<br>highly recommend!</p>
                      <div class="review_user">
                        <img src="recommendation/recom_user4.png">
                        <p><b>Matt Mackenzie</b><br>CEO, Matt and Mackenzie</p>
                      </div>
                      <hr class="review_hr">
                    </div>
                </swiper-slide>
            </swiper>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/swiper-bundle.min.css"
// import "swiper/css/swiper.css"

export default {
  name: 'Profile_Offers',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return { 
      datas: [
        {
          follow: true
        }
      ],
      swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 10,
      }
    }
  },
  methods: {
    selectFollow(index) {
      this.datas[index].follow = false
    },
  }
}
</script>
<style>
.profile_gs_box {
  width: 130px;
}
.profile_gs_box span {
  float: right;
  font-size: 13px;
  color: #BFC1CE;
}
.profile_name span {
  color: #BFC1CE;
  font-size: 14px;
  margin-left: 20px;
}
.gs_profile_users {
  text-align: left;
  margin: 10px 0;
}
.gs_profile_users img {
  width: 24px;
  height: 24px;
}
.gs_profile_solo {
  display: flex;
}
.gs_profile_solo img {
  width: 24px;
  height: 24px;
  margin: auto 0;
}
.gs_profile_solo p {
  font-size: 12px;
  text-align: left;
  margin: 0 auto 0 10px;
}
.gs_marketing {
  width: 100%;
  text-align: left;
}
.gs_marketing button {
  width: 100%;
  background-color: #E6F7FF;
  text-align: left;
  padding: 0 10px;
  margin: 5px 0;
}
.gs_marketing p {
  margin: 15px 0;
}
.gs_about_title {
  font-size: 16px;
  margin: 10px 0;
  text-align: left;
  letter-spacing: -0.02em;
}
.slide_block {
  display: block !important;
}
.swiperslide_btn {
  width: auto;
}
</style>
<!-- <style lang="scss" scoped>
    @import './base.scss';
</style> -->