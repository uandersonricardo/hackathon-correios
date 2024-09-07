<script setup lang="ts">
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import { getFileName, getStorageUrl } from '@/lib/file'
import { ask } from '@/services/ai'
import { ArrowRightIcon, ExternalLinkIcon, FileIcon } from 'lucide-vue-next'
import { nextTick, onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useToast } from 'vue-toastification'

const route = useRoute()
const toast = useToast()

const question = route.query.q ?? ''

type Data = {
  mine: boolean
  content: string
  document: string | null
}

const loading = ref(false)
const prompt = ref('')
const data = ref<Data[]>([])
const scroll = ref<HTMLDivElement>()

const handleEnter = async () => {
  const search = prompt.value
  data.value.push({ mine: true, content: search, document: null })
  prompt.value = ''

  loading.value = true

  await nextTick()
  scroll.value?.scrollTo(0, scroll.value.scrollHeight)

  try {
    const { response, document } = await ask(search)
    data.value.push({ mine: false, content: response, document: document })

    await nextTick()
    scroll.value?.scrollTo(0, scroll.value.scrollHeight)
  } catch (err) {
    toast.error('Erro ao perguntar para a IA')
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  loading.value = true
  try {
    const { response, document } = await ask(question.toString())
    data.value.push({ mine: false, content: response, document: document })

    await nextTick()
    scroll.value?.scrollTo(0, scroll.value.scrollHeight)
  } catch (err) {
    toast.error('Erro ao perguntar para a IA')
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="w-full bg-secondary-50 pb-8">
    <div class="container mx-auto flex flex-col justify-start mt-12">
      <h1 class="text-4xl font-bold text-primary-20 mb-2 text-left">{{ question }}</h1>
      <div class="text-sm text-secondary-20 gap-2 flex items-center">
        <span>Não encontrou o que queria?</span>
        <RouterLink to="/questions/new">
          <button
            class="px-3 py-1 bg-secondary-30/50 hover:bg-secondary-30/80 rounded-full text-white"
          >
            abrir uma pergunta no fórum
          </button>
        </RouterLink>
      </div>
    </div>
  </section>
  <section ref="scroll" class="flex-1 bg-neutral-95 overflow-auto scroll-smooth">
    <div class="container mx-auto flex flex-col justify-start">
      <div
        v-for="(response, index) in data"
        :key="index"
        class="border-neutral-80 pt-8"
        :class="{ 'border-t flex justify-end': response.mine, 'mb-6': !response.mine }"
      >
        <h1
          class="text-xl font-bold text-neutral-20 mb-2 text-left bg-neutral-80 px-4 py-3 rounded-full rounded-br-none inline"
          v-if="response.mine"
        >
          {{ response.content }}
        </h1>
        <MarkdownRenderer v-else :source="response.content" />
        <div
          v-if="response.document"
          class="p-3 rounded-lg border border-neutral-70 inline-flex items-center text-xs max-w-60 font-semibold text-neutral-20"
        >
          {{ getFileName(response.document) }}
          <a :href="getStorageUrl(response.document)" target="_blank">
            <ExternalLinkIcon
              :size="18"
              class="ml-3 text-neutral-40 flex-shrink-0 hover:text-neutral-30"
          /></a>
        </div>
      </div>
      <div v-if="loading" class="w-full animate-pulse pt-8 mb-6">
        <div class="h-5 bg-neutral-60 rounded-full w-[50%] mb-5"></div>
        <div class="h-2.5 bg-neutral-60 rounded-full w-[90%] mb-3"></div>
        <div class="h-2.5 bg-neutral-60 rounded-full w-[20%] mb-5"></div>
        <div class="h-2.5 bg-neutral-60 rounded-full w-[60%] mb-3"></div>
        <div class="h-2.5 bg-neutral-60 rounded-full w-[72%] mb-3"></div>
        <div class="h-2.5 bg-neutral-60 rounded-full w-[55%] mb-3"></div>
        <div class="h-2.5 bg-neutral-60 rounded-full w-[40%] mb-6"></div>
        <div class="h-2.5 bg-neutral-60 rounded-full w-[80%] mb-3"></div>
        <div class="h-2.5 bg-neutral-60 rounded-full w-[50%] mb-6"></div>
        <div class="h-2.5 bg-neutral-60 rounded-full w-[70%] mb-3"></div>
      </div>
    </div>
  </section>
  <section class="flex p-3 items-center justify-center bg-neutral-95">
    <div
      class="w-full max-w-xl flex items-center px-1 bg-white rounded-full shadow-lg border border-neutral-90"
    >
      <input
        type="text"
        placeholder="Digite qualquer dúvida"
        class="flex-grow py-3 px-6 border-none focus:outline-none text-gray-800 bg-transparent"
        v-model="prompt"
        @keypress.enter="handleEnter"
      />
      <button
        class="bg-primary-30 hover:bg-primary-20 text-white font-semibold rounded-full h-10 w-10 flex justify-center items-center"
        @click="handleEnter"
      >
        <ArrowRightIcon :size="20" />
      </button>
    </div>
  </section>
</template>
