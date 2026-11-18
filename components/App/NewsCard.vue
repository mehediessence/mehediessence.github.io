<template>
  <article>
    <time
      class="relative z-10 order-first mb-2 flex items-center text-sm text-gray-500 pl-3.5"
      :datetime="news.published"
      ><span
        class="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
        ><span
          class="h-4 w-0.5 rounded-full bg-gray-500"
        ></span
      ></span>
      {{ getReadableDate(news.published) }}
    </time>
    <p v-html="news.description" class="relative z-10 mt-1 text-sm text-gray-700 dark:text-gray-300">
    </p>
  </article>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true,
  },
});

const getReadableDate = (dateString) => {
  // "YYYY-MM" means the exact day is unknown, so show only month and year
  const monthOnly = /^\d{4}-\d{2}$/.test(dateString);
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    ...(monthOnly ? {} : { day: "numeric" }),
    timeZone: "UTC",
  });
};
</script>