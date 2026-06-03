# Debug Battle 5 — Bug Fixes

## Server

- dotenv loaded after DB connect → swapped order
- JWT signed with JWT_SECRET, verified with JWT_ACCESS_SECRET → both use JWT_SECRET
- Stock checks inverted (>= should be <) in 4 places → changed to <
- filter() treated as single object → changed to find()
- Reduce uses minus instead of plus → changed to plus
- totalAmount missing * quantity → added multiplier
- Catch block swallows errors, returns fake E11000 → rethrows real error
- Password hash leaked in register/login responses → removed
- Password hash leaked in profile responses → removed
- Error middleware returns 200 for errors → checks statusCode >= 400
- Error middleware hides real message → returns err.message
- Auth middleware catch replaces "user not found" with "token failed" → rethrows original error
- .gitignore un-ignores node_modules → fixed
- .gitignore un-ignores .env files → fixed

## Frontend

- Login input name="pass" instead of "password" → fixed
- showToast mutates state array, sets same ref → functional state updates
- setLoading(true) on error → changed to false
- .toString() on variants array sends [object Object] → JSON.stringify()
- Axios baseURL port 5000 mismatches Vite proxy 5001 → use env variable
- VITE_API_URL env var defined but never used → axios reads it now
- Token field name inconsistent (token vs accessToken) → both use accessToken
- Password hash displayed in UI → removed
- item.price.toFixed crashes if undefined → optional chaining
- totalAmount.toFixed crashes if undefined → optional chaining
- tailwind.config uses CJS in ESM project → converted to ESM
- 20+ invalid Tailwind classes → replaced with valid shades
- Order quantity stored as string → parsed as number
- Frontend calls /product but server has /products → fixed
- Frontend calls /order but server has /orders → fixed
- CORS origin: '*' with credentials: true rejected by browser → specific origin
- .env has https but server runs http → changed to http
