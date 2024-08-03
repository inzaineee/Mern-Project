const todoModel = require('../Models/todoModel');
const mongoose = require('mongoose');
// get all todo
const getTodos = async (req, res) => {
    try{
        const todos = await todoModel.find();
        res.status(200).json({todos});
    } 
    catch (error){
        res.status(400).json({message:error.message});
    }
}

// get single todo
const getSingleTodo = async (req, res) => {
    const { id } = req.params;

    // Check if the provided ID is valid 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No todo with that id' });
    }

    try {
        const todo = await todoModel.findById(id);

        if (!todo) {
            return res.status(404).json({ message: 'No todo with that id' });
        }

        res.status(200).json({ todo });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



// create new todo
const createTodo = async (req, res) => {
    const {title, time, completed} = req.body;
    try{
        const todo = await todoModel.create({title, time, completed});
        res.status(200).json({todo});
    }
    catch (error){
        res.status(400).json({message:error.message});
    }
}

// delete todo
const deleteTodo = async (req, res) => {
    const { id } = req.params;

    // Check if the provided ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No todo with that id' });
    }

    try{
        await todoModel.findByIdAndDelete(id);
        res.status(200).json({message: 'Todo deleted successfully'});
    }
    catch (error){
        res.status(400).json({message:error.message});
    }
}
// update todo
const updateTodo = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;

    // Check if the provided ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }

    try {
        const todo = await todoModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!todo) {
            return res.status(404).json({ error: 'No todo with that ID found' });
        }

        res.status(200).json({ todo });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports ={
    createTodo,
    getTodos,
    getSingleTodo,
    deleteTodo,
    updateTodo
}
