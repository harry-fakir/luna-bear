<template>
  <div class="home">
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h2 class="text-3xl font-bold text-center">Luna Bear Gallery</h2>
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>

        <form action="">
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
                @click="login"
                type="button"
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
              <a href="#" class="text-sm text-blue-600 hover:underline"
                >Forgot password?</a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("im working");
      this.axios
        .post("https://harry-image.jarrad.dev/api/login", {
          password: this.password,
          email: this.email,
        })
        .then(function (response) {
          console.log(response.data);
        });
    },
  },
};
</script>

<style>
body {
  background-image: url("/../src/assests/css/images/mountains-1562932.jpg");
  background-color: cadetblue;
}
</style>