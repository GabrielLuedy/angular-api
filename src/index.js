
const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

app.get('/alunos', (req, res) => {
  res.json({
      nome:"gabriel",
      idade:28,
      id:0000
  })
})

app.post('/alunos', (req, res) => {
    let dados=req.body

    res.json(
        dados
    )
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})