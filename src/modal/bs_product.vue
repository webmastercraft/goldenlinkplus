<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask product_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal product_internal_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="modal-header modal_auto"
            id="modalTitle"
          >
                <p class="switch_title">My Products<span class="profile_modal_done" @click="closeModal">Cancel</span></p>
                <p class="update_profile_content">Brand Name</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="Goldenlinkplus"
                    />
                </div>
                <p class="update_profile_content">Product Category</p>
                <div class="form-group profile_input profile_role_input">
                    <select class="form-control" id="year_established">
                        <option>Biometric Monitors</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <p class="update_profile_content">Product Name</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="GLP"
                    />
                </div>
                <p class="update_profile_content">Price</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="$100"
                    />
                </div>
                <p class="update_profile_content">Minimum Order Quantity</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="1000"
                    />
                </div>
                <p class="update_profile_content">Service Item</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="1"
                    />
                </div>
                <p class="update_profile_content">URL</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="https://www.goldenlinkplus.com"
                    />
                </div>
                <p class="update_profile_content">Product images<span class="profile_upload_btn">Upload</span></p>
                <div class="profile_upload_img">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                    <img src="">
                </div>
                <p class="update_profile_content">Product Videos<span class="profile_upload_btn">Upload</span></p>
                <div class="profile_upload_img">
                    <video><source src="" type=""></video>
                    <video><source src="" type=""></video>
                    <video><source src="" type=""></video>
                    <video><source src="" type=""></video>
                    <video><source src="" type=""></video>
                </div>
                <p class="update_profile_content">Product Description</p>
                <div class="form-group profile_input profile_role_input">
                    <textarea
                      class="form-control"
                      id="keywords"
                      rows="5"
                      placeholder=""
                      value=""
                    >
                    </textarea>
                </div>
                <button class="profile_brand_btn profile_map_del" @click="closeModal">Delete</button>
                <button class="profile_brand_btn profile_map_update" @click="closeModal">Update</button>
          </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'Products',
    components: {
    },  
    data () {
        return {
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      viewProfileBackdrop(evt) {
        if(evt.target.classList.length > 0 && "bg-view-mask"){
          this.$emit('view-backdrop');
        }
      },
    }
  }
</script>
<style>
  .product_modal_width {
    width: 100%;
    max-width: 414px;
    height: 80%;
  }
  .product_internal_modal {
    max-width: 414px !important;
    margin: 0 !important;
    transform: translate3d(0, 13%, 0) !important;
  }
  .modal_auto {
    overflow: auto;
  }
</style>
