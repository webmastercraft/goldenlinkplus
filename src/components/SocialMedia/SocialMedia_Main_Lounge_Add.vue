<template>
    <div class="container">
        <div class="profile_phone">

            <div class="header_modal profile_modal">
                <router-link to="/socialmedia/socialmedia_main" class="header_arrow"><img src="img/header_arrow.png"></router-link>
                <a>My Add-Ons</a>
            </div>
            <div class="add_modal">
                <div class="add_modal_part">
                    <div class="add_modal_title">
                        <p class="add_title"><img src="lounge/bundle.png">Profile Bundle</p>
                        <p class="add_content">Bundle and switch between GS and Business profiles. Add more exposures to your campaigns inside the event.</p>
                    </div>
                    <div class="add_modal_price">
                        <p class="add_price_title"><span>USD</span><span>99</span></p>
                        <p class="add_billed">Billed Annually</p>
                        <button class="add_get_btn">GET THIS</button>
                        <button class="add_reward_btn">USE REWARDS</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
  name: 'Lounge_Add',
  components: {
  },
  
}
</script>
<style>
    .add_modal {
        margin: 80px 20px 0;
        max-width: 414px;
        width: calc(100% - 40px);
    }
    .add_title {
        color: #EF8200;
        font-size: 15px;
        margin: 0;
    }
    .add_modal_part {
        display: flex;
        width: 100%;
    }
    .add_modal_title {
        text-align: left;
        margin: auto;
        width: 70%;
    }
    .add_modal_price {
        width: 30%;
    }
    .add_price_title {
        margin: auto;
        position: relative;
        height: 50px;
    }
    .add_price_title span:first-child {
        position: absolute;
        left: 0;
        top: 11px;
        font-size: 12px;
    }
    .add_price_title span:last-child {
        font-size: 40px;
    }
    .add_billed {
        margin: 0;
        color: #808695;
        font-size: 13px;
    }
    .add_get_btn {
        background-color: #13C8FF;
        border-radius: 8px;
        color: white;
        padding: 8px;
        font-size: 13px;
        margin: 5px 0;
    }
    .add_reward_btn {
        background-color: #FFB803;
        color: white;
        border-radius: 8px;
        padding: 8px;
        font-size: 13px;
    }
    .add_content {
        margin: 0;
        font-size: 13px;
        margin: 0;
    }
</style>
