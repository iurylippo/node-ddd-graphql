import { type IController } from '@/presentation/contracts'
import { type FastifyReply, type FastifyRequest } from 'fastify'

export const adaptRoute = (controller: IController) => {
  return async (req: FastifyRequest, res: FastifyReply) => {
    const httpResponse = await controller.handle()
    return res.status(httpResponse.statusCode).send(httpResponse.data)
  }
}
