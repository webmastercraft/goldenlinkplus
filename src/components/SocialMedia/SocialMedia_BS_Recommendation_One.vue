<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/socialmedia_bs_reg_basic_info" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                    <a>Connect</a>
                </div>
                <div class="content left-content header_top height_static">
                    <div class="recom_padding">
                        <p class="recom_title">Let’s find some of your friends!</p>
                        <img src="recom_user.png" class="recom_user">
                        <p class="recom_small">We'll show you who's already here and notify you when new friends join!</p>
                    </div>
                    <div class="recom_btn">
                        <button @click="showModal">OK</button>
                        <button>Don't Allow</button>
                    </div>
                </div>
                <Modal
                    v-show="isModalVisible"
                    @close="closeModal"
                />
            </div>
        </div>
    </div>
</template>
<script>
import Modal from "../../modal/allow.vue";


export default {
    name: 'Recommendation_One',
    components: {
        Modal
    },
    data () {
        return {
            isModalVisible: false
            };
    },
    methods: {
            showModal() {
            this.isModalVisible = true;
            },
            closeModal() {
            this.isModalVisible = false;
            }
    }
}
</script>
<style>

</style>
