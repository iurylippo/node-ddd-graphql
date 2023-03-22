import { setupRoutes } from '@/main/config/routes'

import Fastify from 'fastify'

const app = Fastify({
  logger: true
})

setupRoutes(app)

export default app
