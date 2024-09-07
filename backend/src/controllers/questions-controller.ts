import { Request, Response } from 'express'

import QuestionsService from '../services/questions-service'

class QuestionsController {
  private readonly questionsService: QuestionsService

  constructor(questionsService: QuestionsService) {
    this.questionsService = questionsService
  }

  public async list(req: Request, res: Response) {
    const result = await this.questionsService.list()

    res.status(200).json(result)
  }

  public async find(req: Request, res: Response) {
    const result = await this.questionsService.find(req.params.id)

    res.status(200).json(result)
  }

  public async create(req: Request, res: Response) {
    const result = await this.questionsService.create(req.body)

    res.status(200).json(result)
  }
}

export default QuestionsController
