<script setup lang="ts">
import { HelpCircleIcon } from 'lucide-vue-next'
</script>

<template>
  <div class="px-6 pt-6 pb-4">
    <h1 class="text-2xl font-bold text-primary-20 mb-4">
      Iniciar atendimento
      <button
        class="flex-1 bg-primary-20 rounded-full text-xs text-white inline-flex justify-center items-center p-1"
      >
        <HelpCircleIcon :size="14" />
      </button>
    </h1>
    <div class="flex w-full gap-2">
      <button class="flex-1 bg-neutral-80 rounded-lg text-xs flex justify-center items-center p-2">
        Processo comercial
      </button>
      <button class="flex-1 bg-neutral-80 rounded-lg text-xs flex justify-center items-center p-2">
        Processo operacional
      </button>
      <button class="flex-1 bg-neutral-80 rounded-lg text-xs flex justify-center items-center p-2">
        Processo de distribuição
      </button>
    </div>
  </div>
  <div class="flex-1 border-t border-neutral-90">
    <div class="w-full px-4 py-3 border-b border-neutral-90">
      <div class="text-sm flex items-center gap-2 mb-2">
        <span
          class="font-bold rounded-full bg-primary-20 text-white h-5 w-5 flex items-center justify-center"
          >J</span
        >
        <span class="font-bold">João Carlos</span>
        <span class="font-bold text-neutral-60">&middot;</span>
        <span class="font-bold">Comercial</span>
        <span class="ml-auto text-xs">14:28</span>
      </div>
      <div class="text-xs">Atendimento iniciado</div>
    </div>
    <div class="w-full px-4 py-3 border-b border-neutral-90">
      <div class="text-sm flex items-center gap-2 mb-2">
        <span
          class="font-bold rounded-full bg-primary-30 text-white h-5 w-5 flex items-center justify-center"
          >O</span
        >
        <span class="font-bold">Operacional</span>
        <span class="ml-auto text-xs">14:28</span>
      </div>
      <div class="text-xs">Triagem Manual</div>
    </div>
  </div>
</template>
