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
              <div v-for="(item, index) in data" :key="index" @click="setActiveHost(index)">
                <img :src="`${item.host_img}`" :class="{activeHost: activeHost === index}">
                <span>{{item.host_name}}</span>
              </div>
            </div>
            <div class="type_btn">
              <p>{{ data[activeHost].description }}</p>
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
    data () {
        return {
          activeHost: 0,
            data: [
                {
                    host_img: "event_type/type_1.png",
                    host_name: "Public",
                    description: "Start an Event open to everyone",
                },
                {
                    host_img: "event_type/type_2.png",
                    host_name: "Connections Only",
                    description: "Start an Event with people I'm connected with",
                },
                {
                    host_img: "event_type/type_3.png",
                    host_name: "Only",
                    description: "Start an Event people I choose",
                },
                {
                    host_img: "event_type/type_4.png",
                    host_name: "Goldenlink Plus",
                    description: "Start an Event for Goldenlinkplus",
                },
                {
                    host_img: "event_type/type_4.png",
                    host_name: "Marketing Elites",
                    description: "Start an Event Marketing Elites",
                },
                {
                    host_img: "event_type/type_4.png",
                    host_name: "Money Builders",
                    description: "Start an Event Money Builders",
                },
            ]
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      setActiveHost(index) {
        this.activeHost = index;
      }
    },
  };
</script>
<style>
.activeHost {
  border-radius: 50%;
  border: 4px solid #F4992D;
}
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
  max-width: 414px;
  width: 100%;
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
