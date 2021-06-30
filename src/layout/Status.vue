<template>
  <div class="steps">
    <ul id="steps">
      <li v-for="(item, index) in items" :key="index" v-bind:class="{ action: (index < current) }">
        <router-link v-bind:to="'/registration/' + item"></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['current'],
  data() {
    return { items: [
        'one', 'two', 'three', 'four', 'five', 'six', 'seven'
      ]
    }
  }
}
</script>
<style>
  @import '../assets/styles/status.css';
</style>
