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
              <button class="brand_ok" @click="close"><img src="ok.png" @click="removeBrand(index)"></button>
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
        isModalVisible: false,
        pagination: 0,
        isCRUD: false,
        isShow: false,
        brand_title: null,
        brand_ownership: true,
        brand_place: null
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      removeBrand(index) {
      this.isCRUD = true
      this.$delete(this.brands,index)
    },
    addBrand() {
      if (!this.brand_title ) 
        return false;
      let brand = {
        name: this.brand_title,
        ownership: this.brand_ownership,
        place: this.brand_place,
        date: this.brand_date,
      }
      this.brands.push(brand);
      this.hideEdit();

      this.brand_title = '';
      this.brand_ownership = true
      this.brand_place = '';
    },
    showEdit() {
      this.isShow = true;
    },
    editBrand(index) {
      if (this.isCRUD) {
        this.isCRUD = false;
        return
      }
      this.brands[index].editing = true
    },
    hideEdit() {
      this.isShow = false;
    },
    updateBrand(index) {
      this.isCRUD = true
      this.brands[index].editing = false
    },
    cancelUpdateBrand(index) {
      this.isCRUD = true
      this.brands[index].editing = false
    },
    nextPage() {
        this.pagination += 3;
    },
    prevPage() {
        this.pagination -= 3;
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    },
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
