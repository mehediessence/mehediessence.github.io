<template>
  <NuxtLoadingIndicator :color="loadingColor" />
  <AppNavbar />
  <div class="h-28"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-20"></div>
  <AppFooter />
</template>

<script setup>
const colorMode = useColorMode();

const loadingColor = computed(() =>
  colorMode.value === 'dark' ? '#2abc89' : '#cb2a42'
);

// favicon.svg follows the OS theme on its own; when the visitor picks a theme
// with the toggle, switch to the matching fixed variant.
useHead({
  link: [{
    rel: 'icon',
    type: 'image/svg+xml',
    href: computed(() =>
      colorMode.preference === 'system' ? '/favicon.svg' : `/favicon-${colorMode.value}.svg`
    ),
    key: 'favicon',
  }],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>
