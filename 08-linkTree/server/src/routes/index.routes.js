import { Router } from "express";
import authRoutes from "./auth.routes.js"
import linkRoutes from "./link.route.js"

const router = Router()

router.use('/auth', authRoutes)
router.use('/link', linkRoutes)
router.use('/links', linkRoutes)

export default router
