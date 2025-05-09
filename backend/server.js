import express from 'express'
import connectDb from './config/db.js'
import Todos from './models/todoModels.js'
import todoRouter from './routes/todoRout.js'


const app = express()
 connectDb()

let port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended :true }))

app.use('/api/todo', todoRouter)


app.listen(port , ()=> console.log(" server created successfully"))