import { app } from './app'

const port = 2005

app
  .listen({
    port,
  })
  .then(() => console.log(`HTTP server running on http://localhost:${port}`))
