const express = require('express')

const router = express.Router()

const { createTask, getTask, getSingle, Update, deletetask } = require("../Controller/taskcontroller")

router.post('/', createTask);
router.get("/", getTask);
router.get('/:id', getSingle);
router.patch("/:id", Update);
router.delete("/:id", deletetask);

module.exports = router;