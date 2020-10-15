const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello OpenShift!'))

app.listen(port, '0.0.0.0', () => console.log(`Example app listening on port ${port}`))
