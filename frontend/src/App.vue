<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ArrowRightIcon } from 'lucide-vue-next'
</script>

<template>
  <header class="w-full bg-secondary-50">
    <div class="container mx-auto p-3 flex items-center gap-2 justify-between">
      <img alt="Correios logo" class="h-5" src="@/assets/correios.svg" />
      <nav class="flex gap-8 text-primary-30">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <section class="w-full bg-secondary-50">
    <div class="container mx-auto flex flex-col items-center justify-center text-center my-20">
      <p class="font-medium text-secondary-20 uppercase mb-2">
        Nossa plataforma de apoio ao atendente
      </p>
      <h1 class="text-6xl font-bold text-primary-20 mb-8">Como podemos te ajudar?</h1>
      <div class="w-full max-w-xl flex items-center px-1 bg-white rounded-full">
        <input
          type="text"
          placeholder="Digite qualquer dúvida"
          class="flex-grow py-3 px-6 border-none focus:outline-none text-gray-800 bg-transparent"
        />
        <button
          class="bg-primary-30 hover:bg-primary-20 text-white font-semibold rounded-full h-10 w-10 flex justify-center items-center"
        >
          <ArrowRightIcon :size="20" />
        </button>
      </div>
      <div class="text-sm mt-6 text-secondary-20 gap-2 flex items-center">
        <span>Buscas populares:</span>
        <span class="px-3 py-1 bg-secondary-30/50 rounded-full text-white">atraso</span>
        <span class="px-3 py-1 bg-secondary-30/50 rounded-full text-white">rota</span>
        <span class="px-3 py-1 bg-secondary-30/50 rounded-full text-white">remessa</span>
        <span class="px-3 py-1 bg-secondary-30/50 rounded-full text-white">extravio</span>
      </div>
    </div>
  </section>

  <RouterView />
</template>

<style scoped></style>
