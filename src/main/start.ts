import 'module-alias/register'
import bootstrap from '@/main/config/app'
import { env } from '@/main/config/env'

bootstrap().then(app => {
  app.listen({ port: env.port }, (err, address) => {
    if (err) {
      app.log.error(err)
      process.exit(1)
    }
    console.log(`Server running ar port ${env.port}...`)
  })
}).catch(error => {
  console.log(`Error while bootstrapping application: ${error.message}`)
})
