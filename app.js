const express = require('express')

const app = express()

// Template Engine
app.set("view engine", "ejs")

// Middlewares
app.use(express.static("public"))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

const port = 3000
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
