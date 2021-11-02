<template>
  <div>
    <div class="container">
      <div class="profile_phone">
        
          <div class="header_modal profile_modal">
            <router-link to="/socialmedia/socialmedia_main_lounge_bs" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Ana’s Business Profile</a>
          </div>
          <div class="profile_session">
            <div class="profile_header">
              <div class="profile_logo">
                <img src="profile/profile_logo.png">
                <img src="connect_modal.png">
              </div>
              <div class="profile_price">
                <p><img src="diamond_frame.png">2.6K</p>
                <p><img src="event_coin.png">99.5K</p>
                <p>Sales Revenue<br>$1,000,000</p>
              </div>
              <div class="profile_box">
                <div class="profile_box_line">
                  <img src="profile/star_grey.png">
                  <img src="profile/star_orange.png">
                  <img src="profile/warning.png">
                </div>
                <div class="search_transmit btn_positions" v-for="(item, index) in datas" :key="index">
                <button class="follow_btn" :disabled="!item.follow" @click="selectFollow(index)" :class="{'follow_btn_disable': item.follow == false}">{{ item.follow ? 'Follow' : 'Following' }} <img src="contact.png" v-show="item.follow"></button>
                  <router-link to="/socialmedia/socialmedia_messaging_chat">
                    <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}">Message</button>
                  </router-link>
                </div>
              </div>
            </div>
              <p class="profile_name"><b>Dr Approved Massage Chairs</b></p>
              <p class="profile_follow">6.3k followers<span>1.2k following</span></p>
              <div class="profile_icon">
                <img src="profile/facebook.png">
                <img src="profile/twitter.png">
                <img src="profile/instagram.png">
                <img src="profile/youtube.png">
              </div>
              <p class="profile_commun"><b>Communities</b></p>
              <div class="profile_brand">
                <img src="profile/commun1.png">
                <img src="profile/commun2.png">
                <img src="profile/commun3.png">
                <img src="profile/commun4.png">
                <img src="profile/commun5.png">
                <router-link to="/socialmedia/community/socialmedia_community_create"><img src="profile/profile_plus.png"></router-link>
              </div>

              <div class="hooper_height">
                <hooper group="group1" :itemsToShow="4" :centerMode="true" class="profile_hooper_btn">
                  <slide class="swiperslide_btn">
                    <button @click=setCurrentCarouselIndex(0)>Products</button>
                  </slide>
                  <slide class="swiperslide_btn">
                    <button @click=setCurrentCarouselIndex(1)>Brands</button>
                  </slide>
                  <slide class="swiperslide_btn">
                    <button @click=setCurrentCarouselIndex(2)>Services</button>
                  </slide>
                  <slide class="swiperslide_btn">
                    <button @click=setCurrentCarouselIndex(3)>Business Chain</button>
                  </slide>
                  <slide class="swiperslide_btn">
                    <button @click=setCurrentCarouselIndex(4)>Certifications</button>
                  </slide>
                  <slide class="swiperslide_btn">
                    <button @click=setCurrentCarouselIndex(5)>Reviews</button>
                  </slide>
                  <slide class="swiperslide_btn">
                    <button @click=setCurrentCarouselIndex(6)>Marketing Future Trends</button>
                  </slide>
                </hooper>
                <hr class="profile_hr">
                <hooper group="group1" ref="carousel" class="profile_hooper_content">
                  <slide class="slide_block">
                    <!-- Offers -->
                    <p class="profile_relax"><b>Relaxology (14)</b></p>
                    <div class="profile_relax_detail">
                      <img src="profile/relax_chair.png" class="relax_chair">
                      <div class="relax_massage">
                        <p class="profile_relax_msg"><b>Relaxology Mini 3 Massage<br>Chair</b></p>
                        <table class="profile_table">
                          <tr>
                            <th>Price</th>
                            <th>Payout</th>
                            <th>CPC</th>
                          </tr>
                          <tr>
                            <td>$2,100</td>
                            <td>$10</td>
                            <td>10 GCoins</td>
                          </tr>
                        </table>
                        <button class="relax_buy">BUY NOW</button>
                      </div>
                    </div>
                    <div class="relax_link">
                      <div>
                        <img src="profile/copy_link.png">
                        <p>Copy Link</p>
                        </div>
                        <div>
                        <img src="profile/videos.png" @click="showVideo">
                        <p>Videos</p>
                        </div>
                        <div>
                        <img src="profile/banners.png" @click="showBanner">
                        <p>Banners</p>
                        </div>
                        <div>
                        <img src="profile/detail.png" @click="showDetail">
                        <p>Detail</p>
                        </div>
                        <div>
                        <img src="profile/reviews.png" @click="showReview">
                        <p>Reviews</p>
                        </div>
                      </div>
                      <hr class="profile_hr">
                      <div class="profile_relax_detail">
                        <img src="profile/relax_chair.png" class="relax_chair">
                        <div class="relax_massage">
                          <p class="profile_relax_msg"><b>Relaxology Mini 3 Massage<br>Chair</b></p>
                          <table class="profile_table">
                            <tr>
                              <th>Price</th>
                              <th>Payout</th>
                              <th>CPC</th>
                            </tr>
                            <tr>
                              <td>$2,100</td>
                              <td>$10</td>
                              <td>10 GCoins</td>
                            </tr>
                          </table>
                          <button class="relax_buy">BUY NOW</button>
                        </div>
                      </div>
                      <div class="relax_link">
                        <div>
                        <img src="profile/copy_link.png">
                        <p>Copy Link</p>
                        </div>
                        <div>
                        <img src="profile/videos.png" @click="showVideo">
                        <p>Videos</p>
                        </div>
                        <div>
                        <img src="profile/banners.png" @click="showBanner">
                        <p>Banners</p>
                        </div>
                        <div>
                        <img src="profile/detail.png" @click="showDetail">
                        <p>Detail</p>
                        </div>
                        <div>
                        <img src="profile/reviews.png" @click="showReview">
                        <p>Reviews</p>
                        </div>
                      </div>
                  </slide>
                  <slide class="swiperslide_btn">
                    <!-- Brands -->
                      <div v-for="(item, index) in BSbrandsdata" :key="index">
                        <p class="profile_relax"><b>{{item.title}}</b></p>
                        <div class="brands_owned">
                          <router-link to="/socialmedia/socialmedia_profile_offer">
                            <div>
                              <img src="profile/massage.png">
                              <p>Relaxology</p>
                            </div>
                          </router-link>
                          <router-link to="/socialmedia/socialmedia_profile_offer">
                            <div>
                              <img src="profile/massage.png">
                              <p>Relaxology</p>
                            </div>
                          </router-link>
                          <router-link to="/socialmedia/socialmedia_profile_offer">
                            <div>
                              <img src="profile/massage.png">
                              <p>Relaxology</p>
                            </div>
                          </router-link>
                          <router-link to="/socialmedia/socialmedia_profile_offer">
                            <div>
                              <img src="profile/massage.png">
                              <p>Relaxology</p>
                            </div>
                          </router-link>
                          <router-link to="/socialmedia/socialmedia_profile_offer">
                            <div>
                              <img src="profile/massage.png">
                              <p>Relaxology</p>
                            </div>
                          </router-link>
                          <router-link to="/socialmedia/socialmedia_profile_offer">
                            <div>
                              <img src="profile/massage.png">
                              <p>Relaxology</p>
                            </div>
                          </router-link>
                        </div>
                      </div>
                  </slide>
                  <slide class="swiperslide_btn">
                    <!-- Services -->
                      <p class="profile_relax"><b>Massage(1)</b></p>
                      <div class="profile_services">
                        <p class="profile_commun"><b>Foot and Body Massage</b></p>
                        <table class="profile_table">
                            <tr>
                              <th>Price</th>
                              <th>Payout</th>
                              <th>CPC</th>
                            </tr>
                            <tr>
                              <td>$2,100</td>
                              <td>$10</td>
                              <td>10 GCoins</td>
                            </tr>
                        </table>
                        <button class="relax_buy">BUY NOW</button>
                      </div>
                      <div class="relax_link">
                        <div>
                        <img src="profile/copy_link.png">
                        <p>Copy Link</p>
                        </div>
                        <div>
                        <img src="profile/videos.png">
                        <p>Videos</p>
                        </div>
                        <div>
                        <img src="profile/banners.png">
                        <p>Banners</p>
                        </div>
                        <div>
                        <img src="profile/detail.png">
                        <p>Detail</p>
                        </div>
                        <div>
                        <img src="profile/reviews.png">
                        <p>Reviews</p>
                        </div>
                      </div>
                  </slide>
                  <slide class="swiperslide_btn">
                    <!-- Business Chain -->
                      <div class="profile_services">
                        <p class="bs_relax_desc" v-for="(item, index) in industryData" :key="index">
                          <b>{{item.industry_title}}</b><br>
                          {{item.Manufactures}}<br>
                          {{item.Distributors}}<br>
                          {{item.Wholesalers}}<br>
                          {{item.Retailers}}<br>
                          {{item.Others}}
                        </p>
                      </div>
                      <div class="profile_services">
                        <p class="relax_desc" v-for="(item, index) in internalData" :key="index">
                          <b>{{item.internal_title}}</b><br>
                          {{item.Headquarters}}<br>
                          {{item.Chain}}<br>
                          {{item.Franchisee}}<br>
                          {{item.Global}}<br>
                          {{item.Nationwide}}<br>
                          {{item.Wholesale}}<br>
                          {{item.Retail}}<br>
                          {{item.Others}}
                        </p>
                      </div>
                  </slide>
                  <slide class="swiperslide_btn">
                    <!-- Certifications -->
                      <p class="profile_relax"><b>Trademark Certificates (2)</b></p>
                      <div class="certificate_desc" v-for="(item, index) in BScertificationdata" :key="index">
                        <img :src="`${item.image_url}`">
                        <p class="relax_desc"><b>Certification Type:</b><br>{{item.type}}<br><b>Certification Number:</b><br>{{item.number}}<br><b>Authority of Issue:</b><br>{{item.issue}}<b><br>Issue Date: </b>{{item.issuedate}}<br><b>Expiration Date: </b>{{item.date}}<br><b>Description:</b><br>{{item.desc}}</p>
                      </div>
                  </slide>
                  <slide class="swiperslide_btn">
                    <!-- Reviews -->
                      <p class="profile_commun"><b>Latest Reviews</b></p>
                      <div class="profile_services" v-for="(item, index) in BSreviewdata" :key="index">
                        <img src="profile/review_star.png">
                        <img src="profile/review_star.png">
                        <img src="profile/review_star.png">
                        <img src="profile/review_star.png">
                        <img src="profile/review_star.png">
                        <p class="relax_desc">{{item.review_title}}</p>
                        <p class="relax_desc_review">{{item.review_date}}</p>
                        <div class="review_user">
                          <img :src="`${item.review_user}`">
                          <p><b>{{item.review_name}}</b><br>{{item.review_address}}</p>
                        </div>
                        <hr class="review_hr">
                      </div>
                  </slide>
                  <slide class="swiperslide_btn">
                    <!-- Marketing Future Trends -->
                      <p :class="{'future_maps_color_existing' : isExisting == true}" class="profile_commun" @click="showExisting"><b>Existing Branches</b></p>
                      <div class="marketing_maps">
                        <p :class="{'future_maps_color_head': isHead == true}" class="future_maps_head" @click="showHead">2<br>Headquarters</p>
                        <p :class="{'future_maps_color_chain': isChain1 == true}" class="future_maps_chain" @click="showChain1">3<br>Chain<br>Stores</p>
                        <p :class="{'future_maps_color_country': isCountry == true}" class="future_maps_country" @click="showCountry">1<br>Country</p>
                        <p :class="{'future_maps_color_franchisee': isFranchisee1 == true}" class="future_maps_franchisee" @click="showFranchisee1">4<br>Franchisee</p>
                      </div>
                      <img :src="`${currentImage}`" class="trends_map">
                      <p class="profile_commun"><b>Marketing Future Trends</b></p>
                      <div class="existing_maps">
                        <p :class="{'future_maps_color_chain': isDistributor == true}" class="future_maps_head" @click="showDistributor">3<br>Distributors</p>
                        <p :class="{'future_maps_color_country': isChain2 == true}" class="future_maps_country" @click="showChain2">1<br>Chain Stores</p>
                        <p :class="{'future_maps_color_franchisee': isFranchisee2 == true}" class="future_maps_franchisee" @click="showFranchisee2">4<br>Franchisee</p>
                      </div>
                  </slide>
                </hooper>
              </div>
              <p class="profile_commun"><b>More About Dr Approved Massage Chairs</b></p>
              <p class="relax_desc">For over 35 years, our focus has been<br>designing the highest quality massage<br>chairs - for a deeper, stronger, smoother,<br>and more therapeutic massage - and<br>offering them to those in need of intense<br>stress relief.</p>
              <p class="relax_desc"><b>Year Established:</b> 2018</p>
              <p class="relax_desc"><b>Company Type</b> S Corporation</p>
              <p class="relax_desc"><b>Business Type:</b> Product</p>
              <p class="relax_desc"><b>Industry:</b><br>Marketing & Advertising Services<br>->Internet Marketing Services<br>->Social Media Marketing Services</p>
          </div>
      </div>
      <Video 
        v-show="f_show_video"
        @close="closeModal"
        @user-backdrop="removeFlagFromStack"
      >
      </Video>
      <Banner 
        v-show="f_show_banner"
        @close="closeModal"
        @user-backdrop="removeFlagFromStack"
      >
      </Banner>
      <Detail 
        v-show="f_show_detail"
        @close="closeModal"
        @user-backdrop="removeFlagFromStack"
      >
      </Detail>
      <Review 
        v-show="f_show_review"
        @close="closeModal"
        @user-backdrop="removeFlagFromStack"
      >
      </Review>
    </div>
  </div>
