import { Router } from 'express'

import aiRoutes from './ai-routes'
import questionsRoutes from './questions-routes'
import answersRoutes from './answers-routes'

const routes = Router()

routes.use('/ai', aiRoutes)
routes.use('/questions', questionsRoutes)
routes.use('/answers', answersRoutes)

export default routes
