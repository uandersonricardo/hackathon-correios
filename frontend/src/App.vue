<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="w-full bg-neutral-300 p-2 flex items-center gap-2 justify-between">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
    <nav class="flex gap-2">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
