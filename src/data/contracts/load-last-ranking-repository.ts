import { type RankingScoreModel } from '@/data/models'

export interface ILoadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScoreModel[]>;
}
