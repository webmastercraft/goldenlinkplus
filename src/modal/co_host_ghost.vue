<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal modal_transform"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
            <button
              type="button"
              class="close_btn"
              @click="close"
              aria-label="Close modal"
            >
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="guest_find">
                    <input type="search" placeholder="Find People" class="form-control">
                    <img src="Search_modal.png" class="">
            </div>
            <div class="modal_scroll">
              <div class="guest_find_user" v-for="(item, index) in datas" :key="index">
                <img :src="`${item.img}`">
                <p>{{item.name}}</p>
                <button @click="added(index)" :class="{'not_added': item.added == false}">{{ item.added ? 'Invite Sent' : 'add Co-host' }}</button>
              </div>
            </div>
        </header>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    data() {
      return {
        datas: [
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown1',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown2',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown3',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown4',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown5',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown6',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown7',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown8',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown9',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown10',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown11',
            added: false
          },
          {
            img: 'Melissa Brown.png',
            name: 'Melissa Brown12',
            added: false
          },
        ]
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      added(index) {
        this.datas[index].added = true
      }
    },
  };
</script>
<style>
.modal_scroll {
    overflow: scroll;
    max-height: 350px;
}
.guest_find {
  margin: 30px 0;
}
.guest_find input{
    width: 100%;
    height: 50px;
    border: 1px solid #AEE2FF;
    border-radius: 16px !important;
    padding-left: 30px !important;
    padding-right: 70px !important;
    position: relative;
}
.guest_find input:focus {
  background-color: white;
  border: 1px solid #AEE2FF;
}
.guest_find img {
    position: absolute;
    top: 60px;
    right: 25px;
}
.guest_find_user {
  display: flex;
  margin: 10px 20px;
}
.guest_find_user img {
  height: 100%;
}
.guest_find_user p {
  margin: auto;
  font-size: 16px;
  font-weight: 300;
}
.guest_find_user button {
  font-size: 14px;
  border-radius: 30px;
  background-color: #AFDFF9;
  color: white;
  margin: auto;
  padding: 3px 10px;
  letter-spacing: 0.02em;
  width: 100px;
  transition: 0.5s;
}

.guest_find_user button.not_added {
  font-size: 14px;
  border-radius: 30px;
  background-color: #13C8FF;
  color: white;
  margin: auto;
  padding: 3px 10px;
  letter-spacing: 0.02em;
  width: 100px;
}
/*.modal {
  max-height: 500px;
}*/
.modal_transform {
  transform: translate(0, 30%) !important;
}
</style>
