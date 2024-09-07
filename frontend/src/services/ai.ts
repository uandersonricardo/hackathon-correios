import api from '@/config/api'

export const ask = async (q: string) => {
  // const response = await api.get<string>('/ai/ask', { params: { q } })
  // return response.data
  await new Promise((resolve) => setTimeout(() => resolve(true), 2000))
  return `
  # Programa Remessa Conforme

O **Programa Remessa Conforme** é uma iniciativa da Receita Federal que visa agilizar e regularizar a taxação de compras internacionais feitas por consumidores brasileiros. Aqui está um passo a passo básico de como funciona:

1. **Escolha do Produto**: Selecione um produto em um marketplace participante do programa Remessa Conforme.
2. **Cálculo do Imposto**: O marketplace calcula o imposto de importação e o adiciona ao preço do produto.
3. **Pagamento**: Você paga o valor total da compra já com o imposto incluído.
4. **Declaração e Repasso**: O marketplace declara e repassa o valor do imposto à Receita Federal antes da remessa ser enviada para o Brasil.

Ao comprar em sites certificados pelo programa, você paga os impostos antecipadamente, o que geralmente resulta em uma entrega mais rápida, pois a encomenda passa menos tempo na alfândega.

Se precisar de mais detalhes ou tiver alguma dúvida específica, estou aqui para ajudar!
`
}
