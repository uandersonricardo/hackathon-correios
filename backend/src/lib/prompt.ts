export const buildPrompt = (prompt: string, context: string) => {
  let template = 'Use as seguintes informações de contexto para responder à pergunta no final. '
  template += 'Se você não souber a resposta, apenas diga que não sabe, não tente inventar uma resposta. '
  template += 'Responda em português e mantenha a resposta o mais concisa possível. '
  template += `Pergunta: ${prompt}. `
  template += `Contexto: ${context}. `
  template += 'Resposta Útil:'
  return template
}
