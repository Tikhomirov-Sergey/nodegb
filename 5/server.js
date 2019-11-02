const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const connect = require('./mongo');
const taskHelper = require('./model-helpers/Task-Helper')

const app = express();

const templating = require('consolidate');
app.engine('hbs', templating.handlebars);
app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.get('/task/:id', (req, res) => {
    connect(async () => {
        const task = await taskHelper.getTaskById(req.params.id);
        res.render('task', {...task._doc});
    });
});

app.post('/task/:id', bodyParser.urlencoded(), (req, res) => {
    connect(async () => {
        const result = await taskHelper.changeTask(req.params.id, req.body);

        if(result.error) res.json(result.error);

        res.redirect(`/task/${req.params.id}`);
    });
});

app.get('/task/delete/:id', (req, res) => {
    connect(async () => {
        const result = await taskHelper.deleteTaskById(req.params.id);
        res.redirect('/');
    });
});

app.get('/', async (req, res) => {
    connect(async () => {
        const tasks = await taskHelper.getAllTasks();
        res.render('tasks-list', {
            tasks
        });
    });
});

app.post('/', bodyParser.urlencoded(), async (req, res) => {

    const result = taskHelper.createTask(req.body);
    if(result.error) res.json(result.error);

    res.redirect('/');
});


app.listen(3000);