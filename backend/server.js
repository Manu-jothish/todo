import express from 'express'
import connectDb from './config/db.js'
import todoRouter from './routes/todoRout.js'
import cors from 'cors'


const app = express()
 connectDb()

let port = 5000

app.use(express.json())
app.use(express.urlencoded ({extended:true}) )

app.use(cors())
app.use('/api/todo', todoRouter)


app.listen(port , ()=> console.log(" server created successfully")) 