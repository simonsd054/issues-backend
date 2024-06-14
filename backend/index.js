const express = require("express")
const cors = require("cors")

const app = express()

const corsOption = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
}

app.use(cors(corsOption))

const PORT = 5000

app.get("/", (req, res) => {
  res.json({ message: "hello" })
})

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`)
})
