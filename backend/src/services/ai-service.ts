import RAG from '../external/rag'
import LLM from '../external/llm'

class AIService {
  private readonly llm: LLM
  private readonly rag: RAG

  constructor(llm: LLM, rag: RAG) {
    this.llm = llm
    this.rag = rag
  }

  public async ask(prompt: string) {
    const embedding = await this.llm.embedding(prompt)
    const context = await this.rag.search(embedding)

    console.info(context)

    return { response: await this.llm.ask(prompt, context.result), document: context.document }
  }
}

export default AIService
