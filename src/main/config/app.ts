import { setupRoutes } from '@/main/config/routes'

import Fastify from 'fastify'
import { setupApolloServer } from './apollo-server'

const app = Fastify({
  logger: true
})

const bootstrap = async () => {
  await setupApolloServer(app)
  await setupRoutes(app)

  return app
}

export default bootstrap
