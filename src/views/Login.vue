<template>
  <div class="home">
    <div class="flex items-center justify-center min-h-screen">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>

        <div v-show="error === true" class="text-red-900">
          Incorrect details; please try again.
        </div>
        <form action="" @submit.prevent="login">
          <div class="mt-4">
            <div>
              <label class="block" for="email">Email</label>
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                "
              />
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
              <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="
                  w-full
                  px-4
                  py-2
                  mt-2
                  border
                  rounded-md
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                "
              />
            </div>
            <div class="flex items-baseline justify-between">
              <button
                type="submit"
                class="
                  px-6
                  py-2
                  mt-4
                  text-white
                  bg-gray-500
                  rounded-lg
                  hover:bg-gray-700
                "
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "Login",
  components: {},
  data: function () {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    login() {
      console.log("im working");
      this.error = false;
      this.axios
        .post("https://harry-image.jarrad.dev/api/login", {
          password: this.password,
          email: this.email,
        })
        .then((response) => {
          store.isLoggedIn = true;

          this.axios.defaults.headers.common = {
            Authorization: `Bearer ${response.data.token}`,
            Accept: "application/json",
          };
          this.$router.push({ name: "Search" });
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>


