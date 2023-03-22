import { type FastifyInstance, type FastifyPluginAsync } from 'fastify'
import { makeLoadLastRankingController } from '@/main/factories'
import { adaptRoute } from '@/main/adapters'

const rankingRoute: FastifyPluginAsync = async (router: FastifyInstance) => {
  router.get('/rankings/last', adaptRoute(makeLoadLastRankingController()))
}

export default rankingRoute
