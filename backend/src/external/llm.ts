import OpenAI, { ClientOptions } from 'openai'

import { buildPrompt } from '../lib/prompt'

class LLM {
  private readonly api: OpenAI
  private readonly configuration: ClientOptions

  constructor() {
    this.configuration = {
      apiKey: process.env.OPENAI_API_KEY ?? ''
    }
    this.api = new OpenAI(this.configuration)
  }

  public async embedding(prompt: string) {
    const response = await this.api.embeddings.create({ input: prompt, model: 'text-embedding-3-small' })
    return response.data[0].embedding
  }

  public async ask(prompt: string, context: string) {
    const response = await this.api.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'Você é um assistente de IA gentil e prestativo que responde perguntas e fornece informações sobre um serviços, produtos e processos.'
        },
        { role: 'user', content: buildPrompt(prompt, context) }
      ],
      temperature: 0.8
    })

    return response.choices[0].message.content
  }
}

export default LLM
