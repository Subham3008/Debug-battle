import { Router } from "express"
import authMiddleware from "../shared/middlewares/auth.middleware.js"
import { createLink, getLinksByUsername, incrementLinkClick } from "../controllers/link.controller.js"


const router = Router()

router.post('/', authMiddleware, createLink)

/**
 * GET /api/links/:username
 * Get all links for a specific user by username
 * Public route
 */
router.get('/:username', getLinksByUsername)

router.patch('/:linkId/click', incrementLinkClick)

export default router