<template>
  <div>
    <h2 class="mb-6"><AppPrompt cmd="tail -n 3 news.log" /></h2>
    <ul class="space-y-8">
      <li v-for="(news, id) in newsItems" :key="id">
        <AppNewsCard :news="news" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All News and Highlights &rarr;"
        to="/news"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import newsData from '@/data/news';

const newsItems = computed(() =>
  [...newsData]
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    .slice(0, 3)
);

// const { data: newsItems } = await useAsyncData("news-home", () =>
//   queryContent("/news")
//     .sort({ published: -1 })
//     .limit(3)
//     .only(["title", "description", "published", "slug", "_path"])
//     .find()
// );
</script>
