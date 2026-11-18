<template>
  <div class="space-y-4">
    <p class="font-mono text-lg sm:text-2xl font-bold tracking-tight whitespace-nowrap">
      <span class="text-lightaccent dark:text-darkaccent">mehedi</span><span class="text-gray-400">@</span><span class="text-gray-800 dark:text-gray-100">essence</span><span class="text-gray-400">:~$</span>
      <span class="cursor inline-block w-[0.55em] h-[1em] align-[-0.1em] bg-lightaccent dark:bg-darkaccent" aria-hidden="true"></span>
    </p>
    <AppPrompt cmd="whoami" />
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
      On the research side, I look for the places where security tooling quietly disagrees with itself, like DMARC libraries that reach different verdicts on the same email.
      On the side, I build open-source security tools such as <a href="https://github.com/TheBrainfucker/unsecret" class="underline hover:text-lightaccent dark:hover:text-darkaccent">Unsecret</a>, a scanner for leaked credentials in source code.
      I hold a BSc in Computer Science and Engineering from <a href="https://bracu.ac.bd/" class="underline hover:text-lightaccent dark:hover:text-darkaccent">BRAC University</a> with Highest Distinction,
      and teach DSA at <a href="https://codethedream.org/" class="underline hover:text-lightaccent dark:hover:text-darkaccent">Code the Dream</a>.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "mehediessence",
  description:
    "I'm Mehedi Hasan, a software engineer focused on software and systems security. I've hardened national-scale health systems in Bangladesh, built UNICEF Bangladesh's complaint and feedback system, and work as a Backend Engineer at turnus.ai. My research looks at where security tooling disagrees, such as DMARC library divergence, and I build open-source security tools like Unsecret.",
});
</script>

<style scoped>
.cursor {
  animation: blink 1.1s steps(1) infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .cursor { animation: none; }
}
</style>
