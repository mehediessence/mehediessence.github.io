<template>
  <p class="font-mono text-sm text-gray-400">
    <span class="text-lightaccent dark:text-darkaccent">$</span> {{ cmd }}
  </p>
</template>

<script setup>
defineProps({
  cmd: { type: String, required: true },
});
</script>
