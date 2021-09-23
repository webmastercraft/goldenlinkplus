<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
      <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
        <div class="modal profile_internal_modal"
          role="dialog"
          aria-labelledby="modalTitle"
          aria-describedby="modalDescription"
        >
          <header
            class="modal-header"
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
                      placeholder="Brand Name"
                      value=""
                      v-model="brand_title"
                    />
                </div>
                <div class="form-group toggle-button-cover">
                    <span class="toggle-title">Are you the Brand Owner?</span>
                    <toggle-button :value="true" :labels="{checked: 'YES', unchecked: 'NO'}" :color="{checked: '#13C8FF', unchecked: '#FF0000', disabled: '#CCCCCC'}" :width=80 :height=30 style='float: right;' v-model="brand_ownership"/>
                </div>
                <p class="update_profile_content">Place of Registration</p>
                <div class="form-group profile_input profile_role_input" v-show="brand_ownership">
                    <select class="form-control" id="">
                      <option disabled selected>Place of Registration</option>
                      <option>USA</option>
                      <option>CHINA</option>
                    </select>
                </div>
                <p class="update_profile_content">Date of Registration</p>
                <div class="form-group profile_input profile_role_input" v-show="brand_ownership">
                    <input
                      type="date"
                      class="form-control"
                      id="date"
                      aria-describedby="begin_date"
                      placeholder="Date of Registration"
                      v-model="brand_date"
                    />
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
  import Vue from 'vue';
  import ToggleButton from 'vue-js-toggle-button';
  Vue.use(ToggleButton)

  export default {
    name: 'User',
    components: {
    },  
    data () {
        return {
          brand_title: null,
          brand_ownership: true,
          brand_date: new Date().toISOString().slice(0,10),
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
      addBrand() {
          if (!this.brand_title ) 
              return false;
          let brand = {
              name: this.brand_title,
              ownership: this.brand_ownership,
              date: this.brand_date,
          }
          this.brands.push(brand);
          this.hideEdit();

          this.brand_title = '';
          this.brand_ownership = true
      },
    }
  }
</script>
<style>

</style>
