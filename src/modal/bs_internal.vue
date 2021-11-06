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
                  <p @click="selectInternal(1)"><button class="select_internal_modal"  :class="{'select_internal_active': is_Internal == true}"></button>Headquarter</p>
                  <p @click="selectInternal(2)"><button class="select_internal_modal" :class="{'select_internal_active': is_Internal != true}"></button>Branch</p>
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
                <button v-if="!addition" class="profile_brand_btn profile_map_del" @click="closeModal">Delete</button>
                <button v-if="!addition" class="profile_brand_btn profile_map_update" @click="closeModal">Update</button>
                <button v-if="addition" class="profile_brand_btn profile_map_update w-100" @click="closeModal">Add this Location</button>
          </header>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    name: 'User',
    components: {
    },  
    props: ['role', 'current_index', 'addition'],
    data () {
        return {
          is_Internal: true,
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
      selectInternal(key) {
        if (key == 1) {
            this.is_Internal = true;
        } else {
            this.is_Internal = false;
        }
      }
    },
    mounted() {
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
    .profile_internal_select button {
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
    .select_internal_modal {
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background-color: #E8F1FA;
    }
    .select_internal_active {
      background-color: #13C8FF;
    }
</style>
