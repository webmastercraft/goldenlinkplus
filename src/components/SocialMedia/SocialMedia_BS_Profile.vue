<template>
  <div>
    <div class="container">
      <div class="profile_phone">
        
          <div class="header_modal profile_modal">
            <router-link to="/" class="header_arrow"><img src="img/header_arrow.png"></router-link>
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
                  <button class="send_btn_disable" :disabled="item.follow" :class="{'send_btn': item.follow == false}"><img src="airplane.png">Send</button>
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
                <img src="profile/profile_plus.png">
              </div>
              <swiper class="swiper profile_btn" :options="swiperOption">
                <swiper-slide class="swiperslide_btn"><button>Offers</button></swiper-slide>
                <swiper-slide class="swiperslide_btn"><button>Brands</button></swiper-slide>
                <swiper-slide class="swiperslide_btn"><button>Services</button></swiper-slide>
                <swiper-slide class="swiperslide_btn"><button>Business Chain</button></swiper-slide>
                <swiper-slide class="swiperslide_btn"><button>Certifications</button></swiper-slide>
                <swiper-slide class="swiperslide_btn"><button>Reviews</button></swiper-slide>
                <swiper-slide class="swiperslide_btn"><button>Marketing Future Trends</button></swiper-slide>
              </swiper>
              <hr class="profile_hr">

              <swiper class="swiper">
                <swiper-slide class="slide_block">
                  <!-- Offers -->
                    <p class="profile_relax"><b>Relaxology (14)</b></p>
                    <div class="profile_relax_detail">
                      <img src="profile/relax_chair.png" clas s="relax_chair">
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
                    <p class="profile_relax"><b>Relaxology (1)</b></p>
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
                    <hr class="profile_hr"> 
                  </swiper-slide>

                  <swiper-slide class="slide_block">
                    <!-- Brands -->
                    <p class="profile_relax"><b>Brands Owned</b></p>
                    <div class="brands_owned">
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                    </div>
                    <p class="profile_relax"><b>Brands Carried</b></p>
                    <div class="brands_owned">
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                      <div>
                        <img src="profile/massage.png">
                        <p>Relaxology</p>
                      </div>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="slide_block">
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
                  </swiper-slide>

                  <swiper-slide class="slide_block">
                    <!-- Business Chain -->
                    <div class="profile_services">
                      <p class="relax_desc"><b>Industry Business Chain</b><br>Manufactures 1<br>Distributors 0<br>Wholesalers 0<br>Retailers 0<br>Others 0</p>
                      <p class="relax_desc"><b>Internal Business Chain</b><br>Headquarters 9<br>Chain Stores 9<br>Franchisee 1<br>Global Distributors 2<br>Nationwide Distributor 0<br>Wholesale Dealer 12<br>Retail Dealer 0<br>Others 1</p>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="slide_block">
                    <!-- Certifications -->
                    <p class="profile_relax"><b>Trademark Certificates (2)</b></p>
                    <div class="certificate_desc">
                      <img src="profile/profile_doc.png">
                      <p class="relax_desc"><b>Certification Type:</b><br>Brandname Certification<br><b>Certification Number:</b><br>86831221<br><b>Authority of Issue:</b><br>US Patent & Trademark Office<b><br>Issue Date: </b>03/01/2017<br><b>Expiration Date: </b>04/15/2017<br><b>Description:</b><br>Trade Mark Certificate<br>for Relaxxology</p>
                    </div>
                    <div class="certificate_desc">
                      <img src="profile/profile_doc.png">
                      <p class="relax_desc"><b>Certification Type:</b><br>Brandname Certification<br><b>Certification Number:</b><br>86832492<br><b>Authority of Issue:</b><br>US Patent & Trademark Office<b><br>Issue Date: </b>03/01/2017<br><b>Expiration Date: </b>04/29/2017<br><b>Description:</b><br>Trade Mark For Dr. Approved Massage<br>Chairs</p>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="slide_block">
                    <!-- Reviews -->
                    <p class="profile_commun"><b>Latest Reviews</b></p>
                    <div class="profile_services">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <p class="relax_desc">Good Business!</p>
                      <div class="review_user">
                        <img src="profile/review_user.png">
                        <p><b>Willy Williams</b><br>San Diego, California</p>
                      </div>
                      <hr class="review_hr">
                    </div>
                    <div class="profile_services">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <p class="relax_desc">Good perfumes! the scents are memorable!</p>
                      <div class="review_user">
                        <img src="profile/review_user.png">
                        <p><b>Jack Hugh</b><br>Los Angeles, California</p>
                      </div>
                      <hr class="review_hr">
                    </div>
                  </swiper-slide>

                  <swiper-slide class="slide_block">
                    <!-- Marketing Future Trends -->
                    <p class="profile_commun"><b>Marketing Future Trends</b></p>
                    <p class="future_maps">2 Headquarters<span>10 Branches</span></p>
                    <img src="profile/future_maps.png" class="trends_map">
                    <p class="profile_commun"><b>Existing Branches</b></p>
                    <p class="future_maps">2 Headquarters</p>
                    <p class="future_maps">1 Chain Store</p>
                    <p class="future_maps">1 Country</p>
                    <p class="future_maps">2 Headquarters</p>
                  </swiper-slide>
            </swiper>
                

                <p class="profile_commun"><b>More About Dr Approved Massage Chairs</b></p>
                <p class="relax_desc">For over 35 years, our focus has been<br>designing the highest quality massage<br>chairs - for a deeper, stronger, smoother,<br>and more therapeutic massage - and<br>offering them to those in need of intense<br>stress relief.</p>
                <p class="relax_desc"><b>Year Established:</b> 2018</p>
                <p class="relax_desc"><b>Company Type</b> S Corporation</p>
                <p class="relax_desc"><b>Business Type:</b> Product</p>
                <p class="relax_desc"><b>Industry:</b><br>Marketing & Advertising Services<br>->Internet Marketing Services<br>->Social Media Marketing Services</p>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import "swiper/swiper-bundle.min.css";

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
  margin: 0 !important;
}
.profile_session {
  padding: 85px 25px;
    width: 414px;
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
}
.profile_btn button { 
  background-color: #13C8FF;
  border-radius: 16px;
  width: auto;
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
  width: 100px;
  height: 100px;
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
}
.relax_massage {
  margin: 0 0 0 auto;
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
  margin: 5px 0;
}
.brands_owned {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px 0;
}
.brands_owned div {
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
  margin-left: 100px;
  font-size: 15px;
}
.review_user p {
  margin: auto 0;
}
.review_user img {
  height: 40px;
  width: 40px;
  margin: auto;
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
  color: #BFC1CE !important;
}
.trends_map {
  width: 100%;
  margin: 10px 0;
}
.btn_positions {
  text-align: right;
}
</style>
