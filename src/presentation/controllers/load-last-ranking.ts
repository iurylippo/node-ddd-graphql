import { type ILastRakingLoader } from '@/domain/usecases'
import { type IHttpResponse, type IController, ok, serverError } from '@/presentation/contracts'
import { RankingScoreViewModel } from '@/presentation/view-models'

export class LoadLastRankingController implements IController {
  constructor (private readonly lastRankingLoader: ILastRakingLoader) {}

  async handle (): Promise<IHttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.execute()

      return ok(RankingScoreViewModel.mapCollection(ranking))
    } catch (error) {
      return serverError(error)
    }
  }
}
