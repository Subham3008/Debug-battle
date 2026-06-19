import createApp from "./src/app.js"
import { connectDB } from "./src/config/db.js"
import env from "./src/config/env.js"
import logger from "./src/config/logger.js"


const app = createApp()

function startServer() {
  connectDB().then(async () => {
    app.listen(env.PORT, () => {
      logger.info({ port: env.PORT }, "Server is running on port");
    })
  }).catch((error) => {
    logger.error({ error: error }, "Error while running server.");
  })
}

startServer()

