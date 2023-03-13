<template>
  <div class="flex-container">

<div class="flex-child logo">
  <div id="logoDiv">
    <img alt="App Logo" src="@/assets/support.png" id="appLogo">
  </div>
  <h2>Find an experiened developer to support and guide you.</h2>
</div>

<div class="flex-child form">
  <h2>Lets Get Started</h2>
  <user-auth/>
</div>

</div>

</template>

<script>
// @ is an alias to /src
import UserAuth from '@/views/auth/UserAuth.vue';

export default {
  name: 'HomeView',
  components: {
    UserAuth
  }
}
</script>

<style scoped>
.flex-container {
    display: flex;
}

.flex-child {
    flex: 1;
}  

.flex-child:first-child {
    margin-right: 20px;
}

.flex-child.form {
  margin-top: 90px;
}

#logoDiv {
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
}

#appLogo {
  height: 70%; width: 70%; object-fit: contain;
}

h2 {
  font-style: italic;
}
</style>
