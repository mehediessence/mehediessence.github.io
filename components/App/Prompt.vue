<template>
  <p class="font-mono text-sm font-semibold text-lightaccent dark:text-darkaccent">
    <span class="font-normal text-gray-400 dark:text-gray-500">$</span> {{ cmd }}
  </p>
</template>

<script setup>
defineProps({
  cmd: { type: String, required: true },
});
</script>
