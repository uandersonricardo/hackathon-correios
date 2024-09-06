import rag from '../external/rag'
import llm from '../external/llm'

class AIService {
  public async ask(prompt: string) {
    const embedding = await llm.embedding(prompt)
    const context = await rag.search(embedding)

    console.info(context)

    return await llm.ask(prompt, context.content)
  }
}

export default AIService
