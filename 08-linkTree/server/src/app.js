import express from "express"
import env from "./config/env.js"

export default function createApp() {
  const app = express()

  return app
}