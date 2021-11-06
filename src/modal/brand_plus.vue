<template>
  <transition name="modal-fade">
    <div class="modal-backdrop bg-view-mask" v-on:click.self="viewProfileBackdrop">
        <div class="bg-view-mask user_modal_width" v-on:click.self="viewProfileBackdrop">
            <div class="modal new_msg_modal"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <header
                    class="event_setting_position"
                    id="modalTitle"
                >
                    <div class="gcoin_modal">
                        <p class="gcoin_title">Create a Custom Group Chat<img src="close.png" @click="closeModal"></p>
                        <p class="gcoin_title_md">Give this new group chat a personality with a name and an icon. You can always change it later.</p>
                        <div class="form-group wrapper">
                            <div class="box group_profile">
                              <img :src="`${new_group_img}`" class="img-fluid" width="135" height="135" />
                              <div class="upload-options">
                                <label>
                                  <input type="file" class="image-upload" accept="image/*" />
                                </label>
                              </div>
                            </div>
                        </div>
                        <input type="text" placeholder="Group Chat Name" class="form-control new_msg_input" v-model="description">
                        <p class="privacy_title_md">By creating a group chat, you agree to<br>Goldenlinkplus’ <b>Community Guidelines</b></p>
                        <button class="gcoin_modal_btn" @click="addGroup">Create!</button>
                    </div>
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
    data () {
        return {
          is_Internal: true,
          description: "New Group",
          new_group_img: "community/new_brand.png"
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
      addGroup() {
        this.$emit('childToParent', this.description, this.new_group_img);
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
    }
  }
</script>
<style>
    .group_profile {
        text-align: center;
        background-color: transparent !important;
        margin: 20px 0 60px !important;
    }
</style>
