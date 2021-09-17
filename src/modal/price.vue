<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-on:click.self="userProfileBackdrop">
      <div class="modal_price_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="host_view_position"
          id="modalTitle"
        >
            <div class="price_modal">
                <div class="price_title">
                  <button class="audience_btn" :class="{'border_btn': isAudience == true}" @click="showAudience"><b>G-Coins</b></button>
                  <button class="speakers_btn" :class="{'border_btn': isAudience != true}" @click="showSpeakers"><b>Diamonds</b></button>
                </div>
                <div v-if="isAudience == true" class="price_content">
                  <div v-for="(item, index) in rangking1" :key="index" class="rangking_data price_data">
                    <img :src="`${item.rangking_image}`">
                    <p>{{item.rangking_name}}<span>{{item.rangking_coin}}</span></p>
                  </div>
                </div>
                <div v-else class="price_content">
                  <div v-for="(item, index) in rangking2" :key="index" class="rangking_data price_data">
                    <img :src="`${item.rangking_image}`">
                    <p>{{item.rangking_name}}<span>{{item.rangking_coin}}</span></p>
                  </div>
                </div>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Upcoming_Event',
    components: {
      
    },
    data () {
      return {
        isAudience: true,
        rangking2: [
            {
              rangking_image: "Ray.png",
              rangking_name: "Virginia Jones",
              rangking_coin: "915.6K",
            },
            {
              rangking_image: "mona.png",
              rangking_name: "Lavern Laboy",
              rangking_coin: "847.3K",
            },
            {
              rangking_image: "Jean_Smith.png",
              rangking_name: "Annette Black",
              rangking_coin: "654.2K",
            },
            {
              rangking_image: "Richard_Bennett_off.png",
              rangking_name: "Darron Kowski",
              rangking_coin: "302.8K",
            },
            {
              rangking_image: "Susan Boyle.png",
              rangking_name: "Robert Fox",
              rangking_coin: "113.3K",
            },
        ],
        rangking1: [
            {
              rangking_image: "Ray.png",
              rangking_name: "Erin Hughes",
              rangking_coin: "876.5K",
            },
            {
              rangking_image: "mona.png",
              rangking_name: "Marvin McKinney",
              rangking_coin: "678.6K",
            },
            {
              rangking_image: "Jean_Smith.png",
              rangking_name: "Lucy Fletcher",
              rangking_coin: "582.3K",
            },
            {
              rangking_image: "Richard_Bennett_off.png",
              rangking_name: "Ronald Richards",
              rangking_coin: "76.5K",
            },
            {
              rangking_image: "Susan Boyle.png",
              rangking_name: "Kathryn Murphy",
              rangking_coin: "24K",
            },
            {
              rangking_image: "Alex Smith.png",
              rangking_name: "Emily Malone",
              rangking_coin: "18.5K",
            },
            {
              rangking_image: "Collen.png",
              rangking_name: "Patricia Clark",
              rangking_coin: "12.9K",
            },
            {
              rangking_image: "Grandma.png",
              rangking_name: "Jerome Bell",
              rangking_coin: "6.7K",
            },
            {
              rangking_image: "Irma.png",
              rangking_name: "Floyd Miles",
              rangking_coin: "5.9K",
            },
            {
              rangking_image: "Lily.png",
              rangking_name: "Mary Lopez",
              rangking_coin: "3.6K",
            },
            {
              rangking_image: "Kathry.png",
              rangking_name: "Amanda Rice",
              rangking_coin: "3.2K",
            },
            {
              rangking_image: "Judith.png",
              rangking_name: "Lydia Sharp",
              rangking_coin: "1.1K",
            },
            {
              rangking_image: "Priscilla.png",
              rangking_name: "Darrell Steward",
              rangking_coin: "546",
            },
            {
              rangking_image: "Serenity.png",
              rangking_name: "Ida Baldwin",
              rangking_coin: "404",
            },
            {
              rangking_image: "Savannah.png",
              rangking_name: "Jacob Jones",
              rangking_coin: "395",
            },
            {
              rangking_image: "Wendy.png",
              rangking_name: "Linda Carroll",
              rangking_coin: "375",
            },
            {
              rangking_image: "Susan Boyle.png",
              rangking_name: "Ruth West",
              rangking_coin: "210",
            },
            {
              rangking_image: "Philip.png",
              rangking_name: "Cody Fisher",
              rangking_coin: "75",
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
      handleOpen() {
        this.$emit('handleOpen');
      },
      showAudience() {
        this.isAudience = true;
      },
      showSpeakers() {
        this.isAudience = false;
      },
    },
  };
</script>
<style>
  .modal_price_transform {
    max-width: 414px;
    width: 100%;
    transform: translate(0, 40%) !important;
  }
  .price_title {
    text-align: center;
    padding: 20px 40px;
    width: 100%;
    position: absolute;
    background-color: white;
    top: 0;
    border-radius: 12px;
  }
  .price_title button {
    text-align: left;
    width: 50%;
    padding: 10px 20px;
  }
  .price_data {
    margin: 10px 20px !important;
  }
  .price_modal {
    font-size: 15px;
    letter-spacing: -0.02em;
    width: 100%;
  }
  .price_content {
    margin: 90px 20px 0;
  }
</style>