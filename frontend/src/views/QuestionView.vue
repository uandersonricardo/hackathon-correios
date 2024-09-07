<script setup lang="ts">
import AppLoading from '@/components/AppLoading.vue'
import { findQuestion } from '@/services/questions'
import { MessageCircleIcon, SearchIcon } from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'

const route = useRoute()
const toast = useToast()

const id = route.params.id
const loading = ref(false)
const question = ref<FindQuestionResponse>(null)

onMounted(async () => {
  loading.value = true

  try {
    question.value = await findQuestion(id.toString())
  } catch (err) {
    toast.error('Erro ao buscar pergunta')
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
    <div class="container mx-auto flex py-12 gap-6">
      <AppLoading v-if="loading"></AppLoading>
      <div v-else class="flex-1">
        <div class="bg-white border border-neutral-90 shadow-sm rounded-lg p-6 mb-6">
          <div class="flex items-start mb-4">
            <div class="flex flex-col items-center mr-6">
              <button class="text-primary-20 hover:text-primary-30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="lucide lucide-arrow-up w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M12 19V5"></path>
                  <path d="M5 12l7-7 7 7"></path>
                </svg>
              </button>

              <span class="font-semibold text-primary-20">{{
                (question?.upvotes ?? 0) - (question?.downvotes ?? 0)
              }}</span>

              <button class="text-primary-20 hover:text-primary-30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="lucide lucide-arrow-down w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M12 5v14"></path>
                  <path d="M19 12l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-semibold text-primary-20 mb-2">
                {{ question?.title }}
              </h2>
              <div class="flex items-center mb-4 text-neutral-40 text-xs">
                <p>
                  Postado por <span class="font-bold">{{ question?.author.name }}</span> &middot; 3
                  dias atrás
                </p>
              </div>
              <p class="text-neutral-20 mb-4">
                {{ question?.content }}
              </p>

              <div class="mt-4">
                <h3 class="text-xs text-neutral-40 inline-flex items-center gap-1">
                  <MessageCircleIcon :size="14" class="inline mb-0.5" />
                  Comentários:
                </h3>
                <div
                  v-for="comment in question?.comments"
                  :key="comment.id"
                  class="bg-neutral-90/50 p-4 rounded-lg mt-2"
                >
                  <p class="text-neutral-20 text-xs">
                    <span class="font-bold text-primary-20">{{ comment.author.name }}</span
                    >: {{ comment.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-for="answer in question?.answers ?? []"
          :key="answer.id"
          class="bg-white border border-neutral-90 shadow-sm rounded-lg p-6 mb-6"
        >
          <div class="flex items-start mb-4">
            <div class="flex flex-col items-center mr-6">
              <button class="text-primary-20 hover:text-primary-30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="lucide lucide-arrow-up w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M12 19V5"></path>
                  <path d="M5 12l7-7 7 7"></path>
                </svg>
              </button>
              <span class="font-semibold text-primary-20">{{
                answer.upvotes - answer.downvotes
              }}</span>
              <button class="text-primary-20 hover:text-primary-30 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="lucide lucide-arrow-down w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M12 5v14"></path>
                  <path d="M19 12l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <div class="flex-1">
              <p class="text-neutral-20 mb-4">
                {{ answer.content }}
              </p>
              <div class="flex items-center mb-4 text-neutral-40 text-xs">
                <p>
                  Respondido por <span class="font-bold">{{ answer.author.name }}</span> &middot; 1
                  dia atrás
                </p>
              </div>

              <div class="mt-4">
                <h3 class="text-xs text-neutral-40 inline-flex items-center gap-1">
                  <MessageCircleIcon :size="14" class="inline mb-0.5" />
                  Comentários:
                </h3>
                <div
                  v-for="comment in answer.comments"
                  :key="comment.id"
                  class="bg-neutral-90/50 p-4 rounded-lg mt-2"
                >
                  <p class="text-neutral-20 text-xs">
                    <span class="font-bold text-primary-20">{{ comment.author.name }}</span
                    >: {{ comment.content }}
                  </p>
                </div>
              </div>
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
          <h2 class="text-xl font-semibold text-primary-30">Sugestões</h2>
          <div class="w-12 h-[2px] bg-secondary-50 mt-1 mb-4"></div>
          <ul class="space-y-3">
            <li>
              <a href="#" class="block text-primary-30 hover:text-primary-10"
                >Qual é o procedimento para revisão de tributos?</a
              >
            </li>
            <li>
              <a href="#" class="block text-primary-30 hover:text-primary-10"
                >Quais são os prazos de entrega para envios internacionais?</a
              >
            </li>
            <li>
              <a href="#" class="block text-primary-30 hover:text-primary-10"
                >Como fazer uma reclamação sobre minha remessa?</a
              >
            </li>
            <li>
              <a href="#" class="block text-primary-30 hover:text-primary-10"
                >Como faço para rastrear meu pacote internacional?</a
              >
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </section>
</template>
