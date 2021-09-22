<template>
  <div>
    <div class="container">
      <div class="profile_phone profile_each_size">
        
          <div class="header_modal profile_modal">
            <router-link to="/" class="header_arrow"><img src="img/header_arrow.png"></router-link>
            <a>Brand Name Title</a>
          </div>
          <div class="profile_each_titile">
            <img src="profile/massage.png">
            <p>Relaxology</p>
            <p class="profile_title_desc">Relaxology brand is a brand under the business name. This is only a sample description you are reading.</p>
          </div>
          <div class="profile_each_session">
              <swiper class="swiper profile_btn profile_btn_orange" :options="swiperOption">
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
  .profile_each_size {
    display: grid !important;
  }
  .profile_each_session {
    padding: 0 25px;
    width: calc(100% - 50px);
  }
  .profile_each_titile {
    max-width: 414px;
    width: 100%;
    margin-top: 80px;
  }
  .profile_title_desc {
    margin: 0 25px;
    text-align: left;
    font-size: 14px;
  }
  .profile_btn_orange button {
    background-color: #FFB803 !important;
    color: white !important;
  }
</style>
