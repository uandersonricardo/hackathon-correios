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
    <div class="container mx-auto flex py-12 gap-6">
      <div class="flex-1">
        <!-- Main Question Card -->
        <div class="bg-white border border-neutral-90 shadow-sm rounded-lg p-6 mb-6">
          <div class="flex items-start">
            <div class="flex flex-col items-center mr-6">
              <button class="text-neutral-50 hover:text-neutral-50 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="lucide lucide-arrow-up w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M12 19V5"></path>
                  <path d="M5 12l7-7 7 7"></path>
                </svg>
              </button>

              <span class="font-semibold text-neutral-50">0</span>

              <button class="text-neutral-50 hover:text-neutral-50 transition-colors">
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
              <input
                type="text"
                class="text-2xl font-semibold text-primary-20 mb-1 p-0 outline-none"
                placeholder="Título"
              />
              <div class="flex items-center mb-4 text-neutral-40 text-xs">
                <p>Postado por <span class="font-bold">Uanderson</span> &middot; Agora</p>
              </div>
              <textarea
                class="outline-none text-neutral-20 w-full h-80"
                placeholder="Escreva sua pergunta"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <aside class="w-full md:w-1/4 px-6 mb-8 md:mb-0">
        <button
          class="w-full bg-primary-30 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-primary-20 focus:outline-none focus:ring-2 focus:ring-primary-30"
        >
          Salvar
        </button>

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
