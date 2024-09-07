import { Router } from 'express'

import aiRoutes from './ai-routes'
import questionsRoutes from './questions-routes'

const routes = Router()

routes.use('/ai', aiRoutes)
routes.use('/questions', questionsRoutes)

export default routes
