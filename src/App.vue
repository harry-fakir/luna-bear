<template>
  <div id="app" :class="$route.name.toLowerCase()">
    <header
      class="
        text-gray-600
        body-font
        hover:bg-dark-gray hover:bg-opacity-25
        transition
        duration-500
      "
    >
      <div
        class="
          container
          mx-auto
          flex flex-wrap
          p-5
          flex-col
          md:flex-row
          items-center
        "
      >
        <a
          class="
            flex
            title-font
            font-medium
            items-center
            text-gray-600
            mb-4
            md:mb-0
          "
        >
          <span class="ml-3 text-2xl font-bold">Luna Bear Gallery</span>
        </a>

        <div id="nav" class="md:ml-auto flex flex-wrap text-base items-center">
          <router-link to="/login" class="mr-5" v-show="!isLoggedIn"
            >Login</router-link
          >

          <router-link to="/signup" class="mr-5" v-show="!isLoggedIn"
            >Sign Up</router-link
          >
          <router-link to="/search" class="mr-5" v-show="isLoggedIn"
            >Search</router-link
          >
          <router-link to="/favourites" class="mr-5" v-show="isLoggedIn"
            >Favourites</router-link
          >

          <a class="mr-5 cursor-pointer" v-show="isLoggedIn" v-on:click="logOut"
            >Log Out</a
          >
        </div>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script>
import store from "./store";

export default {
  name: "App",
  data: function () {
    return {};
  },
  computed: {
    isLoggedIn() {
      return store.isLoggedIn;
    },
  },
  methods: {
    logOut() {
      store.isLoggedIn = false;

      this.axios.defaults.headers.common = {
        Authorization: "",
      };
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @apply min-h-screen;
  background-color: #dee2e6;
}
#app.login,
#app.signup {
  background-image: url("./assets/css/images/mountains-1562932.jpg");

  background-size: cover;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #468faf;
}
</style>
