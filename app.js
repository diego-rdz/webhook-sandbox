const app = require('express')()

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/hook', (req, res) => {
  console.log(req.body)
  res.status(200).send()
})

app.listen(8080, () => console.log("App Running on 8080"))