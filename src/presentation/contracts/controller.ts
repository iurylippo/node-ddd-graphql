import { type IHttpResponse } from '@/presentation/contracts'

export interface IController {
  handle: () => Promise<IHttpResponse>;
}
