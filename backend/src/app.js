const express = require("express")
const dotenv = require('dotenv')
dotenv.config()
const { authRoutes } = require("./routes/auth/auth.routes")
const app = express()



app.use(express.json())
app.use('/auth',authRoutes )
















module.exports = {app}