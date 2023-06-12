const express = require("express")
const fs = require("fs")
const app = express()

app.use(express.static(__dirname + '/public'))

app.use("/create", (req, res) => {
  const { file, text } = req.query
  fs.writeFileSync(file, text)
  res.send(console.log ("arquivo criado!"))
})

app.use("/read", (req, res) => {
  const { file } = req.query
  const text = fs.readFileSync(file)
  res.send(text.toString())
})

app.use("/update", (req, res) => {
  const { file, text } = req.query
  fs.appendFileSync(file, text)
  res.send(console.log ("arquivo atualizado!"))
})

app.use("/delete", (req, res) => {
  const { file } = req.query
  fs.rmSync(file)
  res.send(console.log("arquivo excluído!"))
})

app.listen(3000, () => console.log("Servidor rodando!"))