const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const port = 8000;

app.get("/rating", (req, res) => {
  try {
    const ratings = req.body
    res.send(ratings)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
})

app.post("/rating", (req, res) => {
  try {
    const stars = req.body.stars;
    res.send(`MSG DO BACK: Tutoria avaliada em: ${stars} ${stars === 1 ? 'estrela' : 'estrelas'}`)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
});

app.listen(port, () => {
  console.log("Servidor rodando")
});
