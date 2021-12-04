<template>
  <div class="home">
    <div class="flex items-center justify-center min-h-screen">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Register your account</h3>
        <form action="" @submit.prevent="signup">
          <div class="mt-4">
            <label class="block">Full Name</label>
            <input
              v-model="name"
              type="text"
              name="name"
              id="name"
              placeholder="Sam Smith"
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
                Sign Up
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
  name: "SignUp",
  components: {},
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      console.log("im working");
      store.isLoggedIn = true;
      this.axios
        .post("https://harry-image.jarrad.dev/api/register", {
          name: this.name,
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
