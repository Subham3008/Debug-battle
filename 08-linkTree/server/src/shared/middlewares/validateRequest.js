import { validationResult } from 'express-validator'

const ValidateRequest = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      }))
    })
  }

  return next()
}

export default ValidateRequest