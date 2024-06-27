const mongoose = require("mongoose");
const taskmodel = require('../Models/Taskmodel');
const Taskmodel = require("../Models/Taskmodel");

//to create a task
const createTask = async(req, res) => {
    const { title, description } = req.body

    try {
        const task = await taskmodel.create({ title, description });
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });

    }
};

//get all task

const getTask = async(req, res) => {
    try {
        const task = await taskmodel.find({});
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });

    }
};


//single task to get 

const getSingle = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Task Not Found" })
    }

    try {
        const singleTask = await taskmodel.findById(id)
        res.status(200).json(singleTask)
    } catch (e) {
        res.status(400).json({ error: e.message });
    }

}

//to update

const Update = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Task Not Found" })
    }

    try {
        const updatetask = await taskmodel.findByIdAndUpdate({
            _id: id,
        }, {
            ...req.body,
        });
        res.status(200).json(updatetask);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

//delete task

const deletetask = async(req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Task Not Found" })
    }

    try {
        const updatetask = await taskmodel.findByIdAndDelete({
            _id: id,
        }, {
            ...req.body,
        });
        res.status(200).json(updatetask);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

module.exports = { createTask, getTask, getSingle, Update, deletetask };