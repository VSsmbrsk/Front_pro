const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const list = document.getElementById('todos__wrapper');

document.addEventListener('DOMContentLoaded', loadTodos);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = input.value.trim();
    if (taskText === '') return;

    const task = { text: taskText, completed: false };
    addTaskToList(task);
    saveTask(task);

    form.reset();
});

function addTaskToList(task) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('type', 'checkbox');
    inputCheckbox.checked = task.completed;

    if (task.completed) {
        li.style.textDecoration = 'line-through';
    }

    inputCheckbox.addEventListener("click", () => {
        task.completed = inputCheckbox.checked;
        li.style.textDecoration = task.completed ? 'line-through' : 'none';
        updateTask(task);
    });

    const span = document.createElement('span');
    span.textContent = task.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Видалити';
    deleteBtn.classList.add('todo-item__delete');
    deleteBtn.addEventListener('click', () => {
        li.remove();
        removeTask(task.text);
    });

    li.appendChild(inputCheckbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTodos() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => {
        addTaskToList(task);
    });
}

function updateTask(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => {
        if (task.text === updatedTask.text) {
            return updatedTask;
        }
        return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}