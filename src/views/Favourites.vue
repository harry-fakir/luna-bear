
<template>
  <div>
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
        <li v-for="image in images.data" :key="image.id" class="relative">
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
              :src="image.thumb"
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
              "
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
            {{ image.description }}
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
  name: "Favourites",
  components: {},
  data: function () {
    return {
      images: [],
    };
  },

  mounted: function () {
    this.loadFavourites();
  },
  methods: {
    loadFavourites() {
      this.axios
        .get("https://harry-image.jarrad.dev/api/favourites", {})
        .then((response) => {
          console.log(response.data);
          this.images = response.data;
        });
    },
  },
};
</script>