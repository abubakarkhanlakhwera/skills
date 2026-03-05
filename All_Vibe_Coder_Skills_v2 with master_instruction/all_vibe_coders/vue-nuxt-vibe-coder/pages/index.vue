<script setup lang="ts">
// useFetch is auto-imported by Nuxt — no import needed
const { data } = await useFetch('/api/hello');
</script>

<template>
  <main>
    <p>{{ data?.message ?? 'Hello Copilot! Follow SKILL.md rules.' }}</p>
  </main>
</template>
