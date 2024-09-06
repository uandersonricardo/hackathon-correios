<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppSidebar from './components/AppSidebar.vue'
import { UserCircleIcon } from 'lucide-vue-next'
</script>

<template>
  <header class="w-full bg-secondary-50">
    <div class="container mx-auto py-3 flex items-center gap-2 justify-between">
      <RouterLink to="/">
        <img alt="Correios logo" class="h-5" src="@/assets/correios.svg" />
      </RouterLink>
      <nav class="flex gap-2 text-primary-30">
        <UserCircleIcon />
        <RouterLink to="/">Uanderson</RouterLink>
      </nav>
    </div>
  </header>
  <div class="flex flex-col flex-1 overflow-hidden bg-neutral-95">
    <RouterView />
  </div>
</template>

<style scoped></style>
