<template>
  <main class="min-h-screen">
    <AppHeader
      class="mb-12"
      title="Projects"
      description="Research and side projects, mostly about finding where security tooling breaks."
    />
    <ul class="space-y-12">
      <li v-for="project in projects" :key="project.title">
        <article class="space-y-3">
          <p class="text-xs text-gray-500">
            {{ project.year }} · <span class="text-lightaccent dark:text-darkaccent">{{ project.status }}</span>
          </p>
          <h2 class="font-semibold text-gray-800 dark:text-gray-100">
            <a v-if="project.url" :href="project.url" target="_blank" class="underline hover:text-lightaccent dark:hover:text-darkaccent">{{ project.title }}</a>
            <template v-else>{{ project.title }}</template>
          </h2>
          <p class="text-gray-700 dark:text-gray-300">{{ project.description }}</p>
          <ul v-if="project.highlights.length" class="space-y-1">
            <li v-for="h in project.highlights" :key="h" class="flex gap-2 text-gray-700 dark:text-gray-300">
              <span class="text-lightaccent dark:text-darkaccent">▸</span>
              <span>{{ h }}</span>
            </li>
          </ul>
          <p class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-600 dark:bg-white/10 dark:text-gray-400"
            >#{{ tag }}</span>
          </p>
        </article>
      </li>
    </ul>
  </main>
</template>

<script setup>
import projects from '~/data/projects'

useSeoMeta({
  title: "Projects | mehediessence",
  description: "Research and side projects by Mehedi Hasan, focused on software and systems security.",
});
</script>
