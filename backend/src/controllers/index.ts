import { aiService, questionsService } from '../services'
import AIController from './ai-controller'
import QuestionsController from './questions-controller'

export const aiController = new AIController(aiService)
export const questionsController = new QuestionsController(questionsService)
