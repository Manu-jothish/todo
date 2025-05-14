import Todos from "../models/todoModels.js";

let creatTodos = async (req, res) => {
    console.log(req.body);

    try {
        let todo = await Todos.create({
            title: req.body.title,
            description: req.body.description
        })

        res.json(todo)

    } catch (error) {
        console.log(error);

    }

}

let getTodos = async (req, res) => {
    try {
        let todos = await Todos.find()
        console.log(todos)
        res.json(todos)

    } catch (error) {
        console.log(error);

    }

}

const deleteTodo = async (req, res) => {
    console.log(req.params.id);

    try {
        const deleteTodo = await Todos.findByIdAndDelete(req.params.id)
        if (!deleteTodo) {
            return res.status(404).json({ message: 'Todo not found' })
        }

        return res.json({ message: 'deleted' })
    } catch (error) {
        console.log(error);

    }

}



const updateTodo = async (req, res) => {
    console.log(req.query.id,)

    try {
        let {title,description,isCompleted}=  req.body
        let updateTodo = await Todos.findByIdAndUpdate(req.query.id, {title,description,isComplete})

        if (!updateTodo) {
            return res.status(404).json({ message: 'todo not found' })
        }
        return res.json({ message: 'Todo updated Successfully' })



    } catch (error) {
        console.log(error);
    }

}



export {
    creatTodos, getTodos, updateTodo, deleteTodo
}
