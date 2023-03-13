<template>
  <header>
    <nav>
      <h1><router-link to="/"><img src="@/assets/logo.png" id="logo" alt="Logo"><span id="logoText">My Dev Support</span></router-link></h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/supports">All Supports</router-link></li> 
        <li><router-link to="/posts">All Posts</router-link></li> <!-- add v-if="isLoggedIn" -->
        <li v-if="isLoggedIn"><router-link to="/requests">Requests</router-link></li>
        <li v-else><router-link to="/auth">Login</router-link></li>
        <li v-if="isLoggedIn">
          <base-button @click="logout">Logout</base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.replace('/coaches');
    }
  }
}
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  /* background-color: #3d008d; */
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #8488b9;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #ced0ec;
}

h1 {
  margin: 0;
}

h1 a {
  color: #8488b9;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: left;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

#logo {
  height: 15%; width: 15%; object-fit: contain;
}

#logoText {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>