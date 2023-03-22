import { type RankingScore } from '@/domain/entities'

export interface ILastRakingLoader {
  execute: () => Promise<RankingScore[]>;
}
