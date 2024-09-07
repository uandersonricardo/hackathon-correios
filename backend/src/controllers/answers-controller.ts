import { Request, Response } from 'express'

import AnswersService from '../services/answers-service'

class AnswersController {
  private readonly answersService: AnswersService

  constructor(answersService: AnswersService) {
    this.answersService = answersService
  }

  public async create(req: Request, res: Response) {
    const result = await this.answersService.create(req.body)

    res.status(200).json(result)
  }
}

export default AnswersController
