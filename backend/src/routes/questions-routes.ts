import { Router } from 'express'

import { questionsController } from '../controllers'

const questionsRoutes = Router()

questionsRoutes.get('/', async (req, res) => questionsController.list(req, res))
questionsRoutes.get('/:id', async (req, res) => questionsController.find(req, res))

export default questionsRoutes
