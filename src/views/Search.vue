<template>
  <div>
    <div class="flex items-center justify-center">
      <div class="flex border-2 rounded">
        <form action="" v-on:submit.prevent="searchResults" class="flex">
          <input
            v-model="search"
            type="text"
            class="px-4 py-2 w-80"
            placeholder="Search..."
          />
          <button
            class="flex items-center justify-center px-4 border-l"
            type="submit"
          >
            <svg
              class="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
    <div class="p-6">
      <ul
        role="list"
        class="
          grid grid-cols-2
          gap-x-4 gap-y-8
          sm:grid-cols-3 sm:gap-x-6
          lg:grid-cols-4
          xl:gap-x-8
        "
      >
        <li v-for="image in images" :key="image.id" class="relative">
          <div
            class="
              group
              block
              w-full
              aspect-w-10 aspect-h-7
              rounded-lg
              bg-gray-100
              focus-within:ring-2
              focus-within:ring-offset-2
              focus-within:ring-offset-gray-100
              focus-within:ring-indigo-500
              overflow-hidden
            "
          >
            <img
              :src="image.urls.regular"
              alt=""
              class="object-cover group-hover:opacity-50"
            />

            <div
              class="
                absolute
                bottom-3
                right-3
                top-auto
                left-auto
                h-6
                w-6
                hidden
                group-hover:block
                cursor-pointer
                opacity-50
                active:opacity-100
              "
              v-on:click="favourite(image)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="#bc4749"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <p
            class="
              mt-2
              block
              text-sm
              font-medium
              text-gray-900
              truncate
              pointer-events-none
            "
          >
            {{ image.alt_description }}
          </p>
          <p
            class="block text-sm font-medium text-gray-500 pointer-events-none"
          >
            {{ image.width }} x {{ image.height }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data: function () {
    return {
      search: "",
      images: [],
    };
  },
  methods: {
    searchResults() {
      this.axios
        .get("https://harry-image.jarrad.dev/api/search?search=" + this.search)
        .then((response) => {
          console.log(response.data);
          this.images = response.data;
        });
    },

    favourite(image) {
      this.axios
        .post("https://harry-image.jarrad.dev/api/favourite/add", {
          description: image.alt_description,
          thumb: image.urls.thumb,
          full: image.urls.full,
          height: image.height,
          width: image.width,
        })

        .then((response) => {
          console.log(response.data);
          this.$toasted.show("Added to Favourites!", {
            theme: "outline",
            position: "top-right",
            duration: 5000,
          });
        });
    },
    //add favourite methods here//
  },
};
</script>
