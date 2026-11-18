<template>
    <article>
        <p class="font-semibold text-gray-700 dark:text-gray-300">
            <a v-if="publication.url" :href="publication.url" target="_blank" class="underline hover:text-lightaccent dark:hover:text-darkaccent">{{ publication.title }}</a>
            <template v-else>{{ publication.title }}</template>
        </p>
        <p class="text-sm text-gray-500">{{ publication.authors }}</p>
        <p class="text-lightaccent dark:text-darkaccent">
            {{ publication.event }}
        </p>
    </article>
</template>

<script setup>
defineProps({
  publication: {
    type: Object,
    required: true,
  },
});
</script>