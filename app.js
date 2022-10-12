const express = require('express')
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')

const app = express()

// Connect to the DB server
mongoose.connect('mongodb://localhost/smartedu-db').then(() => {
	console.log('Connected to MongoDB')
})

// Template Engine
app.set('view engine', 'ejs')

// Middlewares
app.use(express.static('public'))

// Routes
app.use('/', pageRoute)
app.use('/courses', courseRoute)

const port = 3000
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
