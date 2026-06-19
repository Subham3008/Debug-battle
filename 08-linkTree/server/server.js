import app from "./src/app.js"

const PORT = process.env.port || 5000

app.listen("PORT", () => {
  console.log(`Server is running on port ${PORT}`);
})

