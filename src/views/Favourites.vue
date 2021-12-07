
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
                right-11
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
              v-on:click="removeFavourites(image)"
            >
              <button>Remove</button>
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
    <div>
      <tailable-pagination
        :data="images"
        :showNumbers="true"
        @page-changed="changePage"
      >
      </tailable-pagination>
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
      page: 1,
    };
  },

  mounted: function () {
    this.loadFavourites();
  },
  methods: {
    loadFavourites() {
      this.axios
        .get("https://harry-image.jarrad.dev/api/favourites?page=" + this.page)
        .then((response) => {
          console.log(response.data);
          this.images = response.data;
        });
    },
    removeFavourites(image) {
      this.axios
        .delete(
          "https://harry-image.jarrad.dev/api/favourite/" + image.id + "/remove"
        )
        .then((response) => {
          console.log(response.data);
          this.loadFavourites();
        });
    },

    changePage(page) {
      console.log(page);
      this.page = page;
      this.loadFavourites();
    },
  },
};
</script>