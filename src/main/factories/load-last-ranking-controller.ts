import { LastRankingLoaderService } from '@/data/services'
import { FakeRankingRepository } from '@/infra/repositories'
import { LoadLastRankingController } from '@/presentation/controllers'
import { type IController } from '@/presentation/contracts'

export const makeLoadLastRankingController = (): IController => {
  const repo = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repo)
  const controller = new LoadLastRankingController(loader)
  return controller
}
