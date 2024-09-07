import AIService from './ai-service'
import QuestionsService from './questions-service'
import AnswersService from './answers-service'
import { llm, rag } from '../external'
import { answerRepository, commentRepository, questionRepository, userRepository } from '../repositories'

export const aiService = new AIService(llm, rag)
export const questionsService = new QuestionsService(
  questionRepository,
  userRepository,
  answerRepository,
  commentRepository
)
export const answersService = new AnswersService(answerRepository)
