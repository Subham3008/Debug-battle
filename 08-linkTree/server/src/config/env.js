import dotenv from "dotenv"
dotenv.config()
import z from "zod"
import appConstant from "../shared/constant/app.constant.js"


const envSchema = z.object({
  PORT: z.coerce.number().default(appConstant.PORT),
  MONGO_URI: z.string().default(appConstant.MONGO_URI),
  NODE_ENV: z.string().default(appConstant.NODE_ENV),
  JWT_SECRET: z.string()
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.log("Check your env's");
  process.exit(1)
}

export default parsed.data