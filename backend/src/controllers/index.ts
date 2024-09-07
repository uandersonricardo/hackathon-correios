import { aiService, answersService, questionsService } from '../services'
import AIController from './ai-controller'
import AnswersController from './answers-controller'
import QuestionsController from './questions-controller'

export const aiController = new AIController(aiService)
export const questionsController = new QuestionsController(questionsService)
export const answersController = new AnswersController(answersService)
