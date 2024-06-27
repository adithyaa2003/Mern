const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const app = express();
const taskroutes = require('./Routes/taskroutes');
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
    console.log("path" + req.path + "method" + req.method);
    next();
});

app.get('/', (req, res) => {
    res.send("Hello im Adithyaa");
});

//db connection
mongoose.connect(process.env.MONGOURI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("DB connected listening to " + process.env.PORT);
        });

    }).catch((error) => console.log(error));

app.use('/api/tasks', taskroutes);