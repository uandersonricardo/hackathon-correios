import { Router } from 'express'

import { answersController } from '../controllers'

const answersRoutes = Router()

answersRoutes.post('/', async (req, res) => answersController.create(req, res))

export default answersRoutes
