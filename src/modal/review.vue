<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-mask" v-on:click.self="userProfileBackdrop">
      <div class="review_modal_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="host_view_position"
          id="modalTitle"
        >
          <div class="detail_modal">
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
          </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    data () {
      return {
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
          {
            review_title: "Good perfumes! the scents are memorable!",
            review_user: "recommendation/recom_user5.png",
            review_name: "Jack Hugh",
            review_address: "Los Angeles, California",
          },
        ],
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      userProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-mask"){
          this.$emit('user-backdrop');
        }
      },
    },
  };
</script>
<style>
  .review_modal_transform {
    transform: translate(0, 38%) !important;
    width: 100%;
    max-width: 414px;
  }
</style>
