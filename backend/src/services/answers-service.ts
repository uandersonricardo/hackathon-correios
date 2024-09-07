import Answer from '../models/answer'
import BaseRepository from '../repositories/base-repository'
import { randomUUID } from 'crypto'

class AnswersService {
  private readonly answerRepository: BaseRepository<Answer>

  constructor(answerRepository: BaseRepository<Answer>) {
    this.answerRepository = answerRepository
  }

  public async create(data: Partial<Answer>) {
    const id = randomUUID()

    this.answerRepository.create(id, {
      id,
      authorId: data.authorId ?? '',
      content: data.content ?? 'Sem descrição',
      createdAt: new Date(),
      downvotes: 0,
      updatedAt: new Date(),
      upvotes: 0,
      accepted: false,
      questionId: data.questionId ?? ''
    })

    return { id }
  }
}

export default AnswersService
