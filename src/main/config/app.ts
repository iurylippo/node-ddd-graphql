import { setupRoutes } from '@/main/config/routes'

import Fastify from 'fastify'
import { setupApolloServer } from './apollo-server'

const app = Fastify({
  logger: true
})

const bootstrap = async () => {
  app.addHook('preHandler', (req, res, done) => {
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST,GET,HEAD,PUT,PATCH,DELETE,OPTIONS')
    done()
  })

  await setupApolloServer(app)
  await setupRoutes(app)

  return app
}

export default bootstrap
