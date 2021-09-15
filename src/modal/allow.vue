<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal small_modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          id="modalTitle"
        >
            
            <div class="connect_modal recom_header">
              <p class="recom_modal"><b>“Goldenlinkplus” Would Like<br>to Access Your Contacts</b></p>
              <router-link to="/socialmedia/socialmedia_recommendation_one">
                <p class="recom_modal_desc">This lets you see which of your friends are<br>on Goldenlinkplus. To protect privacy, we<br>remmove your friend's names before<br>sending phone numbers to our servers.</p>
              </router-link>
            </div>
            <div class="recom_modal_btn">
              <router-link to="/socialmedia/socialmedia_gs_reg_start">
                <button>Don't Allow</button>
              </router-link>
              <router-link to="/socialmedia/socialmedia_recommendation_two">
                <button>Allow</button>
              </router-link>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>
.small_modal {
  max-width: 300px !important;
  height: auto !important;
}
.recom_modal {
  font-size: 16px;
  font-weight: 500;
}
.recom_modal_desc {
  font-size: 13px !important;
  font-weight: 400;
}
.recom_header {
  margin: 20px;
}
.recom_modal_btn {
  width: 100%;
}
.recom_modal_btn button {
  width: 50%;
  padding: 20px 25px;
  border-top: 1px solid #C4C4C4;
  font-size: 20px;
}
.recom_modal_btn button:first-child {
  border-right: 1px solid #C4C4C4;
}
</style>
