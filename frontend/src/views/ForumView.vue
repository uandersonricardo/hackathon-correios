<script setup lang="ts">
import AppLoading from '@/components/AppLoading.vue'
import { listQuestions } from '@/services/questions'
import { MessageCircleIcon, SearchIcon } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useToast } from 'vue-toastification'

const toast = useToast()

const loading = ref(false)
const questions = ref<ListQuestionsResponse>([])

onMounted(async () => {
  loading.value = true

  try {
    questions.value = await listQuestions()
  } catch (err) {
    toast.error('Erro na listagem de perguntas')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="absolute pointer-events-none top-1.5 left-0 w-full flex items-center justify-center">
    <div
      class="w-full max-w-lg md:flex items-center px-1 bg-white rounded-full hidden pointer-events-auto"
    >
      <input
        type="text"
        placeholder="Buscar perguntas"
        class="flex-grow py-2 px-4 border-none focus:outline-none text-gray-800 text-sm bg-transparent"
      />
      <button
        class="bg-primary-30 hover:bg-primary-20 text-white font-semibold rounded-full h-7 w-7 flex justify-center items-center"
      >
        <SearchIcon :size="16" />
      </button>
    </div>
  </div>
  <section class="flex-1 bg-neutral-95 overflow-auto">
    <div class="container mx-auto flex py-12 gap-4">
      <div class="flex flex-1 flex-col justify-start">
        <div class="flex w-full justify-between items-center">
          <h1 class="text-2xl font-bold text-primary-20 mb-8">Perguntas e respostas</h1>
          <div class="flex justify-end items-center mb-8">
            <label for="sort" class="mr-3 text-primary-30 font-medium">Ordenar por:</label>
            <select
              id="sort"
              class="bg-white text-primary-20 py-2 px-3 border border-neutral-90 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-primary-30"
            >
              <option value="latest">Mais recentes</option>
              <option value="newest">Mais antigos</option>
            </select>
          </div>
        </div>

        <AppLoading v-if="loading"></AppLoading>
        <div v-else>
          <div
            v-for="question in questions"
            :key="question.id"
            class="bg-white border border-neutral-90 shadow-sm rounded-lg p-6 mb-6"
          >
            <RouterLink :to="`/questions/${question.id}`">
              <h2 class="text-2xl font-semibold text-primary-20 mb-1">
                {{ question.title }}
              </h2>
            </RouterLink>

            <div class="flex items-center mb-4 text-neutral-40 text-xs">
              <p>
                Postado por <span class="font-bold">{{ question.author.name }}</span> &middot; 3
                dias atrás
              </p>
            </div>

            <p class="text-neutral-20 mb-4">
              {{ question.content }}
            </p>

            <div class="flex items-center justify-between">
              <RouterLink
                :to="`/questions/${question.id}`"
                class="flex items-center text-primary-40 hover:underline"
              >
                <MessageCircleIcon :size="16" class="mr-2" />
                Ver respostas ({{ question.answers }})
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <aside class="w-full md:w-1/4 px-6 mb-8 md:mb-0">
        <RouterLink to="/questions/new">
          <button
            class="w-full bg-primary-30 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-primary-20 focus:outline-none focus:ring-2 focus:ring-primary-30"
          >
            Iniciar Nova Discussão
          </button>
        </RouterLink>

        <nav class="mt-8">
          <h2 class="text-xl font-semibold text-primary-30">Categorias</h2>
          <div class="w-12 h-[2px] bg-secondary-50 mt-1 mb-4"></div>
          <ul class="space-y-3">
            <li>
              <a href="#" class="block text-primary-30 hover:text-primary-10"
                >Rastreamento de Pacotes</a
              >
            </li>
            <li>
              <a href="#" class="block text-primary-30 hover:text-primary-10">Prazos de Entrega</a>
            </li>
            <li>
              <a href="#" class="block text-primary-30 hover:text-primary-10">Reclamações</a>
            </li>
            <li>
              <a href="#" class="block text-primary-30 hover:text-primary-10"
                >Tributação e Impostos</a
              >
            </li>
            <li>
              <a href="#" class="block text-primary-30 hover:text-primary-10">Outros Assuntos</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </section>
</template>
