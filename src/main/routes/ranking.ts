import { type FastifyInstance, type FastifyPluginAsync } from 'fastify'
import { makeLoadLastRankingController } from '@/main/factories'
import { adapterRoute } from '@/main/adapters'

const rankingRoute: FastifyPluginAsync = async (router: FastifyInstance) => {
  router.get('/rankings/last', adapterRoute(makeLoadLastRankingController()))
}

export default rankingRoute
