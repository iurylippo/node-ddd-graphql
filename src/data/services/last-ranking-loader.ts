import { type RankingScore } from '@/domain/entities'
import { type ILastRakingLoader } from '@/domain/usecases'
import { type ILoadLastRankingRepository } from '@/data/contracts/load-last-ranking-repository'
import { RankingUnavailableError } from '@/domain/errors'

export class LastRankingLoaderService implements ILastRakingLoader {
  constructor (private readonly loadLastRankingRepository: ILoadLastRankingRepository) {}

  async execute (): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError()
    }

    return this.loadLastRankingRepository.loadLastRanking()
  }
}
