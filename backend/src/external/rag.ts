import { QdrantClient } from '@qdrant/js-client-rest'

type RAGPayload = {
  content: string
  path: string
}

class RAG {
  private readonly client: QdrantClient

  constructor() {
    this.client = new QdrantClient({ url: process.env.QDRANT_URL ?? '', apiKey: process.env.QDRANT_API_KEY ?? '' })
  }

  public async search(vector: number[]) {
    const response = await this.client.search(process.env.QDRANT_COLLECTION ?? '', { vector, limit: 1 })
    return response[0].payload as RAGPayload
  }
}

export default RAG