</template>
<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import "swiper/swiper-bundle.min.css";
import Video from "../../modal/video.vue";
import Banner from "../../modal/banner.vue";
import Detail from "../../modal/detail.vue";
import Review from "../../modal/review.vue";
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Profile_Offers',
  components: {
    Video,
    Banner,
    Detail,
    Review,
    Hooper,
    Slide
  },
  data () {
    return {
      isExisting: true,
      isHead: true,
      isChain1: false,
      isChain2: false,
      isCountry: false,
      isFranchisee1: false,
      isFranchisee2: false,
      isDistributor: false,
      f_show_video: false,
      f_show_banner: false,
      f_show_detail: false,
      f_show_review: false,
      modalStack: [],
      currentImage: "profile/Group_719.png",
      currentCarouselIndex: 0,
      datas: [
        {
          follow: true
        }
      ],
      BScertificationdata: [
        {
          image_url: "profile/profile_doc.png",
          type: "Brandname Certification",
          number: "86831221",
          issue: "US Patent & Trademark Office",
          issuedate: "03/01/2017",
          date: "04/15/2017",
          desc: "Trade Mark Certificate \n for Relaxxology"
        },
        {
          image_url: "profile/profile_doc.png",
          type: "Brandname Certification",
          number: "86831221",
          issue: "US Patent & Trademark Office",
          issuedate: "03/01/2017",
          date: "04/15/2017",
          desc: "Trade Mark Certificate \n for Relaxxology"
        }
      ],
      industryData: [
        {
          industry_title: "Industry Business Chain",
          Manufactures: "Manufactures 1",
          Distributors: "Distributors 0",
          Wholesalers: "Wholesalers 0",
          Retailers: "Retailers 0",
          Others: "Others 0",
        },
      ],
      internalData: [
        {
          internal_title: "Internal Business Chain",
          Headquarters: "Headquarters 9",
          Chain: "Chain Stores 9",
          Franchisee: "Franchisee 1",
          Global: "Global Distributors 2",
          Nationwide: "Nationwide Distributor 0",
          Wholesale: "Wholesale Dealer 12",
          Retail: "Retail Dealer 0",
          Others: "Others 1",
        }
      ],
      BSreviewdata: [
        {
          review_title: "Good Business!",
          review_date: "Reviewed on October 14, 2021",
          review_user: "profile/review_user.png",
          review_name: "Willy Williams",
          review_address: "San Diego, California",
        },
        {
          review_title: "Good perfumes! the scents are memorable!",
          review_date: "Reviewed on October 14, 2021",
          review_user: "recommendation/recom_user5.png",
          review_name: "Jack Hugh",
          review_address: "Los Angeles, California",
        },
      ],
      BSbrandsdata: [
        {
          title: "Brands Owned"
        },
        {
          title: "Brands Carried"
        }
      ],
      swiperOption: {
          slidesPerView: 'auto',
          spaceBetween: 10,
      }
    }
  },
  watch: {
    currentCarouselIndex () {
      this.$refs.carousel.slideTo(this.currentCarouselIndex);
    }
  },
  methods: {
    showExisting() {
      this.currentImage = "profile/existing.png";
      this.initSelectedMap();
      this.isExisting = true;
    },
    showHead() {
      this.currentImage = "profile/Group_719.png";
      this.initSelectedMap();
      this.isHead = true;
    },
    showDistributor() {
      this.currentImage = "profile/distributor.png";
      this.initSelectedMap();
      this.isDistributor = true;
    },
    showChain1() {
      this.currentImage = "profile/chain1.png";
      this.initSelectedMap();
      this.isChain1 = true;
    },
    showChain2() {
      this.currentImage = "profile/chain2.png";
      this.initSelectedMap();
      this.isChain2 = true;
    },
    showCountry() {
      this.currentImage = "profile/country.png";
      this.initSelectedMap();
      this.isCountry = true;
    },
    showFranchisee1() {
      this.currentImage = "profile/franchisee1.png";
      this.initSelectedMap();
      this.isFranchisee1 = true;
    },
    showFranchisee2() {
      this.currentImage = "profile/franchisee2.png";
      this.initSelectedMap();
      this.isFranchisee2 = true;
    },
    initSelectedMap() {
      this.isExisting = false;
      this.isHead = false;
      this.isDistributor = false;
      this.isChain1 = false;
      this.isChain2 = false;
      this.isCountry = false;
      this.isFranchisee1 = false;
      this.isFranchisee2 = false;
    },
    selectFollow(index) {
      this.datas[index].follow = false
    },
    closeModal() {
      this.f_show_video = false;
      this.f_show_banner = false;
      this.f_show_detail = false;
      this.f_show_review = false;
      this.isModalVisible = false;
    },
    showVideo() {
      this.f_show_video = true;
    },
    showBanner() {
      this.f_show_banner = true;
    },
    showDetail() {
      this.f_show_detail = true;
    },
    showReview() {
      this.f_show_review = true;
    },
    removeFlagFromStack() {

      let temp = this.modalStack.pop(-1);
      switch (temp) {
        case 'f_show_video':
          this.f_show_video = false
          break;
        default:
          break;
      }
      switch (temp) {
        case 'f_show_banner':
          this.f_show_banner = false
          break;
        default:
          break;
      }
      switch (temp) {
        case 'f_show_detail':
          this.f_show_detail = false
          break;
        default:
          break;
      }
      switch (temp) {
        case 'f_show_review':
          this.f_show_review = false
          break;
        default:
          break;
      }
      this.f_show_video = false
      this.f_show_banner = false,
      this.f_show_detail = false,
      this.f_show_review = false
    },
    setCurrentCarouselIndex(index) {
      this.currentCarouselIndex = index;
    },
  }
}
</script>
<style>
  .header_btn {
    color: #13C8FF !important;
  }
  .branch_btn {
    color: #BFC1CE;
  }
  .profile_modal {
    box-shadow: 0 5px 10px #f2f2f2;
  }
  .profile_phone {
      width: 100%;
      max-width: 414px; 
      min-height: 100vh;
      display: flex;
      background: white;
      text-align: center;
  }
  .header_modal a {
    padding-left: 22px;
    margin: 0;
  }
  .profile_session {
    padding: 85px 25px;
    width: 100%;
    max-width: 414px;
  }
  .profile_header {
    display: flex;
  }
  .profile_logo {
    position: relative;
  }
  .profile_logo img:first-child {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .profile_logo img:last-child {
    position: absolute;
    width: 24px;
    border-radius: 50%;
    border: 2px solid white;
    left: 0;
    top: 57px;
  }
  .profile_price {
    text-align: left;
    margin: 0 auto 0 15px;
    letter-spacing: 0.08em;
    font-size: 14px;
  }
  .profile_price p {
    margin: 0 0 10px;
  }
  .profile_price p img {
    margin: 0 5px 2px 0;
  }
  .profile_box {
    display: block;
    width: 130px;
  }
  .profile_box_line {
    margin-bottom: 15px;
    text-align: right;
    position: relative;
  }
  .profile_box_line img {
    margin: 0 4px;
  }
  .profile_name {
    text-align: left;
    margin: 5px 0 10px;
  }
  .profile_follow {
    text-align: left;
    font-size: 14px;
    margin: 5px 0 10px;
  }
  .profile_follow span {
    margin-left: 20px;
  }
  .profile_icon {
    text-align: left;
  }
  .profile_icon img {
    margin-right: 30px;
  }
  .profile_commun {
    color: #EF8200;
    text-align: left;
    margin: 15px 0 5px;
  }
  .profile_brand {
    text-align: left;
  }
  .profile_brand img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .profile_brand img:last-child {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .profile_btn {
    text-align: left;
    margin: 20px 0;
    font-size: 15px;
  }
  .profile_btn button { 
  }
  .profile_action_btn {
    border-radius: 16px;
    width: auto;
    padding: 3px 10px;
    background-color: #13C8FF;
  }
  .profile_hr { 
    margin: 0;
  }
  .profile_relax {
    text-align: left;
    margin: 20px 0 0;
    font-size: 15px;
  }
  .profile_relax_detail {
    display: flex;
    text-align: left;
    margin-top: 10px;
  }
  .profile_table {
    font-size: 13px;
    width: 100%;
  }
  .profile_table th{
    background: #E8F1FA;
    font-weight: 400;
    width: 80px;
  }
  .profile_table tr {
  }
  .profile_table td {
    border: 1px solid #E8F1FA;
    font-weight: 600;
  }
  .relax_chair {
    width: 25%;
    height: 25%;
  }
  .profile_relax_msg {
    color: #EF8200;
    text-align: left;
    margin: 0 0 5px;
  }
  .relax_buy {
    background-color: #13C8FF;
    border-radius: 30px;
    color: white;
    padding: 5px 15px;
    margin: 7px 0;
    font-size: 14px;
  }
  .relax_massage {
    margin: 0 0 0 3%;
    width: 75%;
  }
  .relax_link {
    display: flex;
    width: 100%;
    margin: 10px 0;
  }
  .relax_link p {
    margin: 0;
  }
  .relax_link div {
    width: 25%;
  }
  .relax_desc {
    text-align: left;
    margin: 5px 20px 5px 0;
  }
  .brands_owned {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px 0;
  }
  .brands_owned a{
    width: 33.33%;
    margin: 5px 0;
  }
  .brands_owned p {
    margin: 5px 0;
  }
  .profile_services {
    text-align: left;
    margin: 0 10px;
  }
  .certificate_desc {
    display: flex;
    width: 100%;
    font-size: 15px;
    margin: 10px 0;
  }
  .certificate_desc img {
    height: 100%;
    margin: 0 13px;
  }
  .review_user {
    display: flex;
    margin: auto;
    font-size: 15px;
  }
  .review_user p {
    margin: auto 0;
  }
  .review_user img {
    height: 40px;
    width: 40px;
    margin: auto 10px auto 0;
  }
  .review_hr {
    margin: 20px 0;
  }
  .future_maps {
    color: #13C8FF;
    text-align: left;
    margin: 0;
  }
  .future_maps span {
    margin: 0 0 0 30px;
    text-align: left;
    color: #BFC1CE;
  }
  .trends_map {
    width: 100%;
    margin: 10px 0;
  }
  .btn_positions {
    text-align: right;
  }
  .bs_relax_desc {
    margin: 20px 20px 5px 0;
  }
  .profile_hooper_btn .is-current {
    border-radius: 16px;
    width: auto;
    padding: 3px 10px;
    background-color: #13C8FF;
  }
  .profile_hooper_btn button {
    width: auto;
  }
  .profile_hooper_btn li {
    width: auto !important;
    padding: 3px 5px;
  }
  .profile_hooper_btn {
    height: auto !important;
    outline: unset;
  }
  .profile_hooper_btn ul {
    margin: 20px -20px 10px;
    /*transform: translate(0px, 0px) !important;*/
  }
  .hooper_height {
    height: auto;
  }
  .profile_hooper_content {
    height: auto !important;
    outline: unset;
  }
  .future_maps_color_head {
    background: rgba(24, 152, 221, 0.4) !important;
  }
  .future_maps_color_chain {
    background: rgba(11, 55, 147, 0.4) !important;
  }
  .future_maps_color_country {
    background: rgba(240, 107, 8, 0.4) !important;
  }
  .future_maps_color_franchisee {
    background: rgba(231, 87, 175, 0.4) !important;
  }
  .future_maps_head {
    background: rgba(24, 152, 221, 0.05);
    margin: auto 0;
  }
  .future_maps_chain {
    background: rgba(11, 55, 147, 0.05);
    margin: auto 0 auto 2px;
  }
  .future_maps_country {
    background: rgba(240, 107, 8, 0.05);
    margin: auto 0 auto 2px;
  }
  .future_maps_franchisee {
    background: rgba(231, 87, 175, 0.05);
    margin: auto 0 auto 2px;
  }
  .marketing_maps {
    display: flex;
  }
  .marketing_maps p {
    height: 70px;
    color: black;
    text-align: left;
    width: 100%;
    display: grid;
    padding: 0 8px;
    font-size: 14px;
    align-items: center;
  }
  .existing_maps {
    display: flex;
  }
  .existing_maps p {
    height: 50px;
    color: black;
    text-align: left;
    width: 100%;
    display: grid;
    padding: 0 8px;
    font-size: 14px;
    align-items: center;
  }
  .future_maps_color_existing {

  }
</style>
