import { type FastifyInstance } from 'fastify'
import { readdirSync } from 'fs'
import path from 'path'

const routesPath = path.join(__dirname, '/..', '/routes')

export const setupRoutes = async (app: FastifyInstance): Promise<void> => {
  readdirSync(routesPath).map(async fileName => {
    const route = await import (`${routesPath}/${fileName}`)
    await app.register(route,
      {
        prefix: 'api'
      })
  })
}
