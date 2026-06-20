import express from "express"
import env from "./config/env.js"
import cookieParser from "cookie-parser"
import apiRoutes from "./routes/index.routes.js"

export default function createApp() {
  const app = express()

  app.use(express.json())
  app.use(cookieParser())

  app.use('/api', apiRoutes)

  return app
}