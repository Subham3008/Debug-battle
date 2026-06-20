import jwt from "jsonwebtoken"
import env from "../../config/env.js"

export default function authMiddleware(req, res, next) {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({
      message: 'No token provided',
    });
  }

  try {
    const decode = jwt.verify(token, env.JWT_SECRET)
    req.user = decode
    next()

  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
}