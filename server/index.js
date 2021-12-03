require('dotenv').config({ path: '.env.development' })

const ip = require('ip')
const path = require('path')
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 3000
const local = `http://localhost:${port}`
const remote = `http://${ip.address()}:${port}`
const dist = (process.env.NODE_ENV === 'production')
  ? path.join(__dirname + '/dist')
  : path.join(__dirname + '/../client/dist')

const corsOptions = {
  optionsSuccessStatus: 200,
  credentials: true
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(dist))

app.get(/./, (req, res) => res.sendFile(`${dist}/index.html`))

async function start() {
  app.listen(port, () => {
    console.log(`\n\nApp running at:\n- Local:  ${local}\n- Remote: ${remote}\n`)
  })
}
start()