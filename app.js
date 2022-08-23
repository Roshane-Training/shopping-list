require('dotenv').config()
const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
const indexRouter = require('./routes/index.routes')

// Routes
app.use('/', indexRouter)

// Start Express App
mongoose.connect(process.env.MONGODB_URI, (err) => {
	if (err) console.error(err)
	else {
		console.log('MongoDB Connected')

		app.listen(PORT, () => {
			console.log(`Server listening on http://localhost:${PORT}`)
		})
	}
})
