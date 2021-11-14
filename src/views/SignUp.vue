<template>
  <div class="home">
<div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form action="">
          <div class="mt-4">
                    <label class="block">Full Name<label>
                            <input v-model="name" type="text" name="name" id="name" placeholder="Sam Smith"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
            <div class="mt-4">
                <div>
                    <label class="block" for="email">Email<label>
                            <input v-model="email" type="email" name="email" id="email" placeholder="you@example.com"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="mt-4">
                    <label class="block">Password<label>
                            <input v-model="password" type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="flex items-baseline justify-between">
                    <button  @click="signup" type="button" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Sign Up</button>
                    <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                </div>
            </div>
        </form>
    </div>
</div>



    <div>
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Full Name</label
      >
      <div class="mt-1">
        <input
          v-model="name"
          type="text"
          name="name"
          id="name"
          class="
            shadow-sm
            focus:ring-indigo-500 focus:border-indigo-500
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
          placeholder="Sam Smith"
        />
      </div>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Email</label
      >
      <div class="mt-1">
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          class="
            shadow-sm
            focus:ring-indigo-500 focus:border-indigo-500
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
          placeholder="you@example.com"
        />
      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700"
        >Password</label
      >
      <div class="mt-1">
        <input
          v-model="password"
          type="password"
          name="password"
          id="password"
          class="
            shadow-sm
            focus:ring-indigo-500 focus:border-indigo-500
            block
            w-full
            sm:text-sm
            border-gray-300
            rounded-md
          "
        />
      </div>
    </div>

    <button
      @click="signup"
      type="button"
      class="
        inline-flex
        items-center
        px-2.5
        py-1.5
        border border-transparent
        text-xs
        font-medium
        rounded
        shadow-sm
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
    >
      Sign Up
    </button>
  </div>
  
</template>

<script>
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
