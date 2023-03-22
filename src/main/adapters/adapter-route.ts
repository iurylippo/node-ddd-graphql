import { type IController } from '@/presentation/contracts'
import { fastifyRoute } from './fastify-route'

export const adapterRoute = (controller: IController) => {
  return fastifyRoute(controller)
}
