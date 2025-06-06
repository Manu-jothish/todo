import express from 'express'
import Todos from '../models/todoModels.js';
import { creatTodos,getTodos ,updateTodo,deleteTodo, getTodoById} from '../controller/todoController.js';



const todoRouter = express.Router()


todoRouter.post('/',creatTodos)

todoRouter.get('/getTodos',getTodos)

todoRouter.patch('/updatetodo', updateTodo)

todoRouter.delete('/:id', deleteTodo)

todoRouter.get('/getTodoById' ,getTodoById)

export default todoRouter