export const buildPrompt = (prompt: string, context: string) => {
  let template = 'As informações de contexto estão abaixo. '
  template += `---------------------`
  template += `${context}. `
  template += `---------------------`
  template +=
    'Use as informações de contexto para responder à pergunta no final. Se você não souber a resposta, apenas diga que não sabe e não tente inventar uma resposta. '
  template +=
    'O contexto pode conter sintaxe de caminho de imagem no markdown (images/...). Se aplicável, inclua essas imagens na resposta.'
  template += 'Responda em português e mantenha a resposta concisa. '
  template +=
    'Por favor, forneça sua resposta no formato de Markdown. Se a pergunta exigir, forneça um passo a passo, se aplicável. Evite usar subtópicos na formatação. '
  template += `Pergunta: ${prompt}. `
  template += 'Resposta Útil em Markdown:'
  return template
}
