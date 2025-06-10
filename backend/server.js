import express from 'express'
import connectDb from './config/db.js'
import todoRouter from './routes/todoRout.js'
import cors from 'cors'
import userRoute from './routes/userRoutes.js'


const app = express()
 connectDb()

let port = 5000

app.use(express.json())
app.use(express.urlencoded ({extended:true}) )

app.use(cors())
app.use('/api/todo', todoRouter)

app.use('/api/user',userRoute)

app.listen(port , ()=> console.log(" server created successfully")) 