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
                    <div v-for="(item, index) in BSbrandsdata" :key="index">
                      <p class="profile_relax"><b>{{item.title}}</b></p>
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
                      <p class="bs_relax_desc" v-for="(item, index) in industry" :key="index"><b>{{item.title1}}</b><br>{{item.property1}}<br>{{item.property2}}<br>{{item.property3}}<br>{{item.property4}}<br>{{item.property5}}</p>
                      <p class="relax_desc" v-for="(item, index) in internal" :key="index"><b>{{item.title2}}</b><br>{{item.property6}}<br>{{item.property7}}<br>{{item.property8}}<br>{{item.property9}}<br>{{item.property10}}<br>{{item.property11}}<br>{{item.property12}}<br>{{item.property13}}</p>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="slide_block">
                    <!-- Certifications -->
                    <p class="profile_relax"><b>Trademark Certificates (2)</b></p>
                    <div class="certificate_desc" v-for="(item, index) in BScertificationdata" :key="index">
                      <img :src="`${item.image_url}`">
                      <p class="relax_desc"><b>Certification Type:</b><br>{{item.type}}<br><b>Certification Number:</b><br>{{item.number}}<br><b>Authority of Issue:</b><br>{{item.issue}}<b><br>Issue Date: </b>{{item.issuedate}}<br><b>Expiration Date: </b>{{item.date}}<br><b>Description:</b><br>{{item.desc}}</p>
                    </div>
                  </swiper-slide>

                  <swiper-slide class="slide_block">
                    <!-- Reviews -->
                    <p class="profile_commun"><b>Latest Reviews</b></p>
                    <div class="profile_services" v-for="(item, index) in BSreviewdata" :key="index">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <img src="profile/review_star.png">
                      <p class="relax_desc">{{item.review_title}}</p>
                      <div class="review_user">
                        <img :src="`${item.review_user}`">
                        <p><b>{{item.review_name}}</b><br>{{item.review_address}}</p>
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
      industry: [
        {
          title1: "Industry Business Chain",
          property1: "Manufactures 1",
          property2: "Distributors 0",
          property3: "Wholesalers 0",
          property4: "Retailers 0",
          property5: "Others 0",
        },
      ],
      internal: [
        {
          title2: "Internal Business Chain",
          property6: "Headquarters 9",
          property7: "Chain Stores 9",
          property8: "Franchisee 1",
          property9: "Global Distributors 2",
          property10: "Nationwide Distributor 0",
          property11: "Wholesale Dealer 12",
          property12: "Retail Dealer 0",
          property13: "Others 1",
        }
      ],
      BSreviewdata: [
        {
          review_title: "Good Business!",
          review_user: "profile/review_user.png",
          review_name: "Willy Williams",
          review_address: "San Diego, California",
        },
        {
          review_title: "Good perfumes! the scents are memorable!",
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
    margin: 5px 20px 5px 0;
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
  .bs_relax_desc {
    margin: 20px 20px 5px 0;
  }
</style>
