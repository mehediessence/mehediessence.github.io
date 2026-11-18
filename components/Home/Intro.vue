<template>
  <div class="space-y-4">
    <div class="font-mono text-xs sm:text-base leading-none overflow-x-auto whitespace-nowrap hover:text-lightaccent hover:dark:text-darkaccent">
      <div class="inline-block origin-left scale-90 sm:scale-100 transform-gpu">
        <span class="block">┌───┬────────┬─────────┐</span>
        <span class="block">│ &gt; │ mehedi │ essence │</span>
        <span class="block">└───┴────────┴─────────┘</span>
      </div>
    </div>
    <p class="text-gray-400"><span class="text-lightaccent dark:text-darkaccent">$</span> whoami</p>
    <h1 class="text-base font-bold tracking-tight text-gray-800 dark:text-gray-100">
      I build systems people depend on, then try to break them.
    </h1>
    <p class="text-gray-900 dark:text-gray-300">
      I'm Mehedi Hasan, a software engineer focused on software and systems security, with 4 years of building and securing production systems.
      I hardened Bangladesh's national birth and death registry dashboard (about 199M registered births) against the OWASP Top 10,
      and led the team behind UNICEF Bangladesh's digital complaint and feedback system.
      Today I'm a Backend Engineer at <a href="https://turnus.ai/en/" class="underline hover:text-lightaccent dark:hover:text-darkaccent">turnus.ai</a> (Germany),
      where I own a hardened inbound mailbox for supplier inquiries and the bot-blocking that keeps the app quiet.
    </p>
    <p class="text-gray-900 dark:text-gray-300">
      On the research side, I look for the places where security tooling quietly disagrees with itself: how DMARC libraries diverge on the same input,
      and how to find leaked credentials in source code fast.
      I hold a BSc in Computer Science and Engineering from <a href="https://bracu.ac.bd/" class="underline hover:text-lightaccent dark:hover:text-darkaccent">BRAC University</a> with Highest Distinction,
      and teach DSA at <a href="https://codethedream.org/" class="underline hover:text-lightaccent dark:hover:text-darkaccent">Code the Dream</a>.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "mehediessence",
  description:
    "I'm Mehedi Hasan, a software engineer focused on software and systems security. I've hardened national-scale health systems in Bangladesh, built UNICEF Bangladesh's complaint and feedback system, and work as a Backend Engineer at turnus.ai. My research looks at where security tooling disagrees, from DMARC library divergence to leaked-credential scanning.",
});
</script>
