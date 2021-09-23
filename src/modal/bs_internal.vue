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
                <p class="switch_title">Add Location<span class="profile_modal_done" @click="closeModal">Cancel</span></p>
                <p class="update_profile_content">Internal Business Role</p>
                <div class="profile_internal_select">
                  <p><img src="profile/sky.png">Headquarter</p>
                  <p><img src="profile/grey.png">Branch</p>
                </div>
                <p class="update_profile_content">Address 1</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="Los Angeles"
                    />
                </div>
                <p class="update_profile_content">Address 2</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="California"
                    />
                </div>
                <p class="update_profile_content">Zip Code</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="458785"
                    />
                </div>
                <p class="update_profile_content">Contact Name</p>
                <div class="form-group profile_input profile_role_input">
                    <input
                      type="text"
                      class="form-control"
                      id="cname"
                      aria-describedby="comname"
                      placeholder=""
                      value="Alice Hansen"
                    />
                </div>
                <button class="profile_brand_btn profile_map_del" @click="closeModal">Delete</button>
                <button class="profile_brand_btn profile_map_update" @click="closeModal">Update</button>
          </header>
        </div>
      </div>
      <ProfileOption 
        v-show="f_show_view_profile"
        @close="showProfile"
      >
      </ProfileOption>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'User',
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
      }
    }
  }
</script>
<style>
    .profile_internal_modal {
        max-width: 414px !important;
        margin: 0 !important;
        transform: translate3d(0, 0%, 0) !important;
        border-radius: 12px !important;
    }
    .profile_modal_done {
      color: #BFC1CE;
      float: right;
    }
    .profile_internal_select {
      margin: 0 20px;
      width: calc(100% - 40px);
    }
    .profile_internal_select p {
      margin: 10px 0;
      font-size: 15px;
    }
    .profile_internal_select img {
      margin: 0 10px 3px;
    }
    .profile_map_del {
      background: #E1251B !important;
      width: calc(50% - 5px) !important;
      margin-right: 5px;
    }
    .profile_map_update {
      width: calc(50% - 5px) !important;
      margin-left: 5px;
    }
</style>
