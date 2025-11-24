const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

let todos = [
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    { id: 3, title: 'Task 3' }
];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) return res.status(404).json({ message: "Not found" });

    res.json(todo);
});

app.post('/todos', (req, res) => {
    const newTodo = {
        id: Date.now(),
        title: req.body.title
    };

    todos.push(newTodo);
    res.json(newTodo);
});

app.put('/todos/:id', (req, res) => {
    const id = Number(req.params.id);

    todos = todos.map(todo =>
        todo.id === id ? { ...todo, ...req.body } : todo
    );

    res.json({ message: "Updated" });
});

app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id);
    todos = todos.filter(todo => todo.id !== id);

    res.json({ message: "Deleted" });
});

app.listen(port, () => console.log("Server started on", port));
