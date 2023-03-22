import { type ILoadLastRankingRepository } from '@/data/contracts/load-last-ranking-repository'
import { type RankingScoreModel } from '@/data/models'
import { ranking } from '@/infra/data-sources'

export class FakeRankingRepository implements ILoadLastRankingRepository {
  async loadLastRanking (): Promise<RankingScoreModel[]> {
    return ranking.map(item => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }))
  }
}
