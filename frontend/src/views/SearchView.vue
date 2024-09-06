<script setup lang="ts">
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import { ArrowRightIcon, UserCircleIcon } from 'lucide-vue-next'
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
  <section class="flex-1 bg-neutral-95 overflow-auto">
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
      />
      <button
        class="bg-primary-30 hover:bg-primary-20 text-white font-semibold rounded-full h-10 w-10 flex justify-center items-center"
      >
        <ArrowRightIcon :size="20" />
      </button>
    </div>
  </section>
</template>
