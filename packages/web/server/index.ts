import next from 'next'
import { createServer } from 'http'
import getPort from 'get-port'

import { routes } from './routes'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app);
(async function () {
  try {
    await app.prepare()
    const port = await getPort({
      port: parseInt(process.env.PORT!, 10) || 3000
    })

    createServer((req, res) => {
      handle(req, res)
    }).listen(port, (err: any) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}`)
    })
  } catch (err) {
    console.log(`> Could not run: ${err}`)
  }
})()
