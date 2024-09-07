import User from '../models/user'
import Question from '../models/question'
import Answer from '../models/answer'
import Comment from '../models/comment'
import BaseRepository from '../repositories/base-repository'
import { randomUUID } from 'crypto'

class QuestionsService {
  private readonly questionRepository: BaseRepository<Question>
  private readonly userRepository: BaseRepository<User>
  private readonly answerRepository: BaseRepository<Answer>
  private readonly commentRepository: BaseRepository<Comment>

  constructor(
    questionRepository: BaseRepository<Question>,
    userRepository: BaseRepository<User>,
    answerRepository: BaseRepository<Answer>,
    commentRepository: BaseRepository<Comment>
  ) {
    this.questionRepository = questionRepository
    this.userRepository = userRepository
    this.answerRepository = answerRepository
    this.commentRepository = commentRepository
  }

  public async list() {
    const questions = this.questionRepository.findAll()
    const response = questions.map((question) => {
      const author = this.userRepository.find(question.authorId)
      const answers = this.answerRepository.findBy('questionId', question.id)
      return { ...question, author, answers: answers.length }
    })

    return response
  }

  public async find(id: string) {
    const question = this.questionRepository.find(id)

    if (!question) {
      return null
    }

    const author = this.userRepository.find(question.authorId)
    const comments = this.commentRepository.findBy('questionId', question.id).map((comment) => ({
      ...comment,
      author: this.userRepository.find(comment.authorId)
    }))
    const answers = this.answerRepository.findBy('questionId', question.id).map((answer) => ({
      ...answer,
      author: this.userRepository.find(answer.authorId),
      comments: this.commentRepository.findBy('answerId', answer.id).map((comment) => ({
        ...comment,
        author: this.userRepository.find(comment.authorId)
      }))
    }))
    const response = { ...question, comments, answers, author }

    return response
  }

  public async create(data: Partial<Question>) {
    const id = randomUUID()

    this.questionRepository.create(id, {
      id,
      authorId: data.authorId ?? '',
      content: data.content ?? 'Sem descrição',
      createdAt: new Date(),
      downvotes: 0,
      resolved: false,
      tags: [],
      title: data.title ?? 'Nova pergunta',
      updatedAt: new Date(),
      upvotes: 0,
      views: 0
    })

    return { id }
  }
}

export default QuestionsService
