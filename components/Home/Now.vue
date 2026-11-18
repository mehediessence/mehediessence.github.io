<template>
  <div class="font-mono">
    <AppPrompt cmd="cat now.txt" class="mb-3" />
    <dl class="space-y-2 border-l-2 border-gray-200 dark:border-white/10 pl-4">
      <div v-for="item in now" :key="item.key" class="flex gap-3">
        <dt class="w-24 shrink-0 text-lightaccent dark:text-darkaccent">{{ item.key }}:</dt>
        <dd class="text-gray-700 dark:text-gray-300">{{ item.value }}</dd>
      </div>
    </dl>
    <p class="mt-3 text-xs text-gray-400">last updated: {{ updated }}</p>
  </div>
</template>

<script setup>
const updated = "Nov 2026";
const now = [
  { key: "building", value: "secure ingestion and supplier workflows at turnus.ai" },
  { key: "reviewing", value: "waiting on peer review for WalkApart, my DMARC differential-testing paper" },
  { key: "teaching", value: "Data Structures and Algorithms at Code the Dream" },
  { key: "learning", value: "offensive security, fresh off Cisco's Ethical Hacker course" },
];
</script>
