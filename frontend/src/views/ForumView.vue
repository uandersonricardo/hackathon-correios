<script setup lang="ts">
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import {
  ArrowRightIcon,
  MessageCircleIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon
} from 'lucide-vue-next'
import { onMounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const question = route.query.q ?? ''

const defaultResponse = `# Programa Remessa Conforme

O **Programa Remessa Conforme** é uma iniciativa da Receita Federal que visa agilizar e regularizar a taxação de compras internacionais feitas por consumidores brasileiros. Aqui está um passo a passo básico de como funciona:

1. **Escolha do Produto**: Selecione um produto em um marketplace participante do programa Remessa Conforme.
2. **Cálculo do Imposto**: O marketplace calcula o imposto de importação e o adiciona ao preço do produto.
3. **Pagamento**: Você paga o valor total da compra já com o imposto incluído.
4. **Declaração e Repasso**: O marketplace declara e repassa o valor do imposto à Receita Federal antes da remessa ser enviada para o Brasil.

Ao comprar em sites certificados pelo programa, você paga os impostos antecipadamente, o que geralmente resulta em uma entrega mais rápida, pois a encomenda passa menos tempo na alfândega.

Se precisar de mais detalhes ou tiver alguma dúvida específica, estou aqui para ajudar!
`

type Data = {
  mine: boolean
  content: string
}

const loading = ref(false)
const data = ref<Data[]>([])

onMounted(async () => {
  loading.value = true
  await new Promise((resolve) => setTimeout(() => resolve(true), 2000))

  loading.value = false
  data.value.push({ mine: false, content: defaultResponse })
  data.value.push({ mine: true, content: 'certo, continue pf' })
  data.value.push({ mine: false, content: defaultResponse })
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

        <div class="bg-white border border-neutral-90 shadow-sm rounded-lg p-6 mb-6">
          <RouterLink to="/questions/1">
            <h2 class="text-2xl font-semibold text-primary-20 mb-1">
              Qual é o procedimento para revisão de tributos?
            </h2>
          </RouterLink>

          <div class="flex items-center mb-4 text-neutral-40 text-xs">
            <p>Postado por <span class="font-bold">Ana_Paula</span> &middot; 3 dias atrás</p>
          </div>

          <p class="text-neutral-20 mb-4">
            Next, when I saw the additional material available to the participants, the first
            thought was to use LLMs (because of the hype and ease of integration) with RAG. I was
            excited to try RAG in a real context, so it seems a great idea to try. Also, as the
            hackathon was to help the atendants of Correios to use the tools, forms, etc., natural
            language with a knowledge base would be a great feature of something bigger that I would
            discuss with my design teammates.
          </p>

          <div class="flex items-center justify-between">
            <!-- Link to View Responses -->
            <a href="#" class="flex items-center text-primary-40 hover:underline">
              <MessageCircleIcon :size="16" class="mr-2" />
              Ver respostas (1)
            </a>

            <!-- Icon for Share -->
            <button class="text-gray-500 hover:text-primary-10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-share w-5 h-5">
                <path d="M4 12v.01"></path>
                <path d="M8 12v.01"></path>
                <path d="M16 12v.01"></path>
                <path d="M12 16v.01"></path>
                <path d="M12 8v.01"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="bg-white border border-neutral-90 shadow-sm rounded-lg p-6 mb-6">
          <h2 class="text-2xl font-semibold text-primary-20 mb-1">
            Qual é o procedimento para revisão de tributos?
          </h2>

          <div class="flex items-center mb-4 text-neutral-40 text-xs">
            <p>Postado por <span class="font-bold">Ana_Paula</span> &middot; 3 dias atrás</p>
          </div>

          <p class="text-neutral-20 mb-4">
            Next, when I saw the additional material available to the participants, the first
            thought was to use LLMs (because of the hype and ease of integration) with RAG. I was
            excited to try RAG in a real context, so it seems a great idea to try. Also, as the
            hackathon was to help the atendants of Correios to use the tools, forms, etc., natural
            language with a knowledge base would be a great feature of something bigger that I would
            discuss with my design teammates.
          </p>

          <div class="flex items-center justify-between">
            <!-- Link to View Responses -->
            <a href="#" class="flex items-center text-primary-40 hover:underline">
              <MessageCircleIcon :size="16" class="mr-2" />
              Ver respostas (1)
            </a>

            <!-- Icon for Share -->
            <button class="text-gray-500 hover:text-primary-10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-share w-5 h-5">
                <path d="M4 12v.01"></path>
                <path d="M8 12v.01"></path>
                <path d="M16 12v.01"></path>
                <path d="M12 16v.01"></path>
                <path d="M12 8v.01"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="bg-white border border-neutral-90 shadow-sm rounded-lg p-6 mb-6">
          <h2 class="text-2xl font-semibold text-primary-20 mb-1">
            Qual é o procedimento para revisão de tributos?
          </h2>

          <div class="flex items-center mb-4 text-neutral-40 text-xs">
            <p>Postado por <span class="font-bold">Ana_Paula</span> &middot; 3 dias atrás</p>
          </div>

          <p class="text-neutral-20 mb-4">
            Next, when I saw the additional material available to the participants, the first
            thought was to use LLMs (because of the hype and ease of integration) with RAG. I was
            excited to try RAG in a real context, so it seems a great idea to try. Also, as the
            hackathon was to help the atendants of Correios to use the tools, forms, etc., natural
            language with a knowledge base would be a great feature of something bigger that I would
            discuss with my design teammates.
          </p>

          <div class="flex items-center justify-between">
            <!-- Link to View Responses -->
            <a href="#" class="flex items-center text-primary-40 hover:underline">
              <MessageCircleIcon :size="16" class="mr-2" />
              Ver respostas (1)
            </a>

            <!-- Icon for Share -->
            <button class="text-gray-500 hover:text-primary-10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-share w-5 h-5">
                <path d="M4 12v.01"></path>
                <path d="M8 12v.01"></path>
                <path d="M16 12v.01"></path>
                <path d="M12 16v.01"></path>
                <path d="M12 8v.01"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="bg-white border border-neutral-90 shadow-sm rounded-lg p-6 mb-6">
          <h2 class="text-2xl font-semibold text-primary-20 mb-1">
            Qual é o procedimento para revisão de tributos?
          </h2>

          <div class="flex items-center mb-4 text-neutral-40 text-xs">
            <p>Postado por <span class="font-bold">Ana_Paula</span> &middot; 3 dias atrás</p>
          </div>

          <p class="text-neutral-20 mb-4">
            Next, when I saw the additional material available to the participants, the first
            thought was to use LLMs (because of the hype and ease of integration) with RAG. I was
            excited to try RAG in a real context, so it seems a great idea to try. Also, as the
            hackathon was to help the atendants of Correios to use the tools, forms, etc., natural
            language with a knowledge base would be a great feature of something bigger that I would
            discuss with my design teammates.
          </p>

          <div class="flex items-center justify-between">
            <!-- Link to View Responses -->
            <a href="#" class="flex items-center text-primary-40 hover:underline">
              <MessageCircleIcon :size="16" class="mr-2" />
              Ver respostas (1)
            </a>
          </div>
        </div>

        <div class="bg-white border border-neutral-90 shadow-sm rounded-lg p-6 mb-6">
          <h2 class="text-2xl font-semibold text-primary-20 mb-1">
            Qual é o procedimento para revisão de tributos?
          </h2>

          <div class="flex items-center mb-4 text-neutral-40 text-xs">
            <p>Postado por <span class="font-bold">Ana_Paula</span> &middot; 3 dias atrás</p>
          </div>

          <p class="text-neutral-20 mb-4">
            Next, when I saw the additional material available to the participants, the first
            thought was to use LLMs (because of the hype and ease of integration) with RAG. I was
            excited to try RAG in a real context, so it seems a great idea to try. Also, as the
            hackathon was to help the atendants of Correios to use the tools, forms, etc., natural
            language with a knowledge base would be a great feature of something bigger that I would
            discuss with my design teammates.
          </p>

          <div class="flex items-center justify-between">
            <!-- Link to View Responses -->
            <a href="#" class="flex items-center text-primary-40 hover:underline">
              <MessageCircleIcon :size="16" class="mr-2" />
              Ver respostas (1)
            </a>
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
