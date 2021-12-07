<template>
  <div class="py-4 flex items-center justify-between border-t border-gray-200">
    <div>
      <p class="text-sm text-gray-700">
        Showing <span class="font-medium">{{ from }}</span> to
        <span class="font-medium">{{ to }}</span> of
        <span class="font-medium">{{ total }}</span> results
      </p>
    </div>
    <div>
      <nav
        class="relative z-0 inline-flex rounded-md shadow-sm -space-x-0"
        aria-label="Pagination"
      >
        <template v-for="(link, key) in links">
          <div
            :key="key"
            v-if="link.url === null"
            class="
              z-10
              relative
              inline-flex
              bg-white
              items-center
              px-4
              py-2
              border
              text-sm text-cp-navy
              font-medium
            "
            :class="{
              'rounded-l-md': key === 0,
              'rounded-r-md': key === links.count - 1,
            }"
            v-html="link.label"
          />
          <a
            :key="key"
            v-else
            class="
              z-10
              relative
              inline-flex
              items-center
              bg-white
              px-4
              py-2
              border
              text-sm text-cp-navy
              font-medium
              hover:bg-gray-50
            "
            :class="{
              'bg-cp-blue-lightest border-cp-blue': link.active,
              'rounded-l-md': key === 0,
              'rounded-r-md': key === links.length - 1,
            }"
            :href="link.url"
            v-html="link.label"
          />
        </template>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    links: Array,
    from: Number,
    to: Number,
    total: Number,
  },
  computed: {},
};
</script>
