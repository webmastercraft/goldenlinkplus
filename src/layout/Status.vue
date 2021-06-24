<template>
  <div class="steps">
    <ul id="steps">
      <li v-for="(item, index) in items" :key="index" v-bind:class="{ action: (index < current) }">
        <router-link v-bind:to="'/' + item"></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['current'],
  data() {
    return { items: [
        'registration_one', 'registration_two', 'registration_three', 'registration_four', 'registration_five', 'registration_six', 'registration_seven'
      ]
    }
  }
}
</script>
<style>
  @import '../assets/styles/status.css';
</style>
