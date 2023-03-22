import { apolloServerResolver } from '@/main/adapters'
import { makeLoadLastRankingController } from '@/main/factories'

export default {
  Query: {
    lastRanking: async (): Promise<any> => apolloServerResolver(makeLoadLastRankingController())
  }
}
