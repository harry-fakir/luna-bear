<template>
  <div>
    <form
      action=""
      @submit.prevent="upload"
      class="
        max-w-xl
        mx-auto
        bg-white
        rounded
        px-10
        py-8
        mt-5
        text-left
        shadow-2xl
      "
      v-show="showUploadForm"
    >
      <input
        type="file"
        accept="image/*"
        @change="uploadImage($event)"
        id="file-input"
        prepend-icon="mdi-camera"
        class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-700
          rounded
          transition
          ease-in-out
          mb-5
          focus:text-gray-700
          focus:bg-white
          focus:border-blue-600
          focus:outline-none
        "
      />
      <div class="mb-5">
        <label class="block" for="imageDescription">Image Description</label>
        <input
          v-model="description"
          type="text"
          name="imageDescription"
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
      <div>
        <button
          class="
            bg-transparent
            hover:bg-gray-700
            text-gray-700
            font-semibold
            hover:text-white
            py-2
            px-4
            border border-gray-700
            hover:border-transparent
            rounded
          "
          type="submit"
        >
          Upload
        </button>
      </div>
    </form>

    <div>
      <button
        class="
          bg-transparent
          hover:bg-gray-700
          text-gray-700
          font-semibold
          hover:text-white
          py-2
          px-4
          border border-gray-700
          hover:border-transparent
          rounded
        "
        @click="showUploadForm = true"
        v-show="!showUploadForm"
      >
        Upload Image
      </button>
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
  name: "Upload",
  components: {},
  data: function () {
    return {
      description: "",
      image: null,
      images: [],
      page: 1,
      showUploadForm: false,
    };
  },

  mounted: function () {
    this.showUpload();
  },
  methods: {
    uploadImage(event) {
      this.image = event.target.files[0];
    },
    upload() {
      const URL = "https://harry-image.jarrad.dev/api/upload";

      let data = new FormData();
      data.append("description", this.description);
      data.append("image", this.image);

      let config = {
        header: {
          "Content-Type": "image/png",
        },
      };

      this.axios.post(URL, data, config).then((response) => {
        //this is when upload is completed
        console.log("image upload response > ", response);
        this.showUploadForm = false;
        this.showUpload();
      });
    },

    showUpload() {
      this.axios
        .get("https://harry-image.jarrad.dev/api/uploads?page=" + this.page)
        .then((response) => {
          console.log(response.data);
          this.images = response.data;
        });
    },

    changePage(page) {
      console.log(page);
      this.page = page;
      this.showUpload();
    },
  },
};
</script>
