<template>
  <div>
    <h2 class="mb-6"><AppPrompt cmd="ls publications/" /></h2>
    <ul class="space-y-8">
      <li v-for="(pub, id) in featuredPublications" :key="id">
        <AppPublicationCard :publication="pub" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Publications &rarr;"
        to="/publications"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import publications from '@/data/publications'

// Sort by year descending and take the first 3
const featuredPublications = computed(() =>
  [...publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 3)
)
</script>