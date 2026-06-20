import { Router } from "express";
import { loginValidation, registerValidation } from "../shared/validators/auth.validators.js";
import ValidateRequest from "../shared/middlewares/validateRequest.js";
import { loginUser, registerUser } from "../controllers/auth.controller.js";



const router = Router()

router.post('/register', registerValidation, ValidateRequest, registerUser)
router.post('/login', loginValidation, ValidateRequest, loginUser)

export default router