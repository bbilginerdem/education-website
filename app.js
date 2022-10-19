const express = require('express')
const mongoose = require('mongoose')
const pageRoute = require('./routes/pageRoute')
const courseRoute = require('./routes/courseRoute')
const categoryRoute = require('./routes/categoryRoute')

const app = express()

// Connect to the DB server
mongoose.connect('mongodb://127.0.0.1/smartedu-db').then(() => {
	console.log('Connected to MongoDB')
})

// Template Engine
app.set('view engine', 'ejs')

// Middlewares
app.use(express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Routes
app.use('/', pageRoute)
app.use('/courses', courseRoute)
app.use('/categories', categoryRoute)

const port = 3000
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
