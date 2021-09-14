<template>
  <div>
    <div class="container">
      <div class="reward_phone">
          <img src="Members_Lounge3.png" class="reward_lounge3">
        <div class="overlay_img forget_img">
          <div class="overlay_modal">
            <p class="lounge_reward">Thank you for signing up!</p>
            <p class="reward_forget">Don’t Forget<br>to Claim Your<br>$5 Reward</p>
            <hr class="lounge_hr">
            <p class="lounge_complete">Complete your profile and claim<br>your $5 reward for signing up!</p>
            <p class="lounge_question"><b>Would you like to complete<br>your profile now?</b></p>
            <button class="reward_btn">I want to complete my profile</button>
            <router-link to="/socialmedia/socialmedia_members_lounge_one">
              <button class="reward_btn_disable">Not now, Remind me next time</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'Reward',
  components: {
  },
}
</script>
<style>
.overlay_modal {
  margin: 110px 25px;
  height: 70%;
  background: white;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  max-width: 414px;
  width: calc(100% - 50px);
}
.lounge_reward {
  margin: 0;
}
.reward_forget {
  font-size: 32px;
  color: #F4992D;
  font-weight: 600;
  line-height: 40px;
  margin: 15px auto;
}
.lounge_hr {
  margin: 0;
}
.lounge_complete {
  font-size: 16px;
  margin: 15px 0 5px;
}
.lounge_question {
  font-size: 18px;
  font-weight: 500;
  margin: 15px 0 5px;
}
.overlay_modal button {
  width: 100%;
  color: white;
  background-color: #13C8FF;
  padding: 7px 0;
  margin: 7px 0;
  font-size: 18px;
  /*letter-spacing: 0.04em;*/
  border-radius: 16px;
  font-weight: 600;
}
.reward_btn_disable {
  background-color: #AFDFF9 !important;
}
.reward_btn {
  background-color: #13C8FF;
}
.forget_img {
  height: 736px;
}
.reward_phone {
  width: 100%;
  max-width: 414px;
  display: flex;
  justify-content: center;
  background: #E8F1FA;
  text-align: center;
}
.reward_lounge3 {
  width: 100%;
  max-width: 414px;
}
</style>
 