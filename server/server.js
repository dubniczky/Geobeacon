const express = require('express')
const morgan = require('morgan')
const { IPinfoWrapper } = require("node-ipinfo")
require('dotenv').config()


const imageFile = 'cat.jpg'
const ipInfoToken = process.env.IPINFO_TOKEN


// Load the IPinfo API token
let ipinfo = null
if (!ipInfoToken) {
    console.error("ERROR: IPINFO_TOKEN environment variable missing, IPs will not be resolved")
}
else {
    ipinfo = new IPinfoWrapper(ipInfoToken)
}


// Set up Express app
const app = express()

app.use(express.static('public'))
app.use(morgan(':date[iso] :remote-addr :method :url :status :res[content-length] - :response-time ms'))
app.enable("trust proxy")


// Set up endpoints
app.get("/images/:id", async (req, res) => {
    const id = req.params.id

    console.log(`${id} - ${req.ip}`)

    res.sendFile(imageFile, { root: __dirname + "/public" })

    if (ipinfo) {
        const ip = req.ip
        const ipInfo = await ipinfo.lookupIp(ip)
        console.log(`IP: ${ip} - ${ipInfo.city} ${ipInfo.country} (${ipInfo.org}, ${ipInfo.loc}))`)
    }
})

app.get('/ip/:ip', async (req, res) => {
    const ip = req.params.ip
    res.send(await ipinfo.lookupIp(ip))
})


// Start server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})