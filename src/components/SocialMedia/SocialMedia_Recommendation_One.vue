<template>
    <div>
        <div class="container">
            <div class="phone sociallogin">

                <div class="header_modal">
                    <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
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
.recom_padding {
padding: 45px;
text-align: center !important;
}
.recom_title {
    font-size: 20px;
    letter-spacing: -0.02em;
    margin: 0;
}
.recom_small {
    font-size: 16px;
    letter-spacing: -0.02em;
    margin: 0;
}
.recom_user {
    margin: 25px auto;
}
.recom_btn {
    display: grid;
    text-align: center;
    margin: auto;
    width: 180px;
}
.recom_btn button{
    width: 180px;
    color: white;
    background: #F4992D;
    padding: 7px 40px;
    border-radius: 16px;
    margin: 5px 0;
}
.recom_btn button:nth-child(2) {
    opacity: 0.5;
}
</style>
