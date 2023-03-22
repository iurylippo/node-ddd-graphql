import { type IController } from '@/presentation/contracts'

export const apolloServerResolver = async (controller: IController): Promise<any> => {
  const httpResponse = await controller.handle()
  return httpResponse.data
}
