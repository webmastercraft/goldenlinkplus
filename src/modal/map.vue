<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal map_modal" v-if="!isModalVisible"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <section
                class="modal-body"
                id="modalDescription"
                >
                <slot name="body">
                    <div class="form-group">
                        <img src="img/map.png" class="img-fluid" @click="open">
                    </div>          
                </slot>
                </section>
            </div>
            <div class="modal" v-else
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <header
                class="modal-header"
                id="modalTitle"
                >
                <slot name="header">
                    Add Branch
                </slot>
                <button
                    type="button"
                    class="close_btn"
                    @click="close"
                    aria-label="Close modal"
                >
                    <i class="fa fa-times-circle" aria-hidden="true"></i>
                </button>
                </header>

                <section
                class="modal-body"
                id="modalDescription"
                >
                <slot name="body">
                    <div class="form-group">
                        <select class="form-control" id="">
                        <option>Internal Business Role</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input
                        type="text"
                        class="form-control"
                        id="address_1"
                        aria-describedby="address_1"
                        placeholder="Address 1"
                        />
                    </div>
                    <div class="form-group">
                        <input
                        type="text"
                        class="form-control"
                        id="address_2"
                        aria-describedby="address_2"
                        placeholder="Address 2"
                        />
                    </div>
                    <div class="form-group">
                        <input
                        type="text"
                        class="form-control"
                        id="zip_Code"
                        aria-describedby="zip_Code"
                        placeholder="Zip Code"
                        />
                    </div>
                    <div class="form-group">
                        <input
                        type="text"
                        class="form-control"
                        id="contact_name"
                        aria-describedby="contact_name"
                        placeholder="Contact Name"
                        />
                    </div>
                </slot>
                </section>

                <footer class="modal-footer">
                <slot name="footer">
                    <button
                    type="button"
                    class="save_btn"
                    @click="close"
                    aria-label="Close modal"
                    >SAVE</button>
                </slot>
                </footer>
            </div>
        </div>
        <!-- <AddModal
            v-show="isModalVisible"
            @close="closeModal"
        /> -->
    </transition>
</template>

<script>
  export default {
    components: {
    },
    data() {
        return {
            isModalVisible: false,
            timer: ''
        };
    },
    methods: {
        open() {
            this.isModalVisible = true;
        },
        close() {
            this.$emit('close');
            setInterval(this.init(), 50);
        },
        init() {
            this.isModalVisible = false;
        }
    }
  };
</script>

<style>
.map_modal {
    border-radius: unset !important;
    max-width: 390px !important;
    margin: 0 12px !important;
}
.map_modal .modal-body {
    padding: 0;
}
.map_modal .modal-body .form-group {
    margin: 0;
}
</style>