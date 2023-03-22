import { ApolloServer, type BaseContext } from '@apollo/server'
import fastifyApollo, { fastifyApolloDrainPlugin } from '@as-integrations/fastify'
import { type FastifyInstance } from 'fastify'
import typeDefs from '@/main/servers/graphql/type-defs'
import resolvers from '@/main/servers/graphql/resolvers'

export const setupApolloServer = async (app: FastifyInstance): Promise<void> => {
  const server = new ApolloServer<BaseContext>({
    resolvers,
    typeDefs,
    plugins: [fastifyApolloDrainPlugin(app)]
  })

  await server.start()
  await app.register(fastifyApollo(server), { prefix: 'graphql' })
}
