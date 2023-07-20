
const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const connectDb = require('./config/dbConnection')
const dotenv = require('dotenv').config()

connectDb()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/api/contact',require('./routes/contactRoute'))
app.use('/api/users',require('./routes/userRoute'))

app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is running..${port}`);
})


