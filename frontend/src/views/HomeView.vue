<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const router = useRouter()
const toast = useToast()

const search = ref('')

const handleEnter = () => {
  if (search.value === '') {
    toast.warning('Digite alguma coisa para continuar')
    return
  }

  router.push(`/search?q=${search.value}`)
}
</script>

<template>
  <section class="w-full bg-secondary-50 pb-8">
    <div class="container mx-auto flex flex-col items-center justify-center text-center my-20">
      <p class="font-medium text-secondary-20 uppercase mb-2">
        Nossa plataforma de apoio ao atendente
      </p>
      <h1 class="text-6xl font-bold text-primary-20 mb-8">Como podemos te ajudar?</h1>
      <div class="w-full max-w-xl flex items-center px-1 shadow-lg bg-white rounded-full">
        <input
          type="text"
          v-model="search"
          placeholder="Digite qualquer dúvida"
          class="flex-grow py-3 px-6 border-none focus:outline-none text-gray-800 bg-transparent"
          @keypress.enter="handleEnter"
        />
        <button
          class="bg-primary-30 hover:bg-primary-20 text-white font-semibold rounded-full h-10 w-10 flex justify-center items-center"
          @click="handleEnter"
        >
          <ArrowRightIcon :size="20" />
        </button>
      </div>
      <div class="text-sm mt-6 text-secondary-20 gap-2 flex items-center">
        <span>Buscas populares:</span>
        <RouterLink to="/search?q=atraso">
          <span class="px-3 py-1 bg-secondary-30/50 hover:bg-secondary-30 rounded-full text-white"
            >atraso</span
          >
        </RouterLink>
        <RouterLink to="/search?q=rota">
          <span class="px-3 py-1 bg-secondary-30/50 hover:bg-secondary-30 rounded-full text-white"
            >rota</span
          >
        </RouterLink>
        <RouterLink to="/search?q=remessa">
          <span class="px-3 py-1 bg-secondary-30/50 hover:bg-secondary-30 rounded-full text-white"
            >remessa</span
          >
        </RouterLink>
        <RouterLink to="/search?q=extravio">
          <span class="px-3 py-1 bg-secondary-30/50 hover:bg-secondary-30 rounded-full text-white"
            >extravio</span
          >
        </RouterLink>
      </div>
    </div>
  </section>

  <div class="grid grid-cols-8 gap-2 mx-auto w-[56rem] -mt-16">
    <div class="bg-primary-30 shadow-lg h-24 text-white p-2 rounded-lg shadow-md md:col-span-2">
      <h2 class="text-xs font-semibold break-words">Remessa Conforme</h2>
      <p class="mt-2 text-xs hidden">
        Garanta que sua remessa esteja de acordo com todas as normas necessárias.
      </p>
    </div>

    <div class="bg-primary-30 shadow-lg h-24 text-white p-2 rounded-lg shadow-md">
      <h2 class="text-xs font-semibold break-words">Preços e Prazos Internacionais</h2>
      <p class="mt-2 text-xs hidden">Consulte preços e prazos de envio internacional.</p>
    </div>

    <div class="bg-primary-30 shadow-lg h-24 text-white p-2 rounded-lg shadow-md">
      <h2 class="text-xs font-semibold break-words">Consulta Manifestação Internacional</h2>
      <p class="mt-2 text-xs hidden">
        Visualize manifestações e detalhes de remessas internacionais.
      </p>
    </div>

    <div
      class="bg-primary-20 shadow-lg text-white p-2 rounded-lg shadow-md md:col-span-2 row-span-2"
    >
      <RouterLink to="/questions">
        <h2 class="text-xs font-semibold break-words">Tirar uma dúvida</h2>
        <p class="mt-2 text-xs hidden">Tire suas dúvidas ou participe do nosso fórum.</p>
      </RouterLink>
    </div>

    <div class="bg-primary-30 shadow-lg h-24 text-white p-2 rounded-lg shadow-md">
      <h2 class="text-xs font-semibold break-words">Reclamação Exportação/Importação</h2>
      <p class="mt-2 text-xs hidden">
        Envie reclamações sobre remessas de exportação ou importação.
      </p>
    </div>

    <div class="bg-primary-30 shadow-lg h-24 text-white p-2 rounded-lg shadow-md">
      <h2 class="text-xs font-semibold break-words">Pedido de Revisão de Tributação</h2>
      <p class="mt-2 text-xs hidden">Solicite revisão de tributos de importação.</p>
    </div>

    <div class="bg-primary-30 shadow-lg h-24 text-white p-2 rounded-lg shadow-md">
      <h2 class="text-xs font-semibold break-words">Pagamento de Despacho Postal</h2>
      <p class="mt-2 text-xs hidden">Faça o pagamento de despacho postal facilmente online.</p>
    </div>

    <div class="bg-primary-30 shadow-lg h-24 text-white p-2 rounded-lg shadow-md md:col-span-2">
      <h2 class="text-xs font-semibold break-words">Modelo de Importação</h2>
      <p class="mt-2 text-xs hidden">
        Siga o modelo de importação para remessas internacionais sem complicações.
      </p>
    </div>

    <div class="bg-primary-30 shadow-lg h-24 text-white p-2 rounded-lg shadow-md">
      <h2 class="text-xs font-semibold break-words">Vinculação do CPF/CNPJ/PASSAPORTE</h2>
      <p class="mt-2 text-xs hidden">Vincule seu CPF, CNPJ ou passaporte à sua remessa.</p>
    </div>

    <div class="bg-primary-30 shadow-lg h-24 text-white p-2 rounded-lg shadow-md md:col-span-2">
      <h2 class="text-xs font-semibold break-words">Correios PACKET</h2>
      <p class="mt-2 text-xs hidden">
        Envios internacionais rápidos e acessíveis com o Correios PACKET.
      </p>
    </div>
  </div>
</template>
