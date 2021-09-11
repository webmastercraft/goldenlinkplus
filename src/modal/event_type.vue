<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal_event_transform type_height"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="event_type_position"
          id="modalTitle"
        >
            <button
              type="button"
              class="close_btn type_close"
              @click="close"
              aria-label="Close modal"
            >
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="event_type">
              <div>
                <img src="event_type/type_1.png">
                <p>Public</p>
              </div>
              <div>
                <img src="event_type/type_2.png">
                <p>Connections Only</p>
              </div>
              <div>
                <img src="event_type/type_3.png">
                <p>Invite<br>Only</p>
              </div>
              <div>
                <img src="event_type/type_4.png">
                <p>Goldenlink Plus</p>
              </div>
              <div>
                <img src="event_type/type_4.png">
                <p>Marketing Elites</p>
              </div>
              <div>
                <img src="event_type/type_4.png">
                <p>Money Builders</p>
              </div>
            </div>
            <div class="type_btn">
              <p>Start an Event open to every one</p>
              <router-link to="/socialmedia/socialmedia_main_create_event">
              <button class="event_go">LET'S GO
              </button>
              </router-link>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>
  .header_event {
  border-radius: 30px;
}
.event_invite_hr {
  margin: 10px 20px 20px;
}
.event_invite_para {
  margin: 10px 20px;
  display: inline-block;
  font-size: 16px;
}
.event_invite_para img {
  margin: 0 5px 0 10px;
}
.event_invite_para span {
  font-size: 16px;
}
.event_invite_para .event_para_small {
  font-size: 14px;
  letter-spacing: 0.05em;
}
.event_user {
  margin: 0 20px;
  text-align: center;
  display: flex;
}
.event_user img {
  margin: auto;
}
.event_invite_title {
  color: #F4992D;
  font-size: 18px;
  margin: 0 20px;
}
.event_invite_url {
  margin: 10px 20px 20px;
}
.event_invite_url input {
  height: 50px;
  padding: 0 38px;
  background-color: #F4F9FE;
  border: 0 solid white;
  border-radius: 12px;
}
.event_user p {
  margin: auto;
}
.event_user span {
  margin-top: 10px;
  display: block;
}
.event_done {
  border-radius: 30px;
  background-color: #F4992D;
  color: white;
  padding: 8px 50px;
  margin: 30px auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.medium_1_title img {
  float: right;
  margin-top: 5px;
}
.event_invite_position {
  text-align: left;
  overflow: auto;
  height: 1000px;
  background: white;
  border-radius: 12px;
  width: 414px;
}
.each_height {
  height: 1000px !important;
}
.modal_event_transform {
  transform: translate(0, 25%) !important;
}
.event_type {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 100px);
  margin: 50px;
  text-align: center;
}
.event_type div {
  width: 33.33%;
  display: grid;
  margin: 10px 0;
  text-align: center;
}
.event_type div img {
  text-align: center;
  margin: 0 auto;
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
.event_type div p {
  margin: 10px auto;
  height: 50px;
}
.type_btn {
  background-color: #F4F9FE;
  text-align: center;
  display: grid;
  width: 100%;
}
.type_btn p {
  margin: 30px 0;
  width: 100%;
}
.event_type_position {
  text-align: left;
  overflow: auto;
  height: 900px;
  background: white;
  border-radius: 12px;
  width: 414px;
}
.type_height {
  height: 900px;
}
.type_close {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
