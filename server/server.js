const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.static('public'))
app.use(morgan(':date[iso] :remote-addr :method :url :status :res[content-length] - :response-time ms'))
app.enable("trust proxy")

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})