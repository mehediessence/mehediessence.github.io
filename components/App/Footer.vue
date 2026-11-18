<template>
  <footer
    class="max-w-2xl mx-auto text-gray-400 dark:text-gray-600 text-sm text-center pb-8"
  >
    <br>
    <p>m e h e d i e s s e n c e</p>
    <p>© {{ year }} All rights reserved</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>