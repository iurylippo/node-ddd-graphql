import 'module-alias/register'
import app from '@/main/config/app'
import { env } from '@/main/config/env'

app.listen({ port: env.port }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log(`Server running ar port ${env.port}...`)
})
