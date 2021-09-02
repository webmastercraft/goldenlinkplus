<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
            <button
              type="button"
              class="close_btn"
              @click="close"
              aria-label="Close modal"
            >
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="connect_modal">
              
              <p>Are you sure you want to delete<br>this product</p>
              <div>
              <button class="brand_cancel" @click="close"><img src="cancel.png"></button>
              <button class="brand_ok" @click="done()"><img src="ok.png"></button>
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
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      done() {
        this.$parent.removeBrand()
        this.$emit('close');
      }
    }
  };
</script>
<style>
.modal-header .upgrade_gs_para {
    font-weight: 400;
}
.connect_modal p, .connect_modal img{
  text-align: center;
  font-size: 16px;
  margin: 20px 0;
}
.connect_modal button {
  padding: 10px 30px;
  border-radius: 8px;
  width: 85px;
  margin: 0 20px 10px;
}
.connect_modal button img {
  margin: 0;
}
.brand_cancel {
  background-color: #D3D5E0;
}
.brand_ok {
  background-color: #EA7F0B;
}
</style>
