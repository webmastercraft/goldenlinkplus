<template>
  <div>
    <div class="container">
      <div class="phone">
        <div class="content">
          <div class="welcome_content">
            <router-link to="/registration"  >
              Registration
            </router-link>
            <router-link to="/usercenter"  >
              UserCenter
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
