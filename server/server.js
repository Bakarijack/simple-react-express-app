const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.json({ message: 'Server started successfully'})
})

app.get('/message', (req,res) => {
    res.json({ message: "Hello from the server!"})
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})