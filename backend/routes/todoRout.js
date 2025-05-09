import express from 'express'
import Todos from '../models/todoModels.js';
import { creatTodos,getTodos } from '../controller/todoController.js';



const todoRouter = express.Router()


todoRouter.post('/',creatTodos)

todoRouter.get('/getTodos',getTodos)

export default todoRouter